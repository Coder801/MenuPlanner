import { GridList, GridTile } from 'material-ui/GridList';

const maxColumnWidth = 360;

export class Recipes extends React.Component {
  constructor (props) {
    super(props);
    this.state = { cols: this.columnNumber };
    this.onResize = this.onResize.bind(this);
  }

  componentWillMount () {
    fetch('/api/recipes')
      .then(response => response.json())
      .then(json => this.props.onRecipesLoad(json.recipes));
  }

  componentDidMount () {
    document.addEventListener('resize', this.onResize);
  }

  componentWillUnmount () {
    document.removeEventListener('resize', this.onResize);
  }

  onResize () {
    this.setState({ cols: this.columnNumber });
  }

  get columnNumber () {
    return Math.floor(window.innerWidth / maxColumnWidth);
  }

  render () {
    return (
      <div>
        <GridList cols={this.state.cols}>
          {this.props.recipes.map((recipe) => (
            <GridTile key={recipe.id} title={recipe.name} subtitle={<span>by <b>{recipe.author}</b></span>} >
              <img src={recipe.image} />
            </GridTile>
          ))}
        </GridList>
      </div>
    );
  }
}
