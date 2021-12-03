// PART ONE

let co = $0.innerText.split('\n')    

let forwa = co.filter(elem => elem.includes('forward') === true ? elem : 0)     
forwa = forwa.join('').split('forward ').map(x => Number(x)).reduce((a,b) => a+b)

let dow = co.filter(elem => elem.includes('down') === true ? elem : 0)
dow = dow.join('').split('down ').map(x => Number(x)).reduce((a,b) => a+b)

let up = co.filter(elem => elem.includes('up') === true ? elem : 0)
up = up.join('').split('up ').map(x => Number(x)).reduce((a,b) => a+b)

let sum = dow - up 
let final = forwa * sum

// PART TWO 

let direct = co.map(elem => elem[0])  // Sequence coordinator

    let aim = 0;
    let depth = 0;
    let horiz = 0;
    
    for(let i = 0; i < direct.length; i++){
        switch (direct[i]){
            case 'f':
                let x = co[i].split('forward ')
                    x = x[1]
                 let sum = aim * Number(x)
                    depth += sum
                    horiz += Number(x);
                    break;
            case 'd':
                let y = co[i].split('down ')
                    y = y[1]
                    aim += Number(y);
                    break;
            case 'u':
                let w = co[i].split('up ')
                    w = w[1]
                    aim -= Number(w)
                    break;
        }
    }