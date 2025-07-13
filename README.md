# 🕒 JavaScript Clock

A simple and responsive **digital clock** built using **HTML**, **CSS**, and **JavaScript**.  
This project was created by **Priyanshu Mittal** as part of a self-learning journey to understand core JavaScript concepts, DOM manipulation, and real-time updates.

> 🔧 Built using only HTML, CSS, and JavaScript — no frameworks or libraries.

---

## 🚀 Features

- Displays the **current time** in real-time (hours, minutes, seconds)
- Uses JavaScript’s `Date` object and `setInterval()` to update every second
- Clean and centered layout using modern CSS
- Fully responsive and works on all screen sizes

---

## 📂 File Structure

Clock/  
├── index.html # HTML structure of the clock  
├── clock.css # Styling for layout and appearance  
└── sc.js # JavaScript logic for live time updates  

---

## 🧠 What I Learned

- How to get current time using the `Date` object
- Using `setInterval()` for live updates
- Dynamically updating the DOM with JavaScript
- Writing responsive and centered layouts with CSS

---

## 🧪 How It Works

1. `sc.js` uses `setInterval()` to update the clock every second.
2. Inside the interval function, the time is fetched using:
   ```js
   const now = new Date();
   const hrs = now.getHours();
   const mins = now.getMinutes();
   const secs = now.getSeconds();
👨‍💻 Author
Name: Priyanshu Mittal

GitHub: @pmittal123

Project Purpose: Practice JavaScript and DOM manipulation through a live clock

📄 License
This project is licensed under the MIT License.
You're free to use, modify, and share this project with proper attribution.

💡 Future Enhancements
Toggle between 12-hour and 24-hour formats

Add current date display

Add dark mode / light mode switch

Use animations or sound effects for ticking

yaml
Copy
Edit

---
