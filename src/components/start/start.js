import {deepOrange500} from 'material-ui/styles/colors';
import IconButton from 'material-ui/IconButton';
import IconKitchen from 'material-ui/svg-icons/places/kitchen';

import { Link } from 'react-router'

const style = {
  parent: {
    minHeight: 'calc(100vh - 120px)',
    justifyContent: 'center',
    display: 'flex'
  },
  button: {
    width: '100%',
    height: 'auto'
  },
  icon: {
    width: 300,
    height: 300,
    padding: 30
  }
};

export const Start = () => {
  return (
    <div style={style.parent}>
      <Link to="/menu">
        <IconButton
          iconStyle={style.icon}
          style={style.button}
        >
          <IconKitchen color={deepOrange500} />
        </IconButton>
      </Link>
    </div>
  );
};

