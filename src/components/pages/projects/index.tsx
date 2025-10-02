import { Box, Typography, Stack } from '@mui/material';
import { ProjectsGrid, ProjectCTA, Project } from '@/components/organisms/project';

export default function ProjectsPageContent() {
  // Sample projects - replace with your actual projects
  const projects: Project[] = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description:
        'A full-stack e-commerce application built with Next.js and Node.js. Features include user authentication, product catalog, shopping cart, and payment integration.',
      image: '/assets/project-1.jpg',
      technologies: ['Next.js', 'Node.js', 'MongoDB', 'Stripe', 'TypeScript'],
      githubUrl: 'https://github.com/username/ecommerce-platform',
      liveUrl: 'https://ecommerce-demo.com',
      featured: true,
    },
    {
      id: 2,
      title: 'Task Management App',
      description:
        'A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.',
      image: '/assets/project-2.jpg',
      technologies: ['React', 'Firebase', 'Material-UI', 'Socket.io'],
      githubUrl: 'https://github.com/username/task-manager',
      liveUrl: 'https://taskmanager-demo.com',
      featured: true,
    },
    {
      id: 3,
      title: 'Weather Dashboard',
      description:
        'A responsive weather dashboard that provides current weather conditions and forecasts for multiple cities with beautiful visualizations.',
      image: '/assets/project-3.jpg',
      technologies: ['React', 'OpenWeather API', 'Chart.js', 'CSS3'],
      githubUrl: 'https://github.com/username/weather-dashboard',
      liveUrl: 'https://weather-demo.com',
    },
    {
      id: 4,
      title: 'Social Media Analytics',
      description:
        'A data visualization tool for social media metrics with interactive charts and real-time data processing capabilities.',
      image: '/assets/project-4.jpg',
      technologies: ['Python', 'Django', 'PostgreSQL', 'D3.js', 'Redis'],
      githubUrl: 'https://github.com/username/social-analytics',
    },
    {
      id: 5,
      title: 'Fitness Tracking App',
      description:
        'Mobile-first fitness application with workout tracking, progress monitoring, and social sharing features.',
      image: '/assets/project-5.jpg',
      technologies: ['React Native', 'Express.js', 'MongoDB', 'JWT'],
      githubUrl: 'https://github.com/username/fitness-tracker',
      liveUrl: 'https://fitness-demo.com',
    },
    {
      id: 6,
      title: 'Code Snippet Manager',
      description:
        'A web application for developers to organize, search, and share code snippets with syntax highlighting and tagging system.',
      image: '/assets/project-6.jpg',
      technologies: ['Vue.js', 'Node.js', 'MySQL', 'Prism.js'],
      githubUrl: 'https://github.com/username/snippet-manager',
    },
  ];

  return (
    <Box sx={{ padding: { xs: 2, md: 4 }, maxWidth: 1400, margin: '0 auto' }}>
      <Stack spacing={4}>
        {/* Header Section */}
        <Box textAlign="center">
          <Typography variant="h3" component="h1" gutterBottom>
            My Projects
          </Typography>
          <Typography variant="h6" color="text.secondary" sx={{ maxWidth: 800, margin: '0 auto' }}>
            Here's a collection of projects I've worked on, showcasing various technologies and my
            approach to solving different problems.
          </Typography>
        </Box>

        {/* Projects Grid */}
        <ProjectsGrid
          projects={projects}
          showFeaturedSeparately={true}
          gridColumns={{ xs: 1, sm: 2, lg: 3 }}
        />

        {/* Call to Action */}
        <ProjectCTA />
      </Stack>
    </Box>
  );
}
