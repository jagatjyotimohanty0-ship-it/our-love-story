// ===== LOVE STORY WEBSITE SCRIPT =====

// Welcome animation
window.addEventListener("load", () => {
    console.log("Our Love Story Loaded ❤️");
});


// Relationship Counter
function updateCounter() {

    const startDate = new Date("2025-01-01"); // yahan apni date dalenge
    const today = new Date();

    const difference = today - startDate;

    const days = Math.floor(
        difference / (1000 * 60 * 60 * 24)
    );

    document.getElementById("days")
    ?.innerHTML = days + " Days Together ❤️";
}


updateCounter();


// Smooth scrolling
document.querySelectorAll("a[href^='#']")
.forEach(link => {

    link.addEventListener("click", function(e){

        e.preventDefault();

        document.querySelector(
            this.getAttribute("href")
        )?.scrollIntoView({
            behavior:"smooth"
        });

    });

});


// Music control
const music = document.getElementById("music");

function playMusic(){

    if(music){
        music.play();
    }

}
