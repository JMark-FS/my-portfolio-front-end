import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import ThemeContext from './CustomThemeContext';

interface IAuthProviderProps {
  children: React.ReactNode | React.ReactNode[];
}

function CustomThemeProvider(props: IAuthProviderProps) {
  const [mode, setMode] = useState<'light' | 'dark' | 'system'>('system');
  const setThemeMode = (newMode: 'light' | 'dark' | 'system') => {
    console.log('Theme mode changed to:', newMode);
    setMode(newMode);
  };
  return (
    <ThemeContext.Provider value={{ mode, setMode: setThemeMode }}>
      {/* <Box position="relative">
      {!loaded && <Box position="absolute" width="100%" height="100%" zIndex="999"> <DefaultAppLoader /></Box>} */}
      {props.children}
      {/* </Box> */}
    </ThemeContext.Provider>
  );
}

export default CustomThemeProvider;
