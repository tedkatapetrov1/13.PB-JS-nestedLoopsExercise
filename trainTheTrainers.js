function calculateFinalAssessment(input) {
    let totalPoints = 0;
    let totalPresentations = 0;
    let index = 0;
    let n = Number(input[index]);
    index++;
    let presentationName = input[index];
    index++;

    for (let i = 0; i <= n; i++) {
        let presentationPoints = 0;
        for (let j = 0; j < n; j++) {
            let points = Number(input[index]);
            index++;
            presentationPoints += points;
            totalPoints += points;
        }

        let averagePoints = presentationPoints / n;
        console.log(`${presentationName} - ${averagePoints.toFixed(2)}.`);

        presentationName = input[index];
        index++;
        totalPresentations++;

        if (presentationName === "Finish") {
            let finalAssessment = totalPoints / (totalPresentations * n);
            console.log(`Student's final assessment is ${finalAssessment.toFixed(2)}.`);
            break;
        }
    }
}

calculateFinalAssessment(["2",
"While-Loop",
"6.00",
"5.50",
"For-Loop",
"5.84",
"5.66",
"Finish"])

