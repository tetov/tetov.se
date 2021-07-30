export default {
  siteMetadata: {
    title: `tetov.xyz`,
    description: `Projects & blog`,
    siteURL: `https://tetov.xyz`,
    lang: "en",
  },
  plugins: [
    `gatsby-plugin-catch-links`,
    {
      resolve: `gatsby-plugin-feed`,
      options: {
        query: `
          {
            site {
              siteMetadata {
                title
                description
                siteURL
              }
            }
          }
        `,
        feeds: [
          {
            serialize: ({ query: { site, allMarkdownRemark } }) => {
              return allMarkdownRemark.nodes.map((node) => {
                return Object.assign({}, node.frontmatter, {
                  description: node.frontmatter.description || node.excerpt,
                  date: node.frontmatter.date,
                  url: site.siteMetadata.siteURL + node.fields.slug,
                  guid: site.siteMetadata.siteURL + node.fields.slug,
                  custom_elements: [{ "content:encoded": node.html }],
                });
              });
            },
            query: `
              {
                allMarkdownRemark(
                  sort: { order: DESC, fields: [frontmatter___date] },
                ) {
                  nodes {
                    excerpt
                    html
                    fields {
                      slug
                    }
                    frontmatter {
                      title
                      date
                      description
                    }
                  }
                }
              }
            `,
            output: "/rss.xml",
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `tetov xyz`,
        short_name: `tetov xyz`,
        start_url: `/`,
        background_color: `#111111`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `./src/images/icon.png`,
      },
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `content`,
        path: `${__dirname}/content/`,
        //  string, regex or function matching any part of abs/rel path
        // https://github.com/micromatch/anymatch
        ignore: [
          (p: string): Boolean =>
            process.env.NODE_ENV === "production" && /\/draft-/i.test(p),
          /\/_\w+/,
        ],
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: { name: `data`, path: `${__dirname}/data/` },
    },
    {
      resolve: `gatsby-plugin-typegen`,
      options: {
        emitSchema: {
          "src/__generated__/gatsby-introspection.json": true,
        },
        emitPluginDocuments: {
          "src/__generated__/gatsby-plugin-documents.graphql": true,
        },
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: "gatsby-remark-video",
            options: {
              width: 800,
              height: "auto",
              preload: "lazy",
              muted: false,
              autoplay: false,
              playsinline: true,
              controls: true,
              loop: false,
            },
          },
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 800,
            },
          },
          `gatsby-remark-autolink-headers`,
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          `gatsby-remark-prismjs`,
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
        ],
        excerpt_separator: `<!-- excerptEnd -->`,
      },
    },
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        useMozJpeg: true,
        defaultQuality: 50,
      },
    },
    {
      resolve: `gatsby-transformer-sharp`,
    },
    `gatsby-transformer-yaml`,
    `gatsby-plugin-typescript`,
  ],
};
