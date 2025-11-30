import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-gray-900 text-white px-8 py-4 shadow-md sticky top-0 z-50">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold">[Your Name]</h1>
        <div className="flex gap-6">
          <Link href="/" className="hover:text-yellow-400">Home</Link>
          <Link href="/about" className="hover:text-yellow-400">About</Link>
          <Link href="/education" className="hover:text-yellow-400">Education</Link>
          <Link href="/hobbies" className="hover:text-yellow-400">Hobbies</Link>
          <Link href="/contact" className="hover:text-yellow-400">Contact</Link>
        </div>
      </div>
    </nav>
  );
}
