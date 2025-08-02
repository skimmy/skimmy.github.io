import path from "path";
import { PAGE_TITLE } from "@/styles/elements";
import { ARTICLE_CONTAINER } from "@/styles/paging";
import Summary from "@/app/components/content/Summary";
import ReferencesList from "@/app/components/content/ReferenceList";

export default function Rag() {
    const filePath = path.join(process.cwd(), 'src/app', 'topics', 'rag', 'summary.mdx');
    return (
        <div className={ARTICLE_CONTAINER}>
            <article>
                <h1 className={PAGE_TITLE}>RAG: Retrieval-Augmented Generation</h1>
                <div>
                    <Summary filePath={filePath} head={null}/>
                </div>
                <div className="my-2">
                    <ReferencesList filePath="src/app/topics/rag/links.json"/>
                </div>
            </article>
        </div>
)}