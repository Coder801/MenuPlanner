import { MuiThemeProvider, getMuiTheme, darkBaseTheme } from 'material-ui/styles'; //eslint-disable-line no-unused-vars

export default function withMaterialUI (ComposedComponent) { //eslint-disable-line no-unused-vars
  return (props) => {
    const { context, ...other } = props; //eslint-disable-line no-unused-vars
    return (
      <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)} >
        <ComposedComponent {...other} />
      </MuiThemeProvider>
    );
  };
}
