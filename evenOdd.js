function evenOdd(input) {
    let begin = Number(input[0]);
    let finish = Number(input[1]);

    let printline = "";

    for (let currentNum = begin; currentNum <= finish; currentNum++) {
        let numAsStr = currentNum.toString();

        let oddSum = 0;
        let evenSum = 0;
        for (let index = 0; index < numAsStr.length; index++) {
            let current = Number(numAsStr[index]);
            let position = index + 1;

            if (position % 2 === 0) {
                evenSum += current;
            } else {
                oddSum += current;
            }
        }

        if (evenSum === oddSum) {
            printline += `${numAsStr} `;
        }

    }
    console.log(printline);
}

evenOdd(["100000",
    "100050"])
