import Link from "next/link";

export default function About() {
  return (
    <main className="min-h-screen bg-gray-50 text-gray-900 p-8">
      <h1 className="text-4xl font-bold mb-6">About Me</h1>
      <p className="text-lg max-w-2xl mb-4">
        My name is Nimrod. I’m a 19 years old student in Bachelor of Science in Computer Science.
        I do coding and I love designing, and building projects that help people.
      </p>
      <p className="text-lg max-w-2xl mb-4">
        I also enjoy gaming and watching anime. This website is a small showcase
        of who I am and what I do.
      </p>
      <Link href="/" className="text-blue-600 hover:underline">Back to Home</Link>
    </main>
  );
}
