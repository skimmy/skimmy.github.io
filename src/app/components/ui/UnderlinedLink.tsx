import Link from "next/link";

interface UnderlinedLinkProps extends React.PropsWithChildren {
    href: string,
    linkClass: string,
    underlineClass: string,
}

const UnderlinedLink = ({href, linkClass, underlineClass, children} : UnderlinedLinkProps) => {
    return(
    <Link href={href} className={`${linkClass} relative inline-block transition-colors duration-300 group`}>
        {children}
        <span className={`${underlineClass} absolute left-1/2 bottom-0 w-0 h-0.5  transition-all duration-300 group-hover:w-full group-hover:left-0`}></span>
    </Link>
    );
};

export default UnderlinedLink;