const products = []; // Define an empty array or populate it with items
const div = document.createElement('div');

products.forEach(product => {
  // Create card div
  const card = document.createElement('div');

  div.textContent = "This is a new div";
  div.style.backgroundColor = 'gold';
  div.style.padding = '10px';
  card.className = 'card';
  document.body.appendChild(div);

  const form = document.createElement('form');

const emailInput = document.createElement('input');
emailInput.type = 'firstnum';
emailInput.placeholder = 'Enter your number';
emailInput.required = true;

const submitBtn = document.createElement('button');
submitBtn.type = 'submit';
submitBtn.textContent = 'Submit';


form.appendChild(emailInput);
form.appendChild(submitBtn);
document.body.appendChild(form);

// Optional: handle form submission
form.addEventListener('submit', e => {
    e.preventDefault(); // stop page reload
    console.log('Submitted:', emailInput.value);
  });
}); // Close the forEach loop properly

