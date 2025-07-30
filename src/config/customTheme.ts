// import '@fontsource/cooper-hewitt/400.css';
// import '@fontsource/cooper-hewitt/500.css';
// import '@fontsource/cooper-hewitt/600.css';
// import '@fontsource/cooper-hewitt/700.css';
// import '@fontsource/roboto-condensed/400.css';
// import '@fontsource/roboto-condensed/500.css';
import { createTheme } from '@mui/material/styles';
const { palette } = createTheme();
declare module '@mui/material/styles' {
  interface BreakpointOverrides {
   mbs: true,
   mbm: true, 
   mbl: true,
   tbs: true,
   tbm: true,
   tbl: true,
   dts: true,
   dtm: true,
   dtl: true,
  }
  interface Theme {
    
    color: {
      
      primary: {
        jaffa: string;
        flamingo: string;
      };
      secondary: {
        tallPoppy: string;
        saffron: string;
        breakerBay: string;
      };
      neutral: {
        white: string;
        codGray: string;
        accent1: string;
        accent2: string;
        tundora: string;
        screenColor: string;
      };
      sso: {
        facebook: string;
        google: string;
        apple: string;
      };
    };
  }
  interface PaletteOptions {
    flamingo?: string;
    neutral?: {
      white: string;
      codGray: string;
      accent1: string;
      accent2: string;
      tundora: string;
      screenColor: string;
    };
    sso: {
      facebook: string;
      google: string;
      apple: string;
    };
  }
  // allow configuration using `createTheme`
  interface ButtonOwnPropsColorOverrides {}

  interface TypographyVariants {
    body3: React.CSSProperties;
  }
  interface TypographyVariantsOptions {
    body3?: React.CSSProperties;
  }
}

declare module '@mui/material/Typography' {
  interface TypographyPropsVariantOverrides {
    body3: true;
  }
}

const basetheme = createTheme({
  breakpoints: {
    values: {
      mbs: 0,
      mbm: 375,
      mbl: 556,
      tbs: 768,
      tbm: 900,
      tbl: 1000,
      dts: 1100,
      dtm: 1200,
      dtl: 1400,

      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
  },
});

const theme = createTheme({
  ...basetheme,
  palette: {
    mode:"dark",
    primary: {
      dark: '#F28D35',
      main: '#51A696',
      //@ts-ignore
      flamingo: ' #F25A38',
      contrastText: '#fff',

      // light: will be calculated from palette.primary.main,
      // dark: will be calculated from palette.primary.main,
      // contrastText: will be calculated to contrast with palette.primary.main
      flamingo100: '#F25A38',
      flamingo90: '#FF7452',
      flamingo80: '#FF8D6B',
      flamingo70: '#FFA785',

      jaffa100: '#F28D35',
      jaffa90: '#FFA74F',
      jaffa80: '#FFBF68',
      jaffa70: '#FFDA82',
    },
    secondary: {
      main: '#51A696',
      dark: '#51A690CC',
      light: '#F2B035',
      //@ts-ignore
      poppy: '#BF2A2A',
      contrastText: '#fff',
      tallPoppy: '#BF2A2A',
      breakerBay: '#51A696',
      saffron: '#F2B035',

      tallPoppy100: '#BF2A2A',
      tallPoppy90: '#DA4344',
      tallPoppy80: '#F25D5D',
      tallPoppy70: '#FF7777',

      saffron100: '#F2B034',
      saffron90: '#FFCA4E',
      saffron80: '#FFE368',
      saffron70: '#FFFD82',

      breakerBay100: '#51A696',
      breakerBay90: '#6CC0B0',
      breakerBay80: '#84D9C9',
      breakerBay70: '#9EF3E3',
    },
    neutral: {
      white: '#FFFFFF',
      codGray: '#191414',
      accent1: '#7A7A7A',
      accent2: '#D4D4D8',
      tundora: '#444444',
      screenColor: '#FCFCFC',
      //@ts-ignore
      gray100: '#7A7A7A',
      gray90: '#A1A1A1',
      gray80: '#D4D4D8',
      gray70: '#EAEAEA',
      gray60: '#FCFCFC',
    },
    sso: {
      google: '#EB4335',
      facebook: '#1877F2',
      apple: '#000000',
    },
  },
  
  components: {
    MuiTooltip: {
      styleOverrides: {
        tooltip: {
          fontSize: '14px',
          fontFamily: 'Roboto Condensed',
          fontWeight: '400',
          lineHeight: '18px',
          maxWidth: 500,
          color: '#444444',
          backgroundColor: 'white',
          border: '1px solid #B8B8B8',
        },
      },
    },
    MuiButton: {
      defaultProps: {
        disableElevation: true,
      },
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
  },
  typography: {
    h1: {
      fontFamily: 'Cooper Hewitt',
      fontWeight: '500',
      lineHeight: '63.7px',
      fontSize: '79.3px',
      textTransform: 'uppercase',
      color: 'black',
    },

    h2: {
      fontFamily: 'Cooper Hewitt',
      fontWeight: '500',
      fontSize: '49px',
      lineHeight: '63.7px',
      textTransform: 'uppercase',
      color: 'black',
    },
    h3: {
      fontFamily: 'Cooper Hewitt',
      fontWeight: '500',
      fontSize: '39px',
      textTransform: 'uppercase',

      lineHeight: '50.7px',
      color: 'black',
    },

    h4: {
      fontFamily: 'Cooper Hewitt',
      fontWeight: '500',
      fontSize: '31px',
      textTransform: 'uppercase',
      color: 'black',

      lineHeight: '40.3px',
    },

    h5: {
      fontFamily: 'Cooper Hewitt',
      fontWeight: '500',
      fontSize: '25px',
      textTransform: 'uppercase',

      lineHeight: '32.5px',
      color: 'black',
    },
    h6: {
      fontFamily: 'Cooper Hewitt',
      fontWeight: '500',
      fontSize: '20px',
      textTransform: 'uppercase',

      lineHeight: '26px',
      color: 'black',
    },
    subtitle1: {
      fontFamily: 'Roboto Condensed',
      fontWeight: '400',
      fontSize: '20px',
      lineHeight: '26px',
    },
    subtitle2: {
      fontFamily: 'Roboto Condensed',
      fontWeight: '400',
    },
    body1: {
      fontFamily: 'Roboto Condensed',
      fontWeight: '400',
      fontSize: '16px',
    },
    body2: {
      fontFamily: 'Roboto Condensed',
      fontWeight: '400',
      fontSize: '13px',
    },
    body3: {
      fontFamily: 'Roboto Condensed',
      fontWeight: '400',
      fontSize: '12px',
    },
    caption: {
      fontFamily: 'Roboto Condensed',
      fontWeight: '400',
      fontSize: '10px',
      lineHeight: '14px',
      [basetheme.breakpoints.up('xs')]: {
        fontSize: '12px',
      },
      [basetheme.breakpoints.up('lg')]: {
        fontSize: '14px',
      },
    },
    button: {
      fontFamily: 'Roboto Condensed',
      fontWeight: '400',
    },
    overline: {
      fontFamily: 'Roboto Condensed',
      fontWeight: '400',
      fontSize: '',
    },
  },
});

export default theme;
