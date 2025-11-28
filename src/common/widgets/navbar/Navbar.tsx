import Link from "next/link";

const navItems = [

  { label: "Home", href: "/" },
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export default function FloatingNav() {
  return (
    <header className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50">
      <nav className="bg-gray-900/70 backdrop-blur-md text-white px-8 py-3 rounded-full shadow-lg">
        <ul className="flex gap-8 justify-center items-center">
          {navItems.map((item) => (
            <li key={item.label}>
              <Link
                href={item.href}
                className="hover:text-gray-300 transition-colors font-medium"
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
