let crabs = $0.innerText.split(',');
let bestPosition = [];

for(let i = 0; i < crabs.length; i++){
    let output = []
    for(let k = 0; k < crabs.length; k++){
        let sum = Math.abs(crabs[k] - i);
        output.push(sum);
    }
    bestPosition.push(output.reduce((a,b) => a + b));
}

let checkPosition = bestPosition.slice();

checkPosition.sort();

console.log(bestPosition.indexOf(checkPosition[0]))
console.log(checkPosition[0])

// PART TWO

let crabs = $0.innerText.split(',');
let bestPosition = [];

for(let i = 0; i < crabs.length; i++){
    let output = []
    for(let k = 0; k < crabs.length; k++){
        let sum = Math.abs(crabs[k] - i);      
        let result = (sum * (1 + sum)) / 2
        output.push(result);
    }
    bestPosition.push(output.reduce((a,b) => a + b));
}

let checkPosition = bestPosition.slice();

checkPosition.sort((a,b)=> a-b);

console.log(bestPosition.indexOf(checkPosition[0]));
console.log(checkPosition[0]);
