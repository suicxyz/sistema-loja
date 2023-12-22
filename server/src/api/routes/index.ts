import { Router } from "express";

import { CustomerC, EmployeeC, AuthC, ProductC, GroupC, TypeC, BrandC, VendorC } from "@controllers";
import AuthM from "../middlewares/auth.middleware";

const router = Router();

//#region Clientes
router.get("/api/customers/", AuthM, CustomerC.list);
router.get("/api/customers/:uid", AuthM, CustomerC.get);
router.post("/api/customers/", AuthM, CustomerC.create);
//#endregion

//#region Funcionários
router.get("/api/employees/", AuthM, EmployeeC.list);
router.get("/api/employees/:uid", AuthM, EmployeeC.get);
router.post("/api/employees/", EmployeeC.create);
//#endregion

//#region Produtos
router.get("/api/products", ProductC.list);
router.get("/api/products/:uid", ProductC.get);
router.post("/api/products", ProductC.create);

//#region Grupos
router.get("/api/group", GroupC.list);
router.get("/api/group/:uid", GroupC.get);
router.post("/api/group", GroupC.create);
//#endregion

//#region Tipos
router.get("/api/type", TypeC.list);
router.get("/api/type/:uid", TypeC.get);
router.post("/api/type", TypeC.create);
//#endregion

//#region Marcas
router.get("/api/brand", BrandC.list);
router.get("/api/brand/:uid", BrandC.get);
router.post("/api/brand", BrandC.create);
//#endregion

//#region Fornecedores
router.get("/api/vendor", VendorC.list);
router.get("/api/vendor/:uid", VendorC.get);
router.post("/api/vendor", VendorC.create);
//#endregion

//#endregion

//#region Autenticação
router.get("/api/auth/", AuthM, AuthC.getSession);
router.post("/api/auth/", AuthC.createSession);
router.delete("/api/auth/:token", AuthM, AuthC.destroySession);
//#endregion

export default router;