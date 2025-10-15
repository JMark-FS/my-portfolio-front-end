'use client';
// import '@/styles/globals.css';
import { GlobalStyles, ThemeProvider, useColorScheme } from '@mui/material';
import type { AppProps } from 'next/app';
// import { SessionProvider } from 'next-auth/react';
import { iconVariant, SlydynToast } from '@/config/customSnackbar';
import AuthProvider from '@/contexts/AuthContext/AuthProvider';
import { SnackbarProvider } from 'notistack';
import lightTheme from '@/config/themes/lightTheme';
import darkTheme from '@/config/themes/darkTheme';
import { useEffect, useMemo } from 'react';
import CustomThemeProvider from '@/contexts/CustomThemeContext/CustomThemeProvider';
import { useCustomThemeContext } from '@/contexts/CustomThemeContext/CustomThemeContext';

function CustomComponent({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  const { mode } = useCustomThemeContext();
  const theme = mode === 'light' ? lightTheme : mode === 'dark' ? darkTheme : lightTheme;

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles styles={{ body: { backgroundColor: theme.palette.background.default } }} />

      <AuthProvider>
        <SnackbarProvider
          Components={{
            success: SlydynToast,
            error: SlydynToast,
          }}
          iconVariant={iconVariant}
          maxSnack={1}
        >
          {/* <SessionProvider session={session}> */}
          <Component {...pageProps} />
          {/* </SessionProvider> */}
        </SnackbarProvider>
      </AuthProvider>
    </ThemeProvider>
  );
}

export default function App(props: AppProps) {
  return (
    <CustomThemeProvider>
      <CustomComponent {...props} />
    </CustomThemeProvider>
  );
}
