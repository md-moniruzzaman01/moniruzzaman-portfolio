import Link from "next/link";

export default function Navbar() {
  return (
    <header className="bg-gray-900 text-white py-4 shadow-md">
      <nav className="container mx-auto flex justify-between items-center px-4">
        <Link href="/">
          <h1 className="text-2xl font-bold">Moniruzzaman</h1>
        </Link>
        <ul className="flex space-x-6">
          <li>
            <Link href="#about" className="hover:text-gray-400">About</Link>
          </li>
          <li>
            <Link href="#skills" className="hover:text-gray-400">Skills</Link>
          </li>
          <li>
            <Link href="#projects" className="hover:text-gray-400">Projects</Link>
          </li>
          <li>
            <Link href="#contact" className="hover:text-gray-400">Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
