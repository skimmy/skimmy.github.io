import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-50 border-t">
      <div className="container mx-auto px-4 py-8">
        <div className="text-center text-gray-600">
          <p className="align-middle">&copy; {(new Date().getFullYear())} Michele Schimd</p>
          <p>
            <Link href="https://github.com/skimmy/" target="_blank"><FaGithub className="mr-1 inline"/></Link>
            <Link href="https://www.linkedin.com/in/michele-schimd-44a85160/" target="_blank"><FaLinkedin className="inline"/></Link>
          </p>
        </div>
      </div>
    </footer>
  )
}