import React from 'react';
import Helmet from 'react-helmet';
import config from '../../config/website';

const SEO = () => {
  const title = config.siteTitle;
  const description = config.siteDescription;
  const realPrefix = config.pathPrefix === '/' ? '' : config.pathPrefix;
  const image = config.siteUrl + realPrefix + config.siteLogo;
  const blogURL = config.siteUrl + config.pathPrefix;
  const schemaOrgJSONLD = [
    {
      '@context': 'http://schema.org',
      '@type': 'WebSite',
      url: blogURL,
      name: title,
      alternateName: config.siteTitleAlt ? config.siteTitleAlt : '',
    },
  ];
  return (
    <Helmet>
      <html lang={config.siteLanguage} />
      <title>Hack Arizona | The largest hackathon in the Southwest</title>
      <meta name="description" content='Hack Arizona is the largest hackathon in the Southwest. January 18-20, 2019. Learn more and register now!' />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicons/hacktus-favicon.png" />
      <meta property="og:locale" content={config.ogLanguage} />
      <meta property="og:site_name" content='Hack Arizona' />
      <meta property="og:image" content={image} />
      {/* 
      <link rel="apple-touch-icon" href="/favicons/apple-touch-icon.png" />
      <link rel="shortcut icon" href="/favicons/favicon.ico" />
      <meta name="msapplication-TileColor" content={config.backgroundColor} />
      <meta name="msapplication-config" content="browserconfig.xml" />
      <meta name="description" content={description} />
      <script type="application/ld+json">{JSON.stringify(schemaOrgJSONLD)}</script>
      <meta property="og:locale" content={config.ogLanguage} />
      <meta property="og:site_name" content={config.ogSiteName} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="fb:app_id" content={config.siteFBAppID ? config.siteFBAppID : ''} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:creator" content={config.userTwitter ? config.userTwitter : ''} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      */}
    </Helmet>
  );
};

export default SEO;
