function generateMealPlan(event) {
  event.preventDefault();

  // Retrieve form inputs
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const goal = document.getElementById('goal').value;

  // Validate email
  if (!validateEmail(email)) {
    alert('Please enter a valid email address.');
    return;
  }

  // Generate meal plan table
  const daysOfWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
  const mealPlanTable = document.getElementById('mealPlanTable');
  mealPlanTable.innerHTML = ''; 

  for (let i = 0; i < daysOfWeek.length; i++) {
    const row = document.createElement('tr');
    row.innerHTML = `
      <td>${daysOfWeek[i]}</td>
      <td>${getMealInput('breakfast', i)}</td>
      <td>${getMealInput('snack', i)}</td>
      <td>${getMealInput('lunch', i)}</td>
      <td>${getMealInput('snack', i)}</td>
      <td>${getMealInput('dinner', i)}</td>
    `;
    mealPlanTable.appendChild(row);
  }

  
}

function getMealInput(mealType, dayIndex) {
  return `<input type="text" id="${mealType}-${dayIndex}" class="meal-input">`;
}

function clearMealPlan() {
  const mealInputs = document.getElementsByClassName('meal-input');
  for (let i = 0; i < mealInputs.length; i++) {
    mealInputs[i].value = '';
  }
}

function printMealPlan() {
  window.print();
}

function downloadMealPlan() {
  // Code to generate and download the meal plan as a file
  // ...
}

function validateEmail(email) {
  // Basic email validation using regular expression
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailPattern.test(email);
}

document.getElementById('mealPlanForm').addEventListener('submit', generateMealPlan);