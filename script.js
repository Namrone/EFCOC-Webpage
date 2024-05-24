const blvrBox = document.querySelector("#believer");
blvrBox.addEventListener("mouseenter", function() {
    blvrBox.style.background = "#FCE181";
});

blvrBox.addEventListener("mouseleave", function(){
    blvrBox.style.background = "white";
})

const unsureBox = document.querySelector("#unsure");
unsureBox.addEventListener("mouseenter", function() {
    unsureBox.style.background = "#9FEDD7";
});

unsureBox.addEventListener("mouseleave", function(){
    unsureBox.style.background = "white";
})

const nonBelieveBox = document.querySelector("#non-believer");
nonBelieveBox.addEventListener("mouseenter", function() {
    nonBelieveBox.style.background = "#026670";
});

nonBelieveBox.addEventListener("mouseleave", function(){
    nonBelieveBox.style.background = "white";
})