import React from "react";
import ReactDOM from "react-dom";
import Navbar from "./Component/Navbar";
import MainBody from "./Component/Main";
import LangDiv from "./Component/Lang";
import BlogDiv from "./Component/Blog";
import AboutDiv from "./Component/About";

ReactDOM.render(<Navbar /> , document.getElementById("topnav"));

ReactDOM.render(<MainBody />, document.getElementById("main"));

ReactDOM.render(<LangDiv />, document.getElementById("language-div"));

ReactDOM.render(<BlogDiv />, document.getElementById("blog-div"));

ReactDOM.render(<AboutDiv />, document.getElementById("about-us"));
