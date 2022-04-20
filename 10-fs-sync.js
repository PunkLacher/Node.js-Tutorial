const {readFileSync, writeFileSync} = require('fs');

const first = readFileSync('./content/first.txt' , 'utf8');
const second = readFileSync('./content/second.txt' , 'utf8');

console.log(first, second);

writeFileSync(
    './content/result-sync.txt', `Here is the result : ${first}, ${second}`, { flag: 'a'} //flag property causes the file write method to append the new values to the existing instead of overwriting whats in the file.
)