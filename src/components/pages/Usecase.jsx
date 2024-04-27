// eslint-disable-next-line no-unused-vars
import React from 'react'
import F1 from './../../assets/f2.png'
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
      <div className="media-title_heading">
        <u style={{color:'red'}}><span style={{color:'black'}}>Use case</span></u>
      </div>
      <div className="media-container">
        <div className="media-row">
          <div className="media-text">
            <h2>Education</h2>
          </div>
          <div className="media-image">
            <img src={Education} />
          </div>
        </div>
        <div className="media-row">
          <div className="media-text">
            <h2>Medical Settings</h2>
          </div>
          <div className="media-image">
            <img src={Medical} />
          </div>
        </div>
        <div className="media-row">
          <div className="media-text">
            <h2>Government Services</h2>
          </div>
          <div className="media-image">
            <img src={Government} />
          </div>
        </div>
        <div className="media-row">
          <div className="media-text">
            <h2>Social Events</h2>
          </div>
          <div className="media-image">
            <img src={Social} />
          </div>
        </div>
        <div className="media-row">
          <div className="media-text">
            <h2>Digital Communication</h2>
          </div>
          <div className="media-image">
            <img src={Digital} />
          </div>
        </div>
        <div className="media-row">
          <div className="media-text">
            <h2>Emergency Situations</h2>
          </div>
          <div className="media-image">
            <img src={Emergency} />
          </div>
        </div>
      </div>
    </>
  )
}
