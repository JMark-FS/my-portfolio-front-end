import { createContext, useContext } from 'react';
import { z } from 'zod';

interface ICustomThemeContext {
  mode: 'light' | 'dark' | 'system';
  setMode: (mode: 'light' | 'dark' | 'system') => void;
}

const CustomThemeContext = createContext<ICustomThemeContext>({
  mode: 'system',
  setMode: () => {},
});

export default CustomThemeContext;

export function useCustomThemeContext() {
  return useContext(CustomThemeContext);
}
