function primeNonPrime(input) {
    let index = 0;
    let num = input[index];
    index++;
    let primeSum = 0;
    let nonPrimeSum = 0;


    while (num !== "stop") {
        let currentNum = Number(num);
        let isPrime = true;

        if (num < 0) {
            console.log("Number is negative.");

            num = input[index];
            index++;
            continue;
        }

        for (let currDivisor = 2; currDivisor < currentNum; currDivisor++) {
            if (currentNum % currDivisor === 0) {
                isPrime = false;
                break;
            }
        }


        if (isPrime) {
            primeSum += currentNum;
        } else {
            nonPrimeSum += currentNum
        }

        num = input[index];
        index++;
    }
    console.log(`Sum of all prime numbers is: ${primeSum}`);
    console.log(`Sum of all non prime numbers is: ${nonPrimeSum}`);
}

primeNonPrime(["30",
    "83",
    "33",
    "-1",
    "20",
    "stop"])