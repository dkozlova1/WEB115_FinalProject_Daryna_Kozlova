document.addEventListener('DOMContentLoaded', function() {
  const mealPlanForm = document.getElementById('mealPlanForm');
  const nameInput = document.getElementById('nameInput');
  const emailInput = document.getElementById('emailInput');
  const goalInput = document.getElementById('goalInput');
  const clearButton = document.getElementById('clearButton');

  // Handle form submission
  mealPlanForm.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    const name = nameInput.value.trim();
    const email = emailInput.value.trim();
    const goal = goalInput.value.trim();

    if (isValidEmail(email)) {
      // Update the personal information display
      document.getElementById('name').textContent = name;
      document.getElementById('email').textContent = email;
      document.getElementById('goal').textContent = goal;

      generateMealPlan();
    } else {
      alert('Please enter a valid email address.');
    }
  });

  // Handle clear button click
  clearButton.addEventListener('click', function() {
    mealPlanForm.reset();
    clearMealPlan();
  });

  // Generate the meal plan in a new window
  function generateMealPlan() {
    // Retrieve the user's input for each meal
    const breakfast = document.getElementById('breakfastInput').value.trim();
    const snack1 = document.getElementById('snack1Input').value.trim();
    const lunch = document.getElementById('lunchInput').value.trim();
    const snack2 = document.getElementById('snack2Input').value.trim();
    const dinner = document.getElementById('dinnerInput').value.trim();

    // Open a new window to display the meal plan
    const mealPlanWindow = window.open('', '_blank');
    mealPlanWindow.document.write('<html><head><title>Your Meal Plan</title>');
    mealPlanWindow.document.write('<style>');
    mealPlanWindow.document.write('/* Styles for the meal plan table */');
    // ... (CSS styles for the table)
    mealPlanWindow.document.write('</style></head><body>');
    mealPlanWindow.document.write('<h1>Your Meal Plan</h1>');
    mealPlanWindow.document.write('<div class="personal-info">');
    mealPlanWindow.document.write('<h2>Personal Information</h2>');
    mealPlanWindow.document.write('<p><strong>Name:</strong> ' + nameInput.value.trim() + '</p>');
    mealPlanWindow.document.write('<p><strong>Email:</strong> ' + emailInput.value.trim() + '</p>');
    mealPlanWindow.document.write('<p><strong>Goal:</strong> ' + goalInput.value.trim() + '</p>');
    mealPlanWindow.document.write('</div>');
    mealPlanWindow.document.write('<h2>Meal Plan</h2>');
    mealPlanWindow.document.write('<table>');
    mealPlanWindow.document.write('<tr><th>Meal</th><th>Menu</th></tr>');
    // ... (Table rows with meal plan details)
    mealPlanWindow.document.write('</table>');
    mealPlanWindow.document.write('</body></html>');
    mealPlanWindow.document.close();
  }

  // Clear the displayed meal plan
  function clearMealPlan() {
    document.getElementById('name').textContent = '';
    document.getElementById('email').textContent = '';
    document.getElementById('goal').textContent = '';
  }

  // Validate the email format
  function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }
});