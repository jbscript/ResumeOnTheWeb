import ProfileSection from "./profile-section";

import ProjectGrid from "./project-grid";

export default function App() {
  return (
    <main className="min-h-screen bg-[#e6e6e6]">
      <div className="noscrollbar mx-auto flex min-h-screen max-w-[1800px] flex-col max-lg:pb-16 lg:h-screen lg:flex-row lg:overflow-y-auto">
        <section className="noscrollbar shrink-0 space-y-4 p-6 lg:sticky lg:top-0 lg:h-screen lg:w-[350px] lg:space-y-8 lg:overflow-y-auto lg:p-16 lg:pr-0 lg:pb-24 xl:w-[500px] xl:pr-16">
          <ProfileSection />
        </section>

        <section className="w-full max-w-[1100px] lg:h-full">
          <div className="divider my-0 px-6 lg:hidden" />
          <ProjectGrid />
        </section>
      </div>
    </main>
  );
}
