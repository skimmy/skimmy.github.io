export default function TopicLayout({
  children,
}: {
  children: React.ReactNode
}) {
    return (
        <div className="prose dark:prose-invert max-w-4xl mx-auto">
            {children}
        </div>
    );
}