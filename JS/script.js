const portfolioEl = document.querySelector(".portfolio")
var navEl = document.querySelector("#nav");
var introEl = document.querySelector("#intro");
var cardContentEl = document.querySelector(".content-card")
var viewPortfolio = document.querySelector("#view");
var aboutMeCard = document.querySelector("#card1");
var cardBody = document.querySelector(".card-body");
var cardImage = document.querySelector(".card-img");
var cardTitle = document.querySelector(".card-title");
var workEl = document.querySelector("#work");
var contactEl = document.querySelector("#contact");
var resumeEl = document.querySelector("#resume");
var workSectionEl = document.querySelector("#work-section");

portfolioEl.addEventListener("click", function(){
    window.location = "../index.html"
});


viewPortfolio.addEventListener("click", function(){
    introEl.setAttribute("style","transition-property: opacity; transition-duration: 600ms; opacity:0;")
    aboutMeCard.setAttribute("class","card");
    setTimeout(function(){
        introEl.setAttribute("class","no-display");
    navEl.setAttribute("class","mb-auto visible");

    aboutMeCard.setAttribute("style", "width: 100%; transition-property: transform; transition-duration: 600ms; transform: translate(0%)");
    // aboutMeCard.setAttribute("class","card");
    cardTitle.textContent = "Leigh Dahlin"
    var imgEl = document.createElement("img");
    imgEl.setAttribute("src","./Images/profile-pic (2).jpg");
    imgEl.setAttribute("id","about-me-pic")
    imgEl.setAttribute("alt","Picture of Leigh Dahlin");
    cardImage.appendChild(imgEl);
    var paragraphEl = document.createElement("p");
    paragraphEl.textContent = "My name is Leigh Dahlin and I currently reside in Sacramento, California. I grew up in Houston, Texas and got my bachelor's and master's degrees in Accounting at Texas A&M University in 2014. I worked in the accounting field for seven years when I decided that I needed a career change to something that I was passionate about. That's when I discovered the world of coding and all of the opportunites that came along with it."
    cardContentEl.appendChild(paragraphEl);

},650)
       
})

workEl.addEventListener("click", function(){
    aboutMeCard.setAttribute("style","transition-property: transform; transition-duration: 700ms; transform: translate(-120%)");
    
    setTimeout(function(){
        aboutMeCard.setAttribute("class","no-display")
        workSectionEl.setAttribute("class","work visible")
        setTimeout(function(){
            workSectionEl.setAttribute("style","transition-property: opacity; transition-duration: 250ms; opacity:10;")
        },50)
        

    },200)


    
});

