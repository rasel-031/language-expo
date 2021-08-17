function AboutDiv() {
  return (
    <div className="about-div">
      <h2>About Us</h2>
      <div className="about-container">
        <div className="about1">
          <h3>Made with React</h3>
          <p>
            A collection of websites and applications using the React or React
            Native JavaScript library.
          </p>
        </div>
        <div className="about2">
          <h3>About us</h3>
          <ul>
            <li>BLOG</li>
            <li>ABOUT US</li>
            <li>CONTACT US</li>
          </ul>
        </div>
        <div className="about3">
          <h3>More Info</h3>
          <ul>
            <li>ADVERTISE</li>
            <li>SUBMIT PRODUCT</li>
          </ul>
        </div>
        <div className="about4">
          <h3>Special Thanks</h3>
          <ul>
            <li>IRA DESIGN</li>
            <li>CREATIVE TIM</li>
          </ul>
        </div>
        <div className="about5">
          <h3>Useful Links</h3>
          <ul>
            <li>OFFICIAL WEBSITE</li>
            <li>OFFICIAL DOCUMENTATION</li>
            <li>REACT TEMPLATES</li>
            <li>GITHUB MADE WITH REACT</li>
          </ul>
        </div>
      </div>
      <br></br>
      <hr></hr>
      <h4 style={{textAlign:'center',padding:'2vh'}}>Copyright © 2020 Made with React. All Rights Reserved</h4>
    </div>
  );
}

export default AboutDiv;
