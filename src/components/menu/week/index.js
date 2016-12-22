import styles from '../menu.css';
import {Day} from '../day';

export const Week = ({menu}) => {
  return (
    <div className={styles.week}>
      {
        menu.map((item, key) => {
          return <Day key={key} day={item}/>;
        }
        )
      }
    </div>
  );
};
