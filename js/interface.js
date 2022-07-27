function columnas(total_columnas){
  const div_load = document.getElementById("load");
  if( total_columnas === "3" ) {
    div_load.classList.remove("una");
  }
  else {
    div_load.classList.add("una");
  }
}

function menuVer(){
  const x = document.getElementById("topnav");
  if (x.className === "topnav") {
    x.className += " responsive";
    document.getElementById("hamburger-box").classList.add("active");
  }
  else{
    x.className = "topnav";
    document.getElementById("hamburger-box").classList.remove("active");
  }
}