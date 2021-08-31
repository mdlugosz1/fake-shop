import Button from './Button';

const ProductCard = () => {
  return (
    <div>
      <div>
        <img alt="product" />
        <p>Some kind of product desciption</p>
      </div>
      <h4>Product Name</h4>
      <h5>Price</h5>
      <Button text="Add to cart" />
    </div>
  );
};

export default ProductCard;
