export default {
  siteMetadata: {
    title: `tetov xyz`,
    description: `Project and blog`,
    siteUrl: `https://tetov.xyz`,
    logo: "",
    lang: "en_US",
    social: [
      {
        text: "anton@tetov.xyz",
        icon: "Mail",
        url: "mailto:anton@tetov.xyz",
        hcard: "u-email",
      },
      {
        text: "337D DB57 4A88 34DB",
        icon: "Key",
        url:
          "https://keyserver.ubuntu.com/pks/lookup?op=get&search=0x2b4d0035aff0f7dace5b29d7337ddb574a8834db",
        hcard: "u-key",
      },
      {
        text: "+46 70-363 56 67",
        icon: "Smartphone",
        url: "tel:+46703635667",
        hcard: "u-tel",
      },
      { text: "github", icon: "GitHub", url: "https://github.com/tetov" },
      {
        text: "instagram",
        icon: "Instagram",
        url: "https://www.instagram.com/antontetov/",
      },
      {
        text: "twitter",
        icon: "Twitter",
        url: "https://twitter.com/antontetov",
      },
      {
        icon: "Briefcase",
        url: "https://www.linkedin.com/in/tetov/",
        text: "linkedin",
      },
      {
        text: "matrix",
        url: "https://matrix.to/#/@tetov:tetov.xyz",
        icon: "MessageCircle",
      },
      {
        text: "mastodon",
        url: "https://vis.social/@tetov",
        icon: "Hash",
      },
    ],
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
                siteUrl
                site_url: siteUrl
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
                  url: site.siteMetadata.siteUrl + node.fields.slug,
                  guid: site.siteMetadata.siteUrl + node.fields.slug,
                  custom_elements: [{ "content:encoded": node.html }],
                })
              })
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
        name: `tetov-xyz`,
        short_name: `tetov-xyz`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `./src/images/dangerous-tex-oot.svg`,
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
              autoplay: true,
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
    `gatsby-plugin-typescript`,
  ],
}
