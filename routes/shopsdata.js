const router = require("express").Router();

const {
  getShopsData,
  getShopsDataBySearch,
  getShop,
} = require("../controller/shopsdata");

router.get("/getShopsData", getShopsData);
router.post("/getShopsDataBySearch", getShopsDataBySearch);
router.post("/getShop", getShop);

module.exports = router;
