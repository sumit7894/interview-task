const express = require('express');
const axios = require('axios');
const dotenv = require('dotenv');
const cors = require('cors');
dotenv.config();
const router = express.Router();
const app = express();
app.use(cors());
app.use(express.json());

app.use('/',router);


const showData = async (req,res)=>{
    const  response =await  axios.get("https://jsonplaceholder.typicode.com/users");
    console.log("here is data",response);
    return res.json(response.data);
}

router.route('/user').get(showData);


const PORT = process.env.PORT;
app.listen(PORT,()=>{
console.log(`server start at ${PORT}`);
})