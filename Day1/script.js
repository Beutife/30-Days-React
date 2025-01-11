import webTechs from "./webTech";
import { countries } from "./countries";
import webTechs from "./webTech";


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

let found = false;

for (let country of countries) {
    if (country.toLowerCase() === 'ethiopia') {
        console.log('Ethiopia is present');
        found = true;
        break; 
    }
}

if (!found) {
    console.log('Ethiopia is not present');
}


const sentence = ["I", "love", "teaching", "and", "empowering", "people", "I", "teach", "HTML", "CSS", "JS", "React", "Python"]
let reSentence = sentence.replace(/[.,]/g, '').split(',')
console.log(reSentence.length());


const webTechs = webTech;


if(webTechs.includes()=='Sass') {
    console.log("Sass is a precessor")
}else {
    const addwebTech = webTech.push("Sass");
    console.log(addwebTech)
};

const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];
let  sortedAge = ages.sort((a,b) => a-b);
let minAge = sortedAge[0];
let maxAge = sortedAge[sortedAge.length - 1];
console.log("Sorted Ages:", sortedAge);
console.log("Min Age:", minAge);
console.log("Max Age:", maxAge);

let medianAge;
if (sortedAges.length % 2 === 0) {
  let mid1 = sortedAges[sortedAges.length / 2 - 1];
  let mid2 = sortedAges[sortedAges.length / 2];
  medianAge = (mid1 + mid2) / 2;
} else {
  medianAge = sortedAges[Math.floor(sortedAges.length / 2)];
}

console.log("Median Age:", medianAge);
let rangeAge = ages.range(max, min);
console.log(rangeAge);
let sumAges = ages.sum(sumAges)
console.log(sumAges)

