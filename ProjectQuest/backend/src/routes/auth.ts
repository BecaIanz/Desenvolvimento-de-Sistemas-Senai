import express from 'express';
// import AuthController from '../controllers/AuthController';

const route = express.Router();

route.post('/register');
route.post('/login');
// route.post('/login', AuthController.login);

export default route;