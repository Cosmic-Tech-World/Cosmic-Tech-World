import NavBar from '../components/NavBar'
import ContactCTA from '../components/ContactCTA'
import Footer from '../components/Footer'

export default function ContactPage() {
  return (
    <div className="min-h-screen">
      <NavBar />
      <main className="relative pt-28">
        <div className="mx-auto max-w-7xl px-6">
          <h1 className="text-3xl md:text-4xl font-semibold">
            <span className="bg-clip-text text-transparent bg-[linear-gradient(100deg,#dbe4ff_0%,#f1f5ff_40%,#dbe4ff_100%)]">
              Get in Touch
            </span>
          </h1>
          <p className="mt-3 text-white/70 max-w-2xl">
            Ready to start your next project? We'd love to hear about your goals and how we can help.
          </p>
        </div>
        <ContactCTA />
      </main>
      <Footer />
    </div>
  )
}