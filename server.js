require("dotenv").config();
const express = require("express");
const cors = require("cors");
const morgan = require("morgan");

const app = express();

// Middleware
app.use(express.json());
app.use(cors());
app.use(morgan("dev"));

// Ruta básica 
app.get("/", (req, res) => {
    res.send("La API está funcionando exitosamente...");
});

// Inicio del servidor 
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Servidor corriendo en: --> http://localhost:${PORT}`);
});
