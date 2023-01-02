const mongoose = require("mongoose");

const shopsDataSchema = mongoose.Schema(
  {
    ReportName: {
      type: String,
    },
    Channel: {
      type: String,
    },
    emRetailerArea: {
      type: String,
    },
    RetailerName: {
      type: String,
    },
    CustomerName: {
      type: String,
    },
    AddressBookNumber: {
      type: String,
    },
    CuAddressLine1: {
      type: String,
    },
    AddressLine2: {
      type: String,
    },
    CustomerCity: {
      type: String,
    },
    CustomerStateCode: { type: String },
    CustomerPostalCode: {
      type: String,
    },
    DC: { type: String },
    UPC: { type: String },
    BrandName: { type: String },
    ProductDescription: { type: String },
    ProductSize: {
      type: String,
    },
    UOM: {
      type: String,
    },
    ProductDivision: {
      type: String,
    },
    ProductSubDivision: {
      type: String,
    },
    ProductCategory: {
      type: String,
    },
    ProductSubCategory: {
      type: String,
    },
    ProductClass: {
      type: String,
    },
    Name: {
      type: String,
    },
  },
  { timestamps: true }
);

const ShopsData = mongoose.model("ShopsData", shopsDataSchema);
module.exports = ShopsData;
