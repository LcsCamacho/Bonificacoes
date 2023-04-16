import { Router } from "express";
import { inserir, alterar, excluir, listar } from "../controller/example";

export const routerExample = Router();

routerExample.post("/inserir", inserir);
routerExample.put("/alterar", alterar);
routerExample.delete("/excluir", excluir);
routerExample.get("/listar", listar);





