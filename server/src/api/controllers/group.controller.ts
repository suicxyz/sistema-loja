import { Request, Response } from "express";

import { Group } from "@models";

export default new (class GroupController {
	async list(req: Request, res: Response): Promise<Response> {
		try {
			const groups = await Group.find().populate("type");

			return res.json({ groups });
		} catch (e) {
			console.log(e);
			return res.status(400).json({ msg: "error", e: e.message });
		}
	}

	async get(req: Request, res: Response): Promise<Response> {
		const { uid } = req.params;

		try {
			if (!uid)
				throw new Error("ID do grupo não especificado.");

			const group = await Group.findById(uid).populate("type");

			return res.status(200).json({ group });

		} catch (e) {
			console.log(e);
			return res.status(400).json({ msg: "error", e: e.message });
		}
	}

	async create(req: Request, res: Response): Promise<Response> {
		const { body } = req;

		try {
			if (!body)
				throw new Error("Dados do	grupo não especificados.");

			const { name } = body;

			if (!name)
				throw new Error("Especifique o nome.");

			const group = await Group.create({ name });

			return res.status(200).json({ group });
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
				throw new Error("ID do grupo não especificado.");

			let group = await Group.findById(uid);

			if (!group)
				throw new Error("Grupo não encontrado. Verifique o ID.");

			group = await Group.findByIdAndUpdate(uid, body, { new: true });

			return res.status(200).json({ group });
		} catch (e) {
			console.log(e);
			return res.status(400).json({ msg: "error", e: e.message });
		}
	}

	async delete(req: Request, res: Response): Promise<Response> {
		const { uid } = req.params;

		try {
			if (!uid)
				throw new Error("ID do grupo não especificado.");

			const group = await Group.findById(uid);

			if (!group)
				throw new Error("Grupo não encontrado. Verifique o ID.");

			await Group.findByIdAndDelete(uid);

			return res.status(200).json({});
		} catch (e) {
			console.log(e);
			return res.status(400).json({ msg: "error", e: e.message });
		}
	}
})();