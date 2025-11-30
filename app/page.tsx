import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-gray-900">
      <h1 className="text-5xl font-bold mt-8">Welcome to My Personal Website</h1>
      <Image
        src="/profile.jpg"
        alt="My Photo"
        width={200}
        height={200}
        className="rounded-full mt-6"
      />
      <p className="mt-4 text-lg text-center max-w-md">
        Hi! I’m Nimrod, and this is my personal website.
      </p>
      <nav className="flex gap-6 mt-8">
        <Link href="/about" className="text-blue-600 hover:underline">About</Link>
        <Link href="/education" className="text-blue-600 hover:underline">Education</Link>
        <Link href="/hobbies" className="text-blue-600 hover:underline">Hobbies</Link>
        <Link href="/contact" className="text-blue-600 hover:underline">Contact</Link>
      </nav>
    </main>
  );
}
