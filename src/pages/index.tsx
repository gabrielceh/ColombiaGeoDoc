import type { ReactNode } from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';

import { HomepageHeader } from '../components/HomePage/Hero/HomePageHeader';
import { StatsSection } from '../components/HomePage/Stats/StatsSection';
import { FeaturesSection } from '../components/HomePage/Features/FeaturesSection';
import { InfrastructureNotice } from '../components/HomePage/InfrastructureNotice/InfrastructureNotice';

export default function Home(): ReactNode {
  const { siteConfig } = useDocusaurusContext();
  const { i18n } = useDocusaurusContext();
  const lang = i18n.currentLocale === 'en' ? 'en' : 'es';
  const content = {
    es: {
      title: siteConfig.title,
      description: siteConfig.tagline,
    },
    en: {
      title: 'Colombia REST API',
      description:
        'REST API for geographic data from Colombia. Query departments, cities, and municipalities quickly and easily.',
    },
  };

  return (
    <Layout title={content[lang].title} description={content[lang].description}>
      <HomepageHeader />

      <main>
        <StatsSection />
        <FeaturesSection />
        <InfrastructureNotice />
      </main>
    </Layout>
  );
}



