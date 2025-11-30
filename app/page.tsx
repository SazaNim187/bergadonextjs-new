export default function Home() {
  return (
    <div className="flex flex-col gap-24"> {/* bigger gap */}

      {/* Hero Section */}
      <section
        className="text-center py-24 px-8 rounded-2xl"
        style={{ backgroundColor: "#ecdcc3", color: "#4b341c" }}
      >
        <h1 className="text-5xl font-bold mb-6">
          Welcome to My Portfolio
        </h1>
        <p className="text-xl max-w-2xl mx-auto opacity-80 leading-relaxed">
          Explore my background, interests, and academic journey. This website
          highlights my personal story and experiences.
        </p>
      </section>

      {/* Cards Section */}
      <section className="grid grid-cols-1 sm:grid-cols-2 gap-12"> {/* more spacing */}
        
        {/* About */}
        <a
          href="/about"
          className="block p-8 rounded-xl shadow-md transition hover:scale-[1.015]"
          style={{
            backgroundColor: "#f0e3d1",
            color: "#4b341c",
            border: "2px solid #d2b896",
          }}
        >
          <h2 className="text-2xl font-semibold mb-3">About Me</h2>
          <p className="opacity-80 leading-relaxed">
            Learn more about who I am, my story, personality, and what drives me.
          </p>
        </a>

        {/* Education */}
        <a
          href="/education"
          className="block p-8 rounded-xl shadow-md transition hover:scale-[1.015]"
          style={{
            backgroundColor: "#f0e3d1",
            color: "#4b341c",
            border: "2px solid #d2b896",
          }}
        >
          <h2 className="text-2xl font-semibold mb-3">Education</h2>
          <p className="opacity-80 leading-relaxed">
            View my academic journey, school background, and achievements.
          </p>
        </a>

        {/* Hobbies */}
        <a
          href="/hobbies"
          className="block p-8 rounded-xl shadow-md transition hover:scale-[1.015]"
          style={{
            backgroundColor: "#f0e3d1",
            color: "#4b341c",
            border: "2px solid #d2b896",
          }}
        >
          <h2 className="text-2xl font-semibold mb-3">Hobbies</h2>
          <p className="opacity-80 leading-relaxed">
            Discover the interests and activities that I enjoy during my free time.
          </p>
        </a>

        {/* Contact */}
        <a
          href="/contact"
          className="block p-8 rounded-xl shadow-md transition hover:scale-[1.015]"
          style={{
            backgroundColor: "#f0e3d1",
            color: "#4b341c",
            border: "2px solid #d2b896",
          }}
        >
          <h2 className="text-2xl font-semibold mb-3">Contact</h2>
          <p className="opacity-80 leading-relaxed">
            Get in touch with me for inquiries, collaborations, or opportunities.
          </p>
        </a>

      </section>
    </div>
  );
}
