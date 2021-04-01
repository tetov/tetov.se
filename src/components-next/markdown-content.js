import ReactMarkdownWithHtml from "react-markdown";
import gfm from "remark-gfm";
import removeComments from "remark-remove-comments";
import markdownStyles from "./markdown-styles.module.css";

export default function MarkdownContent({ markdown }) {
    return (
        <ReactMarkdownWithHtml
            children={markdown}
            plugins={[gfm, removeComments]}
            className={markdownStyles["markdown"]}
        />
    )

}
