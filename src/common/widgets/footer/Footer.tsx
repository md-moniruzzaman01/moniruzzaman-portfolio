export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-6 mt-12">
      <div className="container mx-auto text-center px-4">
        <p>&copy; {new Date().getFullYear()} Yousuf. All rights reserved.</p>
        <p className="mt-2">
          Connect with me on{" "}
          <a
            href="https://www.linkedin.com/in/yousuf"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 hover:underline"
          >
            LinkedIn
          </a>
          .
        </p>
      </div>
    </footer>
  );
}
