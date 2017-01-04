import styles from '../menu.css';
import {Table, TableBody, TableRow, TableRowColumn} from 'material-ui/Table';

export const Day = () => {

  return (
    <Table className={styles.day}>
      <TableBody
        displayRowCheckbox={false}
      >
        <TableRow>
          <TableRowColumn colSpan="3">
            <h1>Title</h1>
          </TableRowColumn>
        </TableRow>
        <TableRow>
          <TableRowColumn>
            test
          </TableRowColumn>
        </TableRow>
      </TableBody>
    </Table>
  );
};
