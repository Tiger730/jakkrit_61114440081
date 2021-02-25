import express from 'express';
import products from './data.js';

const app = express();

// เอา list ทั้งหมดของ products
app.get('/api/products', (_, res) => {
  res.send(products);
})

// เอา list ทั้งหมดของ products
app.get('/api/product/:id', (req, res) => {
  const product = products.find(x => x._id === req.params.id);
  res.send(product);
})

// เริ่มเปิด server ที่ port 5000
app.listen(5001, () => {
  console.log('starting server แล้วเด้อ');
  console.log('ทดสอบ');
});
