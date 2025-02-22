document.getElementById("but").addEventListener("click", function () {
    let pElement = document.querySelector(".p");
    let textBox = document.getElementById("hid-tex");

    // Toggle the visibility of .p and .hidden-text
    if (textBox.style.display === "block") {
        textBox.style.display = "none";
        pElement.style.display = "block"; // Show the text again
    } else {
        textBox.style.display = "block";
        pElement.style.display = "none"; // Hide the text
    }
});
