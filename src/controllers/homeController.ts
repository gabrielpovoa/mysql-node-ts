import { Router, Request, Response } from "express";
import { User } from "../model/User";

export const Home = async (req: Request, res: Response) => {
    const users = await User.findAll()
    res.render('pages/home', {
        users,
    })
}

export const CreateUser = async (req: Request, res: Response) => {
    let username: string = req.body.name
    let age: number = req.body.age

    const NewUser = User.build({
        name: username,
        age: age
    })

    await NewUser.save()

    res.redirect('/')
}