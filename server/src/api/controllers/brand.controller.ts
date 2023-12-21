import { Request, Response } from "express";

import { Brand } from "@models";

export default new (class BrandController {
  async list (req: Request, res: Response): Promise<Response> {
    try {
      const brands = await Brand.find();

      return res.json({ brands });
    } catch (e) {
      console.log(e);
      return res.status(400).json({ msg: "error", e: e.message });
    }
  }

  async get (req: Request, res: Response): Promise<Response> {
    const { uid } = req.params;

    try {
      if (!uid)
        throw new Error("ID do marca não especificado.");

      const brand = await Brand.findById(uid);

      return res.status(200).json({ brand });

    } catch (e) {
      console.log(e);
      return res.status(400).json({ msg: "error", e: e.message });
    }
  }

  async create (req: Request, res: Response): Promise<Response> {
    const { body } = req;

    try {
      if (!body)
        throw new Error("Dados da marca não especificados.");

      const { name } = body;

      if (!name)
        throw new Error("Especifique o nome.");

      brand = await Brand.create({ name });

      return res.status(200).json({ brand });
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
				throw new Error("ID da marca não especificado.");

			let brand = await Brand.findById(uid);

			if (!brand)
				throw new Error("Marca não encontrada. Verifique o ID.");

			brand = await Brand.findByIdAndUpdate(uid, body, { new: true });

			return res.status(200).json({ brand });
		} catch (e) {
			console.log(e);
      return res.status(400).json({ msg: "error", e: e.message });
		}
  }

  async delete (req: Request, res: Response): Promise<Response> {
    const { uid } = req.params;

    try {
      if (!uid)
        throw new Error("ID da marca não especificado.");

      let brand = await Brand.findById(uid);

      if (!brand)
				throw new Error("Marca não encontrada. Verifique o ID.");

      await Brand.findByIdAndDelete(uid);

      return res.status(200).json({  });
    } catch (e) {
      console.log(e);
      return res.status(400).json({ msg: "error", e: e.message });
    }
  }
})();