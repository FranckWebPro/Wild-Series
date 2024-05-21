const express = require("express");

const router = express.Router();

const { sayWelcome } = require("../../controllers/sayActions");
const { browse } = require("../../controllers/programActions");

router.get("/", sayWelcome);
router.get("/programs", browse);
  
/* ************************************************************************* */
// Import And Use Routers Here
/* ************************************************************************* */

const itemsRouter = require("./items/router");
const programsRouter = require("./programs/router");

router.use("/items", itemsRouter);
router.use("/programs", programsRouter);

/* ************************************************************************* */

module.exports = router;
