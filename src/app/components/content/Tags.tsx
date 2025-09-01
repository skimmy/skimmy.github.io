interface TagsProps {
    tags: string[],
    tagStyle?: string,
    containerStyle?: string,
    gapStyle?: string,
}

const Tags = ({ tags, tagStyle = "bg-gray-200 px-2 py-1 rounded-full", containerStyle = "", gapStyle = "gap-2" }: TagsProps) => {
    return (
        <div className={`flex flex-wrap ${gapStyle} ${containerStyle}`}>
            {tags.map((tag) => (
                <span key={tag} className={tagStyle}>
                    {tag}
                </span>
            ))}
        </div>
    )
};

export default Tags;