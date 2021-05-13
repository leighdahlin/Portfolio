var navEl = document.querySelector("#nav");
var introEl = document.querySelector("#intro");
var viewPortfolio = document.querySelector("#view");
var aboutMeCard = document.querySelector("#about-me");


viewPortfolio.addEventListener("click", function(){
    introEl.setAttribute("class","no-display")
    navEl.setAttribute("class","mb-auto visible")
    aboutMeCard.setAttribute("class","card");
})