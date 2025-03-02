import { Button } from "@/components/ui/button";
import React, { useState } from "react";
const projectsSample = [
  {
    id: "insighto",
    title: "Insighto",
    description: "Build features users (really) want",
    icon: "https://kzmjezh8rzxirxgehgem.lite.vusercontent.net/placeholder.svg?height=28&width=28",
    iconBg: "bg-blue-100",
    tags: [
      { label: "Product", color: "bg-blue-100 text-blue-800" },
      { label: "SaaS", color: "bg-indigo-100 text-indigo-800" },
      { label: "Analytics", color: "bg-cyan-100 text-cyan-800" },
    ],
    fullDescription:
      "Insighto helps product teams understand what features their users actually want, not just what they say they want. Using behavioral analytics and feedback collection, Insighto provides actionable insights for product development.\n\nBuilt with a focus on ease of use and integration, Insighto connects with your existing tools and provides a unified dashboard for all user feedback and behavior data.",
    images: [
      "https://kzmjezh8rzxirxgehgem.lite.vusercontent.net/placeholder.svg?height=400&width=600",
      "https://kzmjezh8rzxirxgehgem.lite.vusercontent.net/placeholder.svg?height=400&width=600",
      "https://kzmjezh8rzxirxgehgem.lite.vusercontent.net/placeholder.svg?height=400&width=600",
      "https://kzmjezh8rzxirxgehgem.lite.vusercontent.net/placeholder.svg?height=400&width=600",
    ],
    features: [
      "Real-time user behavior tracking with heatmaps and session recordings",
      "Automated feedback collection through targeted surveys and feedback widgets",
      "AI-powered analysis to identify patterns and prioritize feature requests",
      "Integration with popular product management tools like Jira, Trello, and Asana",
      "Custom reporting and dashboards for stakeholder presentations",
    ],
    reviews: [
      {
        name: "Sarah Johnson",
        role: "Product Manager at TechCorp",
        comment:
          "Insighto has completely transformed how we prioritize our roadmap. We're now building features our users actually use!",
        rating: 5,
      },
      {
        name: "Michael Chen",
        role: "CTO at StartupX",
        comment:
          "The integration with our existing tools was seamless, and the insights we've gained have been invaluable.",
        rating: 4,
      },
    ],
    link: "https://example.com/insighto",
    ctaText: "Try Free Demo",
  },
  {
    id: "50hacks",
    title: "50 Hacks",
    description: "The top 50 productivity tips chosen by the internet",
    icon: "https://kzmjezh8rzxirxgehgem.lite.vusercontent.net/placeholder.svg?height=28&width=28",
    iconBg: "bg-emerald-100",
    tags: [
      { label: "Content", color: "bg-green-100 text-green-800" },
      { label: "Productivity", color: "bg-teal-100 text-teal-800" },
    ],
    fullDescription:
      "A curated collection of the 50 most effective productivity hacks from across the internet. Each hack is explained with practical examples and implementation guides to help you boost your productivity immediately.\n\nThe collection is regularly updated based on user feedback and new research in productivity science.",
    images: [
      "https://kzmjezh8rzxirxgehgem.lite.vusercontent.net/placeholder.svg?height=400&width=600",
      "https://kzmjezh8rzxirxgehgem.lite.vusercontent.net/placeholder.svg?height=400&width=600",
      "https://kzmjezh8rzxirxgehgem.lite.vusercontent.net/placeholder.svg?height=400&width=600",
    ],
    features: [
      "50 actionable productivity techniques with step-by-step implementation guides",
      "Categorized by effort level and impact for easy filtering",
      "Downloadable templates and resources for each hack",
      "Community section where users share their results and adaptations",
      "Monthly updates with new techniques based on user voting",
    ],
    reviews: [
      {
        name: "Alex Rivera",
        role: "Freelance Designer",
        comment:
          "I've tried dozens of productivity systems, but 50 Hacks actually gave me practical techniques I could implement immediately.",
        rating: 5,
      },
    ],
    link: "https://example.com/50hacks",
    ctaText: "Get Access",
  },
  {
    id: "herofit",
    title: "Hero Fit",
    description: "Gamify your fitness, grow a workout avatar",
    icon: "https://kzmjezh8rzxirxgehgem.lite.vusercontent.net/placeholder.svg?height=28&width=28",
    iconBg: "bg-purple-100",
    tags: [
      { label: "Fitness", color: "bg-purple-100 text-purple-800" },
      { label: "App", color: "bg-pink-100 text-pink-800" },
      { label: "Gamification", color: "bg-violet-100 text-violet-800" },
    ],
    fullDescription:
      "Hero Fit turns your fitness journey into a game. As you complete workouts, your digital avatar grows stronger and unlocks new abilities. Connect with friends, join challenges, and make fitness fun again.\n\nThe app uses gamification principles to keep you motivated and consistent with your fitness routine.",
    images: [
      "https://kzmjezh8rzxirxgehgem.lite.vusercontent.net/placeholder.svg?height=400&width=600",
      "https://kzmjezh8rzxirxgehgem.lite.vusercontent.net/placeholder.svg?height=400&width=600",
      "https://kzmjezh8rzxirxgehgem.lite.vusercontent.net/placeholder.svg?height=400&width=600",
      "https://kzmjezh8rzxirxgehgem.lite.vusercontent.net/placeholder.svg?height=400&width=600",
    ],
    features: [
      "Personalized avatar that evolves as you complete workouts",
      "RPG-style progression system with levels, skills, and achievements",
      "Social challenges and competitions with friends",
      "Integration with fitness trackers and smartwatches",
      "Customizable workout plans based on your goals and preferences",
    ],
    reviews: [
      {
        name: "Jessica Kim",
        role: "Fitness Enthusiast",
        comment:
          "Hero Fit made me excited about working out again! Seeing my avatar get stronger keeps me motivated.",
        rating: 5,
      },
      {
        name: "David Thompson",
        role: "Gym Owner",
        comment:
          "We've implemented Hero Fit in our gym and seen a 30% increase in member retention. The gamification really works!",
        rating: 4,
      },
    ],
    link: "https://example.com/herofit",
    ctaText: "Download App",
  },
  {
    id: "fakeituntilyoumakeit",
    title: "Fake It Till You Make It",
    description: "Prank your entrepreneur friends!",
    icon: "https://kzmjezh8rzxirxgehgem.lite.vusercontent.net/placeholder.svg?height=28&width=28",
    iconBg: "bg-amber-100",
    tags: [
      { label: "Fun", color: "bg-amber-100 text-amber-800" },
      { label: "Tool", color: "bg-orange-100 text-orange-800" },
    ],
    fullDescription:
      "A fun tool to generate fake startup success stories, complete with made-up metrics, funding rounds, and testimonials. Perfect for pranking your entrepreneur friends or adding some humor to your next startup meetup.",
    images: [
      "https://kzmjezh8rzxirxgehgem.lite.vusercontent.net/placeholder.svg?height=400&width=600",
      "https://kzmjezh8rzxirxgehgem.lite.vusercontent.net/placeholder.svg?height=400&width=600",
    ],
    features: [
      "Generate realistic-looking startup success metrics and growth charts",
      "Create fake funding announcements from top VCs",
      "Produce AI-generated testimonials and case studies",
      "Design mockup screenshots of non-existent products",
      "Share directly to social media with one click",
    ],
    reviews: [
      {
        name: "Ryan Garcia",
        role: "Startup Founder",
        comment:
          "Used this at our last founder meetup and had everyone in stitches. The metrics look so real!",
        rating: 5,
      },
    ],
    link: "https://example.com/fakeituntilyoumakeit",
    ctaText: "Start Pranking",
  },
  {
    id: "visualizehabit",
    title: "Visualize Habit",
    description: "Discover how tiny habits compound over years",
    icon: "https://kzmjezh8rzxirxgehgem.lite.vusercontent.net/placeholder.svg?height=28&width=28",
    iconBg: "bg-blue-100",
    tags: [
      { label: "Productivity", color: "bg-teal-100 text-teal-800" },
      { label: "Tool", color: "bg-orange-100 text-orange-800" },
      { label: "Self-Improvement", color: "bg-blue-100 text-blue-800" },
    ],
    fullDescription:
      "Visualize Habit helps you understand the power of small daily habits through interactive visualizations. See how tiny 1% improvements compound over time and create significant life changes.",
    images: [
      "https://kzmjezh8rzxirxgehgem.lite.vusercontent.net/placeholder.svg?height=400&width=600",
      "https://kzmjezh8rzxirxgehgem.lite.vusercontent.net/placeholder.svg?height=400&width=600",
      "https://kzmjezh8rzxirxgehgem.lite.vusercontent.net/placeholder.svg?height=400&width=600",
    ],
    features: [
      "Interactive calculators to visualize the compound effect of daily habits",
      "Habit tracking with visual progress indicators",
      "Customizable goals and milestones",
      "Data-driven insights about your consistency and progress",
      "Reminder system with smart notifications based on your behavior patterns",
    ],
    reviews: [
      {
        name: "Emma Wilson",
        role: "Life Coach",
        comment:
          "I recommend Visualize Habit to all my clients. The visual representation of compound growth is incredibly motivating.",
        rating: 5,
      },
      {
        name: "Thomas Lee",
        role: "Software Engineer",
        comment:
          "As someone who loves data, I appreciate how this tool quantifies the impact of my daily habits.",
        rating: 4,
      },
    ],
    link: "https://example.com/visualizehabit",
    ctaText: "Visualize Your Habits",
  },
  {
    id: "decisiongame",
    title: "Decision Game",
    description: "A fun game to stop overthinking. Save Kitty!",
    icon: "https://kzmjezh8rzxirxgehgem.lite.vusercontent.net/placeholder.svg?height=28&width=28",
    iconBg: "bg-rose-100",
    tags: [
      { label: "Game", color: "bg-rose-100 text-rose-800" },
      { label: "Mental Health", color: "bg-pink-100 text-pink-800" },
    ],
    fullDescription:
      "Decision Game is a fun, interactive game designed to help you overcome decision paralysis and overthinking. Help save Kitty by making quick decisions under time pressure, and learn to trust your instincts in the process.",
    images: [
      "https://kzmjezh8rzxirxgehgem.lite.vusercontent.net/placeholder.svg?height=400&width=600",
      "https://kzmjezh8rzxirxgehgem.lite.vusercontent.net/placeholder.svg?height=400&width=600",
    ],
    features: [
      "Fun, engaging gameplay that secretly trains your decision-making skills",
      "Progressive difficulty levels that adapt to your decision-making speed",
      "Mindfulness techniques integrated into gameplay",
      "Performance analytics to track your improvement over time",
      "Daily challenges to keep you engaged and improving",
    ],
    reviews: [
      {
        name: "Olivia Martinez",
        role: "Chronic Overthinker",
        comment:
          "I didn't realize I was improving my decision-making until I noticed changes in my real life. Plus, the game is adorable!",
        rating: 5,
      },
    ],
    link: "https://example.com/decisiongame",
    ctaText: "Play Now",
  },
];
export default function ProjectGrid({ title = "My Projects" }) {
  const [activeTab, setActiveTab] = useState("all");

  return (
    <>
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-gray-800">{title}</h2>
        <div className="flex items-center gap-2">
          {["all", "active", "acquired"].map((tab) => (
            <Button
              key={tab}
              variant={activeTab === tab ? "default" : "outline"}
              className={`text-sm ${
                activeTab === tab
                  ? "bg-gradient-to-r from-pink-500 to-orange-500 text-white"
                  : "bg-white"
              }`}
              onClick={() => setActiveTab(tab)}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </Button>
          ))}
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projectsSample.map((project) => (
          <ProjectCard key={project.id} {...project} />
        ))}
      </div>
    </>
  );
}

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";

