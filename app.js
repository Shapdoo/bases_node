const { createFile } = require("./helpers/multiply");
const argv = require("./config/yargs");

console.clear();

// Argumentos de la consola
// const [,, arg3 = 'base=5'] = process.argv
// const [, base = 5 ] = arg3.split('=')

createFile(argv.base, argv.listar, argv.limite)
  .then((fileName) => console.log(`${fileName}`.bgGreen.black, "created.".blue))
  .catch((err) => console.log(`${err}`.red));
