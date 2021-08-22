// %s format to string
// %d to integer
// %j to JSON

// console.log("Un %s y un %s", "perrito", "gatito");

// info: alias de console.log
// console.info("hello world");
// console.warn("hello error");

// console.assert(42 == "42");
// console.assert(42 === "42");

// console.trace("hello");

// Only visible in debugging
const util = require("util");
const debuglog = util.debuglog("foo");

debuglog("hello from foo");