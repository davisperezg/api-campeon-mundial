import { Response, RequestHandler } from "express";
import Roles from "../models/Roles";
import Sedes from "../models/Sedes";
import Users from "../models/Users";
import PasswordUtils from "../utils/PasswordBcrypt";

export const ForbiddenStudent: RequestHandler = async (req, res, next) => {
  const { user }: any = req;
  const { role }: any = user;
  if (role === "Estudiante")
    return res.status(403).json({ message: "No tiene permiso!" });
  else next();
};

export const ForbiddenAdmin: RequestHandler = async (req, res, next) => {
  const { user }: any = req;
  const { role }: any = user;
  if (role === "Admin")
    return res.status(403).json({ message: "No tiene permiso!" });
  else next();
};

export const ForbiddenProfesor: RequestHandler = async (req, res, next) => {
  const { user }: any = req;
  const { role }: any = user;
  if (role === "Profesor")
    return res.status(403).json({ message: "No tiene permiso!" });
  else next();
};

export const ForbiddenSA2: RequestHandler = async (req, res, next) => {
  const { user }: any = req;
  const { role, nivel }: any = user;
  if (role === "Super Admin" && nivel === 2)
    return res.status(403).json({ message: "No tiene permiso!" });
  else next();
};
