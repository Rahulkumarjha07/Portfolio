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
            <rect
              width="40"
              height="40"
              fill="none"
              stroke="white"
              strokeWidth="0.5"
              className="opacity-40 animate-gridPulse"
            />
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
      this.skills.length >= 3
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

        <section className="hero min-h-screen flex items-center justify-center relative px-6 py-20">

          <GridBackground />

          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <Meteors number={10} />
          </div>

          <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between relative z-10 gap-12">

            {/* LEFT SIDE */}
            <div className="w-full lg:w-1/2 text-center lg:text-left">

              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gray-800/50 border border-gray-700 mb-6">
                <div className="w-2 h-2 rounded-full bg-blue-400 animate-pulse"></div>
                <span className="text-gray-300 text-sm">Welcome to my universe</span>
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold leading-tight mb-6">
                <SparklesText text="Hello" />
                <span className="ml-3">
                  I'm{" "}
                  <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-teal-400 bg-clip-text text-transparent">
                    Rahul Jha
                  </span>
                </span>
              </h1>

              <div className="inline-flex items-center gap-3 px-6 py-3 rounded-2xl bg-gradient-to-r from-blue-500/10 to-teal-500/10 border border-blue-500/20 mb-6">
                <i className="fas fa-rocket text-blue-400"></i>
                <FlipWords
                  className="text-lg sm:text-xl text-blue-400 font-medium"
                  words={words}
                />
              </div>

              <p className="text-base sm:text-lg text-gray-300 max-w-xl mx-auto lg:mx-0 mb-10">
                BTech Computer Science student | Software Developer |
                Building AI-powered applications and modern web solutions.
              </p>

              {/* CTA BUTTONS */}
              <div className="flex flex-col sm:flex-row gap-4 items-center lg:items-start justify-center lg:justify-start">

                <Link
                  to="/projects"
                  className="relative inline-flex items-center justify-center px-8 py-4 overflow-hidden font-medium text-white transition duration-300 ease-out border-2 border-blue-500 rounded-xl shadow-md group"
                >
                  <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-gradient-to-r from-blue-500 to-teal-400 group-hover:translate-x-0 ease">
                    View Projects →
                  </span>

                  <span className="absolute flex items-center justify-center w-full h-full text-blue-400 transition-all duration-300 transform group-hover:translate-x-full ease">
                    View Projects →
                  </span>

                  <span className="relative invisible">View Projects →</span>
                </Link>

                <a
                  href="https://drive.google.com/file/d/14PHmdXrpzNw_xoreddGpQkZaGcsj2pR_/view"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-4 rounded-xl border border-gray-700 hover:border-blue-400 hover:scale-105 transition"
                >
                  Get Resume
                </a>

              </div>

              {/* SOCIAL BUTTONS */}
              <div className="flex flex-wrap justify-center lg:justify-start gap-4 mt-6">

                <a
                  href="https://github.com/Rahulkumarjha07"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-5 py-3 bg-gray-900/70 backdrop-blur border border-gray-700 rounded-xl hover:border-white hover:scale-105 transition"
                >
                  <i className="fab fa-github text-xl"></i>
                  GitHub
                </a>

                <a
                  href="https://www.linkedin.com/in/rahuljha007/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-5 py-3 bg-gray-900/70 backdrop-blur border border-gray-700 rounded-xl hover:border-blue-500 hover:scale-105 transition"
                >
                  <i className="fab fa-linkedin text-xl text-blue-400"></i>
                  LinkedIn
                </a>

              </div>
            </div>

            {/* RIGHT SIDE CODE WINDOW */}
            <div className="w-full lg:w-1/2 max-w-xl mx-auto">

              <div className="bg-[#091121] rounded-xl border border-gray-800 p-6">

                <div className="flex items-center gap-2 mb-4">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <span className="ml-3 text-gray-400 text-sm">developer.js</span>
                </div>

                <pre className="language-javascript overflow-x-auto">
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