import express from 'express'
const route = express.Router()

import services from '../services/render';
import controller from '../controller/controller';

/**
 *  @description Root Route
 *  @method GET /
 */
route.get('/', services.homeRoutes);

/**
 *  @description add users
 *  @method GET /add-user
 */
route.get('/add-user', services.add_user)

/**
 *  @description for update user
 *  @method GET /update-user
 */
route.get('/update-user', services.update_user)


// API
route.post('/api/users', controller.createCtrl);
route.get('/api/users', controller.findCtrl);
route.put('/api/users/:id', controller.updateCtrl);
route.delete('/api/users/:id', controller.deleteCtrl);

module.exports = route;