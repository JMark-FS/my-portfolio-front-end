import { Box, Stack, Typography } from '@mui/material';
import { DefaultTemplate } from './DefaultTemplate';
import Image from 'next/image';

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
            backgroundImage: 'url(/dealer-invite-email-bg-img.jpeg)',
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
                src="/slydyn-logo.png"
                alt="Slydyn Logo"
                width={50}
                height={50}
                style={{ width: 'inherit', height: 'inherit' }}
              />
            </Stack>
            <Typography variant="h6" textTransform="uppercase">
              SLYDYN
            </Typography>
          </Stack>
          {children}
        </Box>
      </Box>
    </DefaultTemplate>
  );
}
