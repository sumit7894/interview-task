const express = require('express');

const router = express.Router();

const showHealth = (req,res)=>{
    return res.json({
        status:"working"
    })
}

router.get('/health').get(showHealth);

export default showHealth;