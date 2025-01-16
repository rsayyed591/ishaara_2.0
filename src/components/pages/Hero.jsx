// eslint-disable-next-line no-unused-vars
import React, { useEffect } from 'react';
import heroimg from './../../assets/hero.png';
import './../../css/style.css';
import { Link } from 'react-router-dom';
import { Counter, Services, Features, Try, Footer, Usecase, Architecture, Objectives } from "./";

const Hero = () => {
  // Alert when the component is loaded
  useEffect(() => {
    const userResponse = window.confirm(
      "This website has been designed using Next.js. Would you like to proceed to the Next.js version hosted at https://ishaaraai.vercel.app/?"
    );
    if (userResponse) {
      window.location.href = "https://ishaara.vercel.app/";
    }
  }, []);

  return (
    <section
      id="hero"
      style={{
        justifyContent: 'center',
        alignItems: 'center',
        maxHeight: '80%',
        background: 'white',
      }}
    >
      <div style={{ padding: '3.5%', marginBottom: '10%' }}>
        <div className='wrapper'>
          {/* Wrapper Section */}
          <div
            style={{
              flex: 1,
              marginTop: '2%',
              fontFamily: 'Inter',
            }}
          >
            <p
              style={{
                fontSize: '2rem',
                marginTop: '20%',
                marginLeft: '2%',
                fontWeight: '300',
                color: '#808080',
              }}
            >
              Convert Indian Sign Language <br />
              To Text In <br />
              Real-Time With ISHAARA
            </p>
            <div
              className="wrap"
              style={{
                marginTop: '3%',
                marginRight: '19vw',
                display: 'flex',
                alignItems: 'center',
              }}
            >
              <Link className="get_tlink" to='/Translate'>
                <button className='get'>Get <span>Started</span></button>
              </Link>
            </div>
          </div>
          <div style={{ flex: 1 }}>
            <img
              src={heroimg}
              style={{
                width: '100%',
                maxHeight: 'auto',
                borderTopRightRadius: '100px',
                marginTop: '-10px',
              }}
              alt="Hero Image"
            />
          </div>
        </div>
      </div>
      
      {/* Additional Components */}
      <Counter />
      <Services />
      <Features />
      <Usecase />
      <Try />
      <Objectives />
      <Architecture />
      <Footer />
    </section>
  );
};

export default Hero;
