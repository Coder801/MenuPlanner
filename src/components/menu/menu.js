import { Week } from './week/';

const days = ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday'];

export default class Menu extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Week days={days} />
    );
  }
}
