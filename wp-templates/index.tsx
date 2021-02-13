import React from 'react';
import { useGeneralSettings, usePosts } from '@wpengine/headless';
import { Footer, Header, Posts } from '../components';

export default function Index(): JSX.Element {
  const posts = usePosts();
  const settings = useGeneralSettings();

  return (
    <>
      <Header title={settings?.title} description={settings?.description} />
      <main className="content content-index">
        <Posts 
          posts={posts}
          heading="Yeah this seems alright"
          intro="Andras stop snooping"
          headingLevel="h2"
          postTitleLevel="h3"
          count={6}
          id={styles.post_list}
          />
      </main>
      <Footer copyrightHolder={settings?.title} />
    </>
  );
}
