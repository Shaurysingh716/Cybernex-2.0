function displayText() {
    document.getElementById("textContainer").style.display = "block";
    setTimeout(function(){
        document.getElementById("textContainer").style.display = "none";
    }, 3000);
}