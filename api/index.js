import express from "express";
import cors from "cors";
import routes from "../src/routes.js";

const app = express();

app.use(express.json());
app.use(cors());
app.use(routes);

if (process.env.NODE_ENV !== 'production') {
  const PORT = 3000;
  app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
  });
}

export default app;
