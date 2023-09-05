import chalk from 'chalk';
import randomColor from 'randomcolor';

const inputColor = randomColor({
  hue: process.argv[2],
  luminosity: process.argv[3],
});

const textColor = chalk.hex(inputColor);

// create the drawn lines that will be colored
const fullLine = '#'.repeat(31);
const spacedLine = '#'.repeat(5) + ' '.repeat(21) + '#'.repeat(5);
const textLine =
  '#'.repeat(5) + ' '.repeat(7) + inputColor + ' '.repeat(7) + '#'.repeat(5);

console.log(textColor(fullLine));
console.log(textColor(fullLine));
console.log(textColor(fullLine));
console.log(textColor(spacedLine));
console.log(textColor(textLine));
console.log(textColor(spacedLine));
console.log(textColor(fullLine));
console.log(textColor(fullLine));
console.log(textColor(fullLine));
