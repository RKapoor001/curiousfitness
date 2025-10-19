// Info popup data
const infoData = {
  bmi: {
    title: "Body Mass Index (BMI)",
    desc: "Measures body weight relative to height to assess fitness.",
    formula: "Formula: BMI = Weight (kg) / [Height (m)]²",
    categories: "Underweight <18.5 | Normal 18.5–24.9 | Overweight 25–29.9 | Obese ≥30"
  },
  bfp: {
    title: "Body Fat Percentage (BFP)",
    desc: "Estimates fat level compared to total body mass.",
    formula: "Formula: (1.20 × BMI) + (0.23 × Age) - (10.8 × Gender) - 5.4",
    categories: "Essential: 6–13% | Fit: 14–17% | Average: 18–24% | High: ≥25%"
  },
  whtr: {
    title: "Waist-to-Height Ratio (WHtR)",
    desc: "Evaluates health risk based on waist vs. height ratio.",
    formula: "Formula: WHtR = Waist / Height",
    categories: "Low Risk: 0.4–0.49 | Moderate: 0.5–0.59 | High: ≥0.6"
  },
  weightHip: {
    title: "Weight-to-Hip Ratio",
    desc: "Shows the proportion of waist to hip to assess body shape.",
    formula: "Formula: Waist / Hip",
    categories: "Low: <0.8 | Healthy: 0.8–0.9 | High: >0.9"
  },
  bmr: {
    title: "Basal Metabolic Rate",
    desc: "Energy expenditure at rest, helps plan diet and workouts.",
    formula: "Formula: BMR = 10×Weight + 6.25×Height – 5×Age + s (s=+5 for men, -161 for women)",
    categories: "Higher BMR means more calories burned at rest."
  }
};

// Show popup
function showInfo(key) {
  const data = infoData[key];
  const popup = document.createElement("div");
  popup.classList.add("info-popup");
  popup.innerHTML = `
    <h3>${data.title}</h3>
    <p>${data.desc}</p>
    <p><b>${data.formula}</b></p>
    <p>${data.categories}</p>
    <button onclick="closePopup(this)">Close</button>
  `;
  document.body.appendChild(popup);
  popup.style.display = "block";
}

function closePopup(button) {
  const popup = button.parentElement;
  popup.remove();
}

// -------------------------------
// Page fade-in
// -------------------------------
window.addEventListener('DOMContentLoaded', () => {
  document.body.classList.add('fade-in');
});

// -------------------------------
// Button fade-out navigation
// -------------------------------
document.querySelectorAll('.main-btn, .more-btn').forEach(button => {
  button.addEventListener('click', function(e) {
    const link = this.getAttribute('data-link');
    if (!link) return; // do nothing if no link (like info icon)
    e.preventDefault();
    document.body.style.transition = 'opacity 0.4s ease';
    document.body.style.opacity = 0;
    setTimeout(() => {
      window.location.href = link;
    }, 400);
  });
});
// Footer "About Me" fade-out navigation
document.getElementById('introFooterLink').addEventListener('click', function(e) {
  e.preventDefault();
  const link = this.getAttribute('href');
  document.body.classList.add('fade-out');
  setTimeout(() => {
    window.location.href = link;
  }, 400); // matches the fade-out duration
});

// -------------------------------
// Prevent info icon click from triggering button
// -------------------------------
document.querySelectorAll('.info-icon').forEach(icon => {
  icon.addEventListener('click', function(e) {
    e.stopPropagation();
  });
});