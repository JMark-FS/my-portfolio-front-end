import { Box, Typography, Paper, Stack } from '@mui/material';

interface ExperienceItem {
  title: string;
  company: string;
  duration: string;
  description: string;
  location?: string;
  technologies?: string[];
  isCurrent?: boolean;
}

interface ExperienceSectionProps {
  title?: string;
  experiences: ExperienceItem[];
  variant?: 'detailed' | 'compact';
}

export default function ExperienceSection({
  title = 'Experience',
  experiences,
  variant = 'detailed',
}: ExperienceSectionProps) {
  return (
    <Paper elevation={2} sx={{ padding: 3 }}>
      <Typography variant="h4" component="h2" gutterBottom>
        {title}
      </Typography>

      <Stack spacing={variant === 'detailed' ? 3 : 2}>
        {experiences.map((experience, index) => (
          <Box key={index}>
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'flex-start',
                flexWrap: 'wrap',
                gap: 1,
              }}
            >
              <Box>
                <Typography variant="h6" component="h3">
                  {experience.title}
                </Typography>
                <Typography variant="subtitle1" color="primary" sx={{ fontWeight: 500 }}>
                  {experience.company}
                </Typography>
              </Box>
              <Box sx={{ textAlign: { xs: 'left', sm: 'right' } }}>
                <Typography variant="subtitle2" color="text.secondary">
                  {experience.duration}
                  {experience.isCurrent && ' (Current)'}
                </Typography>
                {experience.location && (
                  <Typography variant="caption" color="text.secondary">
                    {experience.location}
                  </Typography>
                )}
              </Box>
            </Box>

            <Typography
              variant="body2"
              sx={{ marginTop: 1, marginBottom: variant === 'detailed' ? 2 : 1 }}
            >
              {experience.description}
            </Typography>

            {variant === 'detailed' && experience.technologies && (
              <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                {experience.technologies.map((tech, techIndex) => (
                  <Typography
                    key={techIndex}
                    variant="caption"
                    sx={{
                      backgroundColor: 'grey.100',
                      padding: '2px 6px',
                      borderRadius: 1,
                      fontSize: '0.7rem',
                    }}
                  >
                    {tech}
                  </Typography>
                ))}
              </Box>
            )}
          </Box>
        ))}
      </Stack>
    </Paper>
  );
}
