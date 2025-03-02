"use client";

import type React from "react";

import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import {
  ExternalLink,
  Star,
  ChevronLeft,
  ChevronRight,
  X,
  Maximize2,
} from "lucide-react";
import { cn } from "@/lib/utils";

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
  features = [],
  reviews = [],
  link,
  ctaText = "Visit Website",
}: ProjectCardProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("overview");

  const handlePrevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentImageIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const handleNextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentImageIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const openLightbox = (e: React.MouseEvent, index: number) => {
    e.stopPropagation();
    setCurrentImageIndex(index);
    setLightboxOpen(true);
  };

  return (
    <>
      <div
        className="group relative bg-white rounded-xl border border-gray-200 overflow-hidden transition-all duration-300 hover:shadow-md hover:scale-[1.02] cursor-pointer"
        onClick={() => setIsOpen(true)}
      >
        <div className="p-5">
          <div className="flex items-start gap-4">
            <div
              className={`flex-shrink-0 w-12 h-12 rounded-lg flex items-center justify-center ${iconBg}`}
            >
              <img
                src={icon || "/placeholder.svg"}
                alt={title}
                width={28}
                height={28}
                className="object-contain"
              />
            </div>
            <div className="flex-1 min-w-0">
              <h3 className="text-lg font-semibold text-gray-900 mb-1 group-hover:text-primary transition-colors">
                {title}
              </h3>
              <p className="text-sm text-gray-600 line-clamp-2">
                {description}
              </p>
            </div>
          </div>

          <div className="mt-4 flex flex-wrap gap-2">
            {tags.slice(0, 3).map((tag) => (
              <Badge key={tag.label} variant="secondary" className={tag.color}>
                {tag.label}
              </Badge>
            ))}
            {tags.length > 3 && (
              <Badge variant="outline" className="text-gray-500">
                +{tags.length - 3}
              </Badge>
            )}
          </div>
        </div>

        <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      {/* Project Details Dialog */}
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="sm:max-w-[700px] p-0 overflow-hidden">
          <div className="max-h-[80vh] overflow-y-auto">
            {/* Image Carousel */}
            {images.length > 0 && (
              <div className="relative w-full h-[250px] bg-gray-100">
                <img
                  src={images[currentImageIndex] || "/placeholder.svg"}
                  alt={`${title} screenshot`}
                  fill
                  className="object-contain"
                />

                {/* Image Navigation */}
                {images.length > 1 && (
                  <>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white rounded-full"
                      onClick={handlePrevImage}
                    >
                      <ChevronLeft className="h-5 w-5" />
                    </Button>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white rounded-full"
                      onClick={handleNextImage}
                    >
                      <ChevronRight className="h-5 w-5" />
                    </Button>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="absolute right-2 top-2 bg-white/80 hover:bg-white rounded-full"
                      onClick={(e) => openLightbox(e, currentImageIndex)}
                    >
                      <Maximize2 className="h-4 w-4" />
                    </Button>
                  </>
                )}

                {/* Image Thumbnails */}
                {images.length > 1 && (
                  <div className="absolute bottom-2 left-0 right-0 flex justify-center gap-1">
                    {images.map((_, index) => (
                      <button
                        key={index}
                        className={cn(
                          "w-2 h-2 rounded-full transition-all",
                          currentImageIndex === index
                            ? "bg-primary scale-125"
                            : "bg-gray-300 hover:bg-gray-400"
                        )}
                        onClick={(e) => {
                          e.stopPropagation();
                          setCurrentImageIndex(index);
                        }}
                      />
                    ))}
                  </div>
                )}
              </div>
            )}

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

              {/* Tabs for Content Sections */}
              <Tabs
                value={activeTab}
                onValueChange={setActiveTab}
                className="mt-6"
              >
                <TabsList className="grid grid-cols-3 mb-4">
                  <TabsTrigger value="overview">Overview</TabsTrigger>
                  <TabsTrigger value="features">Features</TabsTrigger>
                  <TabsTrigger value="reviews">Reviews</TabsTrigger>
                </TabsList>

                <TabsContent value="overview" className="mt-0">
                  <DialogDescription className="text-gray-700 whitespace-pre-line">
                    {fullDescription || description}
                  </DialogDescription>

                  {/* Image Grid for Overview */}
                  {images.length > 1 && (
                    <div className="grid grid-cols-4 gap-2 mt-4">
                      {images.slice(0, 4).map((image, index) => (
                        <div
                          key={index}
                          className="relative aspect-square rounded-md overflow-hidden border border-gray-200 cursor-pointer"
                          onClick={(e) => openLightbox(e, index)}
                        >
                          <img
                            src={image || "/placeholder.svg"}
                            alt={`${title} image ${index + 1}`}
                            fill
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
                </TabsContent>

                <TabsContent value="features" className="mt-0">
                  {features.length > 0 ? (
                    <ul className="space-y-2">
                      {features.map((feature, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <div className="h-5 w-5 rounded-full bg-primary/10 text-primary flex items-center justify-center flex-shrink-0 mt-0.5">
                            <span className="text-xs font-medium">
                              {index + 1}
                            </span>
                          </div>
                          <span className="text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <p className="text-gray-500 italic">
                      No features listed for this project.
                    </p>
                  )}
                </TabsContent>

                <TabsContent value="reviews" className="mt-0">
                  {reviews.length > 0 ? (
                    <div className="space-y-4">
                      {reviews.map((review, index) => (
                        <div
                          key={index}
                          className="border border-gray-200 rounded-lg p-4"
                        >
                          <div className="flex justify-between items-start">
                            <div>
                              <h4 className="font-medium text-gray-900">
                                {review.name}
                              </h4>
                              <p className="text-sm text-gray-500">
                                {review.role}
                              </p>
                            </div>
                            <div className="flex items-center">
                              {Array.from({ length: 5 }).map((_, i) => (
                                <Star
                                  key={i}
                                  className={cn(
                                    "w-4 h-4",
                                    i < review.rating
                                      ? "fill-amber-400 text-amber-400"
                                      : "text-gray-300"
                                  )}
                                />
                              ))}
                            </div>
                          </div>
                          <p className="mt-2 text-gray-700">{review.comment}</p>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <p className="text-gray-500 italic">
                      No reviews yet for this project.
                    </p>
                  )}
                </TabsContent>
              </Tabs>
            </div>

            {/* Footer with CTA */}
            <DialogFooter className="p-6 pt-0">
              {link && (
                <Button
                  className="w-full sm:w-auto"
                  onClick={() => window.open(link, "_blank")}
                >
                  {ctaText}
                  <ExternalLink className="ml-2 h-4 w-4" />
                </Button>
              )}
            </DialogFooter>
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

          <div className="relative w-full max-w-4xl h-[80vh]">
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
