const React = require("react");
const plugin = jest.requireActual("react-helmet");
const mockHelmet = ({ children, ...props }) =>
  React.createElement(
    "div",
    {
      ...props,
      className: "mock-helmet",
    },
    children
  );

module.exports = {
  ...plugin,
  Helmet: jest.fn().mockImplementation(mockHelmet),
};
