// .map() = accepts a callback and applies that functin
//          to each element of an array, then returns a new array


const dates = [`2024-1-10`, `2024-2-14`, `2024-3-17`];

function formatDates(element){
    const parts = element.split(`-`);
    return `${parts[1]}/${parts[2]}/${parts[0]}`;
}

const newDates = dates.map(formatDates);
console.log(newDates);