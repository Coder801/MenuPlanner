import DayMenu from '../dayMenu/';

export const WeekMenu = ({day, meals}) => {
  return (
    <div>
        <h2>{day}</h2>
        {meals.map((meal, key) => (
          <DayMenu label={meal.label} types='short' key={key} />
        ))}
    </div>
  );
};
