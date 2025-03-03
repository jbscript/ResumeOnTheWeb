import { Button } from "@/components/ui/button";
import React, { useState } from "react";
const projectsSample = [
  {
    id: "saaswizard",
    title: "SaaSWizard",
    description: "Streamline your SaaS subscriptions",
    icon: "https://kzmjezh8rzxirxgehgem.lite.vusercontent.net/placeholder.svg?height=28&width=28",
    iconBg: "bg-indigo-100",
    tags: [
      { label: "SaaS", color: "bg-indigo-100 text-indigo-800" },
      { label: "Management", color: "bg-gray-100 text-gray-800" },
    ],
    fullDescription:
      "SaaSWizard is a cloud-based platform that centralizes the management of all your SaaS subscriptions. Track usage, optimize costs, and gain insights to maximize efficiency. With seamless integrations and real-time analytics, SaaSWizard ensures you're getting the best value from your software investments.",
    images: [
      "https://kzmjezh8rzxirxgehgem.lite.vusercontent.net/placeholder.svg?height=400&width=600",
      "https://kzmjezh8rzxirxgehgem.lite.vusercontent.net/placeholder.svg?height=400&width=600",
      "https://kzmjezh8rzxirxgehgem.lite.vusercontent.net/placeholder.svg?height=400&width=600",
    ],
    features: [
      "Centralized dashboard for all subscriptions",
      "Real-time usage analytics",
      "Automated cost optimization recommendations",
      "Seamless integration with popular SaaS platforms",
      "Custom alerts for upcoming renewals",
    ],
    reviews: [
      {
        name: "Jordan Miles",
        role: "Product Manager at TechSolutions",
        comment:
          "SaaSWizard has simplified our subscription management, saving us both time and money!",
        rating: 5,
      },
    ],
    link: "https://example.com/saaswizard",
    ctaText: "Start Free Trial",
  },
  {
    id: "tabgenie",
    title: "Tab Genie",
    description: "Organize your browser tabs effortlessly",
    icon: "https://kzmjezh8rzxirxgehgem.lite.vusercontent.net/placeholder.svg?height=28&width=28",
    iconBg: "bg-yellow-100",
    tags: [
      { label: "Chrome Extension", color: "bg-yellow-100 text-yellow-800" },
      { label: "Productivity", color: "bg-blue-100 text-blue-800" },
    ],
    fullDescription:
      "Tab Genie is a Chrome extension designed to declutter your browser. Automatically group, manage, and save your open tabs, allowing you to focus on what matters most. Enjoy a streamlined browsing experience and boost your productivity effortlessly.",
    images: [
      "https://kzmjezh8rzxirxgehgem.lite.vusercontent.net/placeholder.svg?height=400&width=600",
      "https://kzmjezh8rzxirxgehgem.lite.vusercontent.net/placeholder.svg?height=400&width=600",
    ],
    features: [
      "Auto-group and manage tabs",
      "Session saving and restoration",
      "Customizable tab grouping rules",
      "Minimalist design for distraction-free browsing",
      "Quick access toolbar for favorite sites",
    ],
    reviews: [
      {
        name: "Jamie Collins",
        role: "UX Designer",
        comment:
          "Tab Genie has transformed my browsing experience by keeping my tabs organized and clutter-free.",
        rating: 5,
      },
    ],
    link: "https://example.com/tabgenie",
    ctaText: "Add to Chrome",
  },
  {
    id: "autoagent",
    title: "AutoAgent AI",
    description: "Your autonomous AI assistant",
    icon: "https://kzmjezh8rzxirxgehgem.lite.vusercontent.net/placeholder.svg?height=28&width=28",
    iconBg: "bg-red-100",
    tags: [
      { label: "AI", color: "bg-red-100 text-red-800" },
      { label: "Agentic", color: "bg-pink-100 text-pink-800" },
    ],
    fullDescription:
      "AutoAgent AI leverages cutting-edge autonomous algorithms to handle routine tasks on your behalf. From scheduling meetings to data analysis, this agentic AI learns from your interactions, streamlining your workflow with minimal input.",
    images: [
      "https://kzmjezh8rzxirxgehgem.lite.vusercontent.net/placeholder.svg?height=400&width=600",
      "https://kzmjezh8rzxirxgehgem.lite.vusercontent.net/placeholder.svg?height=400&width=600",
      "https://kzmjezh8rzxirxgehgem.lite.vusercontent.net/placeholder.svg?height=400&width=600",
    ],
    features: [
      "Autonomous task management",
      "Intelligent scheduling and reminders",
      "Adaptive learning from user behavior",
      "Integration with calendar and email apps",
      "Real-time performance insights",
    ],
    reviews: [
      {
        name: "Riley Adams",
        role: "Operations Manager",
        comment:
          "AutoAgent AI has significantly reduced my daily workload by automating repetitive tasks.",
        rating: 5,
      },
    ],
    link: "https://example.com/autoagent",
    ctaText: "Meet Your Agent",
  },
  {
    id: "travelmate",
    title: "Travel Mate",
    description: "Plan and share your travel adventures",
    icon: "https://kzmjezh8rzxirxgehgem.lite.vusercontent.net/placeholder.svg?height=28&width=28",
    iconBg: "bg-teal-100",
    tags: [
      { label: "React Native", color: "bg-teal-100 text-teal-800" },
      { label: "Travel", color: "bg-blue-100 text-blue-800" },
    ],
    fullDescription:
      "Travel Mate is a React Native mobile app that makes travel planning a breeze. Create itineraries, discover local attractions, and share your adventures with a vibrant community of travelers. Enjoy offline access and seamless synchronization across devices.",
    images: [
      "https://kzmjezh8rzxirxgehgem.lite.vusercontent.net/placeholder.svg?height=400&width=600",
      "https://kzmjezh8rzxirxgehgem.lite.vusercontent.net/placeholder.svg?height=400&width=600",
      "https://kzmjezh8rzxirxgehgem.lite.vusercontent.net/placeholder.svg?height=400&width=600",
    ],
    features: [
      "Itinerary creation and management",
      "Offline access to travel guides",
      "Community sharing and reviews",
      "Real-time synchronization across devices",
      "Integrated maps and local recommendations",
    ],
    reviews: [
      {
        name: "Taylor Reed",
        role: "Travel Blogger",
        comment:
          "Travel Mate is my go-to app for planning trips. The offline mode is a lifesaver when traveling abroad!",
        rating: 5,
      },
    ],
    link: "https://example.com/travelmate",
    ctaText: "Download App",
  },
];

export default function ProjectGrid() {
  return (
    <>
      <div className="p-6 max-lg:space-y-4 lg:grid lg:grid-cols-2 lg:gap-8 lg:p-16">
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
        className="bg-white rounded-xl shadow-sm p-4 hover:shadow-md transition-all duration-300
          hover:translate-y-[-2px] border border-transparent hover:border-blue-200"
        onClick={() => setIsOpen(true)}
      >
        <div>
          <div className="flex items-center gap-3">
            <span role="img" className="text-xl">
              🦸
            </span>

            <h3 className="font-semibold text-lg">{title}</h3>
          </div>
          <p className="text-gray-600 mt-1 text-sm">{description}</p>
        </div>

        <div className="flex items-center gap-2 mt-2">
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
