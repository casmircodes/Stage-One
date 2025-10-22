# Stage-One

# 🌟 Profile App

A responsive and accessible multi-page web app built with **HTML, CSS, and JavaScript**.  
This project started as a **Profile Card** task and later evolved into a **multi-page application** with **About Me** and **Contact Us** pages — following semantic HTML, accessibility, and responsive design principles.

---

## 🚀 Features

### 🪪 Profile Page
- Displays your profile photo, name, and brief bio.
- Includes interactive links (e.g., social media or portfolio).
- Fully responsive across devices.

### 🧠 About Me Page
- Reflective personal sections:
  - Bio
  - Goals in this program
  - Areas of low confidence
  - Note to future self
  - Extra thoughts
- Built with semantic HTML (`<main>`, `<section>`, `<h2>`, `<p>`).
- Clean layout with card-style design.

### 📩 Contact Us Page
- Simple contact form with validation.
- Validation rules:
  - All fields required.
  - Valid email format.
  - Message must be at least 10 characters.
- Error messages and success confirmation with accessible `aria` labels.
- Keyboard and screen-reader friendly.

---

## 💡 Accessibility & Design

- Semantic HTML structure throughout.
- Accessible labels and form associations.
- Keyboard navigable interface.
- Beautiful modern theme using:
  ```css
  --primary-color: #0077ff;
  --accent-color: #00c2ff;
  --bg-color: #f5f9ff;
  --card-bg: #ffffff;

Responsive layouts for mobile, tablet, and desktop.



---

🛠️ Tech Stack

Technology	Purpose

HTML5	Structure and semantics
CSS3	Styling and responsive design
JavaScript (Vanilla)	Form validation and interactivity
ARIA attributes	Accessibility enhancement



---

📁 Project Structure

stage-one/
│
├── index.html          # Profile page
├── about.html          # About Me page
├── contact.html        # Contact Us page
├── style.css           # Shared styling for all pages
├── script.js           # Form validation and logic
└── assets/
    └── images/         # Profile or background images


---

⚙️ How to Run the Project

1. Clone this repository:

git clone https://github.com/casmircodes/stage-one.git


2. Navigate into the project directory:

cd stage-one


3. Open index.html in your browser (you can also use Live Server in VS Code).


4. Navigate between pages using the links or nav bar.




---

🧩 Validation Tests (for developers)

Contact Form Tests:

Scenario	Expected Result

Empty fields	Show error messages
Invalid email format	Show email-specific error
Message under 10 chars	Show message length error
All valid inputs	Show success message



---

🧠 Learning Focus

This project helps practice:

Semantic HTML

Responsive CSS layouts

Accessibility (labels, ARIA)

Vanilla JS validation

Modular and clean front-end design



---

✨ Future Improvements

Add navigation bar with active page highlighting.

Add backend (Node.js or Firebase) to handle form submissions.

Dark/light theme toggle.

Smooth scroll animations between sections.



---

🧑‍💻 Author

Chiemela Ihechituru
Front-End Developer (in progress 🚀)
💼 Passionate about clean code, UX, and accessibility.
📫 chiemelaihechituru@gmail.com


---

📜 License

This project is open-source and available under the MIT License.



