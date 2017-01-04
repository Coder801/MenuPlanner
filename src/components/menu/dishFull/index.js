import {Table, TableBody, TableRow, TableRowColumn} from 'material-ui/Table';

export const DishFull = ({dish}) => {
  const dateFormat = date => {
    let d = new Date(date);
    return `${d.getDate()}-${d.getMonth() + 1}-${d.getFullYear()}`;
  };

  return (
    <Table>
      <TableBody displayRowCheckbox={false}>
        <TableRow>
          <TableRowColumn>
            <p>{dish.name}</p>
          </TableRowColumn>
          <TableRowColumn>
            <p>{dateFormat(dish.date)}</p>
          </TableRowColumn>
        </TableRow>
      </TableBody>
    </Table>
  );
};
