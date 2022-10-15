import { Router, Request, Response } from "express";
import { User, UserInstace } from "../model/User";

export const IncreaseAge = async (req: Request, res: Response) => {
    let ID: string = req.params.id
    let results = await User.findAll({ where: { ID } })

    if (results.length > 0) {
        let increseAge = results[0];
        increseAge.age++

        increseAge.save()
    }

    res.redirect('/')
}
export const DecreaseAge = async (req: Request, res: Response) => {
    let ID: string = req.params.id;
    let results = await User.findAll({ where: { ID } })

    if (results.length > 0) {
        let decreseAge = results[0];
        decreseAge.age--;

        decreseAge.save();
    }

    res.redirect('/')
}
export const DeleteUser = async (req: Request, res: Response) => {
    let ID: string = req.params.id;

    let data = await User.findAll({ where: { ID } })

    if (data.length > 0) {
        let user = data[0]
        user.destroy();
        await user.save()
    }

    res.redirect('/')
}