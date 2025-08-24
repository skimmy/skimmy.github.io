import { scanTopics, TopicItem } from "@/lib/scanTopics";
import { LINK_DEFAULT, PAGE_TITLE, SECTION_TITLE } from "@/styles/elements";
import { ARTICLE_CONTAINER } from "@/styles/paging";
import Link from "next/link";
import MarkdownRender from "../components/content/MarkdownRender";

export default function Topics() {
    const topics = scanTopics();
    const topicsBySubject = topics.reduce((acc, topic) => {
        if(!acc[topic.subject]) {
            acc[topic.subject] = [];
        }
        acc[topic.subject].push(topic);
        return acc;
    }, {} as Record<string, TopicItem[]>)
    return(
        <div className={`${ARTICLE_CONTAINER}`}>
            <h1 className={PAGE_TITLE}>Topics</h1>
            <div>
                <MarkdownRender url="src/app/topics/topics.md" />
            </div>
            <div className="mt-2 mb-5">
                <h3 className="text-md mb-0">Subjects</h3>
                <div className="flex flex-col">
                    {Object.entries(topicsBySubject).map(([subject]) => (
                        <Link href={`#${subject}`} className={`${LINK_DEFAULT}`} key={subject}>{subject}</Link>
                    ))}
                </div>
            </div>
            {Object.entries(topicsBySubject).map(([subject, subjectTopics]) => (
                <div id={subject} key={subject}>
                    <h2 className={SECTION_TITLE}>{subject}</h2>
                    {subjectTopics.map((topic) => (
                        <div className="border-b-1 pb-4 my-5" key={topic.fullPath}>
                            <Link href={`/topics/${topic.path}`} className={`${LINK_DEFAULT}`}>{topic.name}</Link>
                        </div>
                    ))}
                </div>
            ))}
        </div>
    );
}