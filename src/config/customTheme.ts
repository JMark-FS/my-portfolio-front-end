// import '@fontsource/cooper-hewitt/400.css';
// import '@fontsource/cooper-hewitt/500.css';
// import '@fontsource/cooper-hewitt/600.css';
// import '@fontsource/cooper-hewitt/700.css';
// import '@fontsource/roboto-condensed/400.css';
// import '@fontsource/roboto-condensed/500.css';
import { createTheme, PaletteColorOptions, PaletteOptions } from '@mui/material/styles';
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
      tertiary: {

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
    tertiary: PaletteColorOptions;
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
const darkPalette : PaletteOptions = {
  mode:"dark",
  primary: {

  },
  tertiary:{},
  sso:{
    google:"",
    facebook:"",
    apple:""
  }
}

const theme = createTheme({
  ...basetheme,
  palette: {
    ...darkPalette,
    background: {
       default: '#f4f0e8'
    }, 
    mode:"dark",
    primary: {
      dark: '#494848',
      light: "#f4f0e8",
      main: '#51A696',
    },
    tertiary: {
      main:"#f4f0e8",
      dark:"#f4f0e8",
      light:"#f4f0e8",
    },
    secondary: {
      main: '#51A696',
      dark: '#51A690CC',
      light: '#F2B035',
    
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
      variants: [{
        props:{variant:"contained", color:"primary"},
        style: {
          
        }
      }]
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
      fontFamily: '"Space Grotesk", sans-serif',
      fontWeight: '400',
      fontSize: '20px',
      lineHeight: '26px',
    },
    subtitle2: {
      fontFamily: '"Space Grotesk", sans-serif',
      fontWeight: '400',
    },
    body1: {
      fontFamily: '"Space Grotesk", sans-serif',
      fontWeight: '400',
      fontSize: '16px',
      [basetheme.breakpoints.up('xs')]: {
        fontSize: '12px',
      },
    },
    body2: {
      fontFamily: '"Space Grotesk", sans-serif',
      fontWeight: '400',
      fontSize: '13px',
      [basetheme.breakpoints.up('xs')]: {
        fontSize: '12px',
      },
      [basetheme.breakpoints.up('lg')]: {
        fontSize: '14px',
      },
    },
    caption: {
     fontFamily: '"Space Grotesk", sans-serif',
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
      fontFamily: '"Space Grotesk", sans-serif',
      fontWeight: '400',
      
    },
    overline: {
      fontFamily: '"Space Grotesk", sans-serif',
      fontWeight: '400',
      fontSize: '',
    },
    
  },
  colorSchemes: {
    dark: true,
  }
    
});

export default theme;
