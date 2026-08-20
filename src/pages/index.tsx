import type { ReactNode } from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';

import { HomepageHeader } from '../components/HomePage/Hero/HomePageHeader';
import { StatsSection } from '../components/HomePage/Stats/StatsSection';
import { FeaturesSection } from '../components/HomePage/Features/FeaturesSection';
import { InfrastructureNotice } from '../components/HomePage/InfrastructureNotice/InfrastructureNotice';

export default function Home(): ReactNode {
  const { siteConfig } = useDocusaurusContext();

  return (
    <Layout title='API REST de Colombia' description={siteConfig.tagline}>
      <HomepageHeader />

      <main>
        <StatsSection />
        <FeaturesSection />
        <InfrastructureNotice />
      </main>
    </Layout>
  );
}
