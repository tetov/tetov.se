import type { CreateFilePathArgs } from "gatsby-source-filesystem";
import { createFilePath } from "gatsby-source-filesystem";
import path from "path";

export const parseNodeFilePath = ({
  node,
  getNode,
  basePath = `content`,
  trailingSlash = false,
}: CreateFilePathArgs): path.ParsedPath => {
  const filePath = createFilePath({
    node,
    getNode,
    basePath,
    trailingSlash,
  });
  return path.parse(filePath);
};
