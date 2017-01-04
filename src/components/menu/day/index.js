import styles from './day.css';
import {DishShort} from '../dishShort/';
import {Table, TableBody, TableRow, TableRowColumn} from 'material-ui/Table';

export const Day = ({menu, day}) => {
  return (
    <Table className={styles.day}>
      <TableBody
        displayRowCheckbox={false}
      >
        <TableRow>
          <TableRowColumn colSpan="9">
            <h1>{day}</h1>
          </TableRowColumn>
        </TableRow>
        {
          Object.keys(menu).map((dish, key) => (
            <DishShort dish={dish} dishes={menu[dish]} key={key}/>
          ))
        }
      </TableBody>
    </Table>
  );
};
