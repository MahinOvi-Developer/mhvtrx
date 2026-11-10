
const pages = document.querySelectorAll(".page");

const nextBtn = document.getElementById("nextBtn");
const prevBtn = document.getElementById("prevBtn");
const pageNumber = document.getElementById("pageNumber");

let currentPage = 0;

function showPage(index) {

    // Stop previous page music
    document.querySelectorAll("audio").forEach(audio => {
        audio.pause();
        audio.currentTime = 0;
    });

    // Hide all pages
    pages.forEach(page => {
        page.classList.remove("active");
    });

    // Show selected page
    pages[index].classList.add("active");

    currentPage = index;

    // Update page number
    pageNumber.innerText =
        (currentPage + 1) + " / " + pages.length;

    // Update buttons
    prevBtn.disabled = currentPage === 0;
    nextBtn.disabled = currentPage === pages.length - 1;
}

nextBtn.addEventListener("click", function() {

    if (currentPage < pages.length - 1) {
        showPage(currentPage + 1);
    }

});

prevBtn.addEventListener("click", function() {

    if (currentPage > 0) {
        showPage(currentPage - 1);
    }

});

// Final surprise
document.getElementById("yesBtn").addEventListener("click", function() {

    document.getElementById("finalMessage").style.display = "block";

    this.style.display = "none";

});

// Floating hearts
function createHeart() {

    const heart = document.createElement("div");

    heart.innerHTML = "❤️";
    heart.style.position = "fixed";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.bottom = "-30px";
    heart.style.fontSize = "22px";
    heart.style.pointerEvents = "none";
    heart.style.animation = "floatHeart 6s linear forwards";

    document.body.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 6000);
}

// Heart animation
const heartStyle = document.createElement("style");

heartStyle.innerHTML = `
@keyframes floatHeart {
    to {
        transform: translateY(-110vh) rotate(360deg);
        opacity: 0;
    }
}`;

document.head.appendChild(heartStyle);

setInterval(createHeart, 500);

// Initial page
showPage(0);
