// eslint-disable-next-line no-unused-vars
import React, { useEffect, useRef, useState } from 'react';
import Webcam from "react-webcam";
import { Camera } from "@mediapipe/camera_utils";
import {HAND_CONNECTIONS, Holistic, POSE_CONNECTIONS } from '@mediapipe/holistic';
import { GoogleGenerativeAI } from "@google/generative-ai";
import { drawConnectors } from '@mediapipe/drawing_utils';
import { inTopKAsync } from '@tensorflow/tfjs';
// import { FACEMESH_TESSELATION, HAND_CONNECTIONS, Holistic, POSE_CONNECTIONS } from '@mediapipe/holistic';
// import {HAND_CONNECTIONS, Holistic, POSE_CONNECTIONS } from '@mediapipe/holistic';
// import { drawConnectors, drawLandmarks } from '@mediapipe/drawing_utils';
// import * as tf from '@tensorflow/tfjs';
// import heroimg from './../../assets/hero.png'; 


function Translate() {
  
  const webcamRef = useRef(null);
  const canvasRef = useRef(null);
  const [rbtn, setRbtn]=useState(false)
  // const [str, setStr]=useState("");
  const [str, setStr]=useState("");
  const id = useRef();
  const btn = useRef(false);
  const [responser, setResponse] = useState(null);


  const genAI = new GoogleGenerativeAI(import.meta.env.VITE_REACT_APP_C_KEY);
  const  geminiNeta=async (words)=>{
  const model = genAI.getGenerativeModel({ model: "gemini-pro"});

  const prompt = `I have developed a system that interprets hand signs to generate meaningful sentences. The system will take a sequence of detected hand signs as input and should output a coherent English sentence. The challenge lies in converting these hand signs, which lack grammar, into grammatically correct and meaningful sentences. Hand signs detected: [${words+','}] return only the meaninful sentence and don't add quotation marks.`

  const result = await model.generateContent(prompt);
  const response = await result.response;
  const text = response.text();
  setResponse(text)
  }
  
let holistic;
  useEffect(() => {
    
    holistic = new Holistic({
      locateFile: (file) => `https://cdn.jsdelivr.net/npm/@mediapipe/holistic/${file}`
    });
    holistic.setOptions({
      selfieMode: false,
      modelComplexity: 1,
      smoothLandmarks: true,
      enableSegmentation: true,
      smoothSegmentation: true,
      refineFaceLandmarks: true,
      minDetectionConfidence: 0.7,
      minTrackingConfidence: 0.8
    });
    
    const camera = new Camera(webcamRef.current?.video, {
      onFrame: async () => {
        if (webcamRef.current?.video) await holistic.send({ image: webcamRef.current.video });
      },
      width: 640,
      height: 480,
    });
    camera.start()
  
  }, [rbtn]);

  const start = () => {   
    setRbtn(true)
    btn.current = !btn.current;
    console.log(btn.current);
    id.current = setInterval(
        holistic.onResults(onResults),1
    );
};

const stop =  () => { 
    setRbtn(false)
    btn.current = !btn.current;
    console.log(btn.current);
    clearInterval(id.current);
};

let frames=[]
let sentences=[]
let count=0
  const onResults = async (results) => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");
    if (!ctx || !webcamRef.current?.video) return;

    const { videoWidth, videoHeight } = webcamRef.current.video;
    canvas.width = videoWidth;
    canvas.height = videoHeight;

    ctx.save();
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.globalCompositeOperation = 'source-in';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.globalCompositeOperation = 'destination-atop';
    ctx.drawImage(results.image, 0, 0, canvas.width, canvas.height);
    ctx.globalCompositeOperation = 'source-over';
    drawConnectors(ctx, results.poseLandmarks, POSE_CONNECTIONS, { color: '#00FF00', lineWidth: 4 });
    // drawLandmarks(ctx, results.poseLandmarks, { color: '#FF0000', lineWidth: 2 });
    // drawConnectors(ctx, results.faceLandmarks, FACEMESH_TESSELATION, { color: '#C0C0C070', lineWidth: 1 });
    drawConnectors(ctx, results.leftHandLandmarks, HAND_CONNECTIONS, { color: '#CC0000', lineWidth: 5 });
    // drawLandmarks(ctx, results.leftHandLandmarks, { color: '#00FF00', lineWidth: 2 });
    drawConnectors(ctx, results.rightHandLandmarks, HAND_CONNECTIONS, { color: '#00CC00', lineWidth: 5 });
    // drawLandmarks(ctx, results.rightHandLandmarks, { color: '#FF0000', lineWidth: 2 });
    ctx.restore();
    
    const pose = results.poseLandmarks?.map(landmark => [landmark.x, landmark.y, landmark.z, landmark.visibility]).flat() || Array(132).fill(0);
    const face = (results.faceLandmarks ? results.faceLandmarks.map(landmark => [landmark.x, landmark.y, landmark.z]).flat() : []).concat(Array(1404).fill(0)).slice(0, 1404);
    const rh = results.rightHandLandmarks?.map(landmark => [landmark.x, landmark.y, landmark.z]).flat() || Array(63).fill(0);
    const lh = results.leftHandLandmarks?.map(landmark => [landmark.x, landmark.y, landmark.z]).flat() || Array(63).fill(0);          
    const cat = pose.concat(face, lh, rh);
    
    frames.push(cat)      
    if (btn.current==false){
      return;
    }
    if (frames.length === 30) {
      const formdata = new FormData();
      formdata.append("vector", JSON.stringify(frames));
      fetch("http://127.0.0.1:5300/test",{
        method: "POST",
        body: formdata,
        redirect: "follow"
      }).then((response) => response.text())
        .then((result) => {
          console.log(result)
          const jsonResponse = JSON.parse(result);  
          sentences.push(jsonResponse.resp)
          let words=sentences.toString().replace(/,/g, ' ')
          setStr(words)
          count+=1
          if (count==3){
              geminiNeta(words)
              count=0
            }
        }).catch((error) => console.error(error));
          frames.splice(0, frames.length);    
    }
  };

  return (
    <>
    <div className="Videol" >
      <div className="camera">
      <Webcam className='cam' ref={webcamRef}  /> 
      <canvas className='cam' ref={canvasRef}  />   
      </div>  
      <textarea className='onta' placeholder='Translation...' defaultValue={responser}></textarea>
    </div>
      <button className='onba' onClick={btn.current ? stop : start}>{rbtn ? "Stop" : "Start"}</button>
    </>
  );
}

export default Translate;