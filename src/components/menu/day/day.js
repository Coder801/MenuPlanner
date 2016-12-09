import Dish from '../dish';
import styles from '../menu.css';
import { Table, TableBody, TableRow, TableRowColumn } from 'material-ui/Table';

export default class Day extends React.Component {

  constructor(props) {
    super(props);
    this.props.loadDishes();
  }

  render() {
    return (
      <Table className={styles.day}>
        <TableBody
              displayRowCheckbox={false}
         >
          <TableRow>
            <TableRowColumn colSpan="3">
              <h1>{this.props.title}</h1>
            </TableRowColumn>
          </TableRow>
          <TableRow>
            {this.props.meals.map((meal, key) => (
              <TableRowColumn key={key}>
                <h2>{meal.label}</h2>
                {this.props.dishes.map((dish, key) => (
                  <Dish dish={dish} type="short" key={key} />
                ))}
              </TableRowColumn>
            ))}
          </TableRow>
        </TableBody>
      </Table>
    );
  }
}
