import { GridList, GridTile } from 'material-ui/GridList';

export class Recipes extends React.Component {
  componentWillMount () {
    fetch('/api/recipes')
      .then(response => response.json())
      .then(json => this.props.onRecipesLoad(json.recipes));
  }

  render () {
    return (
      <div>
        <GridList cellHeight={180} >
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
