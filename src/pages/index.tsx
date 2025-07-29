import type {ReactNode} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Heading from '@theme/Heading';

import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <p>Most developers hit a wall when it comes to truly understanding how JavaScript works under the hood. Tutorials often spoon-feed surface-level syntax, leading to a cycle of copy-paste without comprehension. This space breaks that pattern. Inspired by Akshay Saini’s mantra — “Time, Tide & JavaScript Wait for None” — these notes are designed to give you real clarity. No long-winded paragraphs. Just crisp, focused, and thoughtfully structured content that explains the "why" behind the "what." It's time to go beyond tutorials and start mastering JavaScript for real.</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/season-one/episode-1">
            Let's Go
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home(): ReactNode {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
