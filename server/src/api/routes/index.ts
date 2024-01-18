import { Router } from "express";

import { CustomerC, EmployeeC, AuthC, ProductC, GroupC, TypeC, BrandC, VendorC, SalesC } from "@controllers";
import AuthM from "../middlewares/auth.middleware";

const router = Router();

//#region Clientes
router.get("/api/customers/", CustomerC.list);
router.get("/api/customers/:uid", CustomerC.get);
router.post("/api/customers/", CustomerC.create);
//#endregion

//#region Funcionários
router.get("/api/employees/", EmployeeC.list);
router.get("/api/employees/:uid", EmployeeC.get);
router.post("/api/employees/", EmployeeC.create);
//#endregion

//#region Produtos
router.get("/api/products", ProductC.list);
router.get("/api/products/:uid", ProductC.get);
router.post("/api/products", ProductC.create);

//#region Grupos
router.get("/api/groups", GroupC.list);
router.get("/api/groups/:uid", GroupC.get);
router.post("/api/groups", GroupC.create);
router.put("/api/groups/:uid", GroupC.update);
router.delete("/api/groups/:uid", GroupC.delete);
//#endregion

//#region Tipos
router.get("/api/types", TypeC.list);
router.get("/api/types/:uid", TypeC.get);
router.post("/api/types", TypeC.create);
router.put("/api/types/:uid", TypeC.update);
router.delete("/api/types/:uid", TypeC.delete);
//#endregion

//#region Marcas
router.get("/api/brands", BrandC.list);
router.get("/api/brands/:uid", BrandC.get);
router.post("/api/brands", BrandC.create);
router.put("/api/brands/:uid", BrandC.update);
router.delete("/api/brands/:uid", BrandC.delete);
//#endregion

//#region Fornecedores
router.get("/api/vendors", VendorC.list);
router.get("/api/vendors/:uid", VendorC.get);
router.post("/api/vendors", VendorC.create);
router.put("/api/vendors/:uid", VendorC.update);
router.delete("/api/vendors/:uid", VendorC.delete);
//#endregion

//#endregion

//#region Autenticação
router.get("/api/auth/", AuthC.getSession);
router.post("/api/auth/", AuthC.createSession);
router.delete("/api/auth/:token", AuthC.destroySession);
//#endregion

router.get("/api/sales", SalesC.list);
router.post("/api/sales", SalesC.create);

export default router;
