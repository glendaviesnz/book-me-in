import lightBlue from '@material-ui/core/colors/lightBlue';
import red from '@material-ui/core/colors/red';
import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
    palette: {
        error: red,
        primary: {
            contrastText: '#fff',
            dark: lightBlue[900],
            light: lightBlue[700],
            main: lightBlue[900]
        },
        secondary: {
            contrastText: '#000',
            dark: '#fafafa',
            light: '#ffffff',
            main: '#ffffff'   
        },
    },
});

export default theme;