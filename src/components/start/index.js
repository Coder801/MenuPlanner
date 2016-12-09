import { connect } from 'react-redux';
import { setDefaultSettings } from 'src/actions';
import { Start } from './start';

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

const StartContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Start);

export default StartContainer;
