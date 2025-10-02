import { Box, Typography, Paper, Chip } from '@mui/material';

interface Skill {
  name: string;
  category?: string;
  proficiency?: 'Beginner' | 'Intermediate' | 'Advanced' | 'Expert';
}

interface SkillsSectionProps {
  title?: string;
  skills: (string | Skill)[];
  variant?: 'chip' | 'list';
  showProficiency?: boolean;
}

export default function SkillsSection({
  title = 'Skills & Technologies',
  skills,
  variant = 'chip',
  showProficiency = false,
}: SkillsSectionProps) {
  const getSkillColor = (proficiency?: string) => {
    switch (proficiency) {
      case 'Expert':
        return 'success';
      case 'Advanced':
        return 'primary';
      case 'Intermediate':
        return 'info';
      case 'Beginner':
        return 'warning';
      default:
        return 'default';
    }
  };

  return (
    <Paper elevation={2} sx={{ padding: 3 }}>
      <Typography variant="h4" component="h2" gutterBottom>
        {title}
      </Typography>

      {variant === 'chip' && (
        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, marginTop: 2 }}>
          {skills.map((skill, index) => {
            const skillName = typeof skill === 'string' ? skill : skill.name;
            const skillObj = typeof skill === 'string' ? null : skill;

            return (
              <Chip
                key={`${skillName}-${index}`}
                label={
                  showProficiency && skillObj?.proficiency
                    ? `${skillName} (${skillObj.proficiency})`
                    : skillName
                }
                variant="outlined"
                color={
                  skillObj?.proficiency ? (getSkillColor(skillObj.proficiency) as any) : 'default'
                }
                sx={{
                  '&:hover': {
                    backgroundColor: 'primary.main',
                    color: 'primary.contrastText',
                  },
                }}
              />
            );
          })}
        </Box>
      )}

      {variant === 'list' && (
        <Box sx={{ marginTop: 2 }}>
          {skills.map((skill, index) => {
            const skillName = typeof skill === 'string' ? skill : skill.name;
            const skillObj = typeof skill === 'string' ? null : skill;

            return (
              <Box key={`${skillName}-${index}`} sx={{ marginBottom: 1 }}>
                <Typography variant="body1" component="span">
                  {skillName}
                </Typography>
                {showProficiency && skillObj?.proficiency && (
                  <Chip
                    label={skillObj.proficiency}
                    size="small"
                    color={getSkillColor(skillObj.proficiency) as any}
                    sx={{ marginLeft: 1 }}
                  />
                )}
                {skillObj?.category && (
                  <Typography variant="caption" color="text.secondary" sx={{ marginLeft: 1 }}>
                    • {skillObj.category}
                  </Typography>
                )}
              </Box>
            );
          })}
        </Box>
      )}
    </Paper>
  );
}
