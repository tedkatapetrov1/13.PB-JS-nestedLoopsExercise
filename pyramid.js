function pyramid(input) {
    let n = Number(input[0]);
    let current = 1;
    let isBigger = false;
    let currLine = "";

    for (let rows = 1; rows <= n; rows++){
        for (let cols = 1; cols <= rows; cols++) {
            if (current > n) {
                isBigger = true;
                break;
            }
            currLine += current + " ";
            current++
        }
       console.log(currLine);
       currLine = "";
       if (isBigger) {
        break;
       }
    }
    
}

pyramid(["12"])