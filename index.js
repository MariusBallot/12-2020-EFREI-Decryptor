const { switches } = require("./switches")
const { myMessage } = require("./myMessage")

let out = ""
myMessage.split("").forEach(l => {
    let found = false

    switches.forEach(s => {

        if (l == s.from) {
            out += s.to
            found = true
        }
    });

    if (!found) {
        out += "_"
    }
});

console.log(out)