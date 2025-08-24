import { PARAGRAPH_TITLE } from "@/styles/elements";
import MarkdownRender from "./MarkdownRender";

interface SummaryProps {
    filePath: string;
    head?: string | null;
    showError?: boolean;
}

export default function Summary({filePath, head="Summary", showError=true}: SummaryProps) {
    try {
        return (
            <div>
                {head && <h3 className={PARAGRAPH_TITLE}>{head}</h3>}
                <MarkdownRender url={filePath} />
            </div>)
    } catch (e) {
        console.log(e);
        return (
            <div>
                {showError && <div><i>No summary available on {filePath}</i></div>}
            </div>
        )
    }

}