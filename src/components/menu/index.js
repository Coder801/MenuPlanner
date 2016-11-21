import { connect } from 'react-redux';
import { getMenu } from 'src/actions';
import Menu from './menu';

const mapStateToProps = (state) => {
  return {
    menu: state.menu
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onRecipesLoad: (menu) => {
      dispatch(getMenu(menu));
    }
  };
};

const MenuContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Menu);

export default MenuContainer;