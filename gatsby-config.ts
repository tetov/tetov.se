import type { GatsbyConfig } from "gatsby";
import path from "path";

const config: GatsbyConfig = {
  siteMetadata: {
    title: `tetov's hideout`,
    author: `Anton Tetov Johansson`, // also in resume.yaml & contact-data.yaml
    description: `Projects in architecture, digital fabrication and robotics.`,
    siteURL: `https://tetov.se`,
    lang: `en`,
    image: `/logo.png`,
    twitterUsername: "antontetov", // also in resume.yaml & contact-data.yaml
    navigation: [
      { text: "projects", url: "/projects/" },
      { text: "posts", url: "/posts/" },
      { text: "cv", url: "/cv/" },
      { text: "contact", url: "/contact/" },
    ],
  },
  graphqlTypegen: {
    generateOnBuild: true,
    typesOutputPath: `gatsby-types.d.ts`,
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
        /* eslint-disable @typescript-eslint/no-unsafe-assignment,
                          @typescript-eslint/no-unsafe-call,
                          @typescript-eslint/no-unsafe-member-access,
                          @typescript-eslint/no-unsafe-return,
                          @typescript-eslint/restrict-plus-operands */
        feeds: [
          {
            serialize: ({ query: { site, allMdx } }) =>
              allMdx.nodes.map((node) => {
                return Object.assign({}, node.frontmatter, {
                  description: node.frontmatter.description || node.excerpt,
                  date: node.frontmatter.date,
                  url: site.siteMetadata.siteURL + node.fields.slug,
                  guid: site.siteMetadata.siteURL + node.fields.slug,
                  custom_elements: [{ "content:encoded": node.html }],
                });
              }),
            query: `
              {
                allMdx(sort: { frontmatter: { date: DESC}}) {
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
            title: "Anton Tetov's projects",
            output: "/rss.xml",
          },
        ],
        /* eslint-enable @typescript-eslint/no-unsafe-assignment,
                         @typescript-eslint/no-unsafe-call,
                         @typescript-eslint/no-unsafe-member-access,
                         @typescript-eslint/no-unsafe-return,
                         @typescript-eslint/restrict-plus-operands */
      },
    },
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Anton Tetov's projects & more`,
        short_name: `tetov`,
        start_url: `/`,
        background_color: `#111111`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `./static/logo.png`,
      },
    },
    `gatsby-plugin-postcss`, // required by tailwind css
    `gatsby-plugin-root-import`, // setup absolute imports for webpack
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        useMozJpeg: true,
        defaultQuality: 50,
      },
    },
    {
      resolve: `gatsby-plugin-react-svg`,
      options: { rule: { include: /\.inline\.svg$/ } },
    },
    `gatsby-plugin-typescript`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `content`,
        path: path.resolve(`content`),
        //  string, regex or function matching any part of abs/rel path
        // https://github.com/micromatch/anymatch
        ignore: [
          (p: string): boolean =>
            process.env.NODE_ENV === "production" && /\/draft-/i.test(p),
          /\/_\w+/,
        ],
      },
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [`.md`, `.mdx`],
        excerpt_separator: `<!-- more -->`,
        footnotes: true,
        gfm: true,
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-autolink-headers`,
            options: {
              enableCustomId: true,
              icon: false,
            },
          },
          `gatsby-remark-copy-linked-files`,
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 800,
            },
          },
          {
            resolve: `gatsby-remark-prismjs`,
            options: {
              inlineCodeMarker: "›",
              aliases: { sh: "bash" },
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          `gatsby-remark-smartypants`,
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
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-transformer-yaml`,
  ],
};

export default config;
