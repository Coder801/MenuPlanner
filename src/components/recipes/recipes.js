import Paper from 'material-ui/Paper';
import { List, ListItem } from 'material-ui/List';

export class Recipes extends React.Component {
  componentWillMount () {
    fetch('/api/recipes')
      .then(response => response.json())
      .then(json => this.props.onRecipesLoad(json.recipes));
  }

  render () {
    return (
      <Paper zDepth={3}>
        <List>
          {
            this.props.recipes.map(recipe => <ListItem key={recipe.id} primaryText={recipe.name} />)
          }
        </List>
      </Paper>
    );
  }
}
