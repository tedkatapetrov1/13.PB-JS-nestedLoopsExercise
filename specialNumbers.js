// function specialNumbers(input) {

//     let n = Number(input[0]);
//     let result = "";

//     for (let currentNum = 1111; currentNum <= 9999; currentNum++) {

//         let currStr = currentNum.toString();
//         let isSpecial = true;

//         for (let index = 0; index < currStr.length; index++) {
//             let currDig = Number(currStr[index]);

//             if (n % currDig !== 0) {
//                 isSpecial = false;
//             }
//         }
//          if (isSpecial === true) {
//             result += `${currStr} `
//         }
//     }
//     console.log(result);
// }

function specialNumbers(input) {
    let num = Number(input[0]);
    let buff = "";
 
    for (let i = 1; i <= 9; i++) {
        for (let j = 1; j <= 9; j++) {
            for (let m = 1; m <= 9; m++) {
                for (let n = 1; n <= 9; n++) {
 
                    if (num % i === 0 &&
                        num % j === 0 &&
                        num % m === 0 &&
                        num % n === 0) {
 
                        buff += `${i}${j}${m}${n} `
                    }
                }
            }
        }
    }
    console.log(buff);
}

specialNumbers(["3"])