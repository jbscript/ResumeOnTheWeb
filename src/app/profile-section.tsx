import profile from "@/assets/profile.png";
import { Twitter, Youtube, Linkedin, Instagram, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function ProfileSection() {
  return (
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
      </div>

      <p className="text-gray-700  mt-4 text-center lg:text-left text-sm">
        🚀 Full-Stack Developer | Innovator | Founder
      </p>

      <p className="text-muted-foreground font-light mt-4 text-center lg:text-left text-sm">
        I’m a passionate full-stack developer with 4.5 years of experience
        building innovative products. From automation tools to gamified apps, I
        love creating solutions that enhance productivity, decision-making, and
        self-improvement. Whether it's building Chrome extensions, SaaS
        platforms, or AI-driven tools, I focus on delivering value through
        technology.
      </p>
      <div className="flex justify-center gap-4 mt-4">
        <Button variant="ghost" size="icon" className="rounded-full">
          <Twitter className="h-5 w-5 text-[#1DA1F2]" />
        </Button>
        <Button variant="ghost" size="icon" className="rounded-full">
          <Youtube className="h-5 w-5 text-[#FF0000]" />
        </Button>
        <Button variant="ghost" size="icon" className="rounded-full">
          <Linkedin className="h-5 w-5 text-[#0A66C2]" />
        </Button>
        <Button variant="ghost" size="icon" className="rounded-full">
          <Instagram className="h-5 w-5 text-[#E4405F]" />
        </Button>
      </div>
    </div>
  );
}
