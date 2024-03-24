// eslint-disable-next-line no-unused-vars
import React from 'react'
import Example from './../../assets/example.png'
import Arrow from './../Arrow'
import Example1 from './../../assets/example1.gif'
// import Example2 from './../assets/example2.png'
export default function Services() {
  return (
      <section id="services" style={{ backgroundColor:'#fff', padding: '9.6% 0',justifyContent: 'center', alignItems: 'center',textAlign:'center'}}>
    <div style={{fontFamily: 'Inter' }}>
        <div className='s-title'>
        NO WORRIES , ISHAARA AI WILL BRIDGE <br/>THE GAP FOR YOU
        </div>
        <div className='s-container'> 
            {/* Card 1*/}
            <div className='s-card' >
                <img className='s-image' src={Example1}  alt="team image" />
                <div style={{ color: 'red', fontSize: '1.2rem', fontWeight: '700', marginBottom: '2%' }}>Your Sign</div>
            </div>

            <div className='s-arrow'>
                <Arrow/>
            </div>

            <div className='s-card' >
                <img className='s-image' src={Example} alt="team image" />
                <div style={{ color: 'red', fontSize: '1.2rem', fontWeight: '700', marginBottom: '2%' }}>Your Sign</div>
            </div>

            <div className='s-arrow'>
                <Arrow/>
            </div>

            <div className='s-card'>
                <img className='s-image' src={Example}alt="team image" />
                <div style={{ color: 'red', fontSize: '1.2rem', fontWeight: '700', marginBottom: '2%' }}>We Translate!</div>
            </div>
    </div>
    </div>
    </section>
  )
}
