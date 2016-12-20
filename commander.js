var commander = require("commander");
commander
	.option("-f, --foo <i>", "Valore intero di foo (obbligatorio)", parseInt, 0)
	.option("-b, --bar [j]", "Valore intero di bar (opzionale)", parseInt, 0)
	.option("-z, --baz", "Valore Boolean di baz")
	.parse(process.argv);
console.log(commander.foo);
console.log(commander.bar);
console.log(commander.baz);