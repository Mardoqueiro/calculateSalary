//  * labels for the title
//  * input elements for typing in a value
//  * radio button
//  * checkbox
//  * Additional label for the output
//  * buttons
// - The user must be able to enter the following information:
//  * first name
//  * last name
//  * age
//  * date of birth
//  * Users must select their gender. (Male or Female)
//  * Greeting type: (Mr, Mrs, Miss, Doctor)
//  * Users can have several subjects. (HTML, CSS, JavaScript, Angular, VueJS)
//  * Ask the user if they are working; if so, a div will be displayed for them to provide their working hours and rate, and calculate the salary based on the tax_rate:
//  https://www.oldmutual.co.za/personal/tools-and-calculators/income-tax-calculator/
//  * If not, this div should be hidden.
//  * Before calculating the salary, ensure that all of the input elements are not empty; if one or more are empty, tell the user that this field is necessary.
//  * Check whether the user entered a positive or negative value. If it is a positive number, apply a green border color to the input element; otherwise, apply a red color.
//  * Check if the user was born on a leap year or not. Apply your style.
//  * Save all data in an array and load it into a local storage.
//  * Please make sure you style your project.
//  * Below is the format for the output:
//  Hello Dear Mr Mardoqueiro Dimbu,

const form = document.querySelector('form');
const output = document.querySelector('#output');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const name = document.querySelector('#firstName').value;
  const surname = document.querySelector('#lastName').value;
  const age = parseInt(document.querySelector('#age').value);
  const dob = document.querySelector('#dob').value;
  const gender = document.querySelector('input[name="gender"]:checked').value;
  const greeting = document.querySelector('#greeting').value;
  const subjects = Array.from(document.querySelectorAll('input[name="subject"]:checked')).map(input => input.value);
  const isWorking = document.querySelector('#working').checked;
  const salary = parseInt(document.querySelector('#salary').value);
  const taxRate = parseFloat(document.querySelector('#taxRate').value);

  if (age <= 0) {
    alert('Age cannot be negative');
    return;
  }

  if (salary <= 0) {
    alert('Salary cannot be negative');
    return;
  }

  if (taxRate <= 0) {
    alert('Tax rate cannot be negative');
    return;
  }

  if (!name || !surname || !age || !dob || !gender || !greeting || !subjects || !isWorking || !salary || !taxRate) {
    alert('Please fill in all required fields');
    return;
  }

  if (age < 18) {
    alert('You must be at least 18 years old');
    return;
  }

  if (dob > new Date().toISOString().split('T')[0]) {
    alert('Date of birth cannot be in the future');
    return;
  }

  if (gender !== 'male' && gender !== 'female') {
    alert('Invalid gender');
    return;
  }

  if (greeting !== 'Mr' && greeting !== 'Mrs' && greeting !== 'Miss' && greeting !== 'Doctor') {
    alert('Invalid greeting');
    return;
  }

  if (subject === 'HTML' || subject === 'CSS' || subject === 'JavaScript' || subject === 'Angular' || subject === 'VueJS') {
    alert ('Invalid subject');
    return;
  }

  if (!isWorking) {
    salary = 0;
  }


  const personData = {
    name,
    surname,
    age,
    dob,
    gender,
    greeting,
    subjects,
    isWorking,
    salary,
    taxRate
  };

  localStorage.setItem('data', JSON.stringify(personData));

  output.innerHTML = `Hello Dear ${name} ${surname}, <br> Your salary is ${salary} <br> Thank you.`;

  form.reset();}

  );
  

