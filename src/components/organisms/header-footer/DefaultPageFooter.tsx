
import { Box, Stack, Typography } from '@mui/material';

export const linkStyle = {
  cursor: 'pointer',
  transition: 'all 0.2s',
  '&:hover': {
    opacity: 0.8,
  },
};

export default function DefaultPageFooter() {
  return (
    <Box component="footer" width="100vw" bgcolor="black" color="white" >
      <Box padding={2}>

      </Box>
    </Box>
  );
}
