const tailwindcssCli = require("tailwindcss-cli");

module.exports = {
    plugins: {
      tailwindcss: {},
      //'@tailwindcss/jit': {}, //Compilar solo los estilos que utilizamos en el desarrollo (Just In Time)
      autoprefixer: {},
    }
  }