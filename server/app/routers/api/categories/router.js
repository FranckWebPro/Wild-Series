const express = require("express");

const router = express.Router();

/* ************************************************************************* */
// Define Your API Routes Here
/* ************************************************************************* */

const {
  browseCategory,
  readCategory,
} = require("../../../controllers/categoryActions");

router.get("/", browseCategory);

router.get("/:id", readCategory);

/* ************************************************************************* */

module.exports = router;
