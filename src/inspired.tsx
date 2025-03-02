"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  Twitter,
  aedin,
  Github,
  Dribbble,
  BookOpen,
  Instagram,
  PawPrintIcon as Patreon,
  ArrowUpRight,
  Sparkles,
} from "lucide-react";

export default function Home() {
  const [activeTab, setActiveTab] = useState("projects");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    show: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 300, damping: 24 },
    },
  };

  return (
    <div className="min-h-screen bg-black text-white font-sans">
      {/* Header with social as */}
      <header
        className={`fixed w-full z-50 transition-all duration-300 ${
          scrolled ? "py-3 bg-black/80 backdrop-blur-md" : "py-5 bg-transparent"
        }`}
      >
        <div className="container mx-auto px-4 flex justify-center">
          <div className="flex gap-6">
            <Sociala href="#" icon={<Twitter size={18} />} label="Twitter" />
            <Sociala href="#" icon={<aedin size={18} />} label="aedIn" />
            <Sociala href="#" icon={<Github size={18} />} label="GitHub" />
            <Sociala href="#" icon={<Dribbble size={18} />} label="Dribbble" />
            <Sociala href="#" icon={<BookOpen size={18} />} label="Medium" />
            <Sociala
              href="#"
              icon={<Instagram size={18} />}
              label="Instagram"
            />
            <Sociala href="#" icon={<Patreon size={18} />} label="Patreon" />
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 pt-32 pb-20">
        {/* Intro Section */}
        <motion.section
          className="max-w-3xl mx-auto text-center mb-24"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <motion.div
            className="inline-block mb-6"
            initial={{ scale: 0 }}
            animate={{ scale: 1, rotate: 360 }}
            transition={{
              type: "spring",
              stiffness: 260,
              damping: 20,
              delay: 0.2,
            }}
          >
            <Sparkles className="w-12 h-12 text-purple-500" />
          </motion.div>

          <motion.h1
            className="text-3xl md:text-4xl font-light mb-6 tracking-tight"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            I'm <span className="font-medium">Jabir</span>, a designer,
            developer, and digital creator.
          </motion.h1>

          <motion.p
            className="text-gray-400 text-lg mb-8 leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            As a full-stack developer and automation enthusiast, I’ve built
            AI-driven products, crafted innovative web solutions, and developed
            advanced Chrome extensions
            <span className="text-yellow-400">✌️</span>
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <a
              href="#contact"
              className="inline-flex items-center gap-1 text-purple-400 hover:text-purple-300 transition-all hover:gap-2"
            >
              Get in touch <ArrowUpRight size={16} />
            </a>
          </motion.div>
        </motion.section>

        {/* Tabs Navigation */}
        <div className="max-w-6xl mx-auto mb-12">
          <div className="flex justify-center gap-8 border-b border-gray-800/50 mb-12">
            <TabButton
              active={activeTab === "projects"}
              onClick={() => setActiveTab("projects")}
            >
              Projects
            </TabButton>
            <TabButton
              active={activeTab === "blog"}
              onClick={() => setActiveTab("blog")}
            >
              Blog
            </TabButton>
            <TabButton
              active={activeTab === "stack"}
              onClick={() => setActiveTab("stack")}
            >
              Stack <span className="text-purple-500 ml-1">*</span>
            </TabButton>
          </div>

          {/* Projects Grid */}
          {activeTab === "projects" && (
            <motion.div
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
              variants={container}
              initial="hidden"
              animate="show"
            >
              <motion.div variants={item}>
                <ProjectCard
                  title="Visionary"
                  description="A free and privacy-focused screen recording tool with advanced editing capabilities. Featured in TechCrunch and reached 200K+ users."
                  imageUrl="/placeholder.svg?height=250&width=400"
                  a="https://visionary.app"
                />
              </motion.div>

              <motion.div variants={item}>
                <ProjectCard
                  title="EcoTrack"
                  description="An AI-powered app that helps users reduce their carbon footprint through personalized recommendations and tracking. Won the Climate Tech Award."
                  imageUrl="/placeholder.svg?height=250&width=400"
                  a="https://github.com/alexmorgan/ecotrack"
                />
              </motion.div>

              <motion.div variants={item}>
                <ProjectCard
                  title="Focusflow"
                  description="A productivity app that helps you stay focused and manage your time effectively. Generated $10K in revenue in the first month."
                  imageUrl="/placeholder.svg?height=250&width=400"
                  a="https://getfocusflow.app"
                />
              </motion.div>

              <motion.div variants={item}>
                <ProjectCard
                  title="Soundscape"
                  description="An immersive audio experience app that creates personalized soundscapes based on your mood and environment."
                  imageUrl="/placeholder.svg?height=250&width=400"
                  a="https://soundscape.io"
                />
              </motion.div>

              <motion.div variants={item}>
                <ProjectCard
                  title="DevCanvas"
                  description="A collaborative design tool for developers to create and share UI components with built-in code generation."
                  imageUrl="/placeholder.svg?height=250&width=400"
                  a="https://devcanvas.design"
                />
              </motion.div>

              <motion.div variants={item}>
                <ProjectCard
                  title="MapJourney"
                  description="A location-based storytelling platform that lets users create interactive maps of their travels and experiences."
                  imageUrl="/placeholder.svg?height=250&width=400"
                  a="https://mapjourney.app"
                />
              </motion.div>
            </motion.div>
          )}

          {/* Blog Posts */}
          {activeTab === "blog" && (
            <motion.div
              className="grid md:grid-cols-2 gap-8"
              variants={container}
              initial="hidden"
              animate="show"
            >
              <motion.div variants={item}>
                <BlogCard
                  title="Designing for Dark Mode: Best Practices and Pitfalls"
                  excerpt="Dark mode is more than just a trend. Learn how to create effective dark themes that enhance user experience and accessibility."
                  date="May 15, 2023"
                  category="Design"
                  imageUrl="/placeholder.svg?height=250&width=400"
                  a="/blog/designing-for-dark-mode"
                />
              </motion.div>

              <motion.div variants={item}>
                <BlogCard
                  title="The Future of Web Animation with Framer Motion"
                  excerpt="Explore how Framer Motion is changing the way we think about animations on the web and how to use it effectively."
                  date="April 22, 2023"
                  category="Development"
                  imageUrl="/placeholder.svg?height=250&width=400"
                  a="/blog/framer-motion-future"
                />
              </motion.div>

              <motion.div variants={item}>
                <BlogCard
                  title="Building Products That People Actually Want"
                  excerpt="My journey of building 15+ products and what I've learned about creating things people actually need and use."
                  date="March 10, 2023"
                  category="Product"
                  imageUrl="/placeholder.svg?height=250&width=400"
                  a="/blog/building-products-people-want"
                />
              </motion.div>

              <motion.div variants={item}>
                <BlogCard
                  title="The Minimalist Approach to Digital Design"
                  excerpt="Why less is often more in digital design, and how to apply minimalist principles to create more effective interfaces."
                  date="February 5, 2023"
                  category="Design"
                  imageUrl="/placeholder.svg?height=250&width=400"
                  a="/blog/minimalist-digital-design"
                />
              </motion.div>
            </motion.div>
          )}

          {/* Tech Stack */}
          {activeTab === "stack" && (
            <motion.div
              className="max-w-3xl mx-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <div className="grid gap-8">
                <div className="bg-gray-900/50 rounded-xl p-6 backdrop-blur-sm border border-gray-800/50">
                  <h3 className="text-xl font-medium mb-4 text-purple-400">
                    Design
                  </h3>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <div className="flex flex-col items-center p-4 bg-black/40 rounded-lg">
                      <img
                        src="/placeholder.svg?height=50&width=50"
                        alt="Figma"
                        width={50}
                        height={50}
                        className="mb-2"
                      />
                      <span className="text-sm">Figma</span>
                    </div>
                    <div className="flex flex-col items-center p-4 bg-black/40 rounded-lg">
                      <img
                        src="/placeholder.svg?height=50&width=50"
                        alt="Photoshop"
                        width={50}
                        height={50}
                        className="mb-2"
                      />
                      <span className="text-sm">Photoshop</span>
                    </div>
                    <div className="flex flex-col items-center p-4 bg-black/40 rounded-lg">
                      <img
                        src="/placeholder.svg?height=50&width=50"
                        alt="Illustrator"
                        width={50}
                        height={50}
                        className="mb-2"
                      />
                      <span className="text-sm">Illustrator</span>
                    </div>
                    <div className="flex flex-col items-center p-4 bg-black/40 rounded-lg">
                      <img
                        src="/placeholder.svg?height=50&width=50"
                        alt="After Effects"
                        width={50}
                        height={50}
                        className="mb-2"
                      />
                      <span className="text-sm">After Effects</span>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-900/50 rounded-xl p-6 backdrop-blur-sm border border-gray-800/50">
                  <h3 className="text-xl font-medium mb-4 text-purple-400">
                    Development
                  </h3>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <div className="flex flex-col items-center p-4 bg-black/40 rounded-lg">
                      <img
                        src="/placeholder.svg?height=50&width=50"
                        alt="React"
                        width={50}
                        height={50}
                        className="mb-2"
                      />
                      <span className="text-sm">React</span>
                    </div>
                    <div className="flex flex-col items-center p-4 bg-black/40 rounded-lg">
                      <img
                        src="/placeholder.svg?height=50&width=50"
                        alt="Next.js"
                        width={50}
                        height={50}
                        className="mb-2"
                      />
                      <span className="text-sm">Next.js</span>
                    </div>
                    <div className="flex flex-col items-center p-4 bg-black/40 rounded-lg">
                      <img
                        src="/placeholder.svg?height=50&width=50"
                        alt="TypeScript"
                        width={50}
                        height={50}
                        className="mb-2"
                      />
                      <span className="text-sm">TypeScript</span>
                    </div>
                    <div className="flex flex-col items-center p-4 bg-black/40 rounded-lg">
                      <img
                        src="/placeholder.svg?height=50&width=50"
                        alt="Tailwind CSS"
                        width={50}
                        height={50}
                        className="mb-2"
                      />
                      <span className="text-sm">Tailwind CSS</span>
                    </div>
                    <div className="flex flex-col items-center p-4 bg-black/40 rounded-lg">
                      <img
                        src="/placeholder.svg?height=50&width=50"
                        alt="Node.js"
                        width={50}
                        height={50}
                        className="mb-2"
                      />
                      <span className="text-sm">Node.js</span>
                    </div>
                    <div className="flex flex-col items-center p-4 bg-black/40 rounded-lg">
                      <img
                        src="/placeholder.svg?height=50&width=50"
                        alt="Python"
                        width={50}
                        height={50}
                        className="mb-2"
                      />
                      <span className="text-sm">Python</span>
                    </div>
                    <div className="flex flex-col items-center p-4 bg-black/40 rounded-lg">
                      <img
                        src="/placeholder.svg?height=50&width=50"
                        alt="Swift"
                        width={50}
                        height={50}
                        className="mb-2"
                      />
                      <span className="text-sm">Swift</span>
                    </div>
                    <div className="flex flex-col items-center p-4 bg-black/40 rounded-lg">
                      <img
                        src="/placeholder.svg?height=50&width=50"
                        alt="Firebase"
                        width={50}
                        height={50}
                        className="mb-2"
                      />
                      <span className="text-sm">Firebase</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </div>
      </main>

      {/* Contact Section */}
      <section
        id="contact"
        className="bg-gradient-to-b from-black to-purple-950/20 py-20"
      >
        <div className="container mx-auto px-4">
          <motion.div
            className="max-w-3xl mx-auto text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-light mb-6">
              Let's create something amazing together
            </h2>
            <p className="text-gray-400 mb-8">
              I'm currently available for freelance work and interesting
              collaborations. If you have a project that needs some creative
              direction, let's talk.
            </p>
            <a
              href="mailto:hello@example.com"
              className="inline-flex items-center gap-2 bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-full transition-all"
            >
              Get in touch <Twitter size={16} />
            </a>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black py-8 border-t border-gray-800/30">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-sm mb-4 md:mb-0">
              © {new Date().getFullYear()} Alex Morgan. All rights reserved.
            </p>
            <div className="flex gap-6">
              <Sociala href="#" icon={<Twitter size={16} />} label="Twitter" />
              <Sociala href="#" icon={<aedin size={16} />} label="aedIn" />
              <Sociala href="#" icon={<Github size={16} />} label="GitHub" />
              <Sociala
                href="#"
                icon={<Instagram size={16} />}
                label="Instagram"
              />
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

interface BlogCardProps {
  title: string;
  excerpt: string;
  date: string;
  category: string;
  imageUrl: string;
  a: string;
}

export function BlogCard({
  title,
  excerpt,
  date,
  category,
  imageUrl,
  a,
}: BlogCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className="group flex flex-col h-full"
      whileHover={{ y: -5 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative overflow-hidden rounded-xl mb-4 aspect-video">
        <img
          src={imageUrl || "/placeholder.svg"}
          alt={title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

        <div className="absolute top-3 left-3 bg-purple-600/90 text-white text-xs px-2 py-1 rounded-full backdrop-blur-sm">
          {category}
        </div>
      </div>

      <div className="text-gray-400 text-sm mb-2">{date}</div>

      <h3 className="text-xl font-medium mb-2 group-hover:text-purple-400 transition-colors">
        {title}
      </h3>

      <p className="text-gray-400 text-sm mb-4 flex-grow">{excerpt}</p>

      <a
        href={a}
        className="flex items-center gap-1 text-gray-400 hover:text-white text-sm mt-auto group-hover:text-purple-400 transition-colors"
      >
        <span>Read article</span>
        <motion.span
          animate={{ x: isHovered ? 2 : 0 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
        >
          <ArrowUpRight size={14} />
        </motion.span>
      </a>
    </motion.div>
  );
}

interface ProjectCardProps {
  title: string;
  description: string;
  imageUrl: string;
  a: string;
}

export function ProjectCard({
  title,
  description,
  imageUrl,
  a,
}: ProjectCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className="group flex flex-col h-full"
      whileHover={{ y: -5 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative overflow-hidden rounded-xl mb-4">
        {/* <img
          src={imageUrl || "/placeholder.svg"}
          alt={title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        /> */}

        <video
          src="https://pub-83c5db439b40468498f97946200806f7.r2.dev/chat-collect.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      <h3 className="text-xl font-medium mb-2 group-hover:text-purple-400 transition-colors">
        {title}
      </h3>

      <p className="text-gray-400 text-sm mb-4 flex-grow">{description}</p>

      <a
        href={a}
        className="flex items-center gap-1 text-gray-400 hover:text-white text-sm mt-auto group-hover:text-purple-400 transition-colors"
      >
        <span>{a.replace(/(^\w+:|^)\/\//, "").replace(/\/$/, "")}</span>
        <motion.span
          animate={{ x: isHovered ? 2 : 0 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
        >
          <ArrowUpRight size={14} />
        </motion.span>
      </a>
    </motion.div>
  );
}

import type { ReactNode } from "react";

interface SocialaProps {
  href: string;
  icon: ReactNode;
  label: string;
}

export function Sociala({ href, icon, label }: SocialaProps) {
  return (
    <a
      href={href}
      className="text-gray-500 hover:text-white transition-colors duration-200"
      aria-label={label}
    >
      {icon}
    </a>
  );
}

interface TabButtonProps {
  active: boolean;
  onClick: () => void;
  children: ReactNode;
}

export function TabButton({ active, onClick, children }: TabButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`pb-3 px-2 relative text-sm font-medium transition-colors ${
        active ? "text-white" : "text-gray-500 hover:text-gray-300"
      }`}
    >
      {children}
      {active && (
        <span className="absolute bottom-0 left-0 w-full h-0.5 bg-purple-500" />
      )}
    </button>
  );
}
