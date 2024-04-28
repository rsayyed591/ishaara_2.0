// eslint-disable-next-line no-unused-vars
import React from 'react'
import Education from './../../assets/education.png'
import Medical from './../../assets/medical.jpeg'
import Government from './../../assets/government.jpeg'
import Social from './../../assets/social.jpeg'
import Digital from './../../assets/digital.jpeg'
import Emergency from './../../assets/emergency.jpeg'
import './../../css/usecase.css'

export default function Usecase() {
  return (
    <>
      <div className="use_heading">
      Use Cases
    </div>
    <div className="use-container">
      <div className="use-media">
        <div className="use-media-content-1">
          <h3>Enhance Communication Accessibility</h3>
          <p className='p'>Enable seamless communication for the deaf and hard of hearing by translating ISL into spoken languages and vice versa, promoting inclusivity and equal opportunities.</p>
        </div>
        <div className="use-media-image-1">
        <img src={Social}/>
        </div>
      </div>
      <div className="use-media">
      <div className="use-media-image-2">
        <img src={Digital}/>
        </div>
        <div className="use-media-content-2">
          <h3>Bridge Communication Gaps</h3>
          <p className='p'>Facilitate better understanding and interaction between the deaf and hearing communities, enhancing integration and respect.</p>
        </div>
      </div>
      <div className="use-media">
        <div className="use-media-content-1">
          <h3>Promote Independence</h3>
          <p className='p'>Reduce dependence on interpreters by empowering individuals to engage more freely in daily activities through easy-to-use translation tools.</p>
        </div>
        <div className="use-media-image-1">
        <img src={Government}/>
        </div>
      </div>
      <div className="use-media">
      <div className="use-media-image-2">
        <img src={Education}/>
        </div>
        <div className="use-media-content-2">
          <h3>Support Educational and Professional Development</h3>
          <p className='p'>Improve communication in educational and workplace settings, aiding learning and career progression for the deaf and hard of hearing.</p>
        </div>
      </div>
      </div>
    </>
  )
}
