module.exports = {
  parser: "@typescript-eslint/parser",
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended",
    "prettier",
  ],
  settings: {
    "import/resolver": {
      alias: [
        ["components", "./src/components"],
        ["hooks", "./src/hooks"],
        ["images", "./src/images"],
        ["icons", "./src/icons"],
        ["types", "./src/types"],
        ["utils", "./src/utils"],
      ],
    },
    react: {
      version: "detect",
    },
  },
  env: {
    browser: true,
    node: true,
    es6: true,
  },
  plugins: ["@typescript-eslint", "react", "graphql"],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
      ecmaVersion: 2018,
      sourceType: "module",
    },
    rules: {
      "react/prop-types": "off",
      "@typescript-eslint/explicit-function-return-type": "off",
      "graphql/template-strings": [
        error,
        {
          env: "relay",
          tagName: "graphql",
          schemaJsonFilepath: "./src/__generated__/gatsby-introspection.json",
        },
      ],
    },
    overrides: [
      {
        files: ["*.js"],
        rules: {
          "@typescript-eslint/no-var-requires": "off",
        },
      },
    ],
  },
};
