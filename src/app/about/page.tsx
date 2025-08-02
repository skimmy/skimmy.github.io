import { PAGE_TITLE } from "@/styles/elements";
import { ARTICLE_CONTAINER } from "@/styles/paging";

export default function About() {
    return(
        <div className={ARTICLE_CONTAINER}>
            <h1 className={PAGE_TITLE}>About this site</h1>
            <p className="first-letter:text-3xl">
                This is website that gathers many information I wrote and found useful as well as ideas, guides, and miscellaneous material I use for teaching or studying.
            </p>
        </div>
    )
}