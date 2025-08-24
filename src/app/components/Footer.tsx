import Link from "next/link";
import { FaGithub, FaLinkedin, FaStackOverflow } from "react-icons/fa";
import { Author, Social } from "../../../site.config";
import { FOOTER_CONTAINER, FOOTER_TEXT } from "@/styles/blocks";
import { FaBluesky } from "react-icons/fa6";

interface UserNameProps {
  userName: string
}

function GitHub({ userName }: UserNameProps) {
  return (
    <Link href={`https://github.com/${userName}/`} target="_blank">
      <FaGithub className="mr-1 inline" />
    </Link>
  );
}

function BlueSky({ userName }: UserNameProps) {
  return (
    <Link href={`https://bsky.app/profile/${userName}/`} target="_blank">
      <FaBluesky className="mr-1 inline" />
    </Link>
  )
}

function Linkedin({ userName }: UserNameProps) {
  return (
    <Link href={`https://www.linkedin.com/in/${userName}/}`} target="_blank">
      <FaLinkedin className="mr-1 inline" />
    </Link>
  );
}

function StackOverflow({ userName }: UserNameProps) {
  return (
    <Link href={`https://stackoverflow.com/users/${userName}/}`} target="_blank">
      <FaStackOverflow className="mr-1 inline" />
    </Link>
  );
}

export default function Footer() {
  return (
    <footer className={`${FOOTER_CONTAINER}`}>
      <div className={`${FOOTER_TEXT}`}>
        {/* <div className="text-center"> */}
          <p>&copy; {(new Date().getFullYear())} {Author}</p>
          <p className="text-2xl">
            {Social.Github ? <GitHub userName={Social.Github} /> : <></>}
            {Social.Bluesky ? <BlueSky userName={Social.Bluesky} /> : <></>}
            {Social.Linkedin ? <Linkedin userName={Social.Github} /> : <></>}
            {Social.StackOverflow ? <StackOverflow userName={Social.StackOverflow} /> : <></>}
          </p>
        {/* </div> */}
      </div>
    </footer>
  )
}

