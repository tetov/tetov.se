import path from "node:path";
import type { GatsbyConfig } from "gatsby";

const config: GatsbyConfig = {
  siteMetadata: {
    title: `tetov's hideout`,
    author: "Anton Tetov Johansson", // also in resume.yaml & contact-data.yaml
    description: "Projects in architecture, digital fabrication and robotics.",
    siteURL: "https://tetov.se",
    lang: "en",
    image: "/logo.png",
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
    typesOutputPath: "gatsby-types.d.ts",
  },
  plugins: [
    "gatsby-plugin-catch-links",
    {
      resolve: "gatsby-plugin-feed",
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
            serialize: ({ query: { site, allMarkdownRemark } }) =>
              allMarkdownRemark.nodes.map((node) => {
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
                allMarkdownRemark(sort: { frontmatter: { date: DESC}}) {
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
      },
    },
    "gatsby-plugin-image",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: `Anton Tetov's projects & more`,
        short_name: "tetov",
        start_url: "/",
        background_color: "#111111",
        theme_color: "#663399",
        display: "minimal-ui",
        icon: "./static/logo.png",
      },
    },
    "gatsby-plugin-postcss", // required by tailwind css
    "gatsby-plugin-root-import", // setup absolute imports for webpack
    {
      resolve: "gatsby-plugin-sharp",
      options: {
        useMozJpeg: true,
        defaultQuality: 50,
      },
    },
    {
      resolve: "gatsby-plugin-react-svg",
      options: { rule: { include: /\.inline\.svg$/ } },
    },
    "gatsby-plugin-typescript",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "content",
        path: path.resolve("content"),
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
      resolve: "gatsby-transformer-remark",
      options: {
        excerpt_separator: "<!-- more -->",
        footnotes: true,
        gfm: true,
        plugins: [
          {
            resolve: "gatsby-remark-autolink-headers",
            options: {
              enableCustomId: true,
              icon: false,
            },
          },
          "gatsby-remark-copy-linked-files",
          {
            resolve: "gatsby-remark-images",
            options: {
              maxWidth: 800,
            },
          },
          {
            resolve: "gatsby-remark-prismjs",
            options: {
              inlineCodeMarker: "›",
              aliases: { sh: "bash" },
            },
          },
          {
            resolve: "gatsby-remark-responsive-iframe",
            options: {
              wrapperStyle: "margin-bottom: 1.0725rem",
            },
          },
          "gatsby-remark-smartypants",
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
    "gatsby-transformer-sharp",
    "gatsby-transformer-yaml",
    "gatsby-plugin-client-side-redirect", // keep last in list
  ],
};

export default config;
