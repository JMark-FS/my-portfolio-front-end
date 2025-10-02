import Head from 'next/head';
import { DefaultTemplate } from '@/components/templates/DefaultTemplate';
import AboutPageContent from '@/components/pages/about';

export default function About() {
  return (
    <DefaultTemplate>
      <Head>
        <title>About - My Portfolio</title>
        <meta name="description" content="Learn more about me, my background, and my skills." />
      </Head>

      <AboutPageContent />
    </DefaultTemplate>
  );
}
