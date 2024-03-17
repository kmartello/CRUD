const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
const port = 3000;

const usuarioPegado = {
  username: "usuario",
  password: "contraseña",
};

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.post("/login", (req, res) => {
  const { username, password } = req.body;

  if (
    username === usuarioPegado.username &&
    password === usuarioPegado.password
  ) {
    res.json({ success: true, message: "Inicio de sesión exitoso" });
  } else {
    res
      .status(401)
      .json({ success: false, message: "Credenciales incorrectas" });
  }
});

app.listen(port, () => {
  console.log(`Servidor iniciado en http://localhost:${port}`);
});
