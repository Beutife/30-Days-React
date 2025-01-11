//number of days in a month
const months = {
    January: 31,
    February: 28, // Non-leap year
    March: 31,
    April: 30,
    May: 31,
    June: 30,
    July: 31,
    August: 31,
    September: 30,
    October: 31,
    November: 30,
    December: 31
};

let numbers = [];
for ( let [month, days] of Object.entries(months)) {
       if (month === month.January) {
        console.log(`January has ${days} days`)
       }
}

function getMonthsinDays(inputMonth) {

    if(!inputMonth){
        console.log('Enter a valid month');
        return;
    }

    const month = inputMonth.trim();
    if (months[month]) {
       console.log(`${month} has ${months[month]}`)
    } else {
        console.log('Invalid Month')
    }
}
getMonthsinDays('January')