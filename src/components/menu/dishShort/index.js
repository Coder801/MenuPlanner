import styles from './dishShort.css';
import {TableRowColumn} from 'material-ui/Table';
import {List, ListItem} from 'material-ui/List';
import Subheader from 'material-ui/Subheader';

export const DishShort = ({dish, dishes}) => {
  return (
    <TableRowColumn colSpan="3" className={styles.column}>
      <List>
        <Subheader className={styles.subheader}>{dish}</Subheader>
        {
          dishes.map(item => <ListItem primaryText={item.name} />)
        }
      </List>
    </TableRowColumn>
  );
};
