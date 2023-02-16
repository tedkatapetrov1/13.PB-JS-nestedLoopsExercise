function specialNumbers(input) {

    let n = Number(input[0]);
    let result = "";

    for (let currentNum = 1111; currentNum <= 9999; currentNum++) {

        let currStr = currentNum.toString();
        let isSpecial = true;

        for (let index = 0; index < currStr.length; index++) {
            let currDig = Number(currStr[index]);

            if (n % currDig !== 0) {
                isSpecial = false;
            }
        }
         if (isSpecial === true) {
            result += `${currStr} `
        }
    }
    console.log(result);
}

specialNumbers(["3"])