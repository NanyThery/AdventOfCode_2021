// First part: https://adventofcode.com/2021/day/1
import cleanData from "../../CleanInput";


for (let i = 1; i < cleanData.length; i++) {
  if (cleanData[i] > cleanData[i - 1]) {
    increases++;
  }
}

console.log(increases);

//Second Part: https://adventofcode.com/2021/day/1#part2

const windowSum = [];
let windowIncreases = 0
const possibleGroups = cleanData.length/3; 
for (let i = 0; i < cleanData.length; i++) {
  if((cleanData.length) - i > 2){
    windowSum.push(cleanData[i]+cleanData[i+1]+cleanData[i+2])
  }
}

for (let i = 1; i < cleanData.length; i++) {
  if (windowSum[i] > windowSum[i - 1]) {
    windowIncreases++;
  }
}

console.log(windowIncreases)