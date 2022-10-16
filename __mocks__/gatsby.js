const React = require("react");
const gatsby = jest.requireActual("gatsby");

module.exports = {
  ...gatsby,
  graphql: jest.fn(),
  Link: jest.fn().mockImplementation(
    // these props are invalid for an `a` tag
    ({
      activeClassName,
      activeStyle,
      getProps,
      innerRef,
      partiallyActive,
      ref,
      replace,
      to,
      ...rest
    }) =>
      React.createElement("a", {
        ...rest,
        href: to,
      })
  ),
  StaticQuery: jest.fn(),
  useStaticQuery: jest.fn().mockImplementation(() => ({
    site: {
      siteMetadata: {
        title: `Iðunn Gunda`,
        description: `Bechley Industries personnel manager, Jim Johnston.`,
        siteURL: `https://uiuc.edu`,
        lang: `fi`,
        image: `/logo.png`,
        navigation: [
          { text: "Projects", url: "/" },
          { text: "Posts", url: "/posts" },
          { text: "About", url: "/about" },
          { text: "Contact", url: "/contact" },
        ],
      },
    },
    allContactData: {
      nodes: [
        {
          username: "twttr",
        },
      ],
    },
  })),
};
