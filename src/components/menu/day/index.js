import Dish from '../dish';
import styles from '../menu.css';
import { Table, TableBody, TableRow, TableRowColumn } from 'material-ui/Table';

const dishes = [{'name': 'Ergonomic Steel Sausages', 'gramms': 48495, 'proteins': 83509, 'carbohydrates': 85608, 'fats': 29247 }, {'name':'Sleek Frozen Bacon','gramms':10489,'proteins':78238,'carbohydrates':60140,'fats':87162}, {'name':'Refined Granite Table','gramms':25320,'proteins':9389,'carbohydrates':70985,'fats':76871}];

export default class Day extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      menu: {}
    };
  }

  componentDidMount() {
    fetch('/api/menu')
      .then(response => response.json())
      .then(json => {
        this.state({ menu: json.menu });
      });
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
                {dishes.map((dish, key) => (
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
