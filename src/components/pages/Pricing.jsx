// eslint-disable-next-line no-unused-vars
import React from 'react';
import './../../css/pricing.css';

export default function Pricing() {
      return (
        <>
        <h1>Pricing</h1>
          <div className="price-table-wrapper">
            <div className="pricing-table">
              <h2 className="pricing-table__header">- BASIC -</h2>
              <h3 className="pricing-table__price">₹50</h3>
              <a target="_blank" className="pricing-table__button" href="#">
                Join Now!
              </a>
              <ul className="pricing-table__list">
                <li>30 day free trial</li>
                <li>50gb storage space</li>
                <li>20% discount</li>
                <li>24 hour support</li>
              </ul>
            </div>
            <div className="pricing-table featured-table">
              <h2 className="pricing-table__header">- BUSINESS -</h2>
              <h3 className="pricing-table__price">₹80</h3>
              <a target="_blank" className="pricing-table__button" href="#">
                Join Now!
              </a>
              <ul className="pricing-table__list">
                <li>40 day free trial</li>
                <li>100gb storage space</li>
                <li>25% discount</li>
                <li>24 hour support</li>
              </ul>
            </div>
            <div className="pricing-table">
              <h2 className="pricing-table__header">- PREMIUM -</h2>
              <h3 className="pricing-table__price">₹130</h3>
              <a target="_blank" className="pricing-table__button" href="#">
                Join Now!
              </a>
              <ul className="pricing-table__list">
                <li>50 day free trial</li>
                <li>200gb storage space</li>
                <li>40% discount</li>
                <li>24 hour support</li>
              </ul>
            </div>
          </div>
        </>    
  )
}
