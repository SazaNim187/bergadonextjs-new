export default function Home() {
  return (
    <div className="flex flex-col gap-16">

      {/* Hero Section */}
      <section className="text-center py-20 px-6 rounded-2xl"
        style={{ backgroundColor: "#ecdcc3", color: "#4b341c" }}
      >
        <h1 className="text-4xl font-bold mb-4">
          Welcome to My Portfolio
        </h1>
        <p className="text-lg max-w-xl mx-auto opacity-80">
          Explore my background, interests, and academic journey.
        </p>
      </section>

      {/* Cards Section */}
      <section className="grid grid-cols-1 sm:grid-cols-2 gap-8">
        
        {/* About */}
        <a href="/about" className="block p-6 rounded-xl shadow-md transition hover:scale-[1.02]"
          style={{ backgroundColor: "#f0e3d1", color: "#4b341c" }}
        >
          <h2 className="text-xl font-semibold mb-2">About Me</h2>
          <p className="opacity-80">
            Learn more about who I am and what I do.
          </p>
        </a>

        {/* Education */}
        <a href="/education" className="block p-6 rounded-xl shadow-md transition hover:scale-[1.02]"
          style={{ backgroundColor: "#f0e3d1", color: "#4b341c" }}
        >
          <h2 className="text-xl font-semibold mb-2">Education</h2>
          <p className="opacity-80">
            View my academic background and achievements.
          </p>
        </a>

        {/* Hobbies */}
        <a href="/hobbies" className="block p-6 rounded-xl shadow-md transition hover:scale-[1.02]"
          style={{ backgroundColor: "#f0e3d1", color: "#4b341c" }}
        >
          <h2 className="text-xl font-semibold mb-2">Hobbies</h2>
          <p className="opacity-80">
            Discover the things I enjoy in my free time.
          </p>
        </a>

        {/* Contact */}
        <a href="/contact" className="block p-6 rounded-xl shadow-md transition hover:scale-[1.02]"
          style={{ backgroundColor: "#f0e3d1", color: "#4b341c" }}
        >
          <h2 className="text-xl font-semibold mb-2">Contact</h2>
          <p className="opacity-80">
            Reach out to me for inquiries or collaborations.
          </p>
        </a>
      </section>

    </div>
  );
}
