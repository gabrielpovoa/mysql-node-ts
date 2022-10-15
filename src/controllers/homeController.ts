import { Router, Request, Response } from "express";
import { User } from "../model/User";
import { Op } from "sequelize";
export const Home = async (req: Request, res: Response) => {

    // await User.destroy({
    //     where: {
    //         age: {
    //             [Op.lte]: 18
    //         }
    //     }
    // })


    let results = await User.findAll({ where: { id: 7 } })

    if (results.length > 0) {
        let usuario = results[0];
        await usuario.destroy()
        await usuario.save()
    }
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
            age: parseInt(age)
        })

        await NewUser.save()
    } catch (e) {
        console.log(e)
    }



    res.redirect('/')
}