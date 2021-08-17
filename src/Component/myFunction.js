function myFunction(){
    var x = document.getElementById("nav-link");
          if (x.style.display === "none") {
            x.style.display = "flex";
            x.style.Color = "red";
          } else {
            x.style.display = "none";
          }
  }

  export {myFunction};