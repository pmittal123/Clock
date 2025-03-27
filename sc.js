// Add this at the top of your file
let hasAlertShown = false;

// Show alert after 5 seconds, but only once
setTimeout(() => {
    if (!hasAlertShown) {
        alert("Click the clock or center button to view project details! 🎯");
        hasAlertShown = true;
    }
}, 2000);

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
const clockBody = document.querySelector('.body');
const hiddenText = document.getElementById('hid-tex');
const pElement = document.querySelector('.p');

function toggleHiddenText() {
    hiddenText.style.display = hiddenText.style.display === 'block' ? 'none' : 'block';
    pElement.style.display = hiddenText.style.display === 'block' ? 'none' : 'block';
}

// Add click handlers to both button and clock body
document.getElementById('but').addEventListener('click', toggleHiddenText);
clockBody.addEventListener('click', toggleHiddenText);
