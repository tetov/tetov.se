export const schema = ["src/__generated__/gatsby-introspection.json"];
export const documents = ["src/__generated__/gatsby-plugin-documents.graphql"];
export const extensions = {
  endpoints: {
    default: {
      url: "http://localhost:8000/___graphql",
      headers: { "user-agent": "JS GraphQL" },
      introspect: false,
    },
  },
};
