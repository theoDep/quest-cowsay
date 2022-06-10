const informations = require("./information.js");
const cowsay = require("cowsay");
const { name, school, campus } = informations;

console.log(
  cowsay.say({
    text: `I'm ${name} from ${school} ${campus}`,
    e: "oO",
    T: "U ",
  })
);
