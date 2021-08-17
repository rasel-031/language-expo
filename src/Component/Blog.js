import BlogCart1 from "./BlogCart1";
import BlogCart2 from "./BlogCart2";
import BlogCart3 from "./BlogCart3";
import BlogCart4 from "./BlogCart4";

function BlogDiv() {
  return (
    <div className="blogDiv">
      <h2 style={{ paddingTop: "5vh" }}>Blogs</h2>
      <p style={{ fontWeight: "bold", textAlign: "justify", fontSize: "15px" }}>
        Programming is an intriguing sector as it gives us the superpower to
        regulate computer programs on the go. It can be used for ships, traffic
        control, robotics, self-driving vehicles, smartphone applications,
        websites, and many other things. To ensure that you remain up to date on
        standards and protocols, and even more so in the field of coding, it is
        important to track developments in your field. Programmers of all
        specialties can easily benefit from keeping track of the new
        developments & following industry-leading blogs and websites.
        <br></br>
        <br></br>
        These bloggers have made a name for themselves in the programming world
        by posting important, high-quality data and tips for coders. You can
        learn tricks and shortcuts you would never have dreamed of doing
        otherwise by following programming blogs.
        <br></br>
        <br></br>
        You’ll surely want to subscribe to these helpful programming websites
        and blogs written by the best blogging coders. So, let’s get see that!!!
      </p>

      <div className="blog-container">
        <BlogCart1/>
        <BlogCart2/>
        <BlogCart3/>
        <BlogCart4/>
      </div>
    </div>
  );
}

export default BlogDiv;
