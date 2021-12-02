var fs = require("fs");
var text = fs.readFileSync("./inputDay2.txt").toString();
var rawData = text.split("\n");


let hPosition = 0; 
let depth = 0; 
let aim = 0;

const operateSubmarine = (operation, num) => {
    switch (operation) {
        case 'forward':
            hPosition+=num;
            depth= depth+(aim*num);
            return 
        case 'down': 
            return aim+=num;
        case 'up':
            return aim-=num; 
        default: 
        return; 
    }
}

rawData.forEach( (item) => {
    const order = item.replace('\r','').split(' ');
    console.log(order)
    operateSubmarine(order[0], parseInt(order[1]));
})

console.log(`First part: Horizontal position is ${hPosition}, depth is ${depth}. Answer is ${hPosition*depth}`)

//https://adventofcode.com/2021/day/2#part2


