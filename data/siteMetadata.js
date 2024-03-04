/** @type {import("pliny/config").PlinyConfig } */

const mail = process.env.MAIL;

const siteMetadata = {
  title: 'Fabian Schlegel',
  author: 'Fabian Schlegel',
  headerTitle: 'Fabian Schlegel',
  language: 'en-us',
  siteUrl: 'https://fabian.schlegel.one',
  siteLogo: '/icons/logo.svg',
  email: mail,
  mailto: 'mailto:' + mail,
  github: 'https://github.com/fschlegelone',
  linkedin: 'https://www.linkedin.com/in/fabian-schlegel/',
  locale: 'en-US',
  analytics: {
    umamiAnalytics: {
      umamiWebsiteId: process.env.NEXT_UMAMI_ID,
    },
  },
};

module.exports = siteMetadata;
