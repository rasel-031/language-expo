

function MainBody() {
  return (
    <div>
      <div id="under-nav-bar">
        <ul className="mobile-nav-link">
          <li className="under-bar-mob">
            <a href="#main">Home</a>
          </li>
          <li className="under-bar-mob">
            <a href="#language-div">Dashboard</a>
          </li>
          <li className="under-bar-mob">
            <a href="#blog-div">Blog</a>
          </li>
          <li className="under-bar-mob">
            <a href="#about-us">About</a>
          </li>
        </ul>
      </div>
      <div className="mainbody">
        <img
          className="header-img"
          src="./images/header.svg"
          alt=""
          onClick="myFunction()"
        ></img>
        <div className="img-top-div">
          <img className="pl-img" src="./images/pl.png" alt=""></img>
          <h1>Do you know?</h1>
          <p style={{ fontWeight: "bold" }}>
            How many programming languages are there in the world!!! <br></br>
            Wikipedia claims there are approximately 700 programming languages.
          </p>
          <div className="search-div">
            <input
              className="search-bar"
              type="text"
              placeholder="Your email"
            ></input>
            <button className="search-btn">SUBSCRIBE</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainBody;
