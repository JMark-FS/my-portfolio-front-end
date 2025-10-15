import { Box, Stack, Typography } from '@mui/material';
import { DefaultTemplate } from './DefaultTemplate';
import Image from 'next/image';
import { MINIMUM_TOP_HEADER_HEIGHT } from '../organisms/header-footer/DefaultPageHeader';

export default function AuthPageTemplate({ children }: { children: React.ReactNode }) {
  return (
    <DefaultTemplate>
      <Box
        display="grid"
        gridTemplateColumns={{ lg: '1fr 1fr' }}
        gridTemplateRows={{ lg: '1fr' }}
        height="100%"
        minHeight="100vh"
        maxWidth={'100vw'}
        overflow="hidden"
      >
        <Box
          sx={{
            backgroundImage: 'url(/ILSVRC2012_val_00001273.jpeg)',
            filter: 'grayscale(100%)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        ></Box>
        <Box
          position="relative"
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          gap={2}
          padding={4}
          textAlign="center"
        >
          <Stack
            position={{ lg: 'absolute', xs: 'relative' }}
            top={{ lg: '72px', xs: 0 }}
            direction="row"
            alignItems="center"
            gap={2}
          >
            <Stack
              direction="row"
              alignItems="center"
              sx={{ width: '30px', height: 'auto', aspectRatio: '1/1' }}
            >
              <Image
                src="/portfolio-logo.png"
                alt="Portfolio Logo"
                width={50}
                height={50}
                style={{ width: 'inherit', height: 'inherit' }}
              />
            </Stack>
            <Typography variant="h6" textTransform="uppercase">
              Welcome To Portfolio
            </Typography>
          </Stack>
          {children}
        </Box>
      </Box>
    </DefaultTemplate>
  );
}
