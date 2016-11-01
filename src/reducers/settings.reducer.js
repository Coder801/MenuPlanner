import { defaultSettings } from '../config/settings.default';

const settingsReducer = (state = {}, action) => {
    switch (action.type) {
        case 'SET_DEFAULT_SETTINGS':
            return _.cloneDeep(defaultSettings);
        default:
            return state;
    }
};

export default settingsReducer;
