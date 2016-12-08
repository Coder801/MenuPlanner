import { connect } from 'react-redux';
import actions from 'src/actions';
import { read } from 'shared/requests';
import Day from './day';

const { getDishesList } = actions;

const mapStateToProps = (state) => {
  return {
    dishes: state.dishes.list
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    loadDishes: () => {
      read('dishes')
        .then((response) => dispatch(getDishesList(response)));
    }
  };
};

const DishesContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Day);

export default DishesContainer;
