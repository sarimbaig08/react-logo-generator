"use client"

import { useState } from "react"
import { Palette, Type, Zap } from "lucide-react"

const LogoGenerator = () => {
  const [brandName, setBrandName] = useState("")
  const [industry, setIndustry] = useState("")
  const [showLogos, setShowLogos] = useState(false)

  const industries = [
    "Technology",
    "Healthcare",
    "Finance",
    "Education",
    "Retail",
    "Food & Beverage",
    "Real Estate",
    "Consulting",
    "Creative",
    "Other",
  ]

  const handleGenerate = () => {
    if (brandName && industry) {
      setShowLogos(true)
    }
  }

  const sampleLogos = [
    {
      id: 1,
      colors: ["#3B82F6", "#1E40AF"],
      text: brandName || "YourBrand",
      style: "Modern",
    },
    {
      id: 2,
      colors: ["#10B981", "#059669"],
      text: brandName || "YourBrand",
      style: "Clean",
    },
    {
      id: 3,
      colors: ["#8B5CF6", "#7C3AED"],
      text: brandName || "YourBrand",
      style: "Creative",
    },
  ]

  return (
    <section id="generator" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-800">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Logo Generator</h2>
          <p className="text-gray-300 text-lg">Enter your brand details to generate custom logos</p>
        </div>

        {/* Input Section */}
        <div className="max-w-2xl mx-auto mb-12">
          <div className="bg-gray-900 p-8 rounded-xl border border-gray-700">
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-sm font-medium mb-2">Brand Name</label>
                <input
                  type="text"
                  value={brandName}
                  onChange={(e) => setBrandName(e.target.value)}
                  placeholder="Enter your brand name"
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white placeholder-gray-400"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Industry</label>
                <select
                  value={industry}
                  onChange={(e) => setIndustry(e.target.value)}
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white"
                >
                  <option value="">Select Industry</option>
                  {industries.map((ind) => (
                    <option key={ind} value={ind}>
                      {ind}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <button
              onClick={handleGenerate}
              disabled={!brandName || !industry}
              className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-gray-600 disabled:cursor-not-allowed text-white px-6 py-3 rounded-lg font-semibold transition-colors flex items-center justify-center gap-2"
            >
              <Zap size={20} />
              Generate Logos
            </button>
          </div>
        </div>

        {/* Generated Logos */}
        {showLogos && (
          <div className="max-w-6xl mx-auto">
            <h3 className="text-2xl font-bold text-center mb-8">Generated Logos</h3>
            <div className="grid md:grid-cols-3 gap-8">
              {sampleLogos.map((logo) => (
                <div key={logo.id} className="bg-gray-900 p-8 rounded-xl border border-gray-700 text-center">
                  <div
                    className="h-32 w-32 mx-auto mb-4 rounded-lg flex items-center justify-center text-white font-bold text-xl"
                    style={{
                      background: `linear-gradient(135deg, ${logo.colors[0]}, ${logo.colors[1]})`,
                    }}
                  >
                    {logo.text}
                  </div>
                  <h4 className="font-semibold mb-2">{logo.style} Style</h4>
                  <div className="flex justify-center gap-2 mb-4">
                    {logo.colors.map((color, index) => (
                      <div
                        key={index}
                        className="w-6 h-6 rounded-full border border-gray-600"
                        style={{ backgroundColor: color }}
                      />
                    ))}
                  </div>
                  <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm transition-colors">
                    Download
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Features */}
        <div className="grid md:grid-cols-3 gap-8 mt-16">
          <div className="text-center">
            <Palette className="h-12 w-12 text-blue-500 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Smart Color Palettes</h3>
            <p className="text-gray-300">AI-suggested colors based on your industry and brand personality</p>
          </div>
          <div className="text-center">
            <Type className="h-12 w-12 text-green-500 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Perfect Typography</h3>
            <p className="text-gray-300">Curated font combinations that match your brand style</p>
          </div>
          <div className="text-center">
            <Zap className="h-12 w-12 text-purple-500 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Instant Generation</h3>
            <p className="text-gray-300">Get multiple logo variations in seconds</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default LogoGenerator
