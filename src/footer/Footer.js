import React from 'react'

function Footer() {
  return (

    <div>
<div class="footer" id="fooot">
  <div class="footer-content">
    <div class="footer-section about">
      <h1 class="logo-text"><span>ReactSession</span> Website</h1>
      <p>Respond to client needs for applications with an eye to the most feasible and effective solutions.
Coordinate with team members to create client apps in a coordinated and timely manner.
Ensure that apps are tested to meet total performance requirements.
Optimize the interfacing of the apps with a variety of systems to ensure flexible and agile use </p>
    <div class="contact">
      <span><i class="fa fa-phone"></i> &nbsp; 123-456-789</span>
      <span><i class="fa fa-envelope"></i> &nbsp; info@hunterdotnet.com</span>
    </div>
    <div class="socials">
      <a href="#"><i class="fa fa-facebook" aria-hidden="true"></i></a>
      <a href="#"><i class="fa fa-instagram" aria-hidden="true"></i></a>
      <a href="#"><i class="fa fa-twitter" aria-hidden="true"></i></a>
      <a href="#"><i class="fa fa-youtube" aria-hidden="true"></i>
</a>
    </div>
    </div>
    <div class="footer-section links">
      <h2>Quick links</h2>
      <br></br>
      <ul>
        <a href="#about">
          <li>About</li>
        </a>
        <a href="#fooot">
          <li>contact</li>
        </a>
        <a href="login.html">
          <li>login</li>
        </a>
        <a href="#">
          <li>Terms and Coditions</li>
        </a>
      </ul>
    </div>
    <div class="footer-section contact-form">
      <h2 class="Contact us"></h2>
      <br></br>
      <form action="index.html" method="post">
        <input type="email" name="email" class="text-input contact-input" placeholder="Your email address..." />
        <textarea name="message" class="text-input contact-input" placeholder="your message..."></textarea>
        <button type="submit" class="btn btn-big contact-btn">
          <i class="fa fa-envelope"></i>
        Send</button>
      </form>
    </div>
  </div>
 
        </div>
        <div class="footer-bottom">
     &copy; hunterdotnet.com | Designed by Ankit Kumar
   </div>
    </div>
  )
}

export default Footer