const body = document.querySelector("body");
const imageNumber = 4;



function paintImage(imgNumber) {
    const image = new Image();
    image.src = `${imgNumber+1}.jpg`;
    image.classList.add("bgImage");
    body.prepend(image); //puts image in body

}

function genRandom() {
    const number = Math.floor(Math.random() * imageNumber);
    console.log(number);
    return number;
}

function init() {
    const randomNumber = genRandom();
    paintImage(randomNumber);


}
init();