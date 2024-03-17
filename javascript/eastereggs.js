document.getElementById("Rubrik").onclick = function() {

    let colorChange = document.getElementById("home");
    let animate = document.getElementById("Rubrik");
    let originalColor = colorChange.style.background;

    colorChange.style.background = "rgb(200, 200, 200)";
    animate.style.animation = "rotate 1s linear";

    setTimeout(function() {
        colorChange.style.background = originalColor;
        animate.style.animation = "none";
    }, 5000);
};



var expectedSequence = ['1', '3', '3', '7'];
var currentIndex = 0;

document.addEventListener("keydown", function(event) {
    if (event.key === expectedSequence[currentIndex]) {
        currentIndex++; 
        
        if (currentIndex === expectedSequence.length) {
            console.log('sekvens lyckad');
            
            let modal = document.getElementById("popup");
            modal.style.display = "block";
            
            currentIndex = 0;
        }
    } else {
        console.log('sekvens misslyckad');
        currentIndex = 0;
    }
});

window.onclick = function(close){
    let modal = document.getElementById("popup");
    if (close.target == modal) {
        modal.style.display = "none";
    }
}
