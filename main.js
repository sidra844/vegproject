function toggleMenu() {
    var navMenu = document.getElementById("navMenu");
    navMenu.classList.toggle("active");
}

// Close menu when clicking outside
document.addEventListener("click", function(event) {
    var navMenu = document.getElementById("navMenu");
    var menuToggle = document.querySelector(".menu-toggle");

    if (!navMenu.contains(event.target) && !menuToggle.contains(event.target)) {
        navMenu.classList.remove("active");
    }
});





window.onscroll = function() {
    let scrollTopBtn = document.getElementById("scrollTop");
    if (document.documentElement.scrollTop > 500) {
        scrollTopBtn.style.display = "block";
    } else {
        scrollTopBtn.style.display = "none";
    }
};

function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}


// color-changer --------------------------------------

function toggleColors() {
    let color = document.getElementById('color');
    color.style.display = (color.style.display === 'block') ? 'none' : 'block';
}

function changeColor(id) {
    let selectedColor = id.style.background;

    // Select all text elements and apply the new color

    document.querySelectorAll('body, h1, h2, h3, h4, h5, h6, p, a, span , button , li').forEach(el => {
        el.style.color = selectedColor;
    });


    // document.querySelectorAll('p').forEach(function(el) {
    //     el.style.color = 'red';
    // });
    
}








// const btn = document.getElementById("toggleBtn");
        
// btn.addEventListener("click", () => {
//     document.body.classList.toggle("dark"); // Toggle dark mode
//     btn.textContent = document.body.classList.contains("dark") ? "☀️" : "🌙"; // Change icon
// });








