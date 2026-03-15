import HeroImg from "@/assets/images/hero.jpeg";

export default function About() {
  return (
    <section id="about" className="py-16 md:py-32 text-white bg-[#04081A]">
      <div className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-16">

        {/* Section Heading */}
        <h2 className="relative z-10 max-w-xl text-4xl font-medium lg:text-5xl">
          Software Developer, AI Enthusiast, Problem Solver
        </h2>

        {/* Content Grid */}
        <div className="grid items-stretch gap-6 sm:grid-cols-2 md:gap-12 lg:gap-24">

          {/* Image Section */}
          <div className="relative mb-6 sm:mb-0 h-full">
            <div className="bg-gradient-to-b from-zinc-300 to-transparent p-px rounded-2xl h-full">
              <img
                src={HeroImg}
                alt="Rahul Kumar"
                className="rounded-[15px] shadow-lg w-full h-full object-cover transition duration-500 hover:scale-[1.02]"
              />
            </div>
          </div>

          {/* Text Section */}
          <div className="relative space-y-4 flex flex-col justify-center">

            <p>
              Hello! I'm <span className="font-bold">Rahul Jha</span>, a BTech
              Computer Science student passionate about building modern web
              applications, AI-powered systems, and solving real-world problems
              using technology.
            </p>

            <p>
              I enjoy working with technologies like React, Java, Python, SQL,
              and Machine Learning. My goal is to grow as a software developer
              and build scalable applications that make a real impact.
            </p>

            <p>
              I have worked on projects such as a Resource Allocation Graph
              Simulator for deadlock detection, Customer Churn Prediction using
              Machine Learning, an AI-powered Emergency Alert System, and a
              Food Delivery Web Application.
            </p>

            {/* Quote Section */}
            <div className="pt-6">
              <blockquote className="border-l-4 border-gray-300 pl-4">

                <p>
                  I believe technology has the power to transform lives.
                  I continuously explore new tools, frameworks, and ideas
                  to improve my skills and build innovative solutions that
                  solve real-world problems.
                </p>

                <div className="mt-6 space-y-1">
                  <cite className="block font-medium">
                    Rahul Kumar
                  </cite>

                  <span className="text-gray-300 text-sm">
                    Aspiring Software Developer
                  </span>
                </div>

              </blockquote>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}