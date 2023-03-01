const fs = require("fs");
const colors = require("colors");

async function createFile(base = 0, listar = false, limit=10) {
  let salida = "";
  const fileName = `tabla-${base}.txt`;

  for (let i = 1; i <= limit; i++) {
    salida += `${base} x ${i} = ${base * i}\n`;
  }

  if (listar) {
    console.log("==========================");
    console.log("    Tabla del :", `${base}`.blue);
    console.log("==========================");
    console.log(salida);
  }

  //Creando archivo
  fs.writeFileSync(`/output/${fileName}`, salida);

  return fileName;
}

module.exports = { createFile };
