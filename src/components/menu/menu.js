import { Tabs, Tab } from 'material-ui/Tabs';
import { Meal } from './meal';

import IconAdd from 'material-ui/svg-icons/content/add';

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
              <Meal item={item} />
            </Tab>
        ))}
        <Tab icon={<IconAdd />} />
      </Tabs>
    );
  }
}
