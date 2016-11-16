import Paper from 'material-ui/Paper';
import { Link } from 'react-router';
import { List, ListItem } from 'material-ui/List';

export class Menu extends React.Component {
  constructor(props) {
    super(props);
    fetch('/api/menu')
      .then(response => response.json())
      .then(json => this.props.onMenuLoad(json.menu));
  }

  buildLink(menuName) {
    return menuName.toLowerCase().replace(/\s/g, '_');
  }

  setQuery(name, author, date) {
    return {
      name: name,
      author: author,
      date: date
    };
  }

  render() {
    return (
      <div>
        <Paper zDepth={3}>
          <List>
            {
              this.props.menu.map(menu => 
                <ListItem key={menu.id} primaryText={menu.name} containerElement={
                  <Link to={{ pathname: `/menu/:${this.buildLink(menu.name)}`, query: this.setQuery(menu.name, menu.author, menu.date) }} />
                } />)
            }
          </List>
        </Paper>
      </div>
    );
  }
}

Menu.propTypes = {
  menu: React.PropTypes.array.isRequired
};