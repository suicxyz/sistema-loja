import { Router } from "express";

import { CustomerC, EmployeeC, AuthC } from "@controllers";
import AuthM from "../middlewares/auth.middleware";

const router = Router();

router.get("/api/customers/", AuthM, CustomerC.list);
router.get("/api/customers/:uid", AuthM, CustomerC.get);
router.post("/api/customers/", AuthM, CustomerC.create);

router.get("/api/employees/", AuthM, EmployeeC.list);
router.get("/api/employees/:uid", AuthM, EmployeeC.get);
router.post("/api/employees/", AuthM, EmployeeC.create);

router.get("/api/auth/", AuthM, AuthC.getSession);
router.post("/api/auth/", AuthC.createSession);
router.delete("/api/auth/:token", AuthM, AuthC.destroySession);

export default router;