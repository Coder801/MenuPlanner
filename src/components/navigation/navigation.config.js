import IconList from 'material-ui/svg-icons/action/list';
import IconRecipes from 'material-ui/svg-icons/action/receipt';
import IconShoppingBasket from 'material-ui/svg-icons/action/shopping-basket';
import IconShowChart from 'material-ui/svg-icons/editor/show-chart';

export const navItems = [
  {
    label: 'Menu',
    icon: <IconList />,
    route: '/'
  },
  {
    label: 'Recipes',
    icon: <IconRecipes />,
    route: '/recipes'
  },
  {
    label: 'Cart',
    icon: <IconShoppingBasket />,
    route: '/cart'
  },
  {
    label: 'Graph',
    icon: <IconShowChart />,
    route: '/graph'
  }
];
