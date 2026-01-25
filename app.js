// js/app.js

// Navigation functions
function openNav() {
  var sidenav = document.getElementById("mySidenav");
  if (sidenav) {
    sidenav.style.width = "250px";
  }
}

function closeNav() {
  var sidenav = document.getElementById("mySidenav");
  if (sidenav) {
    sidenav.style.width = "0";
  }
  document.body.style.backgroundColor = "white";
}

// Video slider function (Placeholder for potential future use)
function videoUrl(url) {
  var slider = document.getElementById("slider");
  if (slider) {
    slider.src = url;
  }
}

document.addEventListener('DOMContentLoaded', function() {
    // Initialize Swiper
    if (typeof Swiper !== 'undefined') {
        const swiper = new Swiper('.swiper', {
            autoplay: {
                delay: 3000,
                disableOnInteraction: false,
            },
            loop: true,
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
        });
    }

    // Dropdown functionality for top menu
    if (typeof $ !== 'undefined') {
        $('.navClicker').on("click", function (e) {
            $(this).next('.dropdown-content').toggle();
            e.stopPropagation();
            e.preventDefault();
        });

        // Close dropdown when clicking outside
        $(document).click(function(){
            $('.dropdown-content').hide();
        });
    }
});
