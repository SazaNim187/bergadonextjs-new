import Link from "next/link";

export default function Contact() {
  return (
    <main className="min-h-screen bg-gray-100 text-gray-900 p-8">
      <h1 className="text-4xl font-bold mb-6">Contact Me</h1>
      <p className="text-lg mb-4">You can reach me via email: <span className="font-semibold">nimrodbergado019@gmail.com</span></p>
      <p className="text-lg mb-4">Or connect with me on social media:</p>
      <ul className="list-disc pl-6 space-y-2 text-lg">
       
        <li>GitHub: [SazaNim187]</li>
        <li>Facebook: Nimrod Celestial Bergado</li>
        <li>Instagram: Niminimis</li>
        
      </ul>
      <Link href="/" className="text-blue-600 hover:underline mt-6 block">Back to Home</Link>
    </main>
  );
}
