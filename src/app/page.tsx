import ProfileSection from "./profile-section";
import ProjectGrid from "./project-grid";

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-pink-50">
      <div className="container mx-auto px-4 py-12 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Profile Section */}
          <div className="lg:col-span-3 space-y-6">
            <ProfileSection />
          </div>

          {/* Projects Grid */}
          <div className="lg:col-span-9">
            <ProjectGrid title="Featured Projects" projects={sampleProjects} />
          </div>
        </div>
      </div>
    </div>
  );
}

const sampleProjects = [
  {
    id: 1,
    name: "Insighto",
    description: "Build features users (really) want",
    emoji: "⬆️",
    emojiLabel: "Arrow up",
    color: "from-blue-400 to-indigo-500",
    tags: [
      { label: "Product", bgColor: "bg-blue-100", textColor: "text-blue-700" },
      { label: "SaaS", bgColor: "bg-indigo-100", textColor: "text-indigo-700" },
    ],
    status: "active",
  },
  {
    id: 2,
    name: "50 Hacks",
    description: "The top 50 productivity tips chosen by the internet",
    emoji: "✨",
    emojiLabel: "Sparkles",
    color: "from-green-400 to-teal-500",
    tags: [
      {
        label: "Content",
        bgColor: "bg-green-100",
        textColor: "text-green-700",
      },
      {
        label: "Productivity",
        bgColor: "bg-teal-100",
        textColor: "text-teal-700",
      },
    ],
    status: "acquired",
  },
  {
    id: 3,
    name: "Hero Fit",
    description: "Gamify your fitness, grow a workout avatar",
    emoji: "🦸",
    emojiLabel: "Superhero",
    color: "from-purple-400 to-pink-500",
    tags: [
      {
        label: "Fitness",
        bgColor: "bg-purple-100",
        textColor: "text-purple-700",
      },
      { label: "App", bgColor: "bg-pink-100", textColor: "text-pink-700" },
    ],
    status: "active",
  },
];
