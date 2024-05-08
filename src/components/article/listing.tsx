import React from "react";
import { ArticlePreview } from "src/components/article";

export const ArticleListing = ({
  nodes,
}: {
  nodes: Queries.ArticlePreviewFragment[];
}) => (
  <div className="grid grid-cols-1 md:grid-cols-2 md:gap-x-16 lg:gap-x-32 gap-y-20 md:gap-y-32 mb-8">
    {nodes.map((node) => (
      <ArticlePreview key={node.id} {...node} />
    ))}
  </div>
);
