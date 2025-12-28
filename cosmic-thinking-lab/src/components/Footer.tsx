import { Link } from "react-router-dom";

export default function Footer(): JSX.Element {
  return (
    <footer className="py-8 bg-transparent border-t border-white/10">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="text-center md:text-left">
            <div className="text-2xl font-bold text-white mb-2">Cosmic Thinking Lab</div>
            <div className="text-gray-500 text-sm">Software Development & Strategic Consulting</div>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-8 text-sm">
            <Link to="/services" className="text-gray-400 hover:text-white transition-colors">
              Services
            </Link>
            <Link to="/portfolio" className="text-gray-400 hover:text-white transition-colors">
              Work
            </Link>
            <Link to="/about" className="text-gray-400 hover:text-white transition-colors">
              About
            </Link>
            <Link to="/careers" className="text-gray-400 hover:text-white transition-colors">
              Careers
            </Link>
            <Link to="/contact" className="text-gray-400 hover:text-white transition-colors">
              Contact
            </Link>
          </div>

          <div className="text-center md:text-right text-gray-500 text-sm">
            <div>© {new Date().getFullYear()} Cosmic Thinking Lab</div>
            <div className="mt-1">All rights reserved</div>
          </div>
        </div>
      </div>
    </footer>
  );
}
