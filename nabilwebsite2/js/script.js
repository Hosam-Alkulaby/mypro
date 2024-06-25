let Navbar = document.querySelector(".navbar");
let Fabars = document.querySelector(".fa-bars");

Fabars.onclick = () => {
  Navbar.classList.toggle("active");
};

// Function to toggle navbar active class
function toggleNavbar() {
  Navbar.classList.toggle("active");
}

// Timer function to toggle navbar active class every 5 seconds

var homeSwiper = new Swiper(".home-slid", {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  autoplay: {
    delay: 5000, // Adjust the delay as per your preference
    disableOnInteraction: false,
  },
});

var teamSwiper = new Swiper(".team-slider", {
  loop: true,
  slidesPerView: 1,
  spaceBetween: 10,
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1020: {
      slidesPerView: 3,
    },
  },
  autoplay: {
    delay: 5000, // Adjust the delay as per your preference
    disableOnInteraction: false,
  },
});

/*testmonials */

function fade($ele) {
  try {
    $ele
      .fadeIn(1000)
      .delay(3000)
      .fadeOut(1000, function () {
        var $next = $(this).next(".quote");
        fade($next.length > 0 ? $next : $(this).parent().children().first());
      });
  } catch (error) {
    console.error("An error occurred:", error);
  }
}

// Call the function with the initial element to start the fading sequence
fade($(".quoteLoop > .quote").first());
