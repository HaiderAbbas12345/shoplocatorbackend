const shopsDataModel = require("../models/shopsdata");

const getShopsData = async (req, res) => {
  shopsDataModel
    .find()
    .then((data) => {
      return res.status(200).json({ success: true, data });
    })
    .catch((err) => {
      return res.status(400).json({ success: false, err });
    });
};

const getShopsDataBySearch = async (req, res) => {
  console.log(parseInt(req.body.name));
  await shopsDataModel
    .find({
      $or: [
        { CustomerCity: { $regex: req.body.name.toUpperCase() } },
        { BrandName: req.body.name.toUpperCase() },
        { CustomerStateCode: req.body.name.toUpperCase() },
      ],
    })
    .then((data) => {
      return res.status(200).json({ success: true, data });
    })
    .catch((err) => {
      return res.status(400).json({ success: false, err });
    });
};

const getShop = async (req, res) => {
  console.log(req.body.name);
  await shopsDataModel
    .find({
      $or: [
        {
          CustomerCity: { $regex: new RegExp("^" + req.body.name + ".*", "i") },
        },
        { BrandName: { $regex: new RegExp("^" + req.body.name + ".*", "i") } },
        {
          CustomerStateCode: {
            $regex: new RegExp("^" + req.body.name + ".*", "i"),
          },
        },
        {
          $expr: {
            $regexMatch: {
              input: { $toString: { $toInt: "$AddressBookNumber" } },
              regex: req.body.name.toString(),
            },
          },
        },
      ],
    })
    .then((data) => {
      return res.status(200).json({ success: true, data });
    })
    .catch((err) => {
      return res.status(400).json({ success: false, err });
    });
};

// const updateUser = async (req, res) => {
//   if (
//     !req.body.name &&
//     !req.body.email &&
//     !req.body.password &&
//     !req.body.planEndDate &&
//     !req.body.planStartDate &&
//     !req.body.planType &&
//     !req.body.planStatus &&
//     !req.body.isPremium
//   ) {
//     return res.status(400).send({
//       success: false,
//       message: "Please enter email name and password",
//     });
//   }
//   userModel
//     .findByIdAndUpdate(
//       req.params.id,
//       {
//         $set: req.body,
//       },
//       { new: true }
//     )
//     .then((data) => {
//       if (!data) {
//         return res.status(404).send({
//           success: false,
//           message: "Product not found with id " + req.params.id,
//         });
//       }
//       res.send({
//         success: true,
//         data: data,
//       });
//     })
//     .catch((err) => {
//       if (err.kind === "ObjectId") {
//         return res.status(404).send({
//           success: false,
//           message: "Product not found with id " + req.params.id,
//         });
//       }
//       return res.status(500).send({
//         success: false,
//         message: "Sevice unavailable" + req.params.id,
//       });
//     });
// };

module.exports = {
  getShopsData,
  getShopsDataBySearch,
  getShop,
};
