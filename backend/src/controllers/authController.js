import prisma from "../libs/prisma.js"
import { hasher } from "../utils/hasher.js"

export const login = async (req, res) => {
    const { email, password } = req.body

}

export const logout = async (req, res) => {

}

/**
 * @param {import('express').Request} req
 * @param {import('express').Response} res
 */
export const register = async (req, res) => {
    try {
        const { name, email, mobile, role, password } = req.body;

        if (!name || !email || !mobile || !role || !password) {
            return res.status(400).json({ message: 'All fields are required.' });
        }

        const encryptedPassword = await hasher.hash(password);

        const user = await prisma.user.create({
            data: {
                name,
                email,
                mobile,
                role,
                password: encryptedPassword
            }
        });

        return res.status(201).json({
            message: 'User registered successfully',
            user: {
                id: user.id,
                name: user.name,
                email: user.email.toLowerCase().trim(),
                mobile: user.mobile.toLowerCase().trim(),
                role: user.role
            }
        });

    } catch (err) {
        console.error(err);
        return res.status(500).json({ message: 'Internal Server Error' });
    }
};

export const refreshToken = async (req, res) => {

}