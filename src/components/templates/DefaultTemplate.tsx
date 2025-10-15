import { Box, useTheme } from '@mui/material';
import DefaultPageFooter from '../organisms/header-footer/DefaultPageFooter';
import DefaultPageHeader, {
  MINIMUM_TOP_HEADER_HEIGHT,
} from '../organisms/header-footer/DefaultPageHeader';

export function DefaultTemplate({ children }: { children: React.ReactNode }) {
  return (
    <Box minWidth={'100vw'} sx={{}}>
      <DefaultPageHeader />

      <Box gridArea="main" minHeight={'100vh'} mt={MINIMUM_TOP_HEADER_HEIGHT} color="black">
        {children}
      </Box>

      <DefaultPageFooter />
    </Box>
  );
}
