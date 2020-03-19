const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
	'-----':  '0',
	' ': ' ',
};

function decode(expr) {
	let arr = [], tmp = [], res = "";
	for (let i = 0; i < expr.length - 9; i += 10) {
		let symbol = expr.slice(i, i + 10);
		if (symbol === "**********") {
			arr.push(" ");
		} else {
			tmp.length = 0;
			for (let j = 9; j > 0; j -= 2) {
				if (symbol[j] === "0" && symbol[j - 1] === "1") {
					tmp.push(".");
				} else if (symbol[j] === "1" && symbol[j - 1] === "1") {
					tmp.push("-");
				}
			}
			let t = tmp.reverse();
			let key = "";
			for(let k of t) {
				key += k;
			}
			arr.push(key);
		}
	}
	for (let a of arr) {
		res += MORSE_TABLE[a];
	}
	return res;
}

module.exports = {
    decode
}