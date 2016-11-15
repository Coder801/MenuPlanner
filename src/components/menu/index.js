import { connect } from 'react-redux';
import { getMenuList } from 'src/actions';
import { Menu } from './menu';

const mapStateToProps = (state) => {
  return {
    menu: state.menu
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onMenuLoad: (menu) => {
      dispatch(getMenuList(menu));
    }
  };
};

const MenuContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Menu);

export default MenuContainer;