import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import Reveal from "../components/Reveal";
import ApplicationModal from "../components/ApplicationModal";
import { ArrowUpRight } from "lucide-react";
import { useState } from "react";

export default function Careers(): JSX.Element {
    const [selectedRole, setSelectedRole] = useState<string | null>(null);

    const roles = [
        {
            title: "Senior Product Designer",
            department: "Design",
            location: "Remote",
            type: "Full-time",
        },
        {
            title: "Full Stack Engineer",
            department: "Engineering",
            location: "Remote / New York",
            type: "Full-time",
        },
        {
            title: "Growth Strategy Lead",
            department: "Strategy",
            location: "Remote",
            type: "Contract",
        },
        {
            title: "Frontend Developer (Creative)",
            department: "Engineering",
            location: "Remote",
            type: "Full-time",
        },
    ];

    const benefits = [
        {
            title: "Remote First",
            description: "Work from anywhere in the universe. We trust you to manage your time and output.",
        },
        {
            title: "Top-tier Equipment",
            description: "Get the latest Apple gear and a budget for your home office setup.",
        },
        {
            title: "Learning Budget",
            description: "Annual stipend for conferences, courses, and books to fuel your growth.",
        },
        {
            title: "Health & Wellness",
            description: "Comprehensive health coverage and wellness allowances for a balanced life.",
        },
    ];

    return (
        <div className="min-h-screen bg-transparent text-white">
            <NavBar />

            <main className="relative pt-32 pb-12">
                {/* Hero Section */}
                <section className="mx-auto max-w-7xl px-6 mb-16">
                    <Reveal>
                        <h1 className="text-6xl md:text-8xl font-black mb-8 tracking-tight">
                            Join the <br />
                            <span className="gradient-text">Cosmic Thinking Lab.</span>
                        </h1>
                    </Reveal>
                    <Reveal delayMs={100}>
                        <p className="text-xl md:text-2xl text-gray-400 max-w-2xl leading-relaxed font-light">
                            We are a team of visionaries, engineers, and designers building the future of digital experiences.
                            We're looking for obsessive perfectionists to join our mission.
                        </p>
                    </Reveal>
                </section>

                {/* Benefits Section */}
                <section className="mx-auto max-w-7xl px-6 mb-16">
                    <div className="border-t border-white/10 pt-16">
                        <Reveal delayMs={200}>
                            <h2 className="text-3xl font-bold mb-12">Why Cosmic Thinking Lab?</h2>
                        </Reveal>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                            {benefits.map((benefit, idx) => (
                                <Reveal key={benefit.title} delayMs={200 + (idx * 50)}>
                                    <div>
                                        <h3 className="text-xl font-bold mb-4 text-white">{benefit.title}</h3>
                                        <p className="text-gray-400 leading-relaxed text-sm">
                                            {benefit.description}
                                        </p>
                                    </div>
                                </Reveal>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Open Roles Section */}
                <section className="mx-auto max-w-7xl px-6 mb-16">
                    <div className="border-t border-white/10 pt-16">
                        <Reveal delayMs={300}>
                            <h2 className="text-3xl font-bold mb-12">Open Positions</h2>
                        </Reveal>

                        <div className="space-y-4">
                            {roles.map((role, idx) => (
                                <Reveal key={role.title} delayMs={300 + (idx * 50)}>
                                    <div
                                        onClick={() => setSelectedRole(role.title)}
                                        className="group relative border border-white/10 bg-white/5 p-8 hover:bg-white/10 transition-all duration-300 cursor-pointer"
                                    >
                                        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                                            <div>
                                                <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-yellow-400 transition-colors">
                                                    {role.title}
                                                </h3>
                                                <div className="flex gap-4 text-sm text-gray-400">
                                                    <span>{role.department}</span>
                                                    <span>•</span>
                                                    <span>{role.location}</span>
                                                    <span>•</span>
                                                    <span>{role.type}</span>
                                                </div>
                                            </div>
                                            <div className="flex items-center gap-2 text-white font-medium group-hover:translate-x-2 transition-transform">
                                                Apply Now <ArrowUpRight size={20} />
                                            </div>
                                        </div>
                                    </div>
                                </Reveal>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Culture CTA */}
                <section className="mx-auto max-w-7xl px-6">
                    <Reveal delayMs={400}>
                        <div className="bg-gradient-to-r from-gray-900 to-[#12122b] border border-white/10 p-12 md:p-20 text-center rounded-2xl">
                            <h2 className="text-4xl md:text-5xl font-bold mb-6">Don't see your role?</h2>
                            <p className="text-gray-400 mb-8 max-w-xl mx-auto text-lg">
                                We are always looking for exceptional talent. Send us your portfolio and tell us how you can contribute to the mission.
                            </p>
                            <button
                                onClick={() => setSelectedRole("General Application")}
                                className="bg-white text-black px-8 py-4 rounded-full font-bold hover:bg-gray-200 transition-colors inline-block cursor-pointer"
                            >
                                Email Us
                            </button>
                        </div>
                    </Reveal>
                </section>
            </main>

            <Footer />

            <ApplicationModal
                isOpen={!!selectedRole}
                onClose={() => setSelectedRole(null)}
                roleTitle={selectedRole || ""}
            />
        </div>
    );
}
