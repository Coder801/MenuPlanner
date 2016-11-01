import { connect } from 'react-redux';
import { setDefaultSettings } from 'src/actions';
import { Header } from './header';

const mapStateToProps = (state) => {
    return {
        user: state.user
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onSettingsClick: () => {
            dispatch(setDefaultSettings())
        }
    };
};

const HeaderContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Header);

export default HeaderContainer;
