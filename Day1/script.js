//import webTechs from "./webTech";
//import countries from "./countries";
// Frontend array example
const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux'];

console.log(frontEnd.length); 
console.log(frontEnd.splice(1, 1)); 

// It companies array with correct string values
const itCompanies = ["Facebook", "Google", "Microsoft", "Apple", "IBM", "Oracle", "Amazon"];
console.log(itCompanies.length); 
console.log(itCompanies[0], itCompanies[3], itCompanies[6]); 

// Loop through the companies and print each one
itCompanies.forEach(company => {
    console.log(company);
});

// Filter companies that have more than one 'o' in their name
let companiesWithMoreThanOneO = [];
for (let company of itCompanies) {
    let countO = company.split('').filter(letter => letter.toLowerCase() === 'o').length;
    if (countO > 1) {
        companiesWithMoreThanOneO.push(company);
    }
}
console.log("Companies with more than one 'o':", companiesWithMoreThanOneO);

// String manipulation
let text = 'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.';
let splitText = text.split(','); 
console.log(splitText);
