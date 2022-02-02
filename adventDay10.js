let input = $0.innerText.split('\n');

function matcher(line){
    let prev = line.replaceAll('()', '');
    prev = prev.replaceAll('[]', '');
    prev = prev.replaceAll('{}', '');
    prev = prev.replaceAll('<>', '');
    if(line === prev){
        return prev;
    }
    return matcher(prev)
}

let output = [];
input.forEach(elem => output.push(matcher(elem)));
let corrupted = output.filter(elem => elem.includes('>') || elem.includes(']') || elem.includes('}') || elem.includes(')'));
let result = [];

corrupted.forEach(elem =>{
    for(let i = 0; i < elem.length; i++){
        if(elem[i] === ')' || elem[i] === ']' || elem[i] === '>' || elem[i] === '}'){
            result.push(elem[i])
            break;
        }
    }
});
let score = result.map(elem =>{
    if(elem === ')'){return 3}
    else if(elem === ']'){return 57}
    else if(elem === '}'){return 1197}
    else{return 25137}
})

score.reduce((a,b) => a + b);

// PART TWO

let incomplete = output.filter(elem => !elem.includes('>') && !elem.includes(']') && !elem.includes('}') && !elem.includes(')'));

let partTwo = []
let scoreTwo = []
incomplete.forEach((elem, index) =>{
    elem = elem.split('').reverse();
    for(let i = 0; i < elem.length; i++){
        if(elem[i] === '('){partTwo.push(')'); scoreTwo.push(1) }
        else if(elem[i] === '['){partTwo.push(']'); scoreTwo.push(2)}
        else if(elem[i] === '{'){partTwo.push('}'); scoreTwo.push(3)}
        else{partTwo.push('>'); scoreTwo.push(4)}
    }
    partTwo.push('\n')
    scoreTwo.push('\n')
})

partTwo = partTwo.join('').split('\n')
scoreTwo = scoreTwo.join('').split('\n')

function scoreCalculator(scor){
    scor = scor.split('')
    scor.unshift('0');
    let sum = scor.reduce((a,b) => (Number(a)*5) + Number(b))
    return sum
}

let resultTwo = []
scoreTwo.forEach(elem => resultTwo.push(scoreCalculator(elem)))

resultTwo.sort((a,b)=>a-b)