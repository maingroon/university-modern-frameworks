const express = require("express");
const router = express.Router();
const Product = require("../models/Product");

router.post("/products", async (req, res) => {
  try {
    const product = new Product(req.body);
    await product.save();
    res.status(201).send(product);
  } catch (error) {
    res.status(400).send(error);
  }
});

router.get("/products", async (req, res) => {
  try {
    const products = await Product.find();
    res.status(200).send(products);
  } catch (error) {
    res.status(500).send(error);
  }
});

router.put("/products", async (req, res) => {
  try {
    const product = await Product.findByIdAndUpdate(req.body.id, req.body, {
      new: true,
    });
    if (!product) return res.status(404).send();
    res.status(200).send(product);
  } catch (error) {
    res.status(400).send(error);
  }
});

router.delete("/products", async (req, res) => {
  try {
    const product = await Product.findByIdAndDelete(req.body.id);
    if (!product) return res.status(404).send();
    res.status(200).send(product);
  } catch (error) {
    res.status(500).send(error);
  }
});

module.exports = router;
