import { Router } from "express";
import { createUser, deleteUserById, loginUser } from "./users/users.controller.js";

const router = Router();

router.post('/register', createUser);
router.delete('/delete/:id', deleteUserById)
router.post('/user/login', loginUser);

export default router