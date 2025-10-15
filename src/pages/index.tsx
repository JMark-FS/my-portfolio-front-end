import { Geist, Geist_Mono } from 'next/font/google';
import { DefaultTemplate } from '@/components/templates/DefaultTemplate';
import {
  Button,
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
  Stack,
  Typography,
  useColorScheme,
} from '@mui/material';
import { useEffect } from 'react';
import CustomHead from '@/components/molecules/Head/CustomHead';

export default function Home() {
  const { mode, setMode, systemMode } = useColorScheme();
  useEffect(() => {
    console.log(mode, 'mode in useEffect');
    console.log(systemMode, 'systemMode in useEffect');
  }, [mode, systemMode]);
  if (!mode) {
    return null;
  }
  return (
    <DefaultTemplate>
      <CustomHead />
    </DefaultTemplate>
  );
}
