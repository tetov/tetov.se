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
  StaticQuery: jest.fn().mockImplementation(() => ({
    data: {
      site: {
        siteMetadata: {
          title: "tetov's projects & more",
          siteURL: "https://tetov.se",
          lang: "en",
          description: "there no 'more', is there?",
        },
      },
      allContactData: {
        nodes: [
          {
            username: "antontetov",
          },
        ],
      },
    },
  })),
  useStaticQuery: jest.fn(),
};
