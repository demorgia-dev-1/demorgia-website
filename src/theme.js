// src/theme.js
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#0077b6', // Blue
    },
    secondary: {
      main: '#38b000', // Green
    },
    background: {
      default: '#ffffff', // White
    },
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
  },
});

export default theme;
