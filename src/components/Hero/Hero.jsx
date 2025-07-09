import "./Hero.css"

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="hero-container">
        <div className="hero-icon">
          <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.582a.5.5 0 0 1 0 .962L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z" />
          </svg>
        </div>
        <h1 className="hero-title">Create Stunning Logos</h1>
        <p className="hero-description">
          Generate professional logos for your brand with AI-powered suggestions. Get color palettes, fonts, and icons
          tailored to your industry.
        </p>
        <div className="hero-buttons">
          <button className="btn-primary">Start Creating</button>
          <button className="btn-secondary">View Examples</button>
        </div>
      </div>
    </section>
  )
}

export default Hero
