export class RecipeDetails extends React.Component {
  componentWillUnmount () {
    this.props.onUnmount();
  }
  
  render () {
    return (
      <div>{this.props.recipe.name || 'Wrong recipe'}</div>
    );
  }
}
