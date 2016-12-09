import { connect } from 'react-redux';
import actions from 'src/actions';
import { Header } from './header';

const { setDefaultSettings } = actions;

const mapStateToProps = (state) => {
  return {
    user: state.user
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onSettingsClick: () => {
      dispatch(setDefaultSettings());
    }
  };
};

const HeaderContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Header);

export default HeaderContainer;
