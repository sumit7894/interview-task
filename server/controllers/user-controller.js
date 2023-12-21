const axios = require("axios")


const getInfo = async(req,res) =>{
    try {
        const response = await axios.get("https://jsonplaceholder.typicode.com/users");
        console.log("here is userinfo",response.data);
        return res.json(response.data);
    } catch (error) {
        console.log(error);
    }
}

module.exports = {
    getInfo
}