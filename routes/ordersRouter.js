const express = require('express');
const validationHandler = require('../middlewares/validatorHandler');
const OrderService = require('../services/orderService');
const {
  createOrderSchema, 
  getOrderSchema,
} = require('../schemas/orderSchema');
const router = express.Router();
const service = new OrderService();

router.get('/:id', 
  validationHandler(getOrderSchema, 'params'),
  async(req, res, next) => {
    try {
      const { id } = req.params;
      const product = await service.findOne(id);
      res.json(product);
    } catch (error){
      next(error);
    }
});

router.post('/',
  validationHandler(createOrderSchema, 'body'),
  async (req, res, next) => {
    try {
      const body = req.body;
      const newProduct = await service.create(body);
      res.status(201).json(newProduct);
    } catch (error) {
      next(error);
    }
  }
);

module.exports = router;