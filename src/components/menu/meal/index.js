import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';

const style = {
  container: {
    padding: 20,
  },
  headline: {
    fontSize: 24,
    paddingTop: 16,
    marginBottom: 12,
    fontWeight: 400,
    textTransnorm: 'none'
  },
  idRow: {
    width: 20
  },
  nameRow: {
    width: '40%'
  },
  grammsRow: {
    textAlign: 'center'
  },
  proteinsRow: {
    textAlign: 'center'
  },
  carbohydratesRow: {
    textAlign: 'center'
  },
  fatsRow: {
    textAlign: 'center'
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
            <TableHeaderColumn style={style.idRow}>&nbsp;</TableHeaderColumn>
            <TableHeaderColumn style={style.nameRow}>&nbsp;</TableHeaderColumn>
            <TableHeaderColumn style={style.grammsRow}>Gramm</TableHeaderColumn>
            <TableHeaderColumn style={style.proteinsRow}>Proteins</TableHeaderColumn>
            <TableHeaderColumn style={style.carbohydratesRow}>Сarbohydrates</TableHeaderColumn>
            <TableHeaderColumn style={style.fatsRow}>Fats</TableHeaderColumn>
          </TableRow>
        </TableHeader>
        <TableBody
            displayRowCheckbox={false}
          >
          {item.map((item, key) => (
              <TableRow key={key}>
                <TableRowColumn style={style.idRow}>{++key}</TableRowColumn>
                <TableRowColumn style={style.nameRow}>{item.name}</TableRowColumn>
                <TableRowColumn style={style.grammsRow}>{item.gramms}</TableRowColumn>
                <TableRowColumn style={style.proteinsRow}>{item.proteins}</TableRowColumn>
                <TableRowColumn style={style.carbohydratesRow}>{item.carbohydrates}</TableRowColumn>
                <TableRowColumn style={style.fatsRow}>{item.fats}</TableRowColumn>
              </TableRow>
            ))}
        </TableBody>
      </Table>
    </div>
);
