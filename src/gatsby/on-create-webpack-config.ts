import { GatsbyNode } from "gatsby";
import path from "path";
const onCreateWebpackConfig: GatsbyNode["onCreateWebpackConfig"] = ({
  actions,
}) => {
  const srcDir = path.resolve(__dirname, "..");
  actions.setWebpackConfig({
    resolve: {
      alias: {
        components: path.resolve(srcDir, "components"),
        hooks: path.resolve(srcDir, "hooks"),
        images: path.resolve(srcDir, "images"),
        icons: path.resolve(srcDir, "icons"),
        types: path.resolve(srcDir, "types"),
        utils: path.resolve(srcDir, "utils"),
      },
    },
  });
};

export default onCreateWebpackConfig;