import { Badge } from "@/components/ui/badge";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

export interface ProjectCardProps {
  id: string;
  title: string;
  description: string;
  icon: string;
  iconBg: string;
  tags: {
    label: string;
    color: string;
  }[];
  fullDescription?: string;
  images?: string[];
  features?: string[];
  reviews?: {
    name: string;
    role: string;
    comment: string;
    rating: number;
  }[];
  link?: string;
  ctaText?: string;
}

export function ProjectCard({
  id,
  title,
  description,
  icon,
  iconBg,
  tags,
  fullDescription,
  images = [],
}: ProjectCardProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);

  const openLightbox = (e: React.MouseEvent, index: number) => {
    e.stopPropagation();
    setCurrentImageIndex(index);
    setLightboxOpen(true);
  };

  return (
    <>
      <div
        className="bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition-all duration-300
          hover:translate-y-[-2px] border border-transparent hover:border-blue-200"
        onClick={() => setIsOpen(true)}
      >
        <div className="flex items-start justify-between">
          <div className="flex items-center gap-3">
            <div
              className={`bg-gradient-to-br ${iconBg}  p-3 rounded-lg text-white`}
            >
              <span role="img" className="text-xl">
                🦸
              </span>
            </div>
            <h3 className="font-semibold text-lg">{title}</h3>
          </div>
        </div>
        <p className="text-gray-600 mt-2">{description}</p>
        <div className="flex items-center gap-2 mt-4">
          {tags.map((tag, index) => (
            <span
              key={index}
              className={`inline-block px-2 py-1 ${tag.color} ${tag.color} text-xs rounded-full`}
            >
              {tag.label}
            </span>
          ))}
        </div>
      </div>

      {/* Project Details Dialog */}
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="sm:max-w-7xl p-4 overflow-hidden">
          <div className="max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              {/* Header with Icon and Title */}
              <DialogHeader>
                <div className="flex items-center gap-3">
                  <div
                    className={`w-10 h-10 rounded-lg flex items-center justify-center ${iconBg}`}
                  >
                    <img
                      src={icon || "/placeholder.svg"}
                      alt={title}
                      width={24}
                      height={24}
                      className="object-contain"
                    />
                  </div>
                  <DialogTitle className="text-xl">{title}</DialogTitle>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mt-3">
                  {tags.map((tag) => (
                    <Badge
                      key={tag.label}
                      variant="secondary"
                      className={tag.color}
                    >
                      {tag.label}
                    </Badge>
                  ))}
                </div>
              </DialogHeader>

              <div className="mt-6">
                <DialogDescription className="text-gray-700 whitespace-pre-line">
                  {fullDescription || description}
                </DialogDescription>

                {images.length > 1 && (
                  <div className="grid grid-cols-4 gap-2 mt-4">
                    {images.slice(0, 4).map((image, index) => (
                      <div
                        key={index}
                        className="relative aspect-square rounded-md overflow-hidden border border-gray-200 cursor-pointer"
                        onClick={(e) => {
                          e.stopPropagation();
                          setIsOpen(false);
                          openLightbox(e, index);
                        }}
                      >
                        <img
                          src={image || "/placeholder.svg"}
                          alt={`${title} image ${index + 1}`}
                          className="object-cover hover:scale-110 transition-transform duration-300"
                        />
                      </div>
                    ))}
                    {images.length > 4 && (
                      <div
                        className="relative aspect-square rounded-md overflow-hidden border border-gray-200 cursor-pointer bg-gray-100 flex items-center justify-center"
                        onClick={(e) => openLightbox(e, 4)}
                      >
                        <span className="text-gray-600 font-medium">
                          +{images.length - 4}
                        </span>
                      </div>
                    )}
                  </div>
                )}
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>

      {/* Lightbox for Full-Screen Images */}
      {lightboxOpen && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center"
          onClick={() => setLightboxOpen(false)}
        >
          <Button
            variant="ghost"
            size="icon"
            className="absolute right-4 top-4 text-white hover:bg-white/20 rounded-full"
            onClick={() => setLightboxOpen(false)}
          >
            <X className="h-6 w-6" />
          </Button>

          <div className="relative w-full max-w-4xl h-[94vh]">
            <img
              src={images[currentImageIndex] || "/placeholder.svg"}
              alt={`${title} screenshot full view`}
              fill
              className="object-contain"
            />
          </div>

          {images.length > 1 && (
            <>
              <Button
                variant="ghost"
                size="icon"
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 rounded-full text-white"
                onClick={(e) => {
                  e.stopPropagation();
                  setCurrentImageIndex((prev) =>
                    prev === 0 ? images.length - 1 : prev - 1
                  );
                }}
              >
                <ChevronLeft className="h-6 w-6" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 rounded-full text-white"
                onClick={(e) => {
                  e.stopPropagation();
                  setCurrentImageIndex((prev) =>
                    prev === images.length - 1 ? 0 : prev + 1
                  );
                }}
              >
                <ChevronRight className="h-6 w-6" />
              </Button>
            </>
          )}

          {/* Image Counter */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/50 text-white px-3 py-1 rounded-full text-sm">
            {currentImageIndex + 1} / {images.length}
          </div>
        </div>
      )}
    </>
  );
}
