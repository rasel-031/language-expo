function BlogCart2() {
  return (
    <div className="blog-cart">
      <div className="blog-content">
        <div className="blog-pic">
          <img className="blog-pp" src="../images/pp2.jpg" alt=""></img>
        </div>
        <div className="blog-name">
          <h4>Single Page Application</h4>
          <p>Alex Carry | 26 May at 03.40</p>
        </div>
        <div className="blog-threedot">
          <img
            className="blog-threedot-img"
            src="../images/threedot.png"
            alt=""
          ></img>
        </div>
      </div>
      <hr></hr>
      <div className="blog-main">
        <img className="blog-img" src="../images/blog2.jpg" alt=""></img>
        <h3>What is a single page application?</h3>
        <p>
          A single page application is essentially a webpage that interacts with
          the web browser dynamically by rewriting the current web page with the
          data obtained from the webserver. Hence, in a SPA, the webpage does
          not reload the page during its runtime.
        </p>
        <button className="blog-btn">SEE DETAILS</button>
      </div>
      <hr></hr>
      <div className="blog-social-btn">
        <button>
          <img
            className="blog-social-img"
            src="../images/love.png"
            alt=""
          ></img>
          <p className="blog-btn-name"> Love</p>
        </button>
        <button>
          <img
            className="blog-social-img"
            src="../images/comment.png"
            alt=""
          ></img>
          <p className="blog-btn-name"> Comment</p>
        </button>
        <button>
          <img
            className="blog-social-img"
            src="../images/share.png"
            alt=""
          ></img>
          <p className="blog-btn-name"> Share</p>
        </button>
      </div>
    </div>
  );
}

export default BlogCart2;
