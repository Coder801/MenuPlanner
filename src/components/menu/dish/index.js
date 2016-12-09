export default class Dish extends React.Component {
  static propTypes = {
    name: React.PropTypes.string,
  };

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <p>{this.props.dish.name}</p>
      </div>
    );
  }
}
