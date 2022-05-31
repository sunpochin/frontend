import { useParams } from 'react-router-dom';

const ProductDetail = () => {
  const params = useParams();
  console.log(params.productId);
  return (
    <section>
      <h1>Product Detail</h1>
      <h2>sss</h2>
      <p>{params.productId}</p>
    </section>
  );
}

export default ProductDetail;
