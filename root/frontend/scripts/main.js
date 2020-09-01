/* Set the width of the sidebar and the left margin of the page content */
function openNav() {
    if(screen.availWidth < 450){
        document.getElementById("mySidebar").style.width = "50%";
        document.getElementById("main").style.marginLeft = "50%";
    }else{
        document.getElementById("mySidebar").style.width = "20%";
        document.getElementById("main").style.marginLeft = "20%";
    }

  }
  
  /* Set the width of the sidebar to 0 and the left margin of the page content to 0 */
  function closeNav() {
    document.getElementById("mySidebar").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
  }