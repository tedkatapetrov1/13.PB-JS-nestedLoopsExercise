function cinemaTickets(input) {
    let index = 0;
    let movieName = input[index];
    index++;
    let freeSpace = Number(input[index]);
    index++;
    let ticketType = input[index];
    index++;

    let totalTickets = 0;
    let studentTickets = 0;
    let standardTickets = 0;
    let kidTickets = 0;

    while (movieName !== "Finish") {
        let soldTickets = 0;

        while (ticketType !== "End") {
            soldTickets++;
            switch (ticketType) {
                case "student":
                    studentTickets++;
                    break;
                case "standard":
                    standardTickets++;
                    break;
                case "kid":
                    kidTickets++;
                    break;
            }

            if (soldTickets >= freeSpace) {
                break;
            }
            ticketType = input[index];
            index++;
        }

        let percentageFull = (soldTickets / freeSpace) * 100;
        console.log(`${movieName} - ${percentageFull.toFixed(2)}% full.`);

        totalTickets += soldTickets;
        movieName = input[index];
        index++;
        freeSpace = Number(input[index]);
        index++;
        ticketType = input[index];
        index++;
    }
    let studentTicketsPercentage = (studentTickets / totalTickets) * 100;
    let standardTicketsPercentage = (standardTickets / totalTickets) * 100;
    let kidTicketsPercentage = (kidTickets / totalTickets) * 100;

    console.log(`Total tickets: ${totalTickets}`);
    console.log(`${studentTicketsPercentage.toFixed(2)}% student tickets.`);
    console.log(`${standardTicketsPercentage.toFixed(2)}% standard tickets.`);
    console.log(`${kidTicketsPercentage.toFixed(2)}% kids tickets.`);
}

cinemaTickets(["The Matrix",
"20",
"student",
"standard",
"kid",
"kid",
"student",
"student",
"standard",
"student",
"End",
"The Green Mile",
"17",
"student",
"standard",
"standard",
"student",
"standard",
"student",
"End",
"Amadeus",
"3",
"standard",
"standard",
"standard",
"Finish"])
