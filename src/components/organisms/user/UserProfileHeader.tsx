import { Box, Typography, Avatar } from '@mui/material';

interface UserProfileHeaderProps {
  name: string;
  title: string;
  subtitle?: string;
  avatarSrc?: string;
  initials?: string;
}

export default function UserProfileHeader({ 
  name, 
  title, 
  subtitle, 
  avatarSrc, 
  initials = "JP" 
}: UserProfileHeaderProps) {
  return (
    <Box textAlign="center">
      <Avatar
        sx={{ 
          width: { xs: 120, md: 150 }, 
          height: { xs: 120, md: 150 }, 
          margin: '0 auto 2rem',
          border: '4px solid',
          borderColor: 'primary.main'
        }}
        alt={`${name} Profile Picture`}
        src={avatarSrc}
      >
        {initials}
      </Avatar>
      <Typography variant="h3" component="h1" gutterBottom>
        {title}
      </Typography>
      {subtitle && (
        <Typography variant="h6" color="text.secondary" sx={{ maxWidth: 600, margin: '0 auto' }}>
          {subtitle}
        </Typography>
      )}
    </Box>
  );
}