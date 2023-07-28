import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../components/navigationpage.css';
import LoginForm from './loginform';

function Navbar() {
  return (
    <div className='bacg'>
      <li>
        <div class="search">
          <input type="text" class="search__input" placeholder="Type your text"></input>
          <button class="search__button">
            <svg class="search__icon" aria-hidden="true" viewBox="0 0 24 24">
              <g>
                {/* SVG path data */}
              </g>
            </svg>
          </button>
        </div>
      </li>
      <li>
        <Link to="/HomePage">
          <button class="button">
            <span class="button-content">Home </span>
          </button>
        </Link>
      </li>
      <li>
        <Link to="/volunteerform">
          <button class="button">
            <span class="button-content">Volunteer Form </span>
          </button>
        </Link>
      </li>

      <li>
        <Link to="/grid">
          <button class="button">
            <span class="button-content">Communication </span>
          </button>
        </Link>
      </li>

      <li>
        <Link to="/about">
          <button class="button">
            <span class="button-content">About us</span>
          </button>
        </Link>
      </li>

      <li>
        <Link to="/loginform">
          <button class="button">
            <span class="button-content">Logout </span>
          </button>
        </Link>
      </li>

      <div className="volunteer-1">
        <h2>Volunteer Paltform</h2>
        <p>Welcome to our Volunteer Platform! We believe in the power of collective action and the positive impact it can have on communities.
             Our platform provides a space for passionate individuals like you to make a difference in the world by engaging in various volunteer activities. 
             Whether you're interested in environmental conservation, supporting local charities, or promoting education, we have a diverse range of opportunities for you to get involved in.</p>

        <p>As a volunteer, you can help organize events, participate in community projects, 
            or even start your own initiatives with like-minded individuals. Our user-friendly interface makes it easy to explore and sign up for volunteer 
            opportunities that align with your interests and schedule. Join us in creating a better tomorrow!</p>

        <p>Check out some inspiring moments captured during our previous volunteer events:</p>
        <div className="volunteer-image-1">
          <img src="https://media.istockphoto.com/id/1188864563/vector/charity-volunteering-and-donating-concept-raised-up-human-hands-with-red-hearts-childrens.jpg?s=612x612&w=0&k=20&c=WmHrAiSnCaugBcVu9wSb3WUcKOiFW5GZnuChts5Orys=" alt="Volunteer Image 1" />

          <div className="volunteer-2">
          <h3>Board Member</h3>
          <p>
                The Board Member is responsible for ensuring that the foundation achieves its goals in a sustainable and profitable way.
                 This includes ensuring that the foundation is financially sound, has the right team in place, and is on track to achieve its long-term goals. 
                 The Board Member will also serve as a liaison between the foundation and donors, and will help to shape the foundation’s strategy.</p>
                <div className="volunteer-image-2">
          <img src="https://c0.wallpaperflare.com/preview/542/908/30/adults-afro-blue-caucasian.jpg" alt="Volunteer Image 2" />

          <div className="volunteer-3">
         <h4>Event Assistant</h4>
          <p>
                From time to time the museum holds special events and when we do, 
                we always need help from the community. If you would like to be a volunteer 
                resource that we can call upon for events planning and execution, 
                please let us know by submitting an application.</p>
                <div className="volunteer-image-3">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpp9R-3fAq2XqgIclEw8BXf997nKMkQ_m_qw&usqp=CAU" alt="Volunteer Image 3" />
        </div>
      </div>
     </div>
     </div>
     </div>
     </div>
     </div>
  );
}

export default Navbar;
