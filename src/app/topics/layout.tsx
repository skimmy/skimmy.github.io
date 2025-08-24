export default function TopicLayout({
  children,
}: {
  children: React.ReactNode
}) {
    return (
        <div className="max-w-4xl mx-auto">
            {children}
        </div>
    );
}