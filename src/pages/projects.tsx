import Head from 'next/head';
import { DefaultTemplate } from '@/components/templates/DefaultTemplate';
import ProjectsPageContent from '@/components/pages/projects';

export default function Projects() {
  return (
    <DefaultTemplate>
      <Head>
        <title>Projects - My Portfolio</title>
        <meta
          name="description"
          content="Explore my portfolio of web development projects and applications."
        />
      </Head>

      <ProjectsPageContent />
    </DefaultTemplate>
  );
}
