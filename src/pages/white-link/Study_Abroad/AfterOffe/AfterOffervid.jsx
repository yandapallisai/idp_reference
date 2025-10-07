import React from "react";
import "./AfterOfferVid.css";
function AfterOfferVid() {
  return (
    <div className="hdap">
      <div>
        <h2>Accepting your offer</h2>
        
        <p>
          Congratulations! An approved university application means you’re one step closer to achieving your dream to study abroad. It’s an exciting time but it’s natural to feel nervous. IDP is here to support you at every step of your journey. You can speak to one of our experienced counsellors to guide you through the process after you receive an offer. We’ll also help you with student visas, money transfer, health cover and accommodation before your move. So take a deep breath, and make a confident decision with the reassurance that we have your back every step of the way.  
          From accepting your offer to preparing for your departure, there are a few key steps to ensure a smooth transition. We have helped thousands of students like you navigate this stage, and we can help you too.
        </p>
        
         
      </div>

      <div className="vid">
        <div style={{ margin: "2rem 0" }}>
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/video2"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
        <div className="vid-txt">
          <h2>One account for all your study abroad needs</h2>
          <h3>
            Create your profile and unlock a wide array of features including personalised recommendations, fast-tracked applications and much more.
          </h3>
          <button>Signup</button>
        </div>
      </div>
    </div>
  );
}

export default AfterOfferVid;