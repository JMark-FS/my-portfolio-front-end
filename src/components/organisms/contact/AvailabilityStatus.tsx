import { Paper, Typography, Box } from '@mui/material';

interface AvailabilityStatusProps {
  title?: string;
  isAvailable?: boolean;
  statusText?: string;
  description?: string;
}

export default function AvailabilityStatus({ 
  title = "Availability",
  isAvailable = true,
  statusText = "Available for new opportunities",
  description = "I'm currently open to full-time opportunities, freelance projects, and interesting collaborations. I typically respond within 24 hours."
}: AvailabilityStatusProps) {
  return (
    <Paper elevation={2} sx={{ padding: 3 }}>
      <Typography variant="h6" component="h3" gutterBottom>
        {title}
      </Typography>
      <Box sx={{ 
        display: 'flex', 
        alignItems: 'center', 
        gap: 1,
        marginBottom: 2
      }}>
        <Box sx={{ 
          width: 12, 
          height: 12, 
          borderRadius: '50%', 
          backgroundColor: isAvailable ? 'success.main' : 'warning.main'
        }} />
        <Typography variant="body2" color="text.secondary">
          {statusText}
        </Typography>
      </Box>
      <Typography variant="body2">
        {description}
      </Typography>
    </Paper>
  );
}