import Reveal from "./Reveal";

type Project = {
  name: string;
  tagline: string;
  tags: string[];
  outcomes: string[];
};

const projects: Project[] = [
  { name: "SaaS Analytics Dashboard", tagline: "Real-time data visualization platform", tags: ["React", "Node.js", "PostgreSQL"], outcomes: ["40K users", "99.9% uptime"] },
  { name: "E-Commerce Redesign", tagline: "Complete checkout flow optimization", tags: ["Next.js", "Performance"], outcomes: ["35% CVR increase", "2s load time"] },
  { name: "Fintech Web App", tagline: "Secure transaction platform", tags: ["React", "Microservices"], outcomes: ["$2M/mo volume", "SOC 2 certified"] },
  { name: "Mobile App MVP", tagline: "React Native cross-platform app", tags: ["React Native", "Firebase"], outcomes: ["iOS & Android", "50K downloads"] },
  { name: "API Infrastructure", tagline: "High-performance REST API", tags: ["TypeScript", "AWS", "Docker"], outcomes: ["10K RPS", "100ms p95"] },
  { name: "Design System", tagline: "Component library for enterprise", tags: ["React", "Storybook"], outcomes: ["200+ components", "3 teams"] },
];

export default function Portfolio(): JSX.Element {
  return (
    <section id="portfolio" className="relative py-4 md:py-6 bg-transparent">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center mb-24">
          <h2 className="text-6xl md:text-8xl font-black text-white mb-8 tracking-tight">
            Portfolio
          </h2>
          <p className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto leading-relaxed font-light">
            Showcasing our impact through transformative digital solutions.
          </p>
        </div>

        <div className="grid gap-8 md:gap-12 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, idx) => (
            <Reveal key={p.name} delayMs={100 * (idx % 3)}>
              <article className="group border border-white/10 hover:border-white/30 transition-colors p-8 h-96 flex flex-col">
                <div className="mb-6 flex-1">
                  <h3 className="text-2xl font-bold text-white mb-3">{p.name}</h3>
                  <p className="text-gray-400 mb-6 leading-relaxed">{p.tagline}</p>
                </div>

                <div className="flex flex-wrap gap-2 mb-6">
                  {p.tags.map((t) => (
                    <span
                      key={t}
                      className="px-3 py-1 bg-white/5 text-gray-300 text-sm rounded-full border border-white/10"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div className="grid grid-cols-2 gap-4 mb-6">
                  {p.outcomes.map((o) => (
                    <div
                      key={o}
                      className="text-center p-3 bg-white/5 rounded-lg border border-white/10"
                    >
                      <div className="text-lg font-bold text-white">{o}</div>
                    </div>
                  ))}
                </div>

                <div className="pt-4 border-t border-white/10 mt-auto">
                  <a
                    href="#contact"
                    className="text-sm font-medium text-white hover:text-gray-300 transition-colors inline-flex items-center gap-2"
                  >
                    <span>Learn more</span>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </a>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
