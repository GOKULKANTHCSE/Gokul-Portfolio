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

const menuBtn = document.querySelector(".nav-menu-btn");
const closeBtn = document.querySelector(".nav-close-btn");
const navigation = document.querySelector(".navigation");
const navItems = document.querySelectorAll(".nav-items a");

menuBtn.addEventListener("click",() => {
  navigation.classList.add("active");
} );

closeBtn.addEventListener("click",() => {
  navigation.classList.remove("active");
} );

navItems.forEach((navItems) => {
  navItems.addEventListener("click",() => {
    navigation.classList.remove("active");
  });
});

ScrollReveal({
  reset: true,
  distance:'60px',
  duration: 2500 ,
  delay:100
});

ScrollReveal().reveal('.home .info h2, .section-title-01, .section-title-02 ', {delay:500, origin:'left'});
ScrollReveal().reveal('.home .info h3, .home .info p, .about-info .btn', {delay:600, origin:'right'});
ScrollReveal().reveal('.home .info .btn', {delay:700, origin:'bottom'});
ScrollReveal().reveal('.media-icons i, .contact-left li', {delay:500, origin:'left', interval:200});
ScrollReveal().reveal('.home-img, .about-img', {delay:500, origin:'bottom'});
ScrollReveal().reveal('.about .description, .contact-right', {delay:600, origin:'right'});
ScrollReveal().reveal('.about .tab-titles,.tab-contents', {delay:500, origin:'right', interval:200});
ScrollReveal().reveal('.skills-description, .skills-info,.contact-card ,.contact-left h2', {delay:700, origin:'left', interval:200});
ScrollReveal().reveal('.portfolio .img-card', {delay:800, origin:'bottom',interval:200});
ScrollReveal().reveal('footer .group', {delay:500, origin:'top',interval:200});


document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contactForm");
  const successMessage = document.getElementById("successMessage");

  form.addEventListener("submit", async (e) => {
      e.preventDefault(); // Prevent the default form submission

      // Show loading animation
      const button = form.querySelector("button");
      button.innerHTML = 'Sending... <i class="fas fa-spinner fa-spin"></i>';
      button.disabled = true;

      try {
          // Send form data using fetch API
          const formData = new FormData(form);
          const response = await fetch(form.action, {
              method: form.method,
              body: formData,
          });

          if (response.ok) {
              // Hide form and show success message
              form.style.display = "none";
              successMessage.classList.remove("hidden");
          } else {
              alert("Something went wrong. Please try again later.");
          }
      } catch (error) {
          console.error("Error:", error);
          alert("Failed to send message. Please check your connection.");
      } finally {
          // Reset button
          button.innerHTML = 'Send Message <i class="fas fa-paper-plane"></i>';
          button.disabled = false;
      }
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contactForm");
  const successPopup = document.getElementById("successPopup");

  form.addEventListener("submit", async (e) => {
      e.preventDefault(); // Prevent default form submission

      // Show loading state on the button
      const button = form.querySelector("button");
      button.innerHTML = 'Sending... <i class="fas fa-spinner fa-spin"></i>';
      button.disabled = true;

      try {
          // Simulate form submission with a delay (e.g., sending data to server)
          await new Promise((resolve) => setTimeout(resolve, 2000)); // Mock server delay

          // Display popup
          successPopup.style.display = "block";

          // Auto-hide popup after 3 seconds
          setTimeout(() => {
              successPopup.style.display = "none";
          }, 3000);
      } catch (error) {
          console.error("Error:", error);
          alert("Failed to send message. Please try again.");
      } finally {
          // Reset button
          button.innerHTML = 'Send Message <i class="fas fa-paper-plane"></i>';
          button.disabled = false;
      }
  });
});
