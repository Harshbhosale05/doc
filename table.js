
const args = process.argv;

if (args.length < 3) {
    console.log("Please provide a number.");
    process.exit(1);
}

const num = parseInt(args[2]);

if (isNaN(num)) {
    console.log("Invalid number.");
    process.exit(1);
}

function table(n) {
    console.log(`Multiplication Table for ${n}:`);

    console.log("\nFor Loop");
    for (let i = 1; i <= 10; i++) {
        console.log(`${n} x ${i} = ${n * i}`);
    }

    console.log("\nWhile Loop");
    let i = 1;
    while (i <= 10) {
        console.log(`${n} x ${i} = ${n * i}`);
        i++;
    }

    console.log("\nDo While Loop");
    i = 1;
    do {
        console.log(`${n} x ${i} = ${n * i}`);
        i++;
    } while (i <= 10);
}

table(num);
