import { connect } from 'react-redux';
import { Graph } from './graph';
import actions from 'src/actions';
import { read } from 'shared/requests';

const { getCartList } = actions;

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
    }
  };
};

const GraphContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Graph);

export default GraphContainer;
