import Link from "next/link";

export default function Education() {
  return (
    <main className="min-h-screen bg-gray-100 text-gray-900 p-8">
      <h1 className="text-4xl font-bold mb-6">Education</h1>
      <ul className="list-disc pl-6 space-y-2 text-lg">
        <li>School: [Naga College Foundation INC.]</li>
        <li>Year: [2nd Year]</li>
        <li>Courses/Programs: [Bachelor of Science in Computer Science]</li>
        
      </ul>
      <Link href="/" className="text-blue-600 hover:underline mt-6 block">Back to Home</Link>
    </main>
  );
}
