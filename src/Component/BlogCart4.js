function BlogCart4() {
  return (
    <div className="blog-cart">
      <div className="blog-content">
        <div className="blog-pic">
          <img className="blog-pp" src="../images/pp4.jpg" alt=""></img>
        </div>
        <div className="blog-name">
          <h4>Java Script</h4>
          <p>Rafsan Shabab | 29 April at 07.30</p>
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
        <img className="blog-img" src="../images/blog4.jpg" alt=""></img>
        <h3>What is the use of JavaScript?</h3>
        <p>
          JavaScript is commonly used for creating web pages. It allows us to
          add dynamic behavior to the webpage and add special effects to the
          webpage. On websites, it is mainly used for validation purposes. It is
          easy to learn and like as C languages.
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

export default BlogCart4;
