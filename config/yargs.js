const argv = require("yargs")
  .option("to", {
    alias: "limite",
    type: "number",
    describe: "limite de la multiplicacion",
  })
  .option("l", {
    alias: "listar",
    type: "boolean",
    default: false,
    describe: "muestra el contenido del archivo en la consola.",
  })
  .option("b", {
    alias: "base",
    type: "number",
    demandOption: true,
    describe: "base de la tabla de multiplicar.",
  })
  .check((argv, options) => {
    if (isNaN(argv.base)) {
      throw "Argument must be a number.";
    }
    return true;
  }).argv;

module.exports = argv;
