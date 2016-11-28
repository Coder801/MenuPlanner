import { browserHistory } from 'react-router';
import { BottomNavigation, BottomNavigationItem } from 'material-ui/BottomNavigation';
import Paper from 'material-ui/Paper';

import { navItems } from './navigation.config';

const style = {
  navigation: {
    position: 'fixed',
    bottom: 0,
    width: '100%'
  }
};

export const Navigation = ({ location }) => {
  const currentRoute = _.findIndex(navItems, [ 'route', location.pathname ]);
  return (
    <Paper zDepth={3} style={style.navigation}>
        <BottomNavigation selectedIndex={currentRoute} >
          {
            navItems.map((navItem, index) =>
              <BottomNavigationItem
                key={index}
                label={navItem.label}
                icon={navItem.icon}
                onTouchTap={() => browserHistory.push(navItem.route)}
              />
            )
          }
        </BottomNavigation>
      </Paper>
  );
};
