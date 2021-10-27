const express = require("express");
const categorysLogic = require("../business-logic-layer/category-logic");
const Category = require("../models/category");
const router = express.Router();

// GET http://localhost:3000/api/categorys
router.get("/", async (request, response) => {
  try {
    const categorys = await categorysLogic.getAllCategorysAsync();
    response.json(categorys);
  } catch (err) {
    console.log(err);
    response.status(500).send(err.message);
  }
});

// GET http://localhost:3000/api/categorys/7
router.get("/:_id", async (request, response) => {
  try {
    const _id = request.params._id;
    const category = await categorysLogic.getOneCategoryAsync(_id);

    if (!category) {
      response.sendStatus(404);
      return;
    }

    response.json(category);
  } catch (err) {
    response.status(500).send(err.message);
  }
});

// POST http://localhost:3000/api/categorys
router.post("/", async (request, response) => {
  const body = request.body;
  try {
    console.log(body);
    const category = new Category(body);
    const addedCategory = await categorysLogic.addCategoryAsync(category);
    response.status(201).json(addedCategory);
  } catch (err) {
    response.status(500).send(err.message);
  }
});

// PUT http://localhost:3000/api/categorys/7
router.put("/:_id", async (request, response) => {
  try {
    const _id = request.params._id;
    const category = new Category(request.body);
    category._id = _id;
    const updatedCategory = await categorysLogic.updateCategoryAsync(category);

    if (updatedCategory === null) {
      response.sendStatus(404);
      return;
    }

    response.json(updatedCategory);
  } catch (err) {
    response.status(500).send(err.message);
  }
});

// PATCH http://localhost:3000/api/categorys/7
router.patch("/:_id", async (request, response) => {
  try {
    const _id = request.params._id;
    const category = new Category(request.body);
    category._id = _id;
    const updatedCategory = await categorysLogic.updateCategoryAsync(category);

    if (updatedCategory === null) {
      response.sendStatus(404);
      return;
    }

    response.json(updatedCategory);
  } catch (err) {
    response.status(500).send(err.message);
  }
});

// DELETE http://localhost:3000/api/categorys/7
router.delete("/:_id", async (request, response) => {
  try {
    const _id = request.params._id;
    await categorysLogic.deleteCategoryAsync(_id);
    response.sendStatus(204);
  } catch (err) {
    response.status(500).send(err.message);
  }
});

// --------------------------------------------------
// Queries:
router.get("/by-price-range/:minPrice/:maxPrice", async (request, response) => {
  try {
    const minPrice = +request.params.minPrice;
    const maxPrice = +request.params.maxPrice;
    const categorys = await categorysLogic.getCategorysByPriceRangeAsync(
      minPrice,
      maxPrice
    );
    response.json(categorys);
  } catch (err) {
    response.status(500).send(err.message);
  }
});

module.exports = router;
