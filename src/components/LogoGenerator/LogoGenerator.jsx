import React, { useState } from "react";
import "./LogoGenerator.css";

const LogoGenerator = () => {
  const [brandName, setBrandName] = useState("");
  const [industry, setIndustry] = useState("");
  const [logoImages, setLogoImages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showLogos, setShowLogos] = useState(false);

  const industriesList = [
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
  ];

  const generateLogo = async (prompt) => {
    const response = await fetch(
      "",
      {
        method: "POST",
        headers: {
          Authorization: "Bearer ",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ inputs: prompt }),
      }
    );
    const blob = await response.blob();
    return URL.createObjectURL(blob);
  };

  const handleGenerate = async () => {
    if (!brandName || !industry) return;

    setLoading(true);
    setShowLogos(false);
    setLogoImages([]);

    try {
      const prompt1 = `A modern, minimalist logo for the brand "${brandName}" in the "${industry}" industry. Use a light background and a dark, bold logo. 
Only one single logo, centered in the image. No text, no multiple logos, no repetition, no collage, no grid, no watermark. Clean flat vector style.`;

      const prompt2 = `Sleek, flat logo design for "${brandName}", representing the "${industry}" field. Use a dark background with a bright or white logo. 
Only one logo, centered. Avoid multiple versions or duplicate icons. No collage, no layout, no repetition. Vector style.`;

      const prompt3 = `Professional logo for the brand "${brandName}" in the "${industry}" industry. Use a mid-tone background. 
Single centered logo only — no extra icons, no multiple logos, no grid layout. Minimal design, clean lines, flat graphic style.`;



      const image1 = await generateLogo(prompt1);
      const image2 = await generateLogo(prompt2);
      const image3 = await generateLogo(prompt3);

      setLogoImages([image1, image2, image3]);
      setShowLogos(true);
    } catch (error) {
      console.error("Error generating logos:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="logo-generator" id="generator">
      <div className="generator-container">
        <h2>Logo Generator</h2>

        <div className="form-grid">
          <input
            type="text"
            placeholder="Brand Name"
            value={brandName}
            onChange={(e) => setBrandName(e.target.value)}
            className="form-input"
          />
          <select
            value={industry}
            onChange={(e) => setIndustry(e.target.value)}
            className="form-select"
          >
            <option value="">Select Industry</option>
            {industriesList.map((item) => (
              <option key={item}>{item}</option>
            ))}
          </select>
        </div>

        <button
          onClick={handleGenerate}
          disabled={loading || !brandName || !industry}
          className="generate-btn"
        >
          {loading ? "Generating..." : "Generate Logos"}
        </button>

        {showLogos && (
          <div className="generated-logos">
            <h3>Generated Logos</h3>
            <div className="logos-grid">
              {logoImages.map((img, idx) => (
                <div key={idx} className="logo-card">
                  <img src={img} alt={`Logo ${idx + 1}`} className="logo-img" />
                  <br />
                  <button onClick={() => window.open(img, "_blank")} className="download-btn">
                    Download
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default LogoGenerator;
