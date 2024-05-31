var myImages = [
    "images/background_chess.png",
    "images/recipe.png",
    "images/table.png",
    "images/tech.png.png",
    "images/woman.png"
];

var captionImages = ["Game Chessboard Image Blue", "Animation of a Man Cooking", " Math Table Until Number 10", "Woman in Tech Word With Virtual Reality Glasses", "Business Woman Image Closer to Window"];
var index = 0;

function updateImage() {
    document.getElementById("slideshow").src = myImages[index];
    document.getElementById("slideshow").alt = captionImages[index];
    document.getElementById("caption").textContent = captionImages[index];
}

function next() {
    if (myImages.length == index + 1)
        index = 0;
    else
        index++;
    updateImage();
}

function back() {
    if (index === 0)
        index = myImages.length - 1;
    else
        index--;
    updateImage();
}

var nextButton = document.getElementById("next");
var previousButton = document.getElementById("previous");

previousButton.addEventListener("click", back, false);
nextButton.addEventListener("click", next, false);

function autoSlide() {
    if (document.getElementById("auto").checked)
        next();
}

setInterval(autoSlide, 2000);

