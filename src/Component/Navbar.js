function Navbar() {
  function BarAction() {
    var x = document.getElementById("under-nav-bar");
    var v = document.getElementsByClassName('mainbody');

    if (x.style.display === "none") {
      x.style.display = "block";
      v[0].style.paddingTop = "250px";

    } else {
      x.style.display = "none";
      v[0].style.paddingTop = "0px";
    }
  }
  return (
    <div>
      <div className="nav-bar">
        <a href="#haha" onClick={BarAction}>
          <img
            className="img-bar"
            src="../images/bar.png"
            alt="This is logo!!"
          ></img>
        </a>
        <img
          className="img-logo"
          src="../images/logo.jpg"
          alt="This is logo!!"
        ></img>
        <h2 style={{ marginLeft: "2vw" }}>Language Expo</h2>
        <ul className="nav-link">
          <li className="under-bar home">
            <a href="#main">Home</a>
          </li>
          <li className="under-bar">
            <a href="#language-div">Dashboard</a>
          </li>
          <li className="under-bar">
            <a href="#blog-div">Blog</a>
          </li>
          <li className="under-bar">
            <a href="#about-us">About</a>
          </li>
        </ul>
        <div className="div-social">
          <img
            className="img-social"
            src="../images/facebook.png"
            alt="This is facebook logo!!"
          ></img>
          <img
            className="img-social"
            src="../images/github.png"
            alt="This is github logo!!"
          ></img>
          <img
            className="img-social"
            src="../images/linkedin.png"
            alt="This is linkedin logo!!"
          ></img>
          <button className="btn-social">+ EXHIBITION</button>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
