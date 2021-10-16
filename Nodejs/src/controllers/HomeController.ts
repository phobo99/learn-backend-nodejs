import CRUDService from '../services/CRUDService'
import express from "express";


let postCRUD = async (req: express.Request, res: express.Response) => {
    let message = await CRUDService.createNewUser(req.body);
    console.log(message)
    return res.send("post crud on server");
}


let deleteCRUD = async (req: express.Request, res: express.Response) => {
    let id = req.query.id;
    if (id) {
        await CRUDService.deleteUserById(id);
        return res.send('Delete the user succeed!')
    } else {
        return res.send('Cant not find user')
    }

}
export default {
    postCRUD,
    deleteCRUD
}