const portfolioEl = document.querySelector(".portfolio")
const coverCont = document.querySelector("#cover-container")
var navEl = document.querySelector("#nav");
var introEl = document.querySelector("#intro");
var cardContentEl = document.querySelector(".content-card")
var viewPortfolio = document.querySelector("#view");
var aboutMeCard = document.querySelector("#card1");
var contactCard = document.querySelector("#card2");
var skillsCard = document.querySelector("#card3");
var workEl = document.querySelector("#work");
var skillsEl = document.querySelector("#skills");
var contactEl = document.querySelector("#contact");
var workSectionEl = document.querySelector("#work-section");

portfolioEl.addEventListener("click", function(){
    window.location.href = "./index.html"
});


viewPortfolio.addEventListener("click", function(){
    introEl.setAttribute("style","transition-property: opacity; transition-duration: 600ms; opacity:0;")
    
    setTimeout(function(){
        coverCont.setAttribute("class","cover-container d-flex w-100 h-100 p-3 mx-auto flex-column")
        introEl.setAttribute("class","no-display");
        aboutMeCard.setAttribute("class","card");
        navEl.setAttribute("class","mb-auto visible");
        aboutMeCard.setAttribute("class","card");
        setTimeout(function(){
            aboutMeCard.setAttribute("style","transition-property: opacity; transition-duration: 600ms; opacity:10;");
        }, 50)
        
    },650)
       
})

workEl.addEventListener("click", function(){
    aboutMeCard.setAttribute("style","transition-property: opacity; transition-duration: 600ms; opacity:0;");
    skillsCard.setAttribute("style","transition-property: opacity; transition-duration: 600ms; opacity:0;");
    contactCard.setAttribute("style","transition-property: opacity; transition-duration: 600ms; opacity:0;");
    setTimeout(function(){
        aboutMeCard.setAttribute("class","no-display");
        skillsCard.setAttribute("class","no-display");
        contactCard.setAttribute("class","no-display");
        workSectionEl.setAttribute("class","work visible");
        setTimeout(function(){
            workSectionEl.setAttribute("style","transition-property: opacity; transition-duration: 600ms; opacity:10;")
        }, 50)
    },650)
    
});

skillsEl.addEventListener("click", function(){
    aboutMeCard.setAttribute("style","transition-property: opacity; transition-duration: 600ms; opacity:0;");
    skillsCard.setAttribute("style","transition-property: opacity; transition-duration: 600ms; opacity:0;");
    contactCard.setAttribute("style","transition-property: opacity; transition-duration: 600ms; opacity:0;");
    setTimeout(function(){
        workSectionEl.setAttribute("class", "no-display")
        aboutMeCard.setAttribute("class","no-display");
        contactCard.setAttribute("class","no-display");
        skillsCard.setAttribute("class","card");
        setTimeout(function(){
            skillsCard.setAttribute("style","transition-property: opacity; transition-duration: 600ms; opacity:10;")
        }, 50)
    },650)
    
});

contactEl.addEventListener("click", function(){
    workSectionEl.setAttribute("style","transition-property: opacity; transition-duration: 600ms; opacity:0;")
    skillsCard.setAttribute("style","transition-property: opacity; transition-duration: 600ms; opacity:0;");
    aboutMeCard.setAttribute("style","transition-property: opacity; transition-duration: 600ms; opacity:0;");
    setTimeout(function(){
        workSectionEl.setAttribute("class", "no-display")
        skillsCard.setAttribute("class","no-display");
        aboutMeCard.setAttribute("class","no-display");
        contactCard.setAttribute("class","card");
        setTimeout(function(){
            contactCard.setAttribute("style","transition-property: opacity; transition-duration: 600ms; opacity:10;")
        }, 50)
    },650)
 
})