import React from 'react'
// import './Footer.css'
function Footer() {
  return (

    <div>
<div class="footer" id="fooot">
  <div class="footer-content">
    <div class="footer-section about">
      <h1 class="logo-text"><span>Historical</span> Website</h1>
      <p>India has 116 ticketed monuments in 19 states, managed by the Archeological Survey of India. 
        Out of the 116 monuments, 17 monuments are located in Uttar Pradesh, 16 are in Maharashtra, 
        12 are in Karnataka, 10 are in Delhi, eight are in Madhya Pradesh, 
        seven are in Tamil Nadu, and six are in Gujarat. </p>
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
      <ul style={{listStyle:"none"}}>
        <a href="/about">
          <li>About</li>
        </a>
        <a href="/contact">
          <li>contact</li>
        </a>
        <a href="/login">
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