import Day from '../day/';
import styles from '../menu.css';

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

export const Week = ({ days }) => {
  return (
    <div className={styles.week}>
      {days.map((day, key) => (
        <Day meals={meals} title={day} key={key} />
      ))}
    </div>
  );
};
