import { Tabs, Tab } from 'material-ui/Tabs';
import { Meal } from './meal';

const data = [{
  label: 'Breakfast',
  value: 'breakfast'
}, {
  label: 'Lunch',
  value: 'lunch'
}, {
  label: 'Dinner',
  value: 'dinner'
}];

export default class Menu extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      value: 'breakfast',
    };

    fetch('/api/menu')
      .then(response => response.json())
      .then(json => this.props.onMenuLoad(json.menu));
  }

  handleChange(value) {
    this.setState({
      value: value,
    });
  }

  render() {
    return (
      <Tabs
        value={this.state.value}
        onChange={this.handleChange.bind(this)}
      >
        {data.map((item, key) => (
            <Tab label={item.label} value={item.value} key={key} >
              <Meal item={this.props.menu} />
            </Tab>
        ))}
      </Tabs>
    );
  }
}
