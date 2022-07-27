function filterSelection(filtro) {

  if (filtro == "all") filtro = "";

  const els = document.getElementsByClassName("column");
  Array.from(els).forEach((el) => {
    //console.log(el.tagName + ' /// ' + el.className);
    el.classList.remove("show");

    if (el.className.indexOf(filtro) > -1) {
      el.classList.add("show");
    }
  });
}


const btnContainer = document.getElementById("BtnContainer");
const btns = btnContainer.getElementsByClassName("btn");

Array.from(btns).forEach((btn) => {  
  btn.addEventListener("click", function(){
    const current = document.getElementsByClassName("active");
    Array.from(current).forEach((el) => {
      el.classList.remove("active");
    });

    this.classList.add("active");
  });
});