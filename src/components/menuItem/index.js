import { connect } from 'react-redux';
import { getMenuItem } from 'src/actions';
import { MenuItem } from './menuItem';

const mapStateToProps = (state) => {
  return {
    menuItem: state.menuItem
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onRecipesLoad: (menuItem) => {
      dispatch(getMenuItem(menuItem));
    }
  };
};

const MenuItemContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(MenuItem);

export default MenuItemContainer;