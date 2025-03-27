// Get clock hands elements
const hourHand = document.querySelector('.hh');
const minuteHand = document.querySelector('.mh');
const secondHand = document.querySelector('.sh');

function updateClock() {
    const now = new Date();
    
    const seconds = now.getSeconds();
    const minutes = now.getMinutes();
    const hours = now.getHours() % 12;
    
    const hourDeg = (hours * 30) + (minutes / 2);
    const minuteDeg = minutes * 6;
    const secondDeg = seconds * 6;
    
    hourHand.style.transform = `rotate(${hourDeg}deg)`;
    minuteHand.style.transform = `rotate(${minuteDeg}deg)`;
    secondHand.style.transform = `rotate(${secondDeg}deg)`;
}

// Initial update and interval
updateClock();
setInterval(updateClock, 1000);

// Center button functionality (keeping existing code)
document.getElementById("but").addEventListener("click", function () {
    let pElement = document.querySelector(".p");
    let textBox = document.getElementById("hid-tex");

    if (textBox.style.display === "block") {
        textBox.style.display = "none";
        pElement.style.display = "block";
    } else {
        textBox.style.display = "block";
        pElement.style.display = "none";
    }
});
