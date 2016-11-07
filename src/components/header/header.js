import { AppBar, FlatButton } from 'material-ui';

export const Header = ({ user, onSettingsClick }) => { //eslint-disable-line
  return (
    <AppBar
      title="Menu Planner"
      iconElementRight={<FlatButton label="Settings" onTouchTap={onSettingsClick} />}
    />
  );
};
