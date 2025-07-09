import { Sparkles } from "lucide-react"

const Hero = () => {
  return (
    <section id="home" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto text-center">
        <div className="flex justify-center mb-6">
          <Sparkles className="h-16 w-16 text-blue-500" />
        </div>
        <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
          Create Stunning Logos
        </h1>
        <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
          Generate professional logos for your brand with AI-powered suggestions. Get color palettes, fonts, and icons
          tailored to your industry.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
            Start Creating
          </button>
          <button className="border border-gray-600 hover:border-gray-500 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
            View Examples
          </button>
        </div>
      </div>
    </section>
  )
}

export default Hero
