// PART ONE

let bin = $0.innerText.split('\n')

let gamma = []

for(let i = 0; i < bin[0].length; i++){
    let zer = 0;
    let one = 0;
    for(let k = 0; k < bin.length; k++){
        if (bin[k][i] == '0'){
        ++zer
        }
        else if (bin[k][i] == '1'){
         ++one
        }
    }
    
    if(zer > one){ 
    gamma.push(0)
    } else{
    gamma.push(1)
    }
}

let epsilon = gamma.map(x => (x == 0)? 1 : 0);

let decimalG = parseInt(gamma.join(''), 2);

let decimalE = parseInt(epsilon.join(''), 2);

// PART TWO

// let bin = $0.innerText.split('\n')

let Count = {value: 0}

function wrapper(bin){
    let binary = binaryWin(bin);             
    let filtered = binaryReducer(bin);

    function binaryWin(bin){
    let gamma = []
    for(let i = 0; i < bin[0].length; i++){
        let zer = 0;
        let one = 0;
        for(let k = 0; k < bin.length; k++){
            if (bin[k][i] == '0'){
            ++zer
            }
            else if (bin[k][i] == '1'){
             ++one
            }
        }
        
        if(zer > one){ 
        gamma.push(0)
        } else{
        gamma.push(1)
        }
    }
    return gamma
}
 
function binaryReducer(array){return array.filter(elem => elem[Count.value] == binary[Count.value])}

++Count.value

if(filtered.length === 1){
    return filtered
} else{
    return wrapper(filtered)
}
}

const oxygen = wrapper(bin);
let decimalOxy = parseInt(oxygen, 2);


Count.value = 0;

function wrapperLazy(bin){
    let binary = binaryLoser(bin);
    let filtered = binaryReducer(bin);

    function binaryLoser(bin){
    let gamma = []
    for(let i = 0; i < bin[0].length; i++){
        let zer = 0;
        let one = 0;
        for(let k = 0; k < bin.length; k++){
            if (bin[k][i] == '0'){
            ++zer
            }
            else if (bin[k][i] == '1'){
             ++one
            }
        }
        
        if(zer > one){ 
        gamma.push(1)
        } else{
        gamma.push(0)
        }
    }
    return gamma
}
 
function binaryReducer(array){return array.filter(elem => elem[Count.value] == binary[Count.value])}

++Count.value

if(filtered.length === 1){
    return filtered
} else{
    return wrapperLazy(filtered)
}
}

const co2 = wrapperLazy(bin);
let decimalCo2 = parseInt(co2, 2);

let result = decimalOxy * decimalCo2
