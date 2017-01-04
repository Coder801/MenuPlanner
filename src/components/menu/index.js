import {connect} from 'react-redux';
import {Menu} from './menu';
import actions from 'src/actions';
import {read} from 'shared/requests';

const {getMenusList} = actions;

const mapStateToProps = (state) => {
  return {
    menus: state.menus.list
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    loadMenus: () => {
      read('menus')
        .then(response => dispatch(getMenusList(response)));
    }
  };
};

const MenuContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Menu);

export default MenuContainer;
