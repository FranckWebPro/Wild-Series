const express = require("express");

const router = express.Router();

const { sayWelcome } = require("../../controllers/sayActions");
const { browse } = require("../../controllers/programActions");
const { browseCategory } = require("../../controllers/categoryActions");

router.get("/", sayWelcome);
router.get("/programs", browse);
router.get("/categories", browseCategory);

/* ************************************************************************* */
// Import And Use Routers Here
/* ************************************************************************* */
const categoriesRouter = require("./categories/router");
const itemsRouter = require("./items/router");
const programsRouter = require("./programs/router");

router.use("/items", itemsRouter);
router.use("/programs", programsRouter);
router.use("/categories", categoriesRouter);

/* ************************************************************************* */

module.exports = router;
