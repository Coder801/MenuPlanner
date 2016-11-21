import { connect } from 'react-redux';
import { setDefaultSettings } from 'src/actions';
import { Navigation } from './navigation';


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

const NavigationContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Navigation);

export default NavigationContainer;
