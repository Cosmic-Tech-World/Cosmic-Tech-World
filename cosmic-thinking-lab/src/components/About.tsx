import Reveal from "./Reveal";

export default function About(): JSX.Element {
  const stats: Array<{ label: string; value: string }> = [
    { label: "Projects Delivered", value: "150+" },
    { label: "Happy Clients", value: "100+" },
    { label: "Team Experts", value: "25+" },
  ];

  return (
    <section id="about" className="relative pt-20 pb-4 md:pt-24 md:pb-6 bg-transparent overflow-hidden">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-20 md:grid-cols-12 items-start">
          <Reveal className="md:col-span-6" delayMs={0}>
            <div>
              <h2 className="text-6xl md:text-8xl font-black text-white mb-8 tracking-tight">
                About Cosmic Thinking Lab
              </h2>
              <p className="text-xl md:text-2xl text-gray-400 leading-relaxed font-light mb-8">
                We partner with ambitious teams to build world-class software products. Since 2015, we've helped startups and enterprises scale their technical vision.
              </p>

              <div className="grid grid-cols-3 gap-8">
                {stats.map((s, idx) => (
                  <Reveal key={s.label} delayMs={200 + 100 * idx}>
                    <div className="text-center">
                      <div className="text-4xl font-bold text-white mb-2">{s.value}</div>
                      <div className="text-sm text-gray-500 uppercase tracking-wider">{s.label}</div>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal className="md:col-span-6" delayMs={200}>
            <div className="space-y-8">
              <div className="border-l border-white/20 pl-8">
                <h3 className="text-2xl font-bold text-white mb-4">Our Mission</h3>
                <p className="text-gray-400 leading-relaxed">
                  To be the trusted technology partner for visionary teams. We combine technical excellence with strategic thinking to deliver software that creates real value.
                </p>
              </div>

              <div className="border-l border-white/20 pl-8">
                <h3 className="text-2xl font-bold text-white mb-4">Our Approach</h3>
                <p className="text-gray-400 leading-relaxed">
                  We listen first, then architect thoughtfully. Every decision is driven by your business goals, not trends. We build partnerships, not just projects.
                </p>
              </div>

              <div className="border-l border-white/20 pl-8">
                <h3 className="text-2xl font-bold text-white mb-4">Our Commitment</h3>
                <p className="text-gray-400 leading-relaxed">
                  Transparent communication, consistent delivery, and genuine care for your success. We treat your challenges as our own and invest in long-term relationships.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
