import { PAGE_TITLE } from "@/styles/elements";
import { ARTICLE_CONTAINER } from "@/styles/paging";
import { metadata } from "../layout";
import AboutMD from "./about.mdx"

export default function About() {
    return(
        <div className={ARTICLE_CONTAINER}>
            <h1 className={PAGE_TITLE}>About {`${metadata.title}`}</h1>
            <div>
                <AboutMD />
            </div>
        </div>
    )
}