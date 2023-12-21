import { Request, Response } from "express";

import bcjs from "bcryptjs";
import jwt from "jsonwebtoken";

import { Employee } from "@models";

export default new (class AuthController {
  async getSession (req: Request, res: Response): Promise<Response> {
    try {
      const authHeader = req.headers.authorization;
      const parts = authHeader.split(" ");
      const [ scheme, token ] = parts;

      const response = jwt.verify(token, process.env.JWT_PASS);

      // @ts-ignore
      const user = await Employee.findOne({ username: response.username });

      return res.status(200).json({ user });
		} catch (e) {
			console.error(e);
			return res.status(400).json({ err: e.message });
		}
  }

  async createSession (req: Request, res: Response): Promise<Response> {
    const { body } = req;

    try {
      if (!body)
        throw new Error("Nenhum dado especificado.");

      const { username, password } = body;

      let user = await Employee.findOne({ username });

      if (!user)
        throw new Error("Usuário não encontrado.");

      if (username && username != user.username)
        if (await bcjs.compare(password, user.password) === false)
          throw new Error("Credenciais inválidas.");

      user.password = undefined;
      
      const token = jwt.sign({
        id: user.id,
        name: user.name,
        username: user.username
      }, process.env.JWT_PASS, {
        expiresIn: 60*60*12 // 12h
      });

      return res.status(200).json({ user, token });
    } catch (e) {
      console.log(e);
      return res.status(400).json({ msg: "error", e: e.message });
    }
  }

  async destroySession (req: Request, res: Response): Promise<Response> {
    const { token } = req.params;

    try {
      if (!token)
        throw new Error("Token de autorização não especificado.");

      return res.status(200).json({ });
    } catch (e) {
      console.log(e);
      return res.status(400).json({ msg: "error", e: e.message });
    }
  }
})();