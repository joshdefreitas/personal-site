/* Set the width of the sidebar to 250px and the left margin of the page content to 250px */
function openNav() {
    if(screen.availWidth < 450){
        document.getElementById("mySidebar").style.width = "100%";
        document.getElementById("main").style.marginLeft = "20%";
    }else{
        document.getElementById("mySidebar").style.width = "15%";
        document.getElementById("main").style.marginLeft = "20%";
    }

  }
  
  /* Set the width of the sidebar to 0 and the left margin of the page content to 0 */
  function closeNav() {
    document.getElementById("mySidebar").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
  }