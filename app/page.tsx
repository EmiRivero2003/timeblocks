
import Link from "next/link";

const features = [
  {
    title: "Visual Scheduling",
    description:
      "Organize your daily activities using clear and intuitive time blocks.",
    icon: "📅",
  },
  {
    title: "Smart Categories",
    description:
      "Group your activities with color-coded categories for better organization.",
    icon: "🎨",
  },
  {
    title: "Recurring Activities",
    description:
      "Plan repeated activities and build consistent daily and weekly routines.",
    icon: "🔄",
  },
];

export default function HomePage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <header className="border-b border-slate-800">
        <nav
          aria-label="Main navigation"
          className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-6 py-5"
        >
          <Link
            href="/"
            className="text-2xl font-bold text-blue-400"
          >
            TimeBlocks
          </Link>

          <span className="text-sm text-slate-400">
            Visual Schedule Organizer
          </span>
        </nav>
      </header>

      <section className="mx-auto max-w-6xl px-6 py-24 text-center">
        <span className="rounded-full border border-blue-700 bg-blue-950 px-4 py-2 text-sm text-blue-300">
          Plan Smarter. Live Better.
        </span>

        <h1 className="mx-auto mt-8 max-w-3xl text-5xl font-bold leading-tight md:text-6xl">
          Take Control of Your Time
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-300">
          TimeBlocks helps you organize activities,
          manage your schedule, and build productive
          routines through visual time management.
        </p>

        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <a
            href="#features"
            className="rounded-xl bg-blue-600 px-8 py-3 font-semibold transition hover:bg-blue-500 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-400"
          >
            Explore Features
          </a>

          <a
            href="#about"
            className="rounded-xl border border-slate-700 px-8 py-3 font-semibold transition hover:bg-slate-800 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-400"
          >
            Learn More
          </a>
        </div>
      </section>

      <section
        id="features"
        aria-labelledby="features-heading"
        className="bg-slate-900 px-6 py-20"
      >
        <div className="mx-auto max-w-6xl">
          <h2
            id="features-heading"
            className="mb-12 text-center text-3xl font-bold"
          >
            Everything You Need to Stay Organized
          </h2>

          <div className="grid gap-6 md:grid-cols-3">
            {features.map((feature) => (
              <article
                key={feature.title}
                className="rounded-2xl border border-slate-700 bg-slate-950 p-8"
              >
                <span aria-hidden="true" className="text-4xl">
                  {feature.icon}
                </span>

                <h3 className="mt-5 text-xl font-bold">
                  {feature.title}
                </h3>

                <p className="mt-4 leading-7 text-slate-400">
                  {feature.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        id="about"
        className="mx-auto max-w-4xl px-6 py-20 text-center"
      >
        <h2 className="text-3xl font-bold">
          Build Better Routines
        </h2>

        <p className="mt-6 leading-8 text-slate-300">
          Whether you are managing school, work, or
          personal goals, TimeBlocks is designed to
          make planning simple and accessible.
        </p>
      </section>

      <footer className="border-t border-slate-800 px-6 py-8 text-center text-sm text-slate-400">
        TimeBlocks © 2026. All rights reserved.
      </footer>
    </main>
  );
}
