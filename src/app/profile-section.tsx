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
  );
}
