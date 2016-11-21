import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';

const style = {
  headline: {
    fontSize: 24,
    paddingTop: 16,
    marginBottom: 12,
    fontWeight: 400,
    textTransnorm: 'none'
  },
  firstRow: {
    width: '40%'
  },
  container: {
    padding: 20,
  }
};

export const Meal = ({ item }) => (
    <div style={style.container}>
      <h2 style={style.headline}>{item.label}</h2>
      <Table>
        <TableHeader
            displaySelectAll={false}
            adjustForCheckbox={false}
            enableSelectAll={false}
          >
          <TableRow>
            <TableHeaderColumn style={style.firstRow}>&nbsp;</TableHeaderColumn>
            <TableHeaderColumn>Gramm</TableHeaderColumn>
            <TableHeaderColumn>Proteins</TableHeaderColumn>
            <TableHeaderColumn>Сarbohydrates</TableHeaderColumn>
            <TableHeaderColumn>Fats</TableHeaderColumn>
          </TableRow>
        </TableHeader>
        <TableBody
            displayRowCheckbox={false}
          >
          <TableRow>
            <TableRowColumn style={style.firstRow}>1</TableRowColumn>
            <TableRowColumn>John Smith</TableRowColumn>
            <TableRowColumn>Employed</TableRowColumn>
            <TableRowColumn>Employed</TableRowColumn>
            <TableRowColumn>Employed</TableRowColumn>
          </TableRow>
        </TableBody>
      </Table>
    </div>
);
