import axios from 'axios';
import express from "express";

const homeRoutes = (req: express.Request, res: express.Response) => {
    // Make a get request to /api/users
    axios.get('http://localhost:3000/api/users')
        .then(function (response) {
            res.render('index', { users: response.data });
        })
        .catch(err => {
            res.send(err);
        })


}

const add_user = (req: express.Request, res: express.Response) => {
    res.render('add_user');
}

const update_user = (req: express.Request, res: express.Response) => {
    axios.get('http://localhost:3000/api/users', { params: { id: req.query.id } })
        .then((userdata) => {
            res.render("update_user", { user: userdata.data })
        })
        .catch(err => {
            res.send(err);
        })
}

export default { homeRoutes, add_user, update_user }