require("dotenv").config();
const express = require('express')
const mongoose = require("mongoose")
const bodyParser = require("body-parser")
const app = express()
const cors = require("cors")
const port = process.env.PORT

//routes for dif pages
const authRoutes = require("./routes/auth");
const userRoutes = require("./routes/user");


async function main() {
    await mongoose.connect(process.env.DATABASE)
    
    // use `await mongoose.connect('mongodb://user:password@localhost:27017/test');` if your database has auth enabled
  }

main().then(console.log("DB is connected")).catch((err)=>console.log(err))

app.use(bodyParser.json());
app.use(cors());

app.use("/api", authRoutes);
app.use("/api", userRoutes);


app.get('/', (req, res) => {
    res.send('Hello World!!!!')
  })
  
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })