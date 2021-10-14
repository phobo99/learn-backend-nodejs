import express from 'express';
import morgan from 'morgan';
import bodyparser from "body-parser";
import path from 'path';
import connectDB from './server/database/connection';

require('dotenv').config();


const app:express.Application = express();

// dotenv.config
const PORT = process.env.PORT || 8080

//log requests
app.use(morgan('tiny'))

//connection mongodb
connectDB()
// parse request to body-parser
app.use(bodyparser.urlencoded({ extended: true }))

//set view engine
app.set("view engine", "ejs")
// app.set("views", path.resolve(__dirname, "views/"))
app.set("views", path.join(__dirname, "../views"));

app.use(express.static(__dirname + '/assets'));

//load assets
app.use('/css', express.static(path.resolve(__dirname, "assets/css")))
app.use('/img', express.static(path.resolve(__dirname, "assets/img")))
app.use('/js', express.static(path.resolve(__dirname, "assets/js")))

//load routers
app.use('/', require('./server/routes/router'))


app.listen(PORT, () => console.log(`server is runing on http://localhost:${PORT}`))