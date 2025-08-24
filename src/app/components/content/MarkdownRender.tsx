import { MDXRemote } from "next-mdx-remote/rsc"
import fs from "fs"
import { mdxOptions } from "@/lib/mdx-config";

interface MarkdownRenderProps {
    url: string
}

export default async function MarkdownRender({url} : MarkdownRenderProps) {
    let ok = false;
    let source = "";
    try {
        source = fs.readFileSync(url, 'utf8');
        ok = true;
    } catch(error) {
        console.log(error);
    }
    return (
        ok ? <MDXRemote source={source} options={mdxOptions} /> : <></>
    )
}