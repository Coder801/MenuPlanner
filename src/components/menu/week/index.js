import styles from './week.css';
import {Day} from '../day';

export const Week = ({menu}) => {

  return (
    <div className={styles.week}>
      {
        Object.keys(menu).map((day, key) => <Day key={key} day={day} menu={menu[day]}/>)
      }
    </div>
  );
};
