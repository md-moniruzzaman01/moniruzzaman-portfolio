import Link from "next/link";

const navItems = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  return (
    <header className="bg-gray-900 text-white py-4 shadow-md">
      <nav className="container mx-auto flex flex-wrap justify-between items-center px-4 max-w-7xl">
        {/* Logo */}
        <Link href="/">
          <h1 className="text-2xl font-bold cursor-pointer">Moniruzzaman</h1>
        </Link>

        {/* Navigation Links */}
        <ul className="flex flex-wrap gap-6 mt-4 lg:mt-0">
          {navItems.map((item) => (
            <li key={item.label}>
              <Link
                href={item.href}
                className="hover:text-gray-400 transition-colors font-medium"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
