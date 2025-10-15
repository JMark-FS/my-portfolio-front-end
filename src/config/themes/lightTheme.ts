// import '@fontsource/cooper-hewitt/400.css';
// import '@fontsource/cooper-hewitt/500.css';
// import '@fontsource/cooper-hewitt/600.css';
// import '@fontsource/cooper-hewitt/700.css';
// import '@fontsource/roboto-condensed/400.css';
// import '@fontsource/roboto-condensed/500.css';
import { createTheme, PaletteColorOptions, PaletteOptions } from '@mui/material/styles';
import basetheme from './baseTheme';

const lightPalette: PaletteOptions = {
  mode: 'light',
  primary: {
    main: '#0b0f37ff', // Navy Blue
    light: '#F5F5DC', // Beige
    dark: '#212121', // Black
  },
  secondary: {
    main: '#FFC107', // Mustard
    dark: '#FFA000',
    light: '#FFE082',
  },
  background: {
    default: '#F5F5DC', // Beige
    paper: '#E0E0E0', // Soft Grey
  },
  text: {
    primary: '#212121', // Black
    secondary: '#424242', // Dark Grey
  },
};

const lightTheme = createTheme({
  ...basetheme,
  palette: {
    ...lightPalette,
  },

  components: {
    MuiPaper: {
      styleOverrides: {
        root: {
          styles: {
            backgroundColor: '#000',
          },
        },
      },
    },
    MuiButton: {
      defaultProps: {
        disableElevation: true,
      },
      variants: [
        {
          props: { variant: 'contained', color: 'primary' },
          style: {},
        },
      ],
    },
    MuiLink: {
      defaultProps: {
        color: '#0057FF',
        variant: 'body1',
      },
    },
    MuiCircularProgress: {
      defaultProps: {
        size: 25,
        color: 'inherit',
      },
    },
    MuiTextField: {
      defaultProps: {
        variant: 'outlined',
        size: 'small',
      },
      styleOverrides: {
        root: {
          '& .MuiOutlinedInput-root': {
            '& fieldset': {
              borderColor: '#B0B0B0', // Default border color
            },
            '&:hover fieldset': {
              borderColor: '#0057FF', // Border color on hover
            },
            '&.Mui-focused fieldset': {
              borderColor: '#0057FF', // Border color when focused
              borderWidth: '2px', // Thicker border when focused
            },
          },
        },
      },
    },
  },

  colorSchemes: {
    light: true,
  },
});

export default lightTheme;
