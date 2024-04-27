import { useRef, useEffect, useState } from "react";
import Webcam from "react-webcam";
import { GoogleGenerativeAI } from "@google/generative-ai";
const PUBLISHABLE_ROBOFLOW_API_KEY = "rf_c7rnF41caQUNdCaF2OOuzwzExHS2";
const PROJECT_URL = "isl-actions";
const MODEL_VERSION = 3;
const genAI = new GoogleGenerativeAI(import.meta.env.VITE_REACT_APP_C_KEY);

const Translate= () => {
  const webcamRef = useRef(null);
  const canvasRef = useRef(null);
  const [inferRunning, setInferRunning] = useState(false);
  const [model, setModel] = useState(null);
  const [detectedVariables, setDetectedVariables] = useState("");
  const [responser, setResponser]=useState(null);
  const counter=useRef(0);
  const startInfer = () => {
    setInferRunning(true);
    window.roboflow
      .auth({
        publishable_key: PUBLISHABLE_ROBOFLOW_API_KEY,
      })
      .load({
        model: PROJECT_URL,
        version: MODEL_VERSION,
        onMetadata: function (m) {
          console.log("model loaded");
        },
      })
      .then((loadedModel) => {
        setModel(loadedModel);
      });
  };

  useEffect(() => {
    if (inferRunning && model) {
      const inferInterval = setInterval(() => {
        detect(model);
      }, 10);

      return () => clearInterval(inferInterval);
    }
  }, [inferRunning, model]);

  const stopInfer = () => {
    setInferRunning(false);
    if (model) model.teardown();
  };
  const detect = async (model) => {
    if (
      typeof webcamRef.current !== "undefined" &&
      webcamRef.current !== null &&
      webcamRef.current.video.readyState === 4
    ) {
      const videoWidth = webcamRef.current.video.videoWidth;
      const videoHeight = webcamRef.current.video.videoHeight;

      webcamRef.current.video.width = videoWidth;
      webcamRef.current.video.height = videoHeight;

      adjustCanvas(videoWidth, videoHeight);

      const detections = await model.detect(webcamRef.current.video);

      const formattedDetections = formatDetections(detections);
      setDetectedVariables((prev) => prev + formattedDetections);
      
      counter.current++;
      ``
      if (counter.current === 9) {
        counter.current=0
        geminiNeta(detectedVariables);
      }
      const ctx = canvasRef.current.getContext("2d");
      drawBoxes(detections, ctx);
    }
  };

  const formatDetections = (detections) => {
    let formatted = "";
    detections.forEach((variable) => {
      formatted += `${variable.class} `;
    });
    return formatted;
  };

  const adjustCanvas = (w, h) => {
    canvasRef.current.width = w * window.devicePixelRatio;
    canvasRef.current.height = h * window.devicePixelRatio;

    canvasRef.current.style.width = w + "px";
    canvasRef.current.style.height = h + "px";

    canvasRef.current
      .getContext("2d")
      .scale(window.devicePixelRatio, window.devicePixelRatio);
  };

  const drawBoxes = (detections, ctx) => {
    ctx.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);
    detections.forEach((row) => {
      if (true) {
        var temp = row.bbox;
        temp.class = row.class;
        temp.color = row.color;
        temp.confidence = row.confidence;
        row = temp;
      }

      if (row.confidence < 0) return;

      var x = row.x - row.width / 2;
      var y = row.y - row.height / 2;
      var w = row.width;
      var h = row.height;

      ctx.beginPath();
      ctx.lineWidth = 1;
      ctx.strokeStyle = row.color;
      ctx.rect(x, y, w, h);
      ctx.stroke();

      ctx.fillStyle = "black";
      ctx.globalAlpha = 0.2;
      ctx.fillRect(x, y, w, h);
      ctx.globalAlpha = 1.0;

      var fontColor = "black";
      var fontSize = 12;
      ctx.font = `${fontSize}px monospace`;
      ctx.textAlign = "center";
      var classTxt = row.class;

      const textHeight = fontSize;

      ctx.strokeStyle = row.color;
      ctx.fillStyle = row.color;
      ctx.fillRect(
        x - ctx.lineWidth / 2,
        y - textHeight - ctx.lineWidth,
        w + ctx.lineWidth,
        textHeight + ctx.lineWidth
      );
      ctx.stroke();
      ctx.fillStyle = fontColor;
      ctx.fillText(classTxt, x + w / 2, y - 1);
    });
  };

  const  geminiNeta=async (words)=>{
  const model = genAI.getGenerativeModel({ model: "gemini-1.0-pro"});

  const prompt = `I have developed a system that interprets hand signs to generate meaningful sentences. The system will take a sequence of detected hand signs as input and should output a coherent English sentence. The challenge lies in converting these hand signs, which lack grammar, into grammatically correct and meaningful sentences. Hand signs detected: [${words+','}] return only the meaninful sentence and don't add quotation marks.`

  const result = await model.generateContent(prompt);
  const response = await result.response;
  const text = response.text();
  setResponser(text)
  }

  return (
    <div className="flex justify-between">
      <div className="w-1/2 relative">
        <Webcam
          ref={webcamRef}
          muted={true}
          className="absolute mx-auto left-0 right-0 text-center z-10"
        />
        <canvas
          ref={canvasRef}
          className="absolute mx-auto left-0 right-0 text-center z-20"
        />
      </div>
      <div className="w-1/2 p-4">
        <div className="text-center mb-4">
          {inferRunning ? (
            <button onClick={stopInfer} className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
              Stop Inference
            </button>
          ) : (
            <button onClick={startInfer} className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
              Start Inference
            </button>
          )}
        </div>
        <div className="text-right">
          <h2 className="mb-2">Detected Variables:</h2>
          <pre>{responser}</pre>
        </div>
      </div>
    </div>
  );
};

export default Translate;
