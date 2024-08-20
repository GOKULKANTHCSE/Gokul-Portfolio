// about Education
const  toggle=function(elem){
  elem.classList.toggle('active');
}

var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");

    function opentab(tabname){
        for(tablink of tablinks){
            tablink.classList.remove("active-link");
        }
        for(tabcontent of tabcontents){
            tabcontent.classList.remove("active-tab");
        }
        event.currentTarget.classList.add("active-link")
        document.getElementById(tabname).classList.add("active-tab");
    }

    // navigation bar
window.addEventListener("scroll", function(){
    const header =this.document.querySelector("header");
    header.classList.toggle("sticky", this.window.scrollY > 0);
});


// color mode

const themeBtn = document.querySelector(".theme-btn");
 
themeBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
  themeBtn.classList.toggle("sun");

  localStorage.setItem("saved-theme", getCurrentTheme());
  localStorage.setItem("saved-Icon", getCurrentIcon());
});

const getCurrentTheme = () => document.body.classList.contains("dark-mode") ? "dark" : "light";
const getCurrentIcon = () => themeBtn.classList.contains("sun") ? "sun" : "moon";

const savedTheme = localStorage.getItem("saved-theme");
const savedIcon = localStorage.getItem("saved-Icon");

if(savedTheme){
  document.body.classList[savedTheme ==="dark" ? "add" : "remove"]("dark-mode");
  themeBtn.classList[savedIcon === "sun" ? "add" : "remove"]("sun");
}


const portfolioModals = document.querySelectorAll('.portfolio-model'); // Use a class selector
const imgCards = document.querySelectorAll('.img-card'); // Use a class selector
const portfolioCloseBtns = document.querySelectorAll('.portfolio-close-btn'); // Use a class selector

var portfolioModal = function portfolioModal(modalClick) { // Define the function correctly
  portfolioModals[modalClick].classList.add("active");
}

imgCards.forEach((imgCard, i) => {
  imgCard.addEventListener("click", () => {
    portfolioModal(i); // Call the function correctly
  });
});

portfolioCloseBtns.forEach((portfolioCloseBtn) => {
  portfolioCloseBtn.addEventListener("click", () => {
    portfolioModals.forEach((portfolioModalView) => {
      portfolioModalView.classList.remove("active");
    });
  });
});

const scrollToBtn = document.querySelector(".scrollToTop-btn");

window.addEventListener("scroll", function(){
    scrollToBtn.classList.toggle("active",window.scrollY > 500);
});

scrollToBtn.addEventListener("click", () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
})

window.addEventListener("scroll", () => {
    const sections =document.querySelectorAll("section");
    const scrollY = window.pageYOffset;

    sections.forEach(current => {
        let sectionHeight = current.offsetHeight;
        let sectionTop = current.offsetTop;
        let id = current.getAttribute("id");

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector("nav-items a[href*=" +"]").classList.add("active");
        }
        else{
            document.querySelector("nav-items a[href*=" +"]").classList.remove("active");
        }
    })
})

