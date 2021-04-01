import MarkdownContent from "./markdown-content";

export default function PostBody({ markdown }) {
  return (
    <div className="max-w-2xl mx-auto">
      <MarkdownContent markdown={markdown} />
    </div>
  );
}
