let contentfulConfig
try {
  contentfulConfig = require('./.contentful')
} catch (e) {
  contentfulConfig = {
    production: {
      spaceId: process.env.SPACE_ID,
      accessToken: process.env.ACCESS_TOKEN,
    },
  }
} finally {
  const { spaceId, accessToken } = contentfulConfig.production
  if (!spaceId || !accessToken) {
    throw new Error('Contentful space ID and access token need to be provided.')
  }
}

module.exports = {
  siteMetadata: {
    title: 'A-Z Hospice Inc.',
    description:
      'your health is our number one priority.',
    siteUrl: 'https://a-zhospice.com',
    image: '/images/logo.jpg',
    menuLinks: [
      {
        name: 'Home',
        slug: '/',
      },
      {
        name: 'Hospice',
        slug: '/hospice/',
        childs: [
          {
            name: 'What to expect',
            slug: '/hospice/what-to-expect/'
          },
          {
            name: 'Insurance coverage',
            slug: '/hospice/insurance-coverage/'
          }
        ]
      },
      {
        name: 'About us',
        slug: '/about-us/',
        childs: [
          {
            name: 'Area of cover',
            slug: '/about-us/area-of-cover/'
          },
          {
            name: 'Services we provide',
            slug: '/about-us/services-we-provide/'
          },
          {
            name: 'Our team',
            slug: '/about-us/our-team/'
          }
        ]
      },
      {
        name: 'Referral',
        slug: '/referral/',
      },
      {
        name: 'Contact',
        slug: '/contact/',
      },
      {
        name: 'Knowledge base',
        slug: '/blog/',
      },
    ],
    postsPerFirstPage: 7,
    postsPerPage: 6,
    basePath: '/',
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        host: 'https://a-zhospice.com',
        sitemap: 'https://a-zhospice/sitemap.xml',
        policy: [{ userAgent: '*', allow: '/' }]
      }
    },
    `gatsby-plugin-emotion`,
    'gatsby-plugin-theme-ui',
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-prismjs`,
          },
          `gatsby-remark-autolink-headers`,
          {
            resolve: `gatsby-remark-images-contentful`,
            options: {
              maxWidth: 650,
              backgroundColor: 'white',
              linkImagesToOriginal: false,
            },
          },
        ],
      },
    },
    `gatsby-plugin-catch-links`,
    {
      resolve: 'gatsby-source-contentful',
      options:
        process.env.NODE_ENV === 'development'
          ? contentfulConfig.development
          : contentfulConfig.production,
    },
    {
      resolve: `gatsby-plugin-nprogress`,
      options: {
        // Setting a color is optional.
        color: `tomato`,
        // Disable the loading spinner.
        showSpinner: true,
      },
    },
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: process.env.GOOGLE_ANALYTICS,
        head: true,
      },
    },
    {
      resolve:'gatsby-plugin-sitemap',
      options: {
        options: {
          serialize: ({ site, allSitePage }) =>
            allSitePage.edges.map(edge => {
              let path = edge.node.path
              let priority = 0.7
              if (path.match(/products/)) {
                priority = 1.0
              }
              console.log(path)
              console.log("priority: ", priority.toFixed(1), "    path: ", path)
              return {
                url: site.siteMetadata.siteUrl + edge.node.path,
                changefreq: `monthly`,
                priority
              }
            })
        }
      }
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'a-zhospice',
        short_name: 'a-zhospice',
        start_url: '/',
        background_color: '#ffffff',
        theme_color: '#ffffff',
        display: 'minimal-ui',
        icon: './static/images/favicon.jpg',
      },
    },
    'gatsby-plugin-offline',
    {
      resolve: `gatsby-plugin-schema-snapshot`,
      options: {
        path: `./src/gatsby/schema/schema.gql`,
        update: process.env.GATSBY_UPDATE_SCHEMA_SNAPSHOT,
      },
    },
    'gatsby-plugin-netlify',
  ],
}
