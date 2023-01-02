const router = require("express").Router();

const {
  getShopsData,
  getShopsDataBySearch,
} = require("../controller/shopsdata");

router.get("/getShopsData", getShopsData);
router.post("/getShopsDataBySearch", getShopsDataBySearch);

module.exports = router;
