const swaggerDocument = require("../swagger.json");
const swaggerUi = require("swagger-ui-express");
const express = require('express')
const router = express.Router(); 


router.use("/", swaggerUi.serve)
router.get("/", swaggerUi.setup(swaggerDocument))

module.exports = router