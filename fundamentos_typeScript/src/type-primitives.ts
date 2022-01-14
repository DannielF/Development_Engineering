console.log('Test!');

// Number Explicit

let phone: number;
// phone = '+367128815'; --> Type error
phone = 924234669;

// Number inferred
let phoneMovil = 637128815;
// let phoneMovil = true; --> Type error

/**
 * ES6
 * @var hex - hexadecimal number - you need to add 0x in front of the number
 * @var binary - binary number - you need to add 0b in front of the number
 * @var octal - octal number - you need to add 0o in front of the number
 */
let hex: number = 0xf00d;
let binary: number = 0b101;
let octal: number = 0o744;

// Type: Boolean ES6
let isPro: boolean;
isPro = true;
// isPro = 1; --> Error

// String
let username: string = 'JhonDoe';
username = 'NightWing';
// username = true; --> Error

// Template String with use of back-tick ``
let userInfo: string;
userInfo = `
    User info:
    username: ${username}
    firtsname: ${username + ' JhonDoe'}
    phone: ${phone}
    isPro: ${isPro}
`;

console.log('userInfo', userInfo);
