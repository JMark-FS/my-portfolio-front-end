import Head from 'next/head';
import { DefaultTemplate } from '@/components/templates/DefaultTemplate';
import ContactPageContent from '@/components/pages/contact';

export default function Contact() {
  return (
    <DefaultTemplate>
      <Head>
        <title>Contact - My Portfolio</title>
        <meta
          name="description"
          content="Get in touch with me for opportunities, collaborations, or just to say hello!"
        />
      </Head>

      <ContactPageContent />
    </DefaultTemplate>
  );
}
