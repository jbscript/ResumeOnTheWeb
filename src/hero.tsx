import React, { useEffect, useRef, useState } from "react";
import { ArrowRight, Terminal, Circle } from "lucide-react";

const Hero: React.FC = () => {
  const [typedText, setTypedText] = useState("");
  const [showCursor, setShowCursor] = useState(true);
  const [typingComplete, setTypingComplete] = useState(false);
  const [visibleSkills, setVisibleSkills] = useState<string[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);

  const fullName = "Jabir Jaleel";
  const title = "Frontend Developer";
  const skills = [
    "React",
    "TypeScript",
    "Chrome Extensions",
    "WebRTC",
    "WebSockets",
  ];

  // Typing effect for name
  useEffect(() => {
    if (typedText.length < fullName.length) {
      const timeout = setTimeout(() => {
        setTypedText(fullName.substring(0, typedText.length + 1));
      }, 100);
      return () => clearTimeout(timeout);
    } else if (!typingComplete) {
      setTypingComplete(true);
    }

    // Blinking cursor effect
    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 530);

    return () => clearInterval(cursorInterval);
  }, [typedText, typingComplete, fullName]);

  // Reveal skills one by one after name is typed
  useEffect(() => {
    if (typingComplete && visibleSkills.length < skills.length) {
      const timeout = setTimeout(() => {
        setVisibleSkills((prev) => [...prev, skills[prev.length]]);
      }, 300);
      return () => clearTimeout(timeout);
    }
  }, [typingComplete, visibleSkills, skills]);

  // ASCII art logo (simplified grid pattern)
  const asciiLogo = [
    "┌───────────────────┐",
    "│ ░░░░░░░░░░░░░░░░░ │",
    "│ ░░░░░░░░░░░░░░░░░ │",
    "│ ░░░░░░░░░░░░░░░░░ │",
    "│ ░░░░░░░░░░░░░░░░░ │",
    "└───────────────────┘",
  ];

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-20"
    >
      {/* Minimal background with subtle code texture */}
      <div className="absolute inset-0 bg-gray-50 dark:bg-gray-900 -z-10 overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.03] dark:opacity-[0.07]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%23000000' fill-opacity='0.1' fill-rule='evenodd'/%3E%3C/svg%3E")`,
            backgroundSize: "180px",
          }}
        ></div>
      </div>

      <div className="container mx-auto px-6 py-12 md:py-24" ref={containerRef}>
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-center">
          <div className="lg:col-span-3 order-2 lg:order-1">
            {/* Terminal window */}
            <div className="bg-gray-100 dark:bg-gray-800 rounded-lg shadow-md overflow-hidden border border-gray-200 dark:border-gray-700">
              {/* Terminal header */}
              <div className="bg-gray-200 dark:bg-gray-700 px-4 py-2 flex items-center">
                <div className="flex space-x-2 mr-4">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                <div className="text-gray-600 dark:text-gray-300 text-sm font-mono flex-1 text-center">
                  terminal — bash — 80×24
                </div>
              </div>

              {/* Terminal content */}
              <div className="p-4 font-mono text-sm md:text-base">
                <div className="mb-4">
                  <span className="text-green-600 dark:text-green-400">➜</span>{" "}
                  <span className="text-blue-600 dark:text-blue-400">~</span>{" "}
                  <span className="text-gray-600 dark:text-gray-400">
                    whoami
                  </span>
                </div>

                <div className="mb-4">
                  <span className="text-gray-800 dark:text-gray-200">
                    {typedText}
                    {!typingComplete && (showCursor ? "|" : " ")}
                  </span>
                </div>

                {typingComplete && (
                  <>
                    <div className="mb-4">
                      <span className="text-green-600 dark:text-green-400">
                        ➜
                      </span>{" "}
                      <span className="text-blue-600 dark:text-blue-400">
                        ~
                      </span>{" "}
                      <span className="text-gray-600 dark:text-gray-400">
                        cat title.txt
                      </span>
                    </div>

                    <div className="mb-4">
                      <span className="text-gray-800 dark:text-gray-200">
                        {title}
                      </span>
                    </div>

                    <div className="mb-4">
                      <span className="text-green-600 dark:text-green-400">
                        ➜
                      </span>{" "}
                      <span className="text-blue-600 dark:text-blue-400">
                        ~
                      </span>{" "}
                      <span className="text-gray-600 dark:text-gray-400">
                        ls skills/
                      </span>
                    </div>

                    <div className="mb-4 flex flex-wrap gap-2">
                      {visibleSkills.map((skill, index) => (
                        <span
                          key={index}
                          className="px-2 py-1 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded"
                          style={{
                            animation: `fadeIn 0.5s ease-in-out ${
                              index * 0.1
                            }s both`,
                          }}
                        >
                          {skill}
                        </span>
                      ))}
                      {visibleSkills.length === skills.length && (
                        <span className="inline-block w-2 h-4 bg-gray-800 dark:bg-gray-200 animate-pulse ml-1"></span>
                      )}
                    </div>

                    <div className="mb-4">
                      <span className="text-green-600 dark:text-green-400">
                        ➜
                      </span>{" "}
                      <span className="text-blue-600 dark:text-blue-400">
                        ~
                      </span>{" "}
                      <span className="text-gray-600 dark:text-gray-400">
                        cat ascii_logo.txt
                      </span>
                    </div>

                    <div className="mb-4">
                      <pre className="text-gray-800 dark:text-gray-200 text-xs md:text-sm">
                        {asciiLogo.map((line, index) => (
                          <div key={index}>{line}</div>
                        ))}
                      </pre>
                    </div>

                    <div className="mb-4">
                      <span className="text-green-600 dark:text-green-400">
                        ➜
                      </span>{" "}
                      <span className="text-blue-600 dark:text-blue-400">
                        ~
                      </span>{" "}
                      <span className="text-gray-600 dark:text-gray-400">
                        status
                      </span>
                    </div>

                    <div className="mb-4 flex items-center">
                      <Circle
                        size={10}
                        className="text-green-500 mr-2 animate-pulse"
                        fill="currentColor"
                      />
                      <span className="text-gray-800 dark:text-gray-200">
                        Available for work
                      </span>
                    </div>
                  </>
                )}
              </div>
            </div>

            {/* Call to action buttons */}
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#projects"
                className="px-6 py-3 rounded-lg bg-gray-800 dark:bg-gray-700 text-white font-mono flex items-center gap-2 hover:bg-gray-700 dark:hover:bg-gray-600 transition-colors"
              >
                $ view_projects <ArrowRight size={18} />
              </a>
              <a
                href="#contact"
                className="px-6 py-3 rounded-lg border-2 border-gray-800 dark:border-gray-700 text-gray-800 dark:text-gray-300 font-mono hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              >
                $ contact_me
              </a>
            </div>
          </div>

          <div className="lg:col-span-2 order-1 lg:order-2">
            {/* Code snippet with syntax highlighting */}
            <div className="bg-gray-100 dark:bg-gray-800 rounded-lg shadow-md p-4 font-mono text-sm relative overflow-hidden">
              <div className="absolute top-0 right-0 bg-gray-200 dark:bg-gray-700 text-xs px-2 py-1 text-gray-600 dark:text-gray-400 rounded-bl">
                profile.js
              </div>
              <pre className="text-gray-800 dark:text-gray-200 mt-6">
                <span className="text-purple-600 dark:text-purple-400">
                  const
                </span>{" "}
                <span className="text-blue-600 dark:text-blue-400">
                  developer
                </span>{" "}
                = {"{"}
                {"\n"}{" "}
                <span className="text-green-600 dark:text-green-400">name</span>
                :{" "}
                <span className="text-orange-600 dark:text-orange-400">
                  'Jabir Jaleel'
                </span>
                ,{"\n"}{" "}
                <span className="text-green-600 dark:text-green-400">
                  title
                </span>
                :{" "}
                <span className="text-orange-600 dark:text-orange-400">
                  'Frontend Developer'
                </span>
                ,{"\n"}{" "}
                <span className="text-green-600 dark:text-green-400">
                  skills
                </span>
                : [{"\n"}{" "}
                <span className="text-orange-600 dark:text-orange-400">
                  'React'
                </span>
                ,{"\n"}{" "}
                <span className="text-orange-600 dark:text-orange-400">
                  'TypeScript'
                </span>
                ,{"\n"}{" "}
                <span className="text-orange-600 dark:text-orange-400">
                  'Chrome Extensions'
                </span>
                ,{"\n"}{" "}
                <span className="text-orange-600 dark:text-orange-400">
                  'WebRTC'
                </span>
                ,{"\n"}{" "}
                <span className="text-orange-600 dark:text-orange-400">
                  'WebSockets'
                </span>
                {"\n"} ],
                {"\n"}{" "}
                <span className="text-green-600 dark:text-green-400">
                  available
                </span>
                : <span className="text-blue-600 dark:text-blue-400">true</span>
                ,{"\n"}{" "}
                <span className="text-green-600 dark:text-green-400">
                  contact
                </span>
                :{" "}
                <span className="text-orange-600 dark:text-orange-400">
                  'hello@jabirjaleel.com'
                </span>
                {"\n"}
                {"}"}
              </pre>

              {/* Floating stats */}
              <div className="absolute -bottom-2 -right-2 bg-gray-200 dark:bg-gray-700 px-3 py-2 rounded-tl-lg shadow-md">
                <div className="text-xs text-gray-600 dark:text-gray-400">
                  <div className="flex items-center gap-1 mb-1">
                    <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                    <span>5+ years experience</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                    <span>20+ projects completed</span>
                  </div>
                </div>
              </div>
            </div>

            {/* GitHub-style contribution grid */}
            <div className="mt-6 bg-gray-100 dark:bg-gray-800 rounded-lg shadow-md p-4">
              <div className="text-xs text-gray-600 dark:text-gray-400 mb-2 font-mono">
                github.com/jabirjaleel
              </div>
              <div className="grid grid-cols-12 gap-1">
                {[...Array(48)].map((_, i) => (
                  <div
                    key={i}
                    className={`w-full aspect-square rounded-sm ${
                      Math.random() > 0.7
                        ? "bg-green-500 dark:bg-green-600"
                        : Math.random() > 0.5
                        ? "bg-green-300 dark:bg-green-800"
                        : "bg-gray-200 dark:bg-gray-700"
                    }`}
                    style={{
                      opacity:
                        Math.random() > 0.7
                          ? 1
                          : Math.random() > 0.5
                          ? 0.8
                          : 0.5,
                    }}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Add some CSS for animations */}
      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
};

export default Hero;
