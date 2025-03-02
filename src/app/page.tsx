import ProfileSection from "./profile-section";
import ProjectGrid from "./project-grid";

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-pink-50">
      <div className="container mx-auto px-4 py-12 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-7">
          {/* Profile Section */}
          <div className="lg:col-span-3 space-y-6">
            <ProfileSection />
          </div>

          {/* Projects Grid */}
          <div className="lg:col-span-9">
            <ProjectGrid title="Projects" />
          </div>
        </div>
      </div>
    </div>
  );
}
