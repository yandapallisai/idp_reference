
import React, { useEffect, useState } from 'react'
import './AfterOfferhero.css'
const AfterOfferhero = () => {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setTimeout(() => setAnimate(true), 100); // slight delay for animation trigger
  }, []);

  return (
    <div className='stdab'>
      <div className={`stdab-left${animate ? ' slide-in-left' : ''}`}>
        <h1>After receiving an offer</h1>
        <h3>Here are the steps to take from accepting an offer through to planning for your trip to make your study abroad dream a reality</h3>
       
        <button className='stdy-btn'> contact IDP</button>
      </div>
      <div className={`stdab-right${animate ? ' slide-in-right' : ''}`}>
         <img
          src="https://www.idp.com/medias/Student-holding-an-offer-letter-from-a-university-web.jpg?context=bWFzdGVyfGltYWdlc3w1MzYyOXxpbWFnZS9qcGVnfGg1MS9oZTAvODg0NDI4OTk4MjQ5NC9TdHVkZW50IGhvbGRpbmcgYW4gb2ZmZXIgbGV0dGVyIGZyb20gYSB1bml2ZXJzaXR5IHdlYi5qcGd8ZDEzYzJkYjU4ODg1OWY5YjJkYmI3ZDU2MjA0YjU5ZGM4YjYyYjJkYjYyYjYyYjYyYjYyYjYyYjYyYjY"
          alt="Student holding an offer letter"
          className="stdab-img"
        />

        {/* Add your image or content here  */}
      </div>
    </div>
  )
}

export default AfterOfferhero;
