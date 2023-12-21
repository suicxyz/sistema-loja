import { Request, Response } from "express";

import { cpf as validator } from "cpf-cnpj-validator"

import { Customer } from "@models";

export default new (class CustomerController {
  async list (req: Request, res: Response): Promise<Response> {
    try {
      const customers = await Customer.find();

      return res.json({ customers });
    } catch (e) {
      console.log(e);
      return res.status(400).json({ msg: "error", e: e.message });
    }
  }

  async get (req: Request, res: Response): Promise<Response> {
    const { uid } = req.params;

    try {
      if (!uid)
        throw new Error("ID do cliente não especificado.");

      const customer = await Customer.findById(uid);

      return res.status(200).json({ customer });

    } catch (e) {
      console.log(e);
      return res.status(400).json({ msg: "error", e: e.message });
    }
  }

  async create (req: Request, res: Response): Promise<Response> {
    const { body } = req;

    try {
      if (!body)
        throw new Error("Dados do cliente não especificados.");

      const { name, cpf, phonenumber, email } = body;
      let customer = await Customer.findOne({ cpf });

      if (customer)
        throw new Error("Cliente já existe.");

      if (!validator.isValid(cpf.toString()))
        throw new Error("CPF inválido.");

      customer = await Customer.create({ name, cpf, phonenumber, email });

      return res.status(200).json({ customer });
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
				throw new Error("ID do cliente não especificado.");

			if (!body || !body.cpf)
				throw new Error("Por favor, especifique o CPF do cliente.");

			let customer = await Customer.findById(uid);

			if (!customer)
				throw new Error("Cliente não encontrado. Verifique o ID.");

      if (!validator.isValid(body.cpf.toString()))
        throw new Error("CPF inválido.");

			customer = await Customer.findByIdAndUpdate(uid, body, { new: true });

			return res.status(200).json({ customer });
		} catch (e) {
			console.log(e);
      return res.status(400).json({ msg: "error", e: e.message });
		}
  }

  async delete (req: Request, res: Response): Promise<Response> {
    const { uid } = req.params;
    const { body } = req;

    try {
      if (!uid)
        throw new Error("ID do cliente não especificado.");

      let customer = await Customer.findById(uid);

      if (!customer)
				throw new Error("Cliente não encontrado. Verifique o ID.");

      await Customer.findByIdAndDelete(uid);

      return res.status(200).json({  });
    } catch (e) {
      console.log(e);
      return res.status(400).json({ msg: "error", e: e.message });
    }
  }
})();