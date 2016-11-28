import { WeekMenu } from './weekMenu/';
import styles from './menu.css';

const daysArr = ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday'];

const meals = [{
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

    fetch('/api/menu')
      .then(response => response.json())
      .then(json => this.props.onMenuLoad(json.menu));
  }

  render() {
    return (
      <table className={styles.container}>
        <thead>
          <tr></tr>
        </thead>
        {daysArr.map((day, key) => (
          <WeekMenu day={day} meals={meals} key={key} />
        ))}
      </table>
    );
  }
}
