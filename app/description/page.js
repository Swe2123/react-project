import Navbar from "@/components/navbar"
import PaginationArrows from "@/components/arrow"
import ParticlesLayout from "@/components/ParticlesLayout";
import PageTransition from "@/components/PageTransition";

export default function Description() {
  return (
    <div className="min-h-screen bg-white">
        <ParticlesLayout>
      <PageTransition>
      <Navbar />

        <div className="mx-auto max-w-2xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="mb-12"> 
        <h1 className="text-4xl font-bold text-black mb-8">What I Do</h1>
        <div className="h-1 w-20 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full"></div>
        </div> 

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <div className="group relative overflow-hidden rounded-xl backdrop-blur-sm bg-white/80 p-6 shadow-md ring-1 ring-gray-200/50 transition-all duration-300 hover:shadow-2xl hover:ring-blue-400 hover:-translate-y-2">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-purple-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative z-10">
                <h2 className="text-lg font-semibold text-black mb-3"></h2>
                <p className="text-gray-700">
                  
                </p>
              </div>
            </div>

          <div className="group relative overflow-hidden rounded-xl backdrop-blur-sm bg-white/80 p-6 shadow-md ring-1 ring-gray-200/50 transition-all duration-300 hover:shadow-2xl hover:ring-purple-400 hover:-translate-y-2">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-50/50 to-pink-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-purple-100 to-transparent opacity-50 rounded-bl-full"></div>
              <div className="relative z-10">
                <h2 className="text-lg font-semibold text-black mb-3"></h2>
                <p className="text-gray-700">
                  
                </p>
              </div>
            </div>

          <div className="group relative overflow-hidden rounded-xl backdrop-blur-sm bg-white/80 p-6 shadow-md ring-1 ring-gray-200/50 transition-all duration-300 hover:shadow-2xl hover:ring-indigo-400 hover:-translate-y-2">
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-50/50 to-blue-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative z-10">
                <h2 className="text-lg font-semibold text-black mb-3">Interests</h2>
                <p className="text-gray-700">
                  Your content here
                </p>
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