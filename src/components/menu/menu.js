/*import {Table, TableBody, TableFooter, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';*/
import { Tabs, Tab } from 'material-ui/Tabs';

const style = {
  headline: {
    fontSize: 24,
    paddingTop: 16,
    marginBottom: 12,
    fontWeight: 400,
  },
  container: {
    padding: 20,
  }
};

export default class Menu extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      value: 'breakfast',
    };
  }

  handleChange = (value) => {
    this.setState({
      value: value,
    });
  };

  render() {
    return (
      <Tabs
        value={this.state.value}
        onChange={this.handleChange}
      >
        <Tab label="Breakfast" value="breakfast" >
          <div style={style.container}>
            <h2 style={style.headline}>Breakfast</h2>
            <p>
              Tabs are also controllable if you want to programmatically pass them their values.
              This allows for more functionality in Tabs such as not
              having any Tab selected or assigning them different values.
            </p>
          </div>
        </Tab>
        <Tab label="Lunch" value="lunch">
          <div style={style.container}>
            <h2 style={style.headline}>Lunch</h2>
            <p>
              Tabs are also controllable if you want to programmatically pass them their values.
              This allows for more functionality in Tabs such as not
              having any Tab selected or assigning them different values.
            </p>
          </div>
        </Tab>
        <Tab label="Dinner" value="dinner">
          <div style={style.container}>
            <h2 style={style.headline}>Dinner</h2>
            <p>
              Tabs are also controllable if you want to programmatically pass them their values.
              This allows for more functionality in Tabs such as not
              having any Tab selected or assigning them different values.
            </p>
          </div>
        </Tab>
      </Tabs>
    );
  }
}
