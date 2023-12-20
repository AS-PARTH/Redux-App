import { useDispatch, useSelector } from 'react-redux';
import { uiAction } from '../../store/ui-slice';
import classes from './CartButton.module.css';

const CartButton = (props) => {

  const dispatch = useDispatch();
  const totalQuantity = useSelector(state => state.cart.totalQuantity)

  const toggleCartHandler = () => {
    dispatch(uiAction.toggle())
  }
  return (
    <button className={classes.button} onClick={toggleCartHandler}>
      <span>My Cart</span>
      <span className={classes.badge}>{totalQuantity }</span>
    </button>
  );
};

export default CartButton;
