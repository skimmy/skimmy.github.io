import { Author, Social } from "../../../site.config";
import { FOOTER_CONTAINER, FOOTER_TEXT } from "@/styles/blocks";
import SocialLinks from "@/app/components/content/SocialLinks";

export default function Footer() {
  return (
    <footer className={`${FOOTER_CONTAINER}`}>
      <div className={`${FOOTER_TEXT}`}>
        <p>&copy; {(new Date().getFullYear())} {Author}</p>
        <SocialLinks className="text-xl" social={Social} />
      </div>
    </footer>
  )
}

