import { Request, Response } from "express";

import { Type } from "@models";

export default new (class TypeController {
  async list (req: Request, res: Response): Promise<Response> {
    try {
      const types = await Type.find();

      return res.json({ types });
    } catch (e) {
      console.log(e);
      return res.status(400).json({ msg: "error", e: e.message });
    }
  }

  async get (req: Request, res: Response): Promise<Response> {
    const { uid } = req.params;

    try {
      if (!uid)
        throw new Error("ID do tipo não especificado.");

      const type = await Type.findById(uid);

      return res.status(200).json({ type });

    } catch (e) {
      console.log(e);
      return res.status(400).json({ msg: "error", e: e.message });
    }
  }

  async create (req: Request, res: Response): Promise<Response> {
    const { body } = req;

    try {
      if (!body)
        throw new Error("Dados do	tipo não especificados.");

      const { name } = body;

      if (!name)
        throw new Error("Especifique o nome.");

      const type = await Type.create({ name });

      return res.status(200).json({ type });
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
				throw new Error("ID do tipo não especificado.");

			let type = await Type.findById(uid);

			if (!type)
				throw new Error("Tipo não encontrado. Verifique o ID.");

			type = await Type.findByIdAndUpdate(uid, body, { new: true });

			return res.status(200).json({ type });
		} catch (e) {
			console.log(e);
      return res.status(400).json({ msg: "error", e: e.message });
		}
  }

  async delete (req: Request, res: Response): Promise<Response> {
    const { uid } = req.params;

    try {
      if (!uid)
        throw new Error("ID do tipo não especificado.");

      let type = await Type.findById(uid);

      if (!type)
				throw new Error("Tipo não encontrado. Verifique o ID.");

      await Type.findByIdAndDelete(uid);

      return res.status(200).json({  });
    } catch (e) {
      console.log(e);
      return res.status(400).json({ msg: "error", e: e.message });
    }
  }
})();