import { Router } from "express";
import { UserController } from "../controllers/userController";

export const userApp: Router = Router();

// Express supports methods that correspond to all HTTP request methods: get, post, and so on.
userApp.post('/dummyLogin', UserController.dummyLogin);
userApp.post('/signup', UserController.signup);
