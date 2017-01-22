import { Radar, RadarChart, PolarGrid,
  PolarAngleAxis, PolarRadiusAxis } from 'recharts';
import Paper from 'material-ui/Paper';

export class Graph extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      data: [
        { element: 'Proteins', percentage: 30 },
        { element: 'Carbs', percentage: 50 },
        { element: 'Fats', percentage: 20 },
      ]
    };
  }

  render () {
    return (
      <Paper>
        <RadarChart cx={200} cy={250} outerRadius={100} width={600} height={500} data={this.state.data}>
          <Radar name="Macro Elements" dataKey="percentage" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6}/>
          <PolarGrid />
          <PolarAngleAxis dataKey="element" />
          <PolarRadiusAxis angle={30} domain={[0, 100]}/>
        </RadarChart>
      </Paper>
    );
  }
}
