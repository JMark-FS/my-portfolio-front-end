import { Box, Typography, Paper, Stack } from '@mui/material';

interface EducationItem {
  degree: string;
  institution: string;
  duration: string;
  description?: string;
  location?: string;
  gpa?: number;
  honors?: string[];
  isCurrent?: boolean;
}

interface EducationSectionProps {
  title?: string;
  education: EducationItem[];
  variant?: 'detailed' | 'compact';
}

export default function EducationSection({
  title = 'Education',
  education,
  variant = 'detailed',
}: EducationSectionProps) {
  return (
    <Paper elevation={2} sx={{ padding: 3 }}>
      <Typography variant="h4" component="h2" gutterBottom>
        {title}
      </Typography>

      <Stack spacing={variant === 'detailed' ? 3 : 2}>
        {education.map((edu, index) => (
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
                  {edu.degree}
                </Typography>
                <Typography variant="subtitle1" color="primary" sx={{ fontWeight: 500 }}>
                  {edu.institution}
                </Typography>
              </Box>
              <Box sx={{ textAlign: { xs: 'left', sm: 'right' } }}>
                <Typography variant="subtitle2" color="text.secondary">
                  {edu.duration}
                  {edu.isCurrent && ' (Current)'}
                </Typography>
                {edu.location && (
                  <Typography variant="caption" color="text.secondary">
                    {edu.location}
                  </Typography>
                )}
              </Box>
            </Box>

            {variant === 'detailed' && edu.gpa && (
              <Typography variant="body2" color="text.secondary" sx={{ marginTop: 0.5 }}>
                GPA: {edu.gpa.toFixed(2)}/4.0
              </Typography>
            )}

            {edu.description && (
              <Typography variant="body2" sx={{ marginTop: 1 }}>
                {edu.description}
              </Typography>
            )}

            {variant === 'detailed' && edu.honors && edu.honors.length > 0 && (
              <Box sx={{ marginTop: 1 }}>
                <Typography variant="caption" color="text.secondary" sx={{ fontWeight: 500 }}>
                  Honors & Achievements:
                </Typography>
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5, marginTop: 0.5 }}>
                  {edu.honors.map((honor, honorIndex) => (
                    <Typography
                      key={honorIndex}
                      variant="caption"
                      sx={{
                        backgroundColor: 'primary.light',
                        color: 'primary.contrastText',
                        padding: '2px 6px',
                        borderRadius: 1,
                        fontSize: '0.7rem',
                      }}
                    >
                      {honor}
                    </Typography>
                  ))}
                </Box>
              </Box>
            )}
          </Box>
        ))}
      </Stack>
    </Paper>
  );
}
