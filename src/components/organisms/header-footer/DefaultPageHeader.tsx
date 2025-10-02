import { useAuthContext } from '@/contexts/AuthContext/AuthContext';
import { KeyboardArrowDown, KeyboardArrowUp } from '@mui/icons-material';
import { Box, Button, Popover, Stack, Typography } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

export const MINIMUM_TOP_HEADER_HEIGHT = '80px';

export default function DefaultPageHeader() {
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'popover-date-range' : undefined;

  return (
    <Box
      gridArea="header"
      display="flex"
      flexDirection="row"
      justifyContent="space-between"
      maxWidth="100vw"
      height={MINIMUM_TOP_HEADER_HEIGHT}
      // paddingY={2}
      // paddingX={4.5}
      position="fixed"
      left={0}
      right={0}
      top={0}
      zIndex={998}
    >
      <Box>
        {/* Add content of header */}
        <Typography variant="h6">My Portfolio</Typography>
        <Stack direction="row" spacing={2}>
          <Button component={Link} href="/" color="inherit">
            Home
          </Button>
          <Button component={Link} href="/about" color="inherit">
            About
          </Button>
          <Button component={Link} href="/projects" color="inherit">
            Projects
          </Button>
          <Button component={Link} href="/contact" color="inherit">
            Contact
          </Button>
        </Stack>
      </Box>
    </Box>
  );
}
