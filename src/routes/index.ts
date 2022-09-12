import { Router, Request, Response } from "express";
import { CreateUser, Home } from "../controllers/homeController";

const Routes = Router()

Routes.get('/', Home)
Routes.post('/newaddeduser', CreateUser)


export default Routes