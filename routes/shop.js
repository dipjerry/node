const express = require('express');
const router = express.Router();
const shopController = require('../controllers/shop')
router.get('/', shopController.getIndex);
router.get('/shop', shopController.getProduct);
router.post('/cart', shopController.postCart);
router.get('/cart', shopController.getCart);
router.get('/order', shopController.getCheckoutDetails);
router.post('/checkout', shopController.postCheckout);
router.get('/product/:productId', shopController.getProductDetails);
router.post('/cart-delete-item', shopController.cartDeleteItem);

module.exports = router;