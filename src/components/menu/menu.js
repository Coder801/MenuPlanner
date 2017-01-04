import { Week } from './week/';

export class Menu extends React.Component {

  constructor(props) {
    super(props);
    this.props.loadMenus();
  }

  render() {
    return (
      <Week menu={this.props.menus} />
    );
  }
}
