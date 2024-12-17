const readline = require('node:readline/promises');



async function login() {
    const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    });

    console.log("-----------------------");
    const email = await rl.question("Enter your email adress: ")
    console.log("-----------------------");
    const password = await rl.question("Enter your password: ")
    console.log("-----------------------");


    if (email === "" || password === "")
        console.log("Not enough infomation was given");

    else if (email.includes("@") || (email.includes(".") || email.includes(".lt")||email.includes(".com")))
        console.log("The email you had input is not of the accepted format");
    
    else if (email !== "admin@vcs.lt" || password !== "Github12"){
        console.log("Incorrect email and/or password");
    } else console.log("Welcome aboard, Captain!");

    rl.close();
}

login()