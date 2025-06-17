import { Router } from "express";
import controllerEquipamento from "./controllers/equipamentosController.js";
import usuarioController from "./controllers/usuarioController.js";

const router = Router();

router.get("/", (req, res) => {
  res.status(200).send("Página HOME");
});

// Equipamentos
router.post("/equipamentos", controllerEquipamento.Inserir);
router.get("/equipamentos", controllerEquipamento.Listar);
router.put("/equipamentos/:id", controllerEquipamento.Editar);
router.delete("/equipamentos/:id", controllerEquipamento.Excluir);

// Usuário
router.post("/usuario", usuarioController.Inserir);
router.post("/login", usuarioController.Login);

export default router;

router.get("/ping", (req, res) => {
  res.status(200).send("Pong! Está funcionando.");
});

