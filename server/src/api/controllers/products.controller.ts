import { Request, Response } from "express";

import { Product } from "@models";

export default new (class ProductController {
	async list (req: Request, res: Response): Promise<Response> {
		try {
			const products = await Product.find().populate(["type", "group", "brand", "vendor"]);		

			return res.json({ products });
		} catch (e) {
			console.log(e);
			return res.status(400).json({ msg: "error", e: e.message });
		}
	}

	async get (req: Request, res: Response): Promise<Response> {
		const { uid } = req.params;

		try {
			if (!uid)
				throw new Error("ID do produto não especificado.");

			const product = await Product.findById(uid).populate("type,group,brand,vendor");

			return res.status(200).json({ product });

		} catch (e) {
			console.log(e);
			return res.status(400).json({ msg: "error", e: e.message });
		}
	}

	async create (req: Request, res: Response): Promise<Response> {
		const { body } = req;

		try {
			if (!body)
				throw new Error("Dados do produto não especificados.");

			const { name, description, type, group, brand, vendor, purchasePrice, sellPrice, active } = body;

			if (!name || !description || !type || !group || !brand || !vendor || !purchasePrice || !sellPrice)
				throw new Error("Um dos parâmetros necessários não foi especificado. Verifique se os campos de nome, descrição, tipo, grupo, marca, fornecedor, valor de custo e valor de venda estão preenchidos.");

			const product = await Product.create({ name, description, type, group, brand, vendor, purchasePrice, sellPrice, active });

			return res.status(200).json({ product });
		} catch (e) {
			console.log(e);
			return res.status(400).json({ msg: "error", e: e.message });
		}
	}

	async update (req: Request, res: Response): Promise<Response> {
		const { body } = req;
		const { uid } = req.params;

		try {
			if (!uid) 
				throw new Error("ID do produto não especificado.");

			let product = await Product.findById(uid);

			if (!product)
				throw new Error("Produto não encontrado. Verifique o ID.");

			product = await Product.findByIdAndUpdate(uid, body, { new: true });

			return res.status(200).json({ product });
		} catch (e) {
			console.log(e);
			return res.status(400).json({ msg: "error", e: e.message });
		}
	}

	async delete (req: Request, res: Response): Promise<Response> {
		const { uid } = req.params;

		try {
			if (!uid)
				throw new Error("ID do produto não especificado.");

			const product = await Product.findById(uid);

			if (!product)
				throw new Error("Produto não encontrado. Verifique o ID.");

			await Product.findByIdAndDelete(uid);

			return res.status(200).json({  });
		} catch (e) {
			console.log(e);
			return res.status(400).json({ msg: "error", e: e.message });
		}
	}
})();
