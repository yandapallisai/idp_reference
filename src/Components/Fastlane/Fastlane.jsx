import React from 'react'
import './Fastlane.css'   // import external CSS

const Fastlane = () => {
  return (
    <section className="fastlane-section">
      <div className="fastlane-container">
        
        {/* Left text section */}
        <div className="fastlane-text">
          <h4 className="fastlane-title">Get ready for the Fastlane</h4>
          <p className="fastlane-desc">
            Make your university application stress free and discover in minutes 
            if you’d get into the university you’ve always dreamed of.
          </p>
          <button className="fastlane-button">Get Started</button>
        </div>

        {/* Right image section */}
        <div className="fastlane-image">
          <picture>
            <img 
              src="./public/assets/Fastlane_promo.webp" 
              alt="fastlane-illustration" 
            />
          </picture>
        </div>
      </div>
    </section>
  )
}

export default Fastlane
