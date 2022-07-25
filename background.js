// We need to select the h3
// We also need to select the colors, so 
var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");

// Now, we need to add event listener to the color input.

function setGradient() {
    body.style.background =
        "linear-gradient(to right, " 
        + color1.value
        + ", "
        + color2.value
        + ")";
    css.textContent = body.style.background + ";";
}

color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);

