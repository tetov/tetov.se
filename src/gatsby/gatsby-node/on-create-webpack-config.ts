import { GatsbyNode } from "gatsby";
import path from "path";
const onCreateWebpackConfig: GatsbyNode["onCreateWebpackConfig"] = ({
  actions,
}) => {
  const srcDir = path.resolve(__dirname, "../..");
  actions.setWebpackConfig({
    resolve: {
      alias: {
        "~": path.resolve(srcDir),
      },
      fallback: {
        path: require.resolve("path-browserify")
      }
    },
  });
};

export default onCreateWebpackConfig;
