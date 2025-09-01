import { BlogPost } from "@/lib/mdx";
import { formatDate } from "@/lib/util";
import { LINK_BLOG_TITLE, TAG_BADGE } from "@/styles/elements";
import Tags from "./Tags";
import UnderlinedLink from "../ui/UnderlinedLink";


interface BlogPostCardProps {
    post: BlogPost;
    beforeTitle?: string;
    afterTitle?: string;
}

const BlogPostCard = ({ post, beforeTitle, afterTitle }: BlogPostCardProps) => {
    return (
        <div className="relative overflow-hidden border-b border-dotted border-gray-500 pb-4 mb-2">

            <UnderlinedLink href={`/blog/${post.slug}`} linkClass={LINK_BLOG_TITLE} underlineClass="bg-blue-600 dark:bg-blue-400">
                <h3 className="mt-4 text-2xl mb-0 font-semibold group group-hover:max-w-full">
                    {beforeTitle}
                    {post.title}
                    {afterTitle}
                </h3>
            </UnderlinedLink>
            <div className="font-thin pb-3">{post.excerpt}</div>
            <div className="flex items-center gap-2 text-sm text-gray-500">
                <time>{formatDate(post.date)}</time>
                <span>•</span>
                <span>{post.readingTime}</span>
                <div><Tags tags={post.tags} tagStyle={`${TAG_BADGE}`} /></div>
            </div>
        </div>
    )
};

export default BlogPostCard;