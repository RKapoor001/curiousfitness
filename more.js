// Info popup data
const infoData = {
  idealBodyWeight: {
    title: "Ideal Body Weight",
    desc: "Calculates recommended body weight based on height and gender.",
    formula: "Formula: 50kg + 2.3kg per inch over 5 feet (Men), 45.5kg + 2.3kg per inch over 5 feet (Women)",
    categories: "Underweight | Normal | Overweight"
  },
  proteinReq: {
    title: "Protein Requirement",
    desc: "Estimates daily protein intake based on body weight and activity.",
    formula: "Formula: 0.8–1.2g protein per kg body weight (sedentary), 1.2–2.0g per kg (active)",
    categories: "Low | Moderate | High"
  },
  waterIntake: {
    title: "Water Intake",
    desc: "Recommended daily water intake based on body weight.",
    formula: "Formula: 35ml × Body weight (kg)",
    categories: "Low | Adequate | High"
  },
  bodyAdiposity: {
    title: "Body Adiposity Index",
    desc: "Estimates body fat percentage using hip circumference and height.",
    formula: "Formula: BAI = (Hip circumference / Height^1.5) - 18",
    categories: "Low | Normal | High"
  },
  bodyShape: {
    title: "Body Shape Indicator",
    desc: "Determines body shape using waist-to-hip ratio.",
    formula: "Formula: Waist / Hip",
    categories: "Apple | Pear | Rectangle | Hourglass"
  },
  calorieGoal: {
    title: "Calorie Goal",
    desc: "Estimates daily caloric intake needed for maintenance, loss, or gain.",
    formula: "Formula: BMR × Activity Factor ± Goal Adjustment",
    categories: "Lose Weight | Maintain | Gain Weight"
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

// Close popup
function closePopup(button) {
  const popup = button.parentElement;
  popup.remove();
}

// Page fade-in
window.addEventListener('DOMContentLoaded', () => {
  document.body.classList.add('fade-in');
});

// Button fade-out navigation
document.querySelectorAll('.main-btn').forEach(button => {
  button.addEventListener('click', function(e) {
    const link = this.getAttribute('data-link');
    if (!link) return;
    e.stopPropagation(); // Prevent info icon from triggering
    document.body.classList.add('fade-out');
    setTimeout(() => {
      window.location.href = link;
    }, 400);
  });
});

// Prevent info icon click from triggering button
document.querySelectorAll('.info-icon').forEach(icon => {
  icon.addEventListener('click', function(e) {
    e.stopPropagation();
  });
});