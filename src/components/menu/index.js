import { connect } from 'react-redux';
import { setDefaultSettings } from 'src/actions';
import { Menu } from './menu';

const mapStateToProps = (state) => {
  return {
    user: state.user //eslint-disable-line
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onMenuClick: (menu) => { //eslint-disable-line
      dispatch(setDefaultSettings());
    }
  };
};

const MenuContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Menu);

export default MenuContainer;
