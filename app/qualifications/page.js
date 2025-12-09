import Navbar from "@/components/navbar"
import PaginationArrows from "@/components/arrow"
import ParticlesLayout from "@/components/ParticlesLayout";
import PageTransition from "@/components/PageTransition";

export default function Qualifications() {
  return (
    <div className="min-h-screen bg-white select-none">
      <ParticlesLayout>
        <PageTransition>
        <Navbar />

        <div className="mx-auto max-w-2xl px-4 py-20 sm:px-6 lg:px-8">
          {/* Enhanced heading */}
          <div className="mb-12">
            <h1 className="text-4xl font-bold text-black mb-2">Background</h1>
            <div className="h-1 w-50 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full"></div>
          </div>

          
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            
            <div className="group relative overflow-hidden rounded-xl backdrop-blur-sm bg-white/80 p-6 shadow-md ring-1 ring-gray-200/50 transition-all duration-300 hover:shadow-2xl hover:ring-blue-400 hover:-translate-y-2">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-cyan-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative z-10">
                <h2 className="text-lg font-semibold text-black mb-4">Education</h2>
                <div className="space-y-4">
                  <div>
                    <p className="font-medium text-black">cs50</p>
                    <p className="text-gray-700"> Unicollege • 2025</p>
                  </div>
                  <div>
                    <p className="font-medium text-black">Highschool</p>
                    <p className="text-gray-700">Krugersdorp Highschool • 2024</p>
                  </div>
                </div>
              </div>
            </div>

            
            <div className="group relative overflow-hidden rounded-xl backdrop-blur-sm bg-white/80 p-6 shadow-md ring-1 ring-gray-200/50 transition-all duration-300 hover:shadow-2xl hover:ring-purple-400 hover:-translate-y-2">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-50/50 to-pink-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-purple-100 to-transparent opacity-50 rounded-bl-full"></div>
              <div className="relative z-10">
                <h2 className="text-lg font-semibold text-black mb-4">Experience</h2>
                <div className="space-y-4">
                  <div>
                    <p className="font-medium text-black"></p>
                    <p className="text-gray-700"></p>
                    <p className="text-gray-600 text-sm mt-1"></p>
                  </div>
                  <div>
                    <p className="font-medium text-black"></p>
                    <p className="text-gray-700"></p>
                    <p className="text-gray-600 text-sm mt-1"></p>
                  </div>
                </div>
              </div>
            </div>

            
            <div className="group relative overflow-hidden rounded-xl backdrop-blur-sm bg-white/80 p-6 shadow-md ring-1 ring-gray-200/50 transition-all duration-300 hover:shadow-2xl hover:ring-indigo-400 hover:-translate-y-2">
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-50/50 to-blue-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative z-10">
                <h2 className="text-lg font-semibold text-black mb-4">Skills</h2>
                <p className="text-gray-700">
                  Backend dev using python and django/flask as frameworks
                </p>
              </div>
            </div>

            
            <div className="group relative overflow-hidden rounded-xl backdrop-blur-sm bg-white/80 p-6 shadow-md ring-1 ring-gray-200/50 transition-all duration-300 hover:shadow-2xl hover:ring-green-400 hover:-translate-y-2">
              <div className="absolute inset-0 bg-gradient-to-br from-green-50/50 to-emerald-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative z-10">
                <h2 className="text-lg font-semibold text-black mb-4">Certifications</h2>
                <div className="space-y-2">
                  <div>
                    <p className="font-medium text-black"></p>
                    <p className="text-gray-700"></p>
                  </div>
                  <div>
                    <p className="font-medium text-black"></p>
                    <p className="text-gray-700"></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        </PageTransition>
        <PaginationArrows />
      </ParticlesLayout>
    </div>
  );
}