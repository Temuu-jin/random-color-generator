import chalk from 'chalk';
import randomColor from 'randomcolor';

/*
declaring const which are used in the program such as:
inputColor - the Color that the user prompted, if no color prompted random color
textColor - String Code of the Hex saved in a Const to use in painting the drawn lines when console.log()
*/
const inputColor = randomColor({
  hue: process.argv[2],
  luminosity: process.argv[3],
});

const textColor = chalk.hex(inputColor);

/*
Create the each Line Type that needs to be drawn
using .repeat(i) to make code smaller
One Line full of "#"
One Line with "#" and " "
One Line with "#", " " and the inputColor HexCode as String
*/
const fullLine = '#'.repeat(31);
const spacedLine = '#'.repeat(5) + ' '.repeat(21) + '#'.repeat(5);
const textLine =
  '#'.repeat(5) + ' '.repeat(7) + inputColor + ' '.repeat(7) + '#'.repeat(5);

/*
Draw "#" picture on 9 lines.
  ###############################
  ###############################
  ###############################
  #####                     #####
  #####       #edff28       #####
  #####                     #####
  ###############################
  ###############################
  ###############################
*/
console.log(textColor(fullLine));
console.log(textColor(fullLine));
console.log(textColor(fullLine));
console.log(textColor(spacedLine));
console.log(textColor(textLine));
console.log(textColor(spacedLine));
console.log(textColor(fullLine));
console.log(textColor(fullLine));
console.log(textColor(fullLine));
