import profile from "@/assets/profile.png";
import {
  Twitter,
  Youtube,
  Linkedin,
  Instagram,
  MapPin,
  DollarSign,
} from "lucide-react";

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
        <span className="mx-2">•</span>
        <DollarSign size={18} />
        <span>$114.3k/month</span>
      </div>

      <p className="text-gray-700 italic mt-4 text-center lg:text-left text-sm">
        I was fired everywhere so I hired myself.
      </p>

      <div className="flex justify-center gap-4">
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
      <div className="bg-white rounded-xl border border-gray-200 p-4">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Experience</h3>
        <UserTimeline />
      </div>
    </div>
  );
}

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

interface TimelineEntryProps {
  id: string;
  title: string;
  company: string;
  startDate: string;
  endDate: string;
  description: string;
  icon: string;
  // location?: string
  // achievements?: string[]
  // skills?: string[]
  // iconBg?: string
  // link?: string
  // images?: string[]
}

const timelineEntries = [
  {
    id: "qabox",
    title: "Founder & CEO",
    company: "Qabox",
    startDate: "2023",
    endDate: "Present",
    description:
      "Founded Qabox, secured $2.5M funding, grew to 50+ enterprise customers.",
    icon: "https://kzmjezh8rzxirxgehgem.lite.vusercontent.net/placeholder.svg?height=40&width=40",
  },
  {
    id: "techcorp",
    title: "Senior Product Manager",
    company: "TechCorp",
    startDate: "2020",
    endDate: "2022",
    description:
      "Led flagship analytics platform, increased user engagement by 45%.",
    icon: "https://kzmjezh8rzxirxgehgem.lite.vusercontent.net/placeholder.svg?height=40&width=40",
  },
  {
    id: "innovatestart",
    title: "Product Designer",
    company: "InnovateStart",
    startDate: "2018",
    endDate: "2020",
    description:
      "Redesigned core learning platform, 28% increase in student engagement.",
    icon: "https://kzmjezh8rzxirxgehgem.lite.vusercontent.net/placeholder.svg?height=40&width=40",
  },
];

function UserTimeline() {
  return (
    <div className="space-y-4">
      {timelineEntries.map((entry) => (
        <TimelineEntry key={entry.id} entry={entry} />
      ))}
    </div>
  );
}

function TimelineEntry({ entry }: { entry: TimelineEntryProps }) {
  const { title, company, startDate, endDate, description, icon } = entry;

  return (
    <div className="flex items-start gap-3 p-3 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors duration-200">
      <div className="flex-shrink-0">
        <img
          src={icon || "/placeholder.svg"}
          alt={company}
          width={40}
          height={40}
          className="rounded-full"
        />
      </div>
      <div className="flex-grow min-w-0">
        <h4 className="text-sm font-semibold text-gray-900">{title}</h4>
        <p className="text-xs text-gray-600">{company}</p>
        <div className="flex items-center gap-2 mt-1">
          <Badge variant="secondary" className="text-xs font-normal">
            {startDate} - {endDate}
          </Badge>
        </div>
        <p className="text-sm text-gray-700 mt-2 line-clamp-2">{description}</p>
      </div>
    </div>
  );
}
