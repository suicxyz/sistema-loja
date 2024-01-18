import { Request, Response } from "express";

import { cnpj, cpf } from "cpf-cnpj-validator";

import { Vendor } from "@models";

export default new (class VendorController {
	async list(req: Request, res: Response): Promise<Response> {
		try {
			const vendors = await Vendor.find();

			return res.json({ vendors });
		} catch (e) {
			console.log(e);
			return res.status(400).json({ msg: "error", e: e.message });
		}
	}

	async get(req: Request, res: Response): Promise<Response> {
		const { uid } = req.params;

		try {
			if (!uid)
				throw new Error("ID do fornecedor não especificado.");

			const vendor = await Vendor.findById(uid);

			return res.status(200).json({ vendor });

		} catch (e) {
			console.log(e);
			return res.status(400).json({ msg: "error", e: e.message });
		}
	}

	async create(req: Request, res: Response): Promise<Response> {
		const { body } = req;

		try {
			if (!body)
				throw new Error("Dados do	fornecedor não especificados.");

			const { name, cpfCnpj } = body;

			if (!name)
				throw new Error("Especifique o nome do fornecedor.");

			if (!cpfCnpj)
				throw new Error("Especifique o CPF/CNPJ do fornecedor.");
		
			if (cpfCnpj.length == 11)
				if (cpf.isValid(cpfCnpj) == false) throw new Error("O CPF informado não é valido.");
			
			if (cpfCnpj.length == 14)
				if (cnpj.isValid(cpfCnpj) == false) throw new Error("O CNPJ informado não é valido.");
	
			const vendor = await Vendor.create({ name, cpfCnpj });

			return res.status(200).json({ vendor });
		} catch (e) {
			console.log(e);
			return res.status(400).json({ msg: "error", e: e.message });
		}
	}

	async update(req: Request, res: Response): Promise<Response> {
		const { body } = req;
		const { uid } = req.params;

		try {
			if (!uid)
				throw new Error("ID do fornecedor não especificado.");

			let vendor = await Vendor.findById(uid);

			if (!vendor)
				throw new Error("Fornecedor não encontrado. Verifique o ID.");

			vendor = await Vendor.findByIdAndUpdate(uid, body, { new: true });

			return res.status(200).json({ vendor });
		} catch (e) {
			console.log(e);
			return res.status(400).json({ msg: "error", e: e.message });
		}
	}

	async delete(req: Request, res: Response): Promise<Response> {
		const { uid } = req.params;

		try {
			if (!uid)
				throw new Error("ID do fornecedor não especificado.");

			const vendor = await Vendor.findById(uid);

			if (!vendor)
				throw new Error("Fornecedor não encontrado. Verifique o ID.");

			await Vendor.findByIdAndDelete(uid);

			return res.status(200).json({});
		} catch (e) {
			console.log(e);
			return res.status(400).json({ msg: "error", e: e.message });
		}
	}
})();
