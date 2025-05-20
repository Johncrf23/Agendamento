import { Router } from "express";
import controllerEquipamento from "./controllers/equipamentosController.js";
const router = Router();
router.get("/", (req, res) =>{
    res.status(200).send("Pagina HOME")
})

router.post("/equipamentos", controllerEquipamento.Inserir)
router.get("/equipamentos", controllerEquipamento.Listar)
router.put("/equipamentos/:id", controllerEquipamento.Editar)
router.delete("/equipamentos/:id", controllerEquipamento.Excluir)
router.post("/usuario", usuarioController.Inserir)
router.post("/login", usuarioController.Login)
export default router;