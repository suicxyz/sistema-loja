import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

export default async function (req: Request | any, res: Response, next: NextFunction): Promise<any> {
  const authHeader = req.headers.authorization;

  try {
    if (!authHeader)
      throw new Error("A token is required for authentication.");

    const parts = authHeader.split(" ");

    if (parts.length != 2)
      throw new Error("Token error");

    const [ scheme, token ] = parts;

    if (!/^Bearer$/i.test(scheme))
      throw new Error("Token malformatted");

    const auth = jwt.verify(token, process.env.JWT_PASS);

    if (!auth)
      throw new Error("Token invalid");

    // @ts-ignore
    req.userId = auth.id;

    return next();
  } catch (e) {
    console.log(e);
    return res.status(400).json({ msg: "error", e: e.message });
  }
}