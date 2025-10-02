import {
  Card,
  CardContent,
  CardMedia,
  CardActions,
  Button,
  Typography,
  Box,
  Chip,
  Link as MuiLink,
} from '@mui/material';
import { GitHub, Launch } from '@mui/icons-material';

export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  featured?: boolean;
}

interface ProjectCardProps {
  project: Project;
  variant?: 'standard' | 'compact' | 'featured';
}

export default function ProjectCard({ project, variant = 'standard' }: ProjectCardProps) {
  const imageHeight = variant === 'compact' ? 150 : variant === 'featured' ? 250 : 200;

  return (
    <Card
      sx={{
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        transition: 'transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out',
        '&:hover': {
          transform: 'translateY(-4px)',
          boxShadow: 4,
        },
      }}
    >
      <CardMedia
        component="img"
        height={imageHeight}
        image={project.image}
        alt={project.title}
        sx={{ backgroundColor: 'grey.200' }}
        onError={e => {
          // Fallback for missing images
          (e.target as HTMLImageElement).style.display = 'none';
        }}
      />

      <CardContent sx={{ flexGrow: 1 }}>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-start',
            marginBottom: 1,
          }}
        >
          <Typography variant={variant === 'featured' ? 'h5' : 'h6'} component="h3" gutterBottom>
            {project.title}
          </Typography>
          {project.featured && (
            <Chip label="Featured" size="small" color="primary" sx={{ marginLeft: 1 }} />
          )}
        </Box>

        <Typography
          variant="body2"
          color="text.secondary"
          paragraph
          sx={{
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            display: '-webkit-box',
            WebkitLineClamp: variant === 'compact' ? 2 : 3,
            WebkitBoxOrient: 'vertical',
          }}
        >
          {project.description}
        </Typography>

        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5, marginTop: 2 }}>
          {project.technologies.slice(0, variant === 'compact' ? 3 : 5).map((tech, index) => (
            <Chip
              key={`${tech}-${index}`}
              label={tech}
              size="small"
              variant="outlined"
              sx={{ fontSize: '0.75rem' }}
            />
          ))}
          {project.technologies.length > (variant === 'compact' ? 3 : 5) && (
            <Chip
              label={`+${project.technologies.length - (variant === 'compact' ? 3 : 5)}`}
              size="small"
              variant="outlined"
              color="primary"
              sx={{ fontSize: '0.75rem' }}
            />
          )}
        </Box>
      </CardContent>

      <CardActions sx={{ justifyContent: 'flex-start', paddingTop: 0 }}>
        {project.githubUrl && (
          <Button
            size="small"
            startIcon={<GitHub />}
            component={MuiLink}
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            sx={{ textTransform: 'none' }}
          >
            Code
          </Button>
        )}
        {project.liveUrl && (
          <Button
            size="small"
            startIcon={<Launch />}
            component={MuiLink}
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            sx={{ textTransform: 'none' }}
          >
            Live Demo
          </Button>
        )}
      </CardActions>
    </Card>
  );
}
