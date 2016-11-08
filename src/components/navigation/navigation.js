import {BottomNavigation, BottomNavigationItem} from 'material-ui/BottomNavigation';
import Paper from 'material-ui/Paper';

import IconList from 'material-ui/svg-icons/action/list';
import IconRecipes from 'material-ui/svg-icons/action/receipt';
import IconShoppingBasket from 'material-ui/svg-icons/action/shopping-basket';
import IconShowChart from 'material-ui/svg-icons/editor/show-chart';

const iconList = <IconList />;
const iconRecipes = <IconRecipes />;
const iconShoppingBasket = <IconShoppingBasket />;
const iconShowChart = <IconShowChart />;

export const Navigation = () => { 
  return (
    <Paper zDepth={3}>
        <BottomNavigation>
          <BottomNavigationItem
            label="Menu"
            icon={iconList}
            onTouchTap={() => this.select(0)}
          />
          <BottomNavigationItem
            label="Recipes"
            icon={iconRecipes}
            onTouchTap={() => this.select(1)}
          />
          <BottomNavigationItem
            label="Cart"
            icon={iconShoppingBasket}
            onTouchTap={() => this.select(3)}
          />
          <BottomNavigationItem
            label="Graph"
            icon={iconShowChart}
            onTouchTap={() => this.select(4)}
          />
        </BottomNavigation>
      </Paper>
  );
};