import { Paper, Typography, Stack, Box, Link as MuiLink } from '@mui/material';
import { ReactNode } from 'react';

export interface ContactInfoItem {
  icon: ReactNode;
  label: string;
  value: string;
  link?: string;
}

interface ContactInfoProps {
  title?: string;
  contactInfo: ContactInfoItem[];
}

export default function ContactInfo({
  title = 'Contact Information',
  contactInfo,
}: ContactInfoProps) {
  return (
    <Paper elevation={2} sx={{ padding: 3 }}>
      <Typography variant="h5" component="h2" gutterBottom>
        {title}
      </Typography>
      <Stack spacing={3}>
        {contactInfo.map((info, index) => (
          <Box key={index} sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
            <Box
              sx={{
                color: 'primary.main',
                display: 'flex',
                alignItems: 'center',
                minWidth: 24,
              }}
            >
              {info.icon}
            </Box>
            <Box>
              <Typography variant="subtitle2" color="text.secondary">
                {info.label}
              </Typography>
              {info.link ? (
                <MuiLink
                  href={info.link}
                  target={info.link.startsWith('http') ? '_blank' : undefined}
                  rel={info.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                  sx={{
                    textDecoration: 'none',
                    '&:hover': { textDecoration: 'underline' },
                    color: 'inherit',
                  }}
                >
                  <Typography variant="body1">{info.value}</Typography>
                </MuiLink>
              ) : (
                <Typography variant="body1">{info.value}</Typography>
              )}
            </Box>
          </Box>
        ))}
      </Stack>
    </Paper>
  );
}
