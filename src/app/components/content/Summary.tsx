import { PARAGRAPH_TITLE } from "@/styles/elements";
import { MDXRemote } from "next-mdx-remote/rsc";
import fs from "fs";

interface SummaryProps {
    filePath: string;
    head?: string | null;
    showError?: boolean;
}

export default function Summary({filePath, head="Summary", showError=true}: SummaryProps) {
    try {
        const source = fs.readFileSync(filePath, 'utf8');
        return (
            <div>
                {head && <h3 className={PARAGRAPH_TITLE}>{head}</h3>}
                <MDXRemote source={source} />
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