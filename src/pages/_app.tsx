import theme from '@/config/customTheme';
// import '@/styles/globals.css';
import { GlobalStyles, ThemeProvider } from '@mui/material';
import type { AppProps } from 'next/app';
// import { SessionProvider } from 'next-auth/react';
import { iconVariant, SlydynToast } from '@/config/customSnackbar';
import AuthProvider from '@/contexts/AuthContext/AuthProvider';
import { SnackbarProvider } from 'notistack';

export default function App({ Component, pageProps: { session, ...pageProps } }: AppProps) {
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
