import { scanTopics, TopicItem } from "@/lib/scanTopics";
import { PAGE_TITLE, SECTION_TITLE } from "@/styles/elements";
import { ARTICLE_CONTAINER } from "@/styles/paging";
import Link from "next/link";

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
        <div className={ARTICLE_CONTAINER}>
            <h1 className={PAGE_TITLE}>Topics</h1>
            <p>
                In the <b>Topics</b> section, I gather notes, guides, tutorial, references, and other resources on various topics. Although this page presents topics divided by subject, topics are connected with the idea that it should represent an <i>organic</i> presentation. By design, topics are <b>not</b> linearly ordered (except in this &quot;index&quot; page), but they are linked together based on their content.
            </p>
            {Object.entries(topicsBySubject).map(([subject, subjectTopics]) => (
                <div key={subject}>
                    <h2 className={SECTION_TITLE}>{subject}</h2>
                    {subjectTopics.map((topic) => (
                        <div key={topic.fullPath}>
                            <Link href={topic.path}>{topic.name}</Link>
                        </div>
                    ))}
                </div>
            ))}
        </div>
    );
}