// eslint-disable-next-line no-unused-vars
import React from 'react';
import './../../css/model.css';
import F1 from './../../assets/f1.png';
import F2 from './../../assets/f2.png';
import F3 from './../../assets/f3.png';
import F4 from './../../assets/f4.png';
import F5 from './../../assets/f5.png';
import F6 from './../../assets/f6.png';
export default function Model() {
  return (
    <>
    <div className="title_heading">
      Model
    </div>
    <div className='container'>

<div className="card">
  <div className="bg"><img src={F1}/>
  <h5>SIGN TO TEXT</h5>
  <p>Automatically translates sign language gestures into written text</p></div>
  <div className="blob"></div>
</div>

<div className="card">
  <div className="bg"><img src={F2}/>
  <h5>DEPTH DETECTION</h5>
  <p>Utilizes advanced technology to accurately detect the depth and position of sign language movements.</p></div>
  <div className="blob"></div>
</div>

<div className="card">
  <div className="bg"><img src={F3}/>
  <h5>GRAMATICALLY CORRECT</h5>
  <p>Ensures that the translated text maintains proper grammar and syntax.</p></div>
  <div className="blob"></div>
</div>
<div className="card">
  <div className="bg"><img src={F4}/>
  <h5>HIGH ACCURACY</h5>
  <p>Provides precise and reliable translations with minimal errors.</p></div>
  <div className="blob"></div>
</div>

<div className="card">
  <div className="bg"><img src={F5}/>
  <h5>LLM POWERED</h5>
  <p>Employs a Language Model with high proficiency and understanding, enhancing translation accuracy.</p></div>
  <div className="blob"></div>
</div>

<div className="card">
  <div className="bg"><img src={F6}/>
  <h5>UNIQUE MODEL</h5>
  <p>Utilizes a proprietary model specifically tailored for sign language translation, offering distinct advantages over conventional approaches.</p></div>
  <div className="blob"></div>
</div>

</div>
</>
  )
}
