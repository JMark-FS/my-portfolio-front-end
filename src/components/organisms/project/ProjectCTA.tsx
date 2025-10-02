import { Box, Typography, Stack, Button, Link as MuiLink } from '@mui/material';
import { GitHub } from '@mui/icons-material';
import Link from 'next/link';

interface ProjectCTAProps {
  title?: string;
  description?: string;
  primaryButton?: {
    text: string;
    href: string;
  };
  secondaryButton?: {
    text: string;
    href: string;
    external?: boolean;
  };
}

export default function ProjectCTA({ 
  title = "Interested in working together?",
  description = "I'm always open to discussing new opportunities and interesting projects.",
  primaryButton = {
    text: "Get In Touch",
    href: "/contact"
  },
  secondaryButton = {
    text: "View GitHub",
    href: "https://github.com/username",
    external: true
  }
}: ProjectCTAProps) {
  return (
    <Box 
      sx={{ 
        textAlign: 'center', 
        padding: 4, 
        backgroundColor: 'background.paper',
        borderRadius: 2,
        marginTop: 4,
        border: '1px solid',
        borderColor: 'divider'
      }}
    >
      <Typography variant="h5" component="h3" gutterBottom>
        {title}
      </Typography>
      <Typography variant="body1" paragraph sx={{ maxWidth: 600, margin: '0 auto 2rem' }}>
        {description}
      </Typography>
      <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} justifyContent="center">
        <Button 
          variant="contained" 
          size="large"
          component={Link}
          href={primaryButton.href}
          sx={{ textTransform: 'none' }}
        >
          {primaryButton.text}
        </Button>
        {secondaryButton && (
          <Button 
            variant="outlined" 
            size="large"
            startIcon={secondaryButton.external ? <GitHub /> : undefined}
            component={secondaryButton.external ? MuiLink : Link}
            href={secondaryButton.href}
            target={secondaryButton.external ? "_blank" : undefined}
            rel={secondaryButton.external ? "noopener noreferrer" : undefined}
            sx={{ textTransform: 'none' }}
          >
            {secondaryButton.text}
          </Button>
        )}
      </Stack>
    </Box>
  );
}