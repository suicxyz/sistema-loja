import { Request, Response } from "express";

import { Sales, Customer, Employee, Product, Sale } from "@models";

export default new (class SalesController {
	async list (req: Request, res: Response): Promise<Response> {
		try {
			const sales = await Sales.find().populate(["employee", "customer", "products.item"]);

			return res.json({ sales });
		} catch (e) {
			console.log(e);
			return res.json({ msg: "error", e: e.message });
		}
	}

	async get (req: Request, res: Response): Promise<Response> {
    const { uid } = req.params;

    try {
      if (!uid)
        throw new Error("ID da venda não especificado.");

      const sale = await Sales.findById(uid);

      return res.status(200).json({ sale });
    } catch (e) {
      console.log(e);
      return res.status(400).json({ msg: "error", e: e.message });
    }
  }

	async create(req: Request, res: Response): Promise<Response> {
		const { body } = req;

		try {
			if (!body)
				throw new Error("Dados da venda não especificadas.");
  
			console.log(body);

			const customer = Customer.findById(body.customer);
			if (!customer) throw new Error("Cliente não encontrado!");

			const employee = Employee.findById(body.employee);
			if (!employee) throw new Error("Vendedor não enconrtado!");

			const products = [];
			for (var x in body.products) {
				const product = Product.findById(body.products[x].item);
				if (!product) throw new Error("O produto não existe!");
					products.push(body.products[x]);

				if (x.amount == 0) body.products[x] = undefined;
			}

			var total;
			for (var y in products) {
				const product = Product.findById(products[y]);
				console.log(products[y]);
				console.log(product);
			}
			
			const payment = body.payment;
			const change = payment - total;
			
			const sale = Sales.create({ employee, customer, products, payment, change });

			return res.json({ sale });
		} catch (e) {
			console.log(e);
			return res.status(400).json({ msg: "error", e: e.message });
		}
	}
})();
