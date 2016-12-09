import { Card, CardActions, CardMedia, CardTitle, CardText } from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

export class RecipeDetails extends React.Component {
  componentWillMount () {
    this.props.loadRecipe(this.props.params.recipeId);
  }

  componentWillUnmount () {
    this.props.onUnmount();
  }

  addToMenu () {
    this.props.addToMenu(this.props.recipe);
  }

  addToFavorites () {
    this.props.addToFavorites(this.props.recipe);
  }

  render () {
    const recipe = this.props.recipe;
    if (recipe === null) {
      return <div>Loading...</div>;
    }
    return (
      <Card>
        <CardMedia
          overlay={<CardTitle title={recipe.name} subtitle={recipe.ingredients} />}
        >
          <img src={recipe.image} />
        </CardMedia>
        <CardText>{recipe.method}</CardText>
        <CardActions>
          <FlatButton label="Add to menu" onTouchTap={::this.addToMenu} />
          <FlatButton label="Add to favorites" onTouchTap={::this.addToFavorites} />
        </CardActions>
      </Card>
    );
  }
}
