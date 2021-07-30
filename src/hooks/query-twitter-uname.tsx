import { graphql, useStaticQuery } from "gatsby";

const queryTwitterUname = () => {
  const { allContactData } =
    useStaticQuery<GatsbyTypes.TwitterUsernameQuery>(graphql`
      query TwitterUsername {
        allContactData(filter: { label: { eq: "twitter" } }, limit: 1) {
          nodes {
            username
          }
        }
      }
    `);
  return allContactData.nodes.length !== 1
    ? ""
    : `@${allContactData.nodes[0].username}`;
};

export default queryTwitterUname;
