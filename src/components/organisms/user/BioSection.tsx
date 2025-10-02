import { Box, Typography, Paper } from '@mui/material';

interface BioSectionProps {
  title?: string;
  paragraphs: string[];
}

export default function BioSection({ title = 'My Story', paragraphs }: BioSectionProps) {
  return (
    <Paper elevation={2} sx={{ padding: 3 }}>
      <Typography variant="h4" component="h2" gutterBottom>
        {title}
      </Typography>
      {paragraphs.map((paragraph, index) => (
        <Typography key={index} variant="body1" paragraph>
          {paragraph}
        </Typography>
      ))}
    </Paper>
  );
}
