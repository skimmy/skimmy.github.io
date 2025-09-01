import { PROSE_CONTENT } from "@/styles/content";

export default function TopicLayout({
  children,
}: {
  children: React.ReactNode
}) {
    return (
        <div className={`max-w-4xl mx-auto ${PROSE_CONTENT}`}>
            {children}
        </div>
    );
}