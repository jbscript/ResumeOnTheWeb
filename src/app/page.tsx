"use client";

import {
  Twitter,
  Youtube,
  Linkedin,
  Instagram,
  MapPin,
  DollarSign,
  Sparkles,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import profile from "@/assets/profile.png";
import { useState } from "react";

export default function App() {
  const [activeTab, setActiveTab] = useState("all");

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-pink-50">
      <div className="container mx-auto px-4 py-12 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Profile Section */}
          <div className="lg:col-span-3 space-y-6">
            <div className="flex flex-col items-center lg:items-start">
              <div className="relative w-40 h-40 rounded-full overflow-hidden bg-gradient-to-br from-purple-400 to-pink-500 mb-4 shadow-lg border-4 border-white">
                <img
                  src={profile}
                  alt="Profile"
                  width={160}
                  height={160}
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-purple-500/20 to-transparent"></div>
              </div>

              <h1 className="text-4xl font-bold text-gray-800">Jabir Jaleel</h1>

              <div className="flex items-center gap-2 text-gray-600 mt-2">
                <MapPin size={18} />
                <span>India</span>
                <span className="mx-2">•</span>
                <DollarSign size={18} />
                <span>$114.3k/month</span>
              </div>

              <p className="text-gray-700 italic mt-4 text-center lg:text-left">
                I was fired everywhere so I hired myself.
              </p>

              <div className="mt-6 text-center lg:text-left">
                <p className="font-semibold text-gray-800">
                  32,851 entrepreneurs read{" "}
                  <a href="#" className="text-blue-600 hover:underline">
                    Just Ship It:
                  </a>
                </p>
                <p className="text-gray-700 mt-2">
                  I share how to find startup ideas, launch fast, and get
                  profitable{" "}
                  <Sparkles className="inline-block h-4 w-4 text-yellow-500" />
                </p>
              </div>

              <div className="w-full mt-6">
                <div className="relative">
                  <form
                    className="flex gap-2"
                    onSubmit={(e) => e.preventDefault()}
                  >
                    <div className="relative flex-1">
                      <Input
                        type="email"
                        placeholder="Your email..."
                        className="bg-white border-gray-200 pr-8 transition-all focus:ring-2 focus:ring-blue-300"
                        required
                      />
                      <div className="absolute right-3 top-1/2 -translate-y-1/2 text-green-500 opacity-0 group-focus-within:opacity-100">
                        <span className="text-xs">✓</span>
                      </div>
                    </div>
                    <Button
                      className="bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white shadow-md hover:shadow-lg transition-all duration-300"
                      onClick={() => alert("Thanks for subscribing!")}
                    >
                      Subscribe
                    </Button>
                  </form>
                  <p className="text-xs text-gray-500 mt-2 flex items-center gap-1">
                    <span className="text-yellow-500">✨</span> Get weekly
                    insights on building profitable side projects
                  </p>
                </div>
              </div>

              <div className="flex gap-6 mt-8">
                <a
                  href="#"
                  className="text-blue-600 hover:text-blue-800 transition-colors"
                >
                  <Twitter size={22} />
                </a>
                <a
                  href="#"
                  className="text-red-600 hover:text-red-800 transition-colors"
                >
                  <Youtube size={22} />
                </a>
                <a
                  href="#"
                  className="text-blue-700 hover:text-blue-900 transition-colors"
                >
                  <Linkedin size={22} />
                </a>
                <a
                  href="#"
                  className="text-pink-600 hover:text-pink-800 transition-colors"
                >
                  <Instagram size={22} />
                </a>
              </div>
            </div>
          </div>

          {/* Projects Grid */}
          <div className="lg:col-span-9">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-gray-800">My Projects</h2>
              <div className="flex items-center gap-2">
                <Button
                  variant={activeTab === "all" ? "default" : "outline"}
                  className={`text-sm ${
                    activeTab === "all"
                      ? "bg-gradient-to-r from-pink-500 to-orange-500 text-white"
                      : "bg-white"
                  }`}
                  onClick={() => setActiveTab("all")}
                >
                  All Projects
                </Button>
                <Button
                  variant={activeTab === "active" ? "default" : "outline"}
                  className={`text-sm ${
                    activeTab === "active"
                      ? "bg-gradient-to-r from-pink-500 to-orange-500 text-white"
                      : "bg-white"
                  }`}
                  onClick={() => setActiveTab("active")}
                >
                  Active
                </Button>
                <Button
                  variant={activeTab === "acquired" ? "default" : "outline"}
                  className={`text-sm ${
                    activeTab === "acquired"
                      ? "bg-gradient-to-r from-pink-500 to-orange-500 text-white"
                      : "bg-white"
                  }`}
                  onClick={() => setActiveTab("acquired")}
                >
                  Acquired
                </Button>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Project Card: Insighto */}
              <div className="bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition-all duration-300 hover:translate-y-[-2px] border border-transparent hover:border-blue-200">
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-3">
                    <div className="bg-gradient-to-br from-blue-400 to-indigo-500 p-3 rounded-lg text-white">
                      <span
                        role="img"
                        aria-label="Arrow up"
                        className="text-xl"
                      >
                        ⬆️
                      </span>
                    </div>
                    <h3 className="font-semibold text-lg">Insighto</h3>
                  </div>
                </div>
                <p className="text-gray-600 mt-2">
                  Build features users (really) want
                </p>
                <div className="flex items-center gap-2 mt-4">
                  <span className="inline-block px-2 py-1 bg-blue-100 text-blue-700 text-xs rounded-full">
                    Product
                  </span>
                  <span className="inline-block px-2 py-1 bg-indigo-100 text-indigo-700 text-xs rounded-full">
                    SaaS
                  </span>
                </div>
              </div>

              {/* Project Card: 50 Hacks */}
              <div className="bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition-all duration-300 hover:translate-y-[-2px] border border-transparent hover:border-green-200">
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-3">
                    <div className="bg-gradient-to-br from-green-400 to-teal-500 p-3 rounded-lg text-white">
                      <span
                        role="img"
                        aria-label="Sparkles"
                        className="text-xl"
                      >
                        ✨
                      </span>
                    </div>
                    <h3 className="font-semibold text-lg">50 Hacks</h3>
                  </div>
                </div>
                <p className="text-gray-600 mt-2">
                  The top 50 productivity tips chosen by the internet
                </p>
                <div className="flex items-center gap-2 mt-4">
                  <span className="inline-block px-2 py-1 bg-green-100 text-green-700 text-xs rounded-full">
                    Content
                  </span>
                  <span className="inline-block px-2 py-1 bg-teal-100 text-teal-700 text-xs rounded-full">
                    Productivity
                  </span>
                </div>
              </div>

              {/* Project Card: Hero Fit */}
              <div className="bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition-all duration-300 hover:translate-y-[-2px] border border-transparent hover:border-purple-200">
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-3">
                    <div className="bg-gradient-to-br from-purple-400 to-pink-500 p-3 rounded-lg text-white">
                      <span
                        role="img"
                        aria-label="Superhero"
                        className="text-xl"
                      >
                        🦸
                      </span>
                    </div>
                    <h3 className="font-semibold text-lg">Hero Fit</h3>
                  </div>
                </div>
                <p className="text-gray-600 mt-2">
                  Gamify your fitness, grow a workout avatar
                </p>
                <div className="flex items-center gap-2 mt-4">
                  <span className="inline-block px-2 py-1 bg-purple-100 text-purple-700 text-xs rounded-full">
                    Fitness
                  </span>
                  <span className="inline-block px-2 py-1 bg-pink-100 text-pink-700 text-xs rounded-full">
                    App
                  </span>
                </div>
              </div>

              {/* Project Card: Fake It Till You Make It */}
              <div className="bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition-all duration-300 hover:translate-y-[-2px] border border-transparent hover:border-yellow-200">
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-3">
                    <div className="bg-gradient-to-br from-yellow-400 to-orange-500 p-3 rounded-lg text-white">
                      <span role="img" aria-label="Money" className="text-xl">
                        💰
                      </span>
                    </div>
                    <h3 className="font-semibold text-lg">
                      Fake It Till You Make It
                    </h3>
                  </div>
                </div>
                <p className="text-gray-600 mt-2">
                  Prank your entrepreneur friends!
                </p>
                <div className="flex items-center gap-2 mt-4">
                  <span className="inline-block px-2 py-1 bg-yellow-100 text-yellow-700 text-xs rounded-full">
                    Fun
                  </span>
                  <span className="inline-block px-2 py-1 bg-orange-100 text-orange-700 text-xs rounded-full">
                    Tool
                  </span>
                </div>
              </div>

              {/* Project Card: Visualize Habit */}
              <div className="bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition-all duration-300 hover:translate-y-[-2px] border border-transparent hover:border-blue-200">
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-3">
                    <div className="bg-gradient-to-br from-blue-400 to-cyan-500 p-3 rounded-lg text-white">
                      <span
                        role="img"
                        aria-label="Crystal Ball"
                        className="text-xl"
                      >
                        🔮
                      </span>
                    </div>
                    <h3 className="font-semibold text-lg">Visualize Habit</h3>
                  </div>
                </div>
                <p className="text-gray-600 mt-2">
                  Discover how tiny habits compound over years
                </p>
                <div className="flex items-center gap-2 mt-4">
                  <span className="inline-block px-2 py-1 bg-blue-100 text-blue-700 text-xs rounded-full">
                    Productivity
                  </span>
                  <span className="inline-block px-2 py-1 bg-cyan-100 text-cyan-700 text-xs rounded-full">
                    Tool
                  </span>
                </div>
              </div>

              {/* Project Card: Decision Game */}
              <div className="bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition-all duration-300 hover:translate-y-[-2px] border border-transparent hover:border-red-200">
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-3">
                    <div className="bg-gradient-to-br from-red-400 to-pink-500 p-3 rounded-lg text-white">
                      <span role="img" aria-label="Game" className="text-xl">
                        🎮
                      </span>
                    </div>
                    <h3 className="font-semibold text-lg">Decision Game</h3>
                  </div>
                </div>
                <p className="text-gray-600 mt-2">
                  A fun game to stop overthinking. Save Kitty!
                </p>
                <div className="flex items-center gap-2 mt-4">
                  <span className="inline-block px-2 py-1 bg-red-100 text-red-700 text-xs rounded-full">
                    Game
                  </span>
                  <span className="inline-block px-2 py-1 bg-pink-100 text-pink-700 text-xs rounded-full">
                    Mental Health
                  </span>
                </div>
              </div>

              {/* Project Card: Buddy Crush */}
              <div className="bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition-all duration-300 hover:translate-y-[-2px] border border-transparent hover:border-indigo-200">
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-3">
                    <div className="bg-gradient-to-br from-indigo-400 to-purple-500 p-3 rounded-lg text-white">
                      <span role="img" aria-label="Friends" className="text-xl">
                        👥
                      </span>
                    </div>
                    <h3 className="font-semibold text-lg">Buddy Crush</h3>
                  </div>
                </div>
                <p className="text-gray-600 mt-2">Build habits with friends</p>
                <div className="flex items-center gap-2 mt-4">
                  <span className="inline-block px-2 py-1 bg-indigo-100 text-indigo-700 text-xs rounded-full">
                    Social
                  </span>
                  <span className="inline-block px-2 py-1 bg-purple-100 text-purple-700 text-xs rounded-full">
                    Habits
                  </span>
                </div>
              </div>

              {/* Project Card: Books Calculator */}
              <div className="bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition-all duration-300 hover:translate-y-[-2px] border border-transparent hover:border-green-200">
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-3">
                    <div className="bg-gradient-to-br from-green-400 to-emerald-500 p-3 rounded-lg text-white">
                      <span role="img" aria-label="Books" className="text-xl">
                        📚
                      </span>
                    </div>
                    <h3 className="font-semibold text-lg">Books Calculator</h3>
                  </div>
                </div>
                <p className="text-gray-600 mt-2">
                  Discover how many books you can read in a year
                </p>
                <div className="flex items-center gap-2 mt-4">
                  <span className="inline-block px-2 py-1 bg-green-100 text-green-700 text-xs rounded-full">
                    Reading
                  </span>
                  <span className="inline-block px-2 py-1 bg-emerald-100 text-emerald-700 text-xs rounded-full">
                    Tool
                  </span>
                </div>
              </div>

              {/* Project Card: Naval 25 */}
              <div className="bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition-all duration-300 hover:translate-y-[-2px] border border-transparent hover:border-gray-200">
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-3">
                    <div className="bg-gradient-to-br from-gray-400 to-gray-600 p-3 rounded-lg text-white">
                      <span
                        role="img"
                        aria-label="Mountain"
                        className="text-xl"
                      >
                        ⛰️
                      </span>
                    </div>
                    <h3 className="font-semibold text-lg">Naval 25</h3>
                  </div>
                </div>
                <p className="text-gray-600 mt-2">
                  Naval's 25 best quotes, as voted on by the internet
                </p>
                <div className="flex items-center gap-2 mt-4">
                  <span className="inline-block px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-full">
                    Content
                  </span>
                  <span className="inline-block px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-full">
                    Wisdom
                  </span>
                </div>
              </div>

              {/* Project Card: Mood2Movie */}
              <div className="bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition-all duration-300 hover:translate-y-[-2px] border border-transparent hover:border-yellow-200">
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-3">
                    <div className="bg-gradient-to-br from-yellow-400 to-orange-500 p-3 rounded-lg text-white">
                      <span role="img" aria-label="Movie" className="text-xl">
                        🎬
                      </span>
                    </div>
                    <h3 className="font-semibold text-lg">Mood2Movie</h3>
                  </div>
                </div>
                <p className="text-gray-600 mt-2">
                  Movie recommendation based on your mood
                </p>
                <div className="flex items-center gap-2 mt-4">
                  <span className="inline-block px-2 py-1 bg-yellow-100 text-yellow-700 text-xs rounded-full">
                    Entertainment
                  </span>
                  <span className="inline-block px-2 py-1 bg-orange-100 text-orange-700 text-xs rounded-full">
                    AI
                  </span>
                </div>
              </div>

              {/* Project Card: MakeLanding */}
              <div className="bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition-all duration-300 hover:translate-y-[-2px] border border-transparent hover:border-blue-200">
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-3">
                    <div className="bg-gradient-to-br from-blue-400 to-indigo-500 p-3 rounded-lg text-white">
                      <span role="img" aria-label="Landing" className="text-xl">
                        📝
                      </span>
                    </div>
                    <h3 className="font-semibold text-lg">MakeLanding</h3>
                  </div>
                  <span className="bg-blue-100 text-blue-700 text-xs px-2 py-1 rounded-full font-medium flex items-center">
                    <span className="mr-1">🔹</span> Acquired
                  </span>
                </div>
                <p className="text-gray-600 mt-2">
                  Make a landing page instantly with AI &lt;Sold for $35K&gt;
                </p>
                <div className="flex items-center gap-2 mt-4">
                  <span className="inline-block px-2 py-1 bg-blue-100 text-blue-700 text-xs rounded-full">
                    AI
                  </span>
                  <span className="inline-block px-2 py-1 bg-indigo-100 text-indigo-700 text-xs rounded-full">
                    Web
                  </span>
                </div>
              </div>

              {/* Project Card: GameWidget */}
              <div className="bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition-all duration-300 hover:translate-y-[-2px] border border-transparent hover:border-green-200">
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-3">
                    <div className="bg-gradient-to-br from-green-400 to-teal-500 p-3 rounded-lg text-white">
                      <span role="img" aria-label="Game" className="text-xl">
                        🎮
                      </span>
                    </div>
                    <h3 className="font-semibold text-lg">GameWidget</h3>
                  </div>
                  <span className="bg-blue-100 text-blue-700 text-xs px-2 py-1 rounded-full font-medium flex items-center">
                    <span className="mr-1">🔹</span> Acquired
                  </span>
                </div>
                <p className="text-gray-600 mt-2">
                  Turn website visitors into customers &lt;Sold for $4K&gt;
                </p>
                <div className="flex items-center gap-2 mt-4">
                  <span className="inline-block px-2 py-1 bg-green-100 text-green-700 text-xs rounded-full">
                    Conversion
                  </span>
                  <span className="inline-block px-2 py-1 bg-teal-100 text-teal-700 text-xs rounded-full">
                    Widget
                  </span>
                </div>
              </div>

              {/* Project Card: VirallyBot */}
              <div className="bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition-all duration-300 hover:translate-y-[-2px] border border-transparent hover:border-red-200">
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-3">
                    <div className="bg-gradient-to-br from-red-400 to-pink-500 p-3 rounded-lg text-white">
                      <span role="img" aria-label="Rocket" className="text-xl">
                        🚀
                      </span>
                    </div>
                    <h3 className="font-semibold text-lg">VirallyBot</h3>
                  </div>
                  <span className="bg-red-100 text-red-700 text-xs px-2 py-1 rounded-full font-medium">
                    Discontinued
                  </span>
                </div>
                <p className="text-gray-600 mt-2">
                  My first $1 online. It's a SaaS that reached $4K MRR ($80,000
                  total revenue) but was rekt by COVID
                </p>
                <div className="flex items-center gap-2 mt-4">
                  <span className="inline-block px-2 py-1 bg-red-100 text-red-700 text-xs rounded-full">
                    SaaS
                  </span>
                  <span className="inline-block px-2 py-1 bg-pink-100 text-pink-700 text-xs rounded-full">
                    Marketing
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
