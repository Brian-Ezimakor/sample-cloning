window.onload = function() { 

let currentDate = new Date();
let currentYear = currentDate.getFullYear();
document.getElementById("year").innerHTML = currentYear;
}

/* THIS IS FOR DONATE POPUP */
setTimeout(() => {
  document.querySelector(".displaytoggler").style.display = "block";
  document.querySelector(".displaytoggler").style.opacity = "1";
  document.querySelector("body").style.overflow = "hidden";
}, 9200);

document.addEventListener("click", e => {
  if (e.target.matches(".stop")) {
    document.querySelector(".displaytoggler").style.display = "none";
    document.querySelector("body").style.overflow = "auto";
}
})