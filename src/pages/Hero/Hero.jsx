import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Prism from "prismjs";
import "prismjs/components/prism-javascript";
import "@/assets/css/tomorrow.css";
import Meteors from "@/components/ui/meteors";
import PortfolioPage from "@/pages/About/About";
import SparklesText from "@/components/ui/sparkles-text";
import { FlipWords } from "@/components/ui/flip-words";

const GridBackground = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20">
      <div className="absolute inset-0 [mask-image:radial-gradient(ellipse_at_center,transparent_0%,black)]">
        <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" className="absolute inset-0">
          <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
            <rect width="40" height="40" fill="none" stroke="white" strokeWidth="0.5" className="opacity-40 animate-gridPulse" />
          </pattern>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>
    </div>
  );
};

export default function Hero() {

  const words = [
    "Aspiring Software Engineer",
    "Full Stack Web Developer",
    "Building Projects with React, Node & Python",
    "Passionate About AI, Data Science & DSA",
  ];

  const [code] = useState(`
const profile = {
  name: 'Rahul Jha',
  title: 'Full-Stack Developer | Cloud Enthusiast | Problem Solver | AI & ML',
  skills: [
    'React','NodeJS','Redux','Express',
    'MySQL','MongoDB','Docker','AWS',
    'Git','Linux'
  ],
  hardWorker: true,
  quickLearner: true,
  problemSolver: true,
  yearsOfExperience: 0,
  hireable: function(){
    return(
      this.hardWorker &&
      this.problemSolver &&
      this.skills.length >= 3 &&
      this.yearsOfExperience >= 0
    )
  }
}
`);

  useEffect(() => {
    Prism.highlightAll();
  }, [code]);

  return (
    <>
      <main className="bg-[#020617] text-white min-h-screen">

        <section className="hero min-h-screen flex items-center justify-center relative px-6">

          <GridBackground />

          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <Meteors number={10} />
          </div>

          <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between relative z-10 py-10">

            {/* LEFT SIDE */}
            <div className="w-full lg:w-1/2 mb-12 lg:mb-0 relative">

              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gray-800/50 border border-gray-700 mb-6">
                <div className="w-2 h-2 rounded-full bg-blue-400 animate-pulse"></div>
                <span className="text-gray-300 text-sm">Welcome to my universe</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold leading-tight mb-6">
                <SparklesText text="Hello" />
                <span className="ml-3">I'm <span className="gradient-text">Rahul Jha</span></span>
              </h1>

              <div className="inline-flex items-center gap-3 px-6 py-3 rounded-2xl bg-gradient-to-r from-blue-500/10 to-teal-500/10 border border-blue-500/20 mb-6">
                <i className="fas fa-rocket text-blue-400"></i>
                <FlipWords
                  className="text-xl text-blue-400 font-medium"
                  words={words}
                />
              </div>

              <p className="text-lg text-gray-300 max-w-xl mb-10">
                BTech Computer Science student | Software Developer |
                Building AI-powered applications and modern web solutions.
              </p>

              {/* CTA BUTTONS */}
              <div className="flex flex-col sm:flex-row gap-5">

                {/* PROJECT BUTTON (FIXED) */}
                <Link
                  to="/projects"
                  className="group inline-flex items-center justify-center gap-3 bg-gradient-to-r from-blue-500 to-teal-400 p-0.5 rounded-xl hover:scale-105 transition"
                >
                  <span className="px-8 py-4 rounded-[11px] bg-gray-900 group-hover:bg-transparent transition">
                    View Projects →
                  </span>
                </Link>

                {/* RESUME BUTTON */}
                <a
                  href="https://drive.google.com/file/d/14PHmdXrpzNw_xoreddGpQkZaGcsj2pR_/view"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-4 rounded-xl border border-gray-700 hover:border-blue-400 transition"
                >
                  Get Resume
                </a>

              </div>

              {/* SOCIAL BUTTONS */}
              <div className="flex gap-6 mt-6">

                <a
                  href="https://github.com/Rahulkumarjha07"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-5 py-3 bg-gray-900 border border-gray-700 rounded-xl hover:border-white transition"
                >
                  <i className="fab fa-github text-xl"></i>
                  GitHub
                </a>

                <a
                  href="https://www.linkedin.com/in/rahuljha007/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-5 py-3 bg-gray-900 border border-gray-700 rounded-xl hover:border-blue-500 transition"
                >
                  <i className="fab fa-linkedin text-xl text-blue-400"></i>
                  LinkedIn
                </a>

              </div>
            </div>

            {/* RIGHT SIDE CODE WINDOW */}
            <div className="w-full lg:w-1/2">

              <div className="bg-[#091121] rounded-xl border border-gray-800 p-6">

                <div className="flex items-center gap-2 mb-4">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <span className="ml-3 text-gray-400 text-sm">developer.js</span>
                </div>

                <pre className="language-javascript">
                  <code className="language-javascript">{code}</code>
                </pre>

              </div>

            </div>

          </div>
        </section>

        <PortfolioPage />

      </main>
    </>
  );
}