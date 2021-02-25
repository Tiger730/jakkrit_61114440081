import React, { useEffect, useState } from 'react';
// import axios from 'axios';
import './ProductDetail.css';
import { useSelector, useDispatch } from 'react-redux';
import { detailProduct } from '../actions/product.js';
// import products from '../data.js';
// import swal from 'sweetalert';

function ProductDetail(props) { // Route path='/product/:id'

  // const product = products.find(p => p._id === props.match.params.id);
  // const [product, setProduct] = useState({});
  const productDetail = useSelector(state => state.productDetail);
  const { product, loading, error } = productDetail;
  const dispatch = useDispatch();
  const [amoute, setamoute] = useState(0)

  useEffect(() => {
    //const fetchData = async (id) => {
    //  const {data} = await axios.get(`/api/product/${id}`);
    //  setProduct(data);
    //}
    //fetchData(props.match.params.id);
    dispatch(detailProduct(props.match.params.id));
    return () => { };
  }, []);

  // new-------------------------cart----------------------**************
  function cart() {
    var get = JSON.parse(localStorage.getItem("product"))
    if (get === null) {
      get = []
    }
    get.push(product)
    localStorage.setItem("product", JSON.stringify(get))
    // setTimeout(() => {
    //   swal({
    //     title: "เพิ่มสินค้าเเล้ว",
    //     text: "You clicked the button!",
    //     icon: "success",
    //   });
    // }, 1000);

  }



  return loading ? <div> กำลัง load อยู่นะครับ </div> :
    error ? <div className="error"> ERRRR {error} </div> : (
      <div>
        <div className="detail">
          <div className="detail-image">
            <img src={product.url} />
          </div>
          <div className="detail-info">
            <ul>
              <li><h4>{product.name}</h4></li>
              <li>{product.stars} จากทั้งหมด 100 reviews</li>
              <li>Price: <b>฿{product.price}</b></li>
              <li>Brand: <i>{product.brand}</i></li>
            </ul>
          </div>
          <div className="detail-action">
            <ul>
              <li>Price: {product.price}</li>
              <li>Status: กำลังจัดส่ง</li>
              <li>จำนวนที่ต้องการ: <select>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
              </select>
              </li>
              <li><button className="checkout primary" onClick={cart} >เพิ่มลงตะกร้า</button></li>
            </ul>
          </div>
        </div>
      </div>
    );
}

export default ProductDetail;
