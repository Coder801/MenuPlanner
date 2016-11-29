export class RecipeDetails extends React.Component {
  componentWillMount () {
    fetch(`/api/recipes/${this.props.params.recipeId}`)
      .then(response => response.json())
      .then(recipe => this.props.onRecipeLoad(recipe));
  }

  componentWillUnmount () {
    this.props.onUnmount();
  }

  render () {
    return (
      <div>
        {
          this.props.recipe === null ?
          'Loading...' :
          this.props.recipe.name
        }
      </div>
    );
  }
}
