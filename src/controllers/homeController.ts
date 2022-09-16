import { Router, Request, Response } from "express";
import { User } from "../model/User";

export const Home = async (req: Request, res: Response) => {
    const users = await User.findAll()
    res.render('pages/home', {
        users,
    })
}

export const CreateUser = async (req: Request, res: Response) => {
    let { username, age } = req.body

    try {
        const NewUser = User.build({
            name: username,
            age: age
        })

        await NewUser.save()
    } catch (e) {
        console.log(e)
    }



    res.redirect('/')
}