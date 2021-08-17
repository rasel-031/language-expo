function BlogCart3() {
  return (
    <div className="blog-cart">
      <div className="blog-content">
        <div className="blog-pic">
          <img className="blog-pp" src="../images/pp3.jpg" alt=""></img>
        </div>
        <div className="blog-name">
          <h4>React JS</h4>
          <p>Ketty Jackson | 08 October at 06.15</p>
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
        <img className="blog-img" src="../images/blog3.jpg" alt=""></img>
        <h3>How Virtual-DOM works in React?</h3>
        <p>
          The Virtual DOM is an abstraction of the HTML DOM. It is lightweight
          and detached from the browser-specific implementation details. It is
          not invented by React but it uses it and provides it for free.
          ReactElements lives in the virtual DOM.
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

export default BlogCart3;
