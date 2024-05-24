const blvrBox = document.querySelector(".believer");
blvrBox.addEventListener("mouseenter", function() {
    this.classList.add("slide-selected");
});

blvrBox.addEventListener("mouseleave", function(){
    this.classList.remove("slide-selected");
})

const unsureBox = document.querySelector(".unsure");
unsureBox.addEventListener("mouseenter", function() {
    this.classList.add("slide-selected");
});

unsureBox.addEventListener("mouseleave", function(){
    this.classList.remove("slide-selected");
})

const nonBelieveBox = document.querySelector(".non-believer");
nonBelieveBox.addEventListener("mouseenter", function() {
    this.classList.add("slide-selected");
});

nonBelieveBox.addEventListener("mouseleave", function(){
    this.classList.remove("slide-selected");
})