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

let output = document.getElementById("output");
let firstName = document.getElementById("firstName");
let lastName = document.getElementById("lastName");
let age = document.getElementById("age");
let dob = document.getElementById("dob");
let gender = document.getElementsByName("gender");
let greeting = document.getElementById("greeting");
let subject = document.getElementsByName("subject");
let working = document.getElementById("working");
let salary = document.getElementById("salary");