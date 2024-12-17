import chalk from 'chalk'

function random(min, max) {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled);
}

setInterval(() => {
    let line = ""
    let columns = process.stdout.columns
    // for (let i = 0; i< Math.floor(columns/2); i++){
    //     line+= `${chalk.green(random(0, 9))} `
    // }

    while(line.length < columns){
        // line+= `${chalk.hidden("_").repeat(random(0, 6))}` + `${chalk.green(random(0, 9))}` + `${chalk.hidden("_").repeat(random(1, 6))}`
        line+= `${chalk.green(random(0, 9))} `
    }
    console.log(line);
    
    // console.log(`line length: ${line.length}, columns: ${columns}`);
}, 100);