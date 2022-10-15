import { Router, Request, Response } from "express";
import { CreateUser, Home } from "../controllers/homeController";
import * as userController from '../controllers/userController'
const Routes = Router()

Routes.get('/usuario/:id/increase', userController.IncreaseAge)
Routes.get('/usuario/:id/reduce', userController.DecreaseAge)
Routes.get('/usuario/:id/delete', userController.DeleteUser)

Routes.get('/', Home)
Routes.post('/newaddeduser', CreateUser)


export default Routes