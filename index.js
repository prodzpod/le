function enter() {
    document.getElementById("popup").style.display = "block";
}

function share() {
    navigator.clipboard.writeText("le 1/0\n\nhttps://prodzpod.github.io/le/");
    document.getElementById("feedback").innerHTML = "Copied to Clipboard!"
}