import { Router } from "express";
import { inserir, alterar, excluir, listar } from "../controller/funcionario";

export const routerFuncionario = Router();

routerFuncionario.post("/funcionario/inserir", inserir);
routerFuncionario.put("/funcionario/alterar", alterar);
routerFuncionario.delete("/funcionario/excluir", excluir);
routerFuncionario.get("/funcionario/listar", listar);





