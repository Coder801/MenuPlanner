import { connect } from 'react-redux';
import { Cart } from './cart';
import actions from 'src/actions';
import { read, update } from 'shared/requests';

const { getCartList, toggleGroceryDone } = actions;

const mapStateToProps = (state) => {
  return {
    items: state.cart.list
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    loadCart: () => {
      read('cart')
        .then((response) => dispatch(getCartList(response)));
    },
    toggleDone: (item) => {
      update(`cart/${item.id}`, item);
      dispatch(toggleGroceryDone(item.id));
    }
  };
};

const CartContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Cart);

export default CartContainer;
