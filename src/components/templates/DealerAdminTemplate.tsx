import { Box, Stack } from '@mui/material';
import DefaultPageFooter from '../organisms/header-footer/DefaultPageFooter';
import DefaultPageHeader from '../organisms/header-footer/DefaultPageHeader';
import DefaultPageSideBar from '../organisms/header-footer/DefaultPageSideBar';

export function DealerAdminTemplate({ children }: { children: React.ReactNode }) {
  return (
    <Box>
      <DefaultPageHeader />

      <Box gridArea="main" minHeight={'100vh'} mt={10} color="black">
        <Box display="flex">
          <DefaultPageSideBar />
          <Stack
            flex={1}
            minHeight="100vh"
            height="100%"
            pt={{
              xs: 2,
              md2: 0,
            }}
            pb={20}
            minWidth={0}
            pl={{
              md2: '90px',
              lg: '250px',
            }}
            bgcolor="white"
          >
            {children}
          </Stack>
        </Box>
        <Box
          sx={{
            pl: {
              md2: '90px',
              lg: '250px',
            },
          }}
        >
          <DefaultPageFooter />
        </Box>
      </Box>
    </Box>
  );
}
