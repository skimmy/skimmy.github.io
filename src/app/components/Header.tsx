import Link from 'next/link'

export default function Header() {
  return (
    <header className="bg-white shadow-sm border-b">
      <div className="container mx-auto px-4 py-4">
        <nav className="flex items-center justify-between">
          <Link href="/" className="text-xl font-bold">
            My Blog
          </Link>
          <div className="flex space-x-6">
            <Link href="/" className="hover:text-blue-600">
              Home
            </Link>
            <Link href="/blog" className="hover:text-blue-600">
              Blog
            </Link>
          </div>
        </nav>
      </div>
    </header>
  )
}