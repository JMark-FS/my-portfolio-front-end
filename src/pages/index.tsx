import Head from 'next/head';
import Image from 'next/image';
import { Geist, Geist_Mono } from 'next/font/google';
import styles from '@/styles/Home.module.css';
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

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

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
      <Head>
        <title> My Portfolio</title>
      </Head>
      <Stack>
        <Typography variant="caption">CAPTION</Typography>
        <Typography variant="subtitle1">SUbtitle1</Typography>
        <Typography color="black">Home Page</Typography>
        <Button variant="contained" color="primary">
          Button
        </Button>
        <FormControl>
          <FormLabel id="demo-theme-toggle">Theme</FormLabel>
          <RadioGroup
            aria-labelledby="demo-theme-toggle"
            name="theme-toggle"
            row
            value={mode}
            onChange={event => {
              console.log(event.target.value, 'vale');
              setMode(event.target.value as 'system' | 'light' | 'dark');
            }}
          >
            <FormControlLabel value="system" control={<Radio />} label="System" />
            <FormControlLabel value="light" control={<Radio />} label="Light" />
            <FormControlLabel value="dark" control={<Radio />} label="Dark" />
          </RadioGroup>
        </FormControl>
      </Stack>
    </DefaultTemplate>
  );
}
