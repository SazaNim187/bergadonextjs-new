import Link from "next/link";

export default function Hobbies() {
  return (
    <main className="min-h-screen bg-gray-50 text-gray-900 p-8">
      <h1 className="text-4xl font-bold mb-6">Hobbies</h1>
      <ul className="list-disc pl-6 space-y-2 text-lg">
        <li>Gaming</li>
        <li>Watching Anime</li>
        <li>Digital Art</li>
        <li>Playing Melee Tools</li>
        <li>Simping for <b>HuTao</b></li>
      </ul>
      <Link href="/" className="text-blue-600 hover:underline mt-6 block">Back to Home</Link>
    </main>
  );
}
