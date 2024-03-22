// eslint-disable-next-line no-unused-vars
import React from 'react';
import Vivek from './../../assets/Vivek.jpg';
import Rehan from './../../assets/Rehan.jpg';
import Rohit from './../../assets/Rohit.jpg';
import Nishi from './../../assets/Nishi.jpg';
import './../../css/style.css';

const About = () => {
  return (
    <div className="container" style={{ marginTop: '30px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <div className="about-title-heading">
        Meet our Team
      </div>
      <div className="row" style={{ display: 'flex', justifyContent: 'center' }}>
      <div className="about-card">
          <div className="about-card-body">
            <h4 className="about-card-title">Full Stack Developer</h4>
            <div className="about-card-image">
              <img src={Vivek} style={{ maxWidth: '22.5vw', maxHeight: '37.5vh', borderRadius: '6px' }} alt="Team member" />
            </div>
            <h4 className="about-card-title">Vivek Chouhan</h4>
            <p className="about-card-text">Coding like poetry should be short and concise.</p>
          </div>
        </div>

        <div className="about-card">
          <div className="about-card-body">
            <h4 className="about-card-title">Full Stack Developer</h4>
            <div className="about-card-image">
              <img src={Rehan} style={{ maxWidth: '22.5vw', maxHeight: '37.5vh', borderRadius: '6px' }} alt="Team member" />
            </div>
            <h4 className="about-card-title">Rehan Sayyed</h4>
            <p className="about-card-text">Experience is the name everyone gives to their mistakes.</p>
          </div>
        </div>

        <div className="about-card">
          <div className="about-card-body">
            <h4 className="about-card-title">Full Stack Developer</h4>
            <div className="about-card-image">
              <img src={Nishi} style={{ maxWidth: '22.5vw', maxHeight: '37.5vh', borderRadius: '6px' }} alt="Team member" />
            </div>
            <h4 className="about-card-title">Nishikant Raut</h4>
            <p className="about-card-text">Of course, bad code can be cleaned up. But it’s very expensive.</p>
          </div>
        </div>

        <div className="about-card">
          <div className="about-card-body">
            <h4 className="about-card-title">Full Stack Developer</h4>
            <div className="about-card-image">
              <img src={Rohit} style={{ maxWidth: '22.5vw', maxHeight: '37.5vh', borderRadius: '6px' }} alt="Team member" />
            </div>
            <h4 className="about-card-title">Rohit Deshmukh</h4>
            <p className="about-card-text">Code is like humor. When you have to explain it, it’s bad. </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
