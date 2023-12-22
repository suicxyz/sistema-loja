import { Request, Response } from "express";

import { cpf as validator } from "cpf-cnpj-validator"

import { Employee } from "@models";

export default new (class EmployeeController {
	async list(req: Request, res: Response): Promise<Response> {
		try {
			const employees = await Employee.find();

			return res.json({ employees });
		} catch (e) {
			console.log(e);
			return res.status(400).json({ msg: "error", e: e.message });
		}
	}

	async get(req: Request, res: Response): Promise<Response> {
		const { uid } = req.params;

		try {
			if (!uid)
				throw new Error("ID do funcionário não especificado.");

			const employee = await Employee.findById(uid);

			return res.status(200).json({ employee });

		} catch (e) {
			console.log(e);
			return res.status(400).json({ msg: "error", e: e.message });
		}
	}

	async create(req: Request, res: Response): Promise<Response> {
		const { body } = req;

		try {
			if (!body)
				throw new Error("Dados do funcionário não especificados.");

			const { name, username, password, phonenumber, role } = body;
			let employee = await Employee.findOne({ username });

			if (employee)
				throw new Error("Funcionário já existe.");

			employee = await Employee.create({ name, username, password, phonenumber, role });

			return res.status(200).json({ employee });
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
				throw new Error("ID do funcionário não especificado.");

			if (!body || !body.username)
				throw new Error("Por favor, especifique o nome de usuário do funcionário.");

			let employee = await Employee.findById(uid);

			if (!employee)
				throw new Error("Funcionário não encontrado. Verifique o ID.");

			employee = await Employee.findByIdAndUpdate(uid, body, { new: true });

			return res.status(200).json({ employee });
		} catch (e) {
			console.log(e);
			return res.status(400).json({ msg: "error", e: e.message });
		}
	}

	async delete(req: Request, res: Response): Promise<Response> {
		const { uid } = req.params;
		const { body } = req;

		try {
			if (!uid)
				throw new Error("ID do funcionário não especificado.");

			let employee = await Employee.findById(uid);

			if (!employee)
				throw new Error("Funcionário não encontrado. Verifique o ID.");

			await Employee.findByIdAndDelete(uid);

			return res.status(200).json({});
		} catch (e) {
			console.log(e);
			return res.status(400).json({ msg: "error", e: e.message });
		}
	}
})();