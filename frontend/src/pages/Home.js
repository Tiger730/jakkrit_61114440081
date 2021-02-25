import React, { useEffect } from 'react';
import Product from '../components/Product.js';
import { useSelector, useDispatch } from 'react-redux';
import { listProducts } from '../actions/product.js';
import Upload from '../components/upload-files.component';
// import axios from 'axios';

function Home() {
  // const [products, setProducts] = useState([]); // hook 
  const productList = useSelector(state => state.productList);
  const { products, loading, error } = productList;
  const dispatch = useDispatch();

  // componentDidMount() {} 
  useEffect(() => {
    //const fetchData = async () => {
    //  const {data} = await axios.get('/api/products');
    //  setProducts(data);
    //};
    //fetchData();
    dispatch(listProducts());

    return () => {};
  }, []);
  console.log(products)

  return loading? <div> กำลัง load อยู่นะครับ </div> :
          error? <div className="error"> ERRRR {error} </div> : (
    <div>
      <h1> ค้นหาจากรูปภาพ </h1>
      <div>
        <Upload />
      </div>
      <ul className="products">
        {products.map( (p) => 
          <li>
            <Product product={p} />
          </li>
        )}
      </ul>
    </div>
  );
}

export default Home;
