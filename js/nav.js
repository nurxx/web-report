var navLinks = document.getElementsByClassName("nav-link");
for(var i = 0; i < navLinks.length; i++){
        navLinks[i].onmouseover = function(){
            if(this.style.backgroundColor !== "rgb(255, 170, 0)"){
                this.style.backgroundColor = "whitesmoke";
                this.style.color = "#212121";
            }
        }
        navLinks[i].onmouseleave = function(){
            if(this.style.backgroundColor !== "rgb(255, 170, 0)"){
                this.style.backgroundColor = "#212121";
                this.style.color = "whitesmoke";
            } 
        }
    }

function hideAllSections() {
    var sectionsToHide = document.getElementsByClassName("page");
    var navLinks = document.getElementsByClassName("nav-link");
    for(var i = 0; i < sectionsToHide.length; i++){
        sectionsToHide[i].style.display = "none"; 
        navLinks[i].style.backgroundColor = "#212121";
        navLinks[i].style.color = "whitesmoke";     
    }
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;

}

function showSection(id) {
    hideAllSections();
    var sectionToShow = document.getElementById(id);
    var tab = document.getElementById(id.concat("-tab"));
    
    tab.style.background = "#FFAA00";
    tab.style.color = "#212121";
                
      if (sectionToShow.style.display === "none") {
        sectionToShow.style.display = "block";
     }
}

showSection("overview");