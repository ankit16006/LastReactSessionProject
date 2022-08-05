import React from 'react'
import {NavLink} from 'react-router-dom'
import taj from '../asset/taj1.jpg'
import charminar from '../asset/charminar.jpg';
import redfort from '../asset/redfort.jpg'

function Home() {
  return (
    <div>
        <main>
  <div class="intro">
    <h1>A Web Developer</h1>
    <p>I am a web developer and I love to create websites.</p>
    <a href='https://traveltriangle.com/blog/famous-historical-places-in-india/'><button>Learn More</button></a>
  </div>
  <div class="achievements">
    <div class="work">
    
    <NavLink className="nav-link" to="/tlink">
  <img src={taj}></img>
      <p class="work-heading"><b>Taj Mahal</b></p>
      <p class="work-text">It was built by the fifth Mughal emperor, Shah Jahan in 1631 in memory of his third but the most favourite wife, in fact a soul-mate Mumtaz Mahal, a Muslim Persian princess</p>
      <a href=''>Read More...</a>
        </NavLink>
    
   
    </div>
    <div class="work">
    <NavLink className="nav-link" to="/chlink">
  <img src={charminar} style={{width:'300px',height:'180px'}}></img>
      <p class="work-heading"><b>Charminar</b></p>
      <p class="work-text">The Charminar was established more than four centuries ago by the fifth Sultan of the Qutb Shahi dynasty, namely Sultan Muhammad Quli Qutub Shah.</p>
      <a href=''>Read More...</a>
    </NavLink>
    </div>
    <div class="work">
    <NavLink className="nav-link" to="/redlink">
  <img src={redfort}></img>
      <p class="work-heading"><b>Red Fort</b></p>
      <p class="work-text">The Red Fort was originally made of lime stones. It was when the white stone began chipping off, the British had to paint it with red.</p>
      <a href=''>Read More...</a>
    </NavLink>
    </div>
  </div>
 
</main>
    </div>
  )
}

export default Home