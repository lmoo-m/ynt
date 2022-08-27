const lyric = [
    "Tak tahu bagaimana",
    "Aku tanpa dirimu",
    "Tak pernah terbayangkan",
    "Sepi merindu",
    "hehe",
];

const home = document.getElementById("home");
const text = document.getElementById("text");
const body = document.body;
var audio = new Audio("ynt.mp3");

window.addEventListener("keypress", playing);

function playing() {
    audio.play();
    home.classList.add("fadeOut");
    setTimeout(() => {
        if (home.classList == "fadeOut") {
            home.style.display = "none";
        }
    }, 1000);

    setTimeout(() => {
        body.style.background = "black";
        text.innerHTML = lyric[0];
        text.classList.add("fadeIn");
        setTimeout(() => {
            text.classList.add("fadeOut");
            text.classList.remove("fadeIn");
        }, 3000);
        setTimeout(() => {
            text.classList.remove("fadeOut");
            text.classList.add("fadeIn");
            text.innerHTML = lyric[1];
            setTimeout(() => {
                text.classList.add("fadeOut");
                text.classList.remove("fadeIn");
            }, 4000);
            setTimeout(() => {
                text.classList.remove("fadeOut");
                text.classList.add("fadeIn");
                text.innerHTML = lyric[2];
                setTimeout(() => {
                    text.classList.add("fadeOut");
                    text.classList.remove("fadeIn");
                }, 4000);
                setTimeout(() => {
                    text.classList.remove("fadeOut");
                    text.classList.add("fadeIn");
                    text.innerHTML = lyric[3];
                    setTimeout(() => {
                        text.classList.add("fadeOut");
                        text.classList.remove("fadeIn");
                    }, 4000);
                    setTimeout(() => {
                        text.classList.remove("fadeOut");
                        text.classList.add("fadeIn");
                        text.innerHTML = lyric[4];
                    }, 6000);
                }, 5000);
            }, 5000);
        }, 4000);
    }, 5000);
}
