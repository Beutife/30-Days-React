






















const calculateBMI = () => {
    const weight = parseFloat(prompt("enter your weight"));
    const height = parseFloat(prompt("enter your height"));
    
    if (isNaN(weight) || isNaN(height) || height <= 0) {
        return "Invalid input. Please enter valid numbers for weight and height.";
    }

    const bmi = weight / (height * height);
    return `Your BMI is ${bmi.toFixed(2)}`;
};

function showDateTime (){
    const date = new Date();
    const day = date.getDay();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();

    const todayDate = (`Today is ${day}/${month}/${year}`);
    return (todayDate)
}
console.log(showDateTime())

const swapValues = (x,y) => {
    const swapX = x === y;
    const swapY = y === x;

    
}