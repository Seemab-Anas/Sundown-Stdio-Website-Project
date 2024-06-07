var fixed = document.querySelector("#fixed-image");

var rows = document.querySelectorAll(".row");

var images = [
    "./image1.webp",
    "./image2.webp",
    "./image3.jpeg",
    "./image4.jpeg",
    "./image5.webp",
    "./image6.jpeg",
    "./image7.webp",
    "./image8.webp"
];

rows.forEach(function(row, index) {
    row.addEventListener("mouseenter", function(e) {
        fixed.style.backgroundImage = `url(${images[index]})`;
        fixed.style.display = "block";
    });

    row.addEventListener("mouseleave", function(e) {
        fixed.style.display = "none";
    });
});



var cards = [
    "./card1.webp",
    "./card2.webp",
    "./card3.webp"
];

var paragraphs = [
    "Our team works with our clients to refine an idea and concept into an executable design. We create a final design that encompasses the brand narrative to bring stories to life and provide end-to-end design solutions from concept, design, and architectural drawings to 3D renderings.",
    "Once we have a design, our production team takes the lead in bringing it to life. We manage all stages of the project, from build specifications and technical drawings to site surveys, vendor management, and 2D & 3D production. We have an extensive network of partners to meet each unique design and project need.",
    "We’re with you every step of the way, from the project initiation to launch day. Our production and design teams are onsite to direct and guide the process down to the last point of completion, ensuring success across the built space and experience."
];

const h1Elements = document.querySelectorAll('.cardleft h1');
var card = document.querySelector(".cardright");
var paragraph = document.querySelector('.cardleft p');

h1Elements.forEach((h1, index) => {
    h1.addEventListener('click', function() {
        h1Elements.forEach(el => {
            el.classList.remove('active');
        });
        card.style.backgroundImage = `url(${cards[index]})`;
        paragraph.textContent = paragraphs[index];
        this.classList.add('active');
    });
});


// const scroll = new LocomotiveScroll({
//     el: document.querySelector("#main"),
//     smooth: true
// });



const texts = ["environments", "experience", "content"];
    let currentIndex = 0;
    const loaderText = document.getElementById("loaderText");
    const loader = document.querySelector(".loader");

    function updateText() {
        if (currentIndex < texts.length) {
            loaderText.textContent = texts[currentIndex];
            currentIndex++;
        } else {
            clearInterval(textInterval);
            hideLoader();
        }
    }

    function hideLoader() {
        loader.classList.add("hidden");
        setTimeout(() => loader.style.display = "none", 1000); // Match the transition duration
    }

    // Initial text
    updateText();

    // Change text every 2 seconds (2000 ms)
    const textInterval = setInterval(updateText, 800);