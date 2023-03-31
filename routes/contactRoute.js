const express = require('express')
const router = express.Router();
const { filldetails, seedetails } =require('../controllers/contactControllers')

router.post("/contact", filldetails)
router.get("/contact", seedetails)

module.exports =router