// import ReferencesList from "@/app/components/content/ReferenceList";
import Summary from "@/app/components/content/Summary";
import { PAGE_TITLE } from "@/styles/elements";
import { ARTICLE_CONTAINER } from "@/styles/paging";
import path from "path";

export default function MLTheory() {
    const filePath = path.join(process.cwd(), 'src/app', 'topics', 'ml_theory', 'summary.mdx');
    return (
        <div className={ARTICLE_CONTAINER}>
            <article>
                <h1 className={PAGE_TITLE}>Machine Learning Theory</h1>
                <div>
                    <Summary filePath={filePath} head={null} />
                </div>
                {/* <div className="my-2">
                    <ReferencesList filePath="src/app/topics/ml_theory/links.json" />
                </div> */}
            </article>
        </div>
    );
}