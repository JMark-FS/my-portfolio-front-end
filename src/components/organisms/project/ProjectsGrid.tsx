import { Box, Typography, Stack, Button, Link as MuiLink } from '@mui/material';
import { GitHub } from '@mui/icons-material';
import Link from 'next/link';
import ProjectCard, { Project } from './ProjectCard';

interface ProjectsGridProps {
  projects: Project[];
  title?: string;
  showFeaturedSeparately?: boolean;
  maxItems?: number;
  variant?: 'standard' | 'compact' | 'featured';
  gridColumns?: {
    xs: number;
    sm?: number;
    md?: number;
    lg?: number;
  };
}

export default function ProjectsGrid({
  projects,
  title,
  showFeaturedSeparately = false,
  maxItems,
  variant = 'standard',
  gridColumns = { xs: 1, sm: 2, lg: 3 },
}: ProjectsGridProps) {
  const displayProjects = maxItems ? projects.slice(0, maxItems) : projects;
  const featuredProjects = showFeaturedSeparately ? displayProjects.filter(p => p.featured) : [];
  const otherProjects = showFeaturedSeparately
    ? displayProjects.filter(p => !p.featured)
    : displayProjects;

  const getGridColumns = (featured: boolean = false) => {
    if (featured) {
      return { xs: '1fr', md: 'repeat(2, 1fr)' };
    }

    const { xs, sm, md, lg } = gridColumns;
    return {
      xs: `repeat(${xs}, 1fr)`,
      ...(sm && { sm: `repeat(${sm}, 1fr)` }),
      ...(md && { md: `repeat(${md}, 1fr)` }),
      ...(lg && { lg: `repeat(${lg}, 1fr)` }),
    };
  };

  return (
    <Box>
      {title && (
        <Typography
          variant="h3"
          component="h1"
          gutterBottom
          textAlign="center"
          sx={{ marginBottom: 4 }}
        >
          {title}
        </Typography>
      )}

      <Stack spacing={4}>
        {/* Featured Projects */}
        {showFeaturedSeparately && featuredProjects.length > 0 && (
          <Box>
            <Typography variant="h4" component="h2" gutterBottom sx={{ marginBottom: 3 }}>
              Featured Projects
            </Typography>
            <Box
              sx={{
                display: 'grid',
                gridTemplateColumns: getGridColumns(true),
                gap: 3,
              }}
            >
              {featuredProjects.map(project => (
                <ProjectCard key={project.id} project={project} variant="featured" />
              ))}
            </Box>
          </Box>
        )}

        {/* Other Projects */}
        {otherProjects.length > 0 && (
          <Box>
            {showFeaturedSeparately && otherProjects.length > 0 && (
              <Typography variant="h4" component="h2" gutterBottom sx={{ marginBottom: 3 }}>
                Other Projects
              </Typography>
            )}
            <Box
              sx={{
                display: 'grid',
                gridTemplateColumns: getGridColumns(false),
                gap: 3,
              }}
            >
              {otherProjects.map(project => (
                <ProjectCard key={project.id} project={project} variant={variant} />
              ))}
            </Box>
          </Box>
        )}

        {/* Show more indicator */}
        {maxItems && projects.length > maxItems && (
          <Box sx={{ textAlign: 'center', marginTop: 4 }}>
            <Typography variant="body1" color="text.secondary" gutterBottom>
              Showing {maxItems} of {projects.length} projects
            </Typography>
            <Button component={Link} href="/projects" variant="outlined" size="large">
              View All Projects
            </Button>
          </Box>
        )}
      </Stack>
    </Box>
  );
}
