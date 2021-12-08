// PART ONE

let input = $0.innerText.split(',');
// let input = [3,4,3,1,2]
let Count = {value: 0};     // Days counter 

function lantern(fish){
    let fishLife = [];      // Building array with lanternfish's life 
    let lanternFish = fish.map(function (elem){
        if(elem != 0){
            return --elem;
        } else {
            fishLife.push(8);
            return 6;
        }
    });

    fishLife.forEach(elem => lanternFish.push(elem));
    ++Count.value;

    if(Count.value <= 255){
    return lantern(lanternFish);
    } else {
    return lanternFish;
    }
}

const result = lantern(input);

console.log(result.length);

// PART TWO

