import Link from 'next/link'
import Image from 'next/image'
import { NAV_CONTAINER } from '@/styles/blocks'


const navMenu = [
  {
    text: "Home",
    link: "/"  
  },
  // {
  //   text: "Topics",
  //   link: "/topics"
  // },
  // {
  //   text: "Blog",
  //   link: "/blog"
  // },
  // {
  //   text: "About",
  //   link: "/about"
  // }
]

export default function Header() {
  return (
    <header className={`${NAV_CONTAINER}`}>
      <div className="container mx-auto px-4 py-4">
        <nav className="flex items-center justify-between">
          <Link href="/" className="relative text-xl font-bold w-12 h-12">
            <Image src="/home_logo.png" fill alt={''} />
          </Link>
          <div className="flex space-x-6">
            {navMenu.map((item, index) => (<Link key={index} href={item.link} className="hover:text-blue-600">{item.text}</Link>))}
          </div>
        </nav>
      </div>
    </header>
  )
}