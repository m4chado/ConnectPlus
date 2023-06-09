import { Request, Response } from "express";
import { listCustomersOfUserService } from "../../services/users/listCustomersOfUser.service";

export const listCustomersofUserController = async (req: Request, res: Response) => {
	const customers = await listCustomersOfUserService(req.user.id);
	return res.status(200).json(customers);
};
