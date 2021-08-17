function BlogCart1() {
  return (
    <div className="blog-cart">
      <div className="blog-content">
        <div className="blog-pic">
        <img className="blog-pp" src="../images/pp1.jpg" alt=""></img>
        </div>
        <div className="blog-name">
          <h4>React & Bootstarp</h4>
          <p>Jhon Doe | 08 August at 09.22</p>
        </div>
        <div className="blog-threedot">
          <a href="#threedot">
            <img
              className="blog-threedot-img"
              src="../images/threedot.png"
              alt=""
            ></img>
          </a>
        </div>
      </div>
      <hr></hr>
      <div className="blog-main">
        <img className="blog-img" src="../images/blog1.jpg" alt=""></img>
        <h3>How to use Bootstrap with React?</h3>
        <p>
          When building a powerful web application, you are undoubtedly aware
          that Bootstrap and ReactJS continue to be the most popular choice.
          Using native Bootstrap with ReactJS is not as easy as it seems;
          however, different methods can be used.
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

export default BlogCart1;
