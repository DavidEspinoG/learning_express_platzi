const express = require('express');
const router = express.Router();
const validatorHandler = require('./../middlewares/validatorHandler');
const { 
  createProductSchema, 
  updateProductSchema, 
  getProductSchema,
  queryProductSchema
} = require('./../schemas/productSchema');
const ProductsService = require('../services/productsService');
const service = new ProductsService();

router.get('/', 
  validatorHandler(queryProductSchema, 'query'), 
  async (req, res, next) => {
    try {
      const products = await service.find(req.query);
      res.json(products)
    } catch (error) {
      next(error);
    }
});

router.get('/:id', 
  validatorHandler(getProductSchema, 'params'), 
  async (req, res, next) => {
  try {
    const { id } = req.params;
    const product = await service.findOne(id);
    res.json(product);
  } catch (error) {
    next(error)
  }
  
});

router.post('/',
  validatorHandler(createProductSchema, 'body'),
  async (req, res) => {
  const body = req.body;
  const newProduct = await service.create(body)
  res.status(201).json(newProduct);
});

router.patch('/:id', async (req, res, next) => {
  try {
    const body = req.body;
    const { id } = req.params;
    const product = await service.update(id, body);
    res.json(product);
  }
  catch (error) {
    next(error);
  }
});

router.delete('/:id', async (req, res) => {
  const { id } = req.params;
  const answer = await service.delete(id);
  res.json(answer);
});

module.exports = router;