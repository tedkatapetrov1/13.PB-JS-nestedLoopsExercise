function calculateFinalAssessment(input) {
    let index = 0;
    let jugsCount = Number(input[index]); 
    index++;
   
    let command = input[index];
    index++;
   
    let counter = 0;
    let totalGrade = 0;
   
    while (command !== "Finish") {
      let presentationName = command; 
   
      counter++; 
   
      let sumGradeCount = 0; 
   
      for (let i = 0; i < jugsCount; i++) {
        let gradeCount = Number(input[index]); 
        index++;
        sumGradeCount += gradeCount; 
      }
   
      let avrGradeCount = sumGradeCount / jugsCount;
      totalGrade += avrGradeCount;  
      console.log(`${presentationName} - ${avrGradeCount.toFixed(2)}.`);
   
      command = input[index]; 
      index++;
    }
    let totalAvgGrade = totalGrade / counter;
    console.log(`Student's final assessment is ${totalAvgGrade.toFixed(2)}.`);
   
}

calculateFinalAssessment(["2",
    "Objects and Classes",
    "5.77",
    "4.23",
    "Dictionaries",
    "4.62",
    "5.02",
    "RegEx",
    "2.88",
    "3.42",
    "Finish"])
