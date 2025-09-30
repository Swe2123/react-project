import Navbar from "@/components/navbar"
import PaginationArrows from "@/components/arrow"
import ParticlesLayout from "@/components/ParticlesLayout";

export default function Description() {
  return (
    <div className="min-h-screen bg-white">
        <ParticlesLayout>
      <Navbar />

      <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-black mb-8">What I Do</h1>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          <div className="border border-gray-200 p-4 hover:bg-gray-50 hover:border-gray-300 transition-all duration-200">
            <p className="text-gray-700 text-sm"></p>
          </div>

          <div className="border border-gray-200 p-4 hover:bg-gray-50 hover:border-gray-300 transition-all duration-200">
            <h2 className="text-lg font-medium text-black mb-3">
              Technologies
            </h2>
            <p className="text-gray-700 text-sm"></p>
          </div>

          <div className="border border-gray-200 p-4 hover:bg-gray-50 hover:border-gray-300 transition-all duration-200">
            <h2 className="text-lg font-medium text-black mb-3">Experience</h2>
            <p className="text-gray-700 text-sm"></p>
          </div>
        </div>
      </div>
      s
      <PaginationArrows />
      </ParticlesLayout>
    </div>
  );
}