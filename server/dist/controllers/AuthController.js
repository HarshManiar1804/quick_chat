import { response } from "express";
import prisma from "../config/db.config.js";
import jwt from "jsonwebtoken";
class AuthController {
    static async login(req, res) {
        try {
            const body = req.body;
            let findUser = await prisma.user.findUnique({
                where: {
                    email: body.email,
                },
            });
            if (!findUser) {
                findUser = await prisma.user.create({
                    data: body,
                });
            }
            let jwtPayload = {
                name: body.name,
                email: body.email,
                id: findUser.id,
            };
            const token = jwt.sign(jwtPayload, process.env.JWT_SECRET, {
                expiresIn: "365d",
            });
            response.json({
                message: "Login successful !!",
                user: {
                    ...findUser,
                    token: `Bearer ${token}`,
                },
            });
        }
        catch (error) {
            response.status(500).json({
                message: "Internal server error , please try again later",
            });
        }
    }
}
export default AuthController;
