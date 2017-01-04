import { List, ListItem } from 'material-ui/List';
import Paper from 'material-ui/Paper';

export class Cart extends React.Component {
  constructor (props) {
    super(props);
    this.props.loadCart();
  }

  render () {
    return (
      <Paper>
        <List>
          {this.props.items.map((item) => (
            <ListItem key={item.id}
                      onTouchTap={() => this.props.toggleDone(item)}
                      style={item.done ? { textDecoration: 'line-through', color: 'grey' } : null }>
              {item.name}
            </ListItem>
          ))}
        </List>
      </Paper>
    );
  }
}
