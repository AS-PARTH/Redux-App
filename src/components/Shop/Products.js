import ProductItem from './ProductItem';
import classes from './Products.module.css';
const DUMMY_PRODUCT = [
  {
    id: 'p1',
    price: 6,
    title: 'the boy who lived again',
    description: 'my first book ever'
  },
  {
    id: 'p2',
    price: 4,
    title: 'the girl who lived again',
    description: 'my second book ever'
  }];

const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {DUMMY_PRODUCT.map((product) => (
          <ProductItem
            key={product.id}
            id={product.id}
            title={product.title}
            price={product.price}
            description={product.description}
          />
        ))}
      </ul>
    </section>
  );
};

export default Products;
