import { Link } from "react-router-dom";

export default function Hero(): JSX.Element {
  return (
    <section data-hero="" className="hero-section">
      <div className="nav-wrapper">
        <div>
          <Link to="/" className="flex items-center gap-3">
            <img 
              src="https://lh3.googleusercontent.com/gg-dl/ABS2GSn1YP1MKmJKU0NniuXlvfv9Y0e5Iwlc6YI4b2xcoS4RSNFc4G6q_LNNBG6uqJ_zZWZBfqP7PEwncvKAIs6A1C0y5VRuSEvp7IBUQIS7f_G0K7arzrUXMptVoknPTIXwc4o4Ar5tQWGgnVl1gaCVz94hRCyyy7LYEmGe3lKpsLAXni9l5w=s1024-rj" 
              alt="Cosmic Thinking Lab" 
              className="w-10 h-10 rounded" 
            />
            <span className="text-white text-lg font-semibold">Cosmic Thinking Lab</span>
          </Link>
        </div>
      </div>

      <div className="full-video w-embed">
        <div style={{ width: "100%", height: "100%" }} className="w-background-video w-background-video-atom">
          <video playsInline loop muted autoPlay data-wf-ignore="true" data-object-fit="cover" preload="auto">
            <source src="https://player.vimeo.com/progressive_redirect/playback/1125882576/rendition/1440p/file.mp4?loc=external&signature=a0067ca78212d9ae569da99e8676f4bac2702af80336b7cdf8cef7ce3ef04388" data-wf-ignore="true" />
          </video>
        </div>
      </div>

      <div className="hero-container">
        <div className="hero-flex">
          <div className="hero-subline">
            <div className="subheading is-hero">DIGITAL EXCELLENCE</div>
          </div>
          <h1 className="hero-title" aria-label="Cosmic Thinking Labs Modern Software & Web Solutions">
            <span className="split-word" aria-hidden="true" style={{ "--word": 1 } as React.CSSProperties}>Cosmic</span>{" "}
            <span className="split-word" aria-hidden="true" style={{ "--word": 2 } as React.CSSProperties}>Thinking</span>{" "}
            <span className="split-word" aria-hidden="true" style={{ "--word": 3 } as React.CSSProperties}>Labs</span>{" "}
            <span className="split-word" aria-hidden="true" style={{ "--word": 4 } as React.CSSProperties}>Modern</span>{" "}
            <span className="split-word" aria-hidden="true" style={{ "--word": 5 } as React.CSSProperties}>Software</span>{" "}
            <span className="split-word" aria-hidden="true" style={{ "--word": 6 } as React.CSSProperties}>&</span>{" "}
            <span className="split-word" aria-hidden="true" style={{ "--word": 7 } as React.CSSProperties}>Web</span>{" "}
            <span className="split-word" aria-hidden="true" style={{ "--word": 8 } as React.CSSProperties}>Solutions</span>
          </h1>
          <div className="nav-bar">
            <Link to="/services" className="nav-button px-4 py-2 border border-white/20 rounded-full hover:border-white/40 transition-colors">
              <div>SERVICES</div>
            </Link>
            <Link to="/portfolio" className="nav-button px-4 py-2 border border-white/20 rounded-full hover:border-white/40 transition-colors">
              <div>WORK</div>
            </Link>
            <Link to="/about" className="nav-button px-4 py-2 border border-white/20 rounded-full hover:border-white/40 transition-colors">
              <div>ABOUT</div>
            </Link>
            <Link to="/careers" className="nav-button px-4 py-2 border border-white/20 rounded-full hover:border-white/40 transition-colors">
              <div>CAREERS</div>
            </Link>
            <Link to="/contact" className="nav-button px-4 py-2 border border-white/20 rounded-full hover:border-white/40 transition-colors">
              <div>CONNECT</div>
            </Link>
          </div>

        </div>
        <div className="heading-width">
          <h2 className="heading-6 is-hero">Innovation First.</h2>
          <div className="heading-6 gradient-text">Pioneering world-class</div>
          <div className="heading-6 gradient-text">engineering and design.</div>
        </div>
      </div>
    </section>
  );
}
