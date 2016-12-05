import { defaultSettings } from '../config/settings.default';
import { handleAction } from 'redux-actions';

const settingsReducer = handleAction('SET_DEFAULT_SETTINGS',
  {
    next() { return _.cloneDeep(defaultSettings); },
    throw() { return { error: 'Some error occurs' }; }
  },
  {...defaultSettings}
);

export default settingsReducer;
