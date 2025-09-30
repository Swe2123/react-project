import Navbar from "@/components/navbar"
import PaginationArrows from "@/components/arrow"
import ParticlesLayout from "@/components/ParticlesLayout";

export default function Qualifications() {
  return (
    <div className="min-h-screen bg-white" >
      <ParticlesLayout>
      <Navbar />

      <div className="mx-auto max-w-2xl px-4 py-20 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-black mb-12">Background</h1>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          <div className="border border-gray-200 p-6 hover:bg-gray-50 hover:border-gray-300 transition-all duration-200">
            <h2 className="text-lg font-medium text-black mb-4">Education</h2>
            <div className="space-y-4">
              <div>
                <p className="font-medium text-black">cs50</p>
                <p className="text-gray-700">Unicollege • 2025</p>
              </div>
              <div>
                <p className="font-medium text-black"> Highschool </p>
                <p className="text-gray-700">Krugersdorp Highschool • 2024</p>
              </div>
            </div>
          </div>

          <div className="border border-gray-200 p-6 hover:bg-gray-50 hover:border-gray-300 transition-all duration-200">
            <h2 className="text-lg font-medium text-black mb-4">Experience</h2>
            <div className="space-y-4">
              <div>
                <p className="font-medium text-black"></p>
                <p className="text-gray-700"> </p>
                <p className="text-gray-600 text-sm mt-1"></p>
              </div>
              <div>
                <p className="font-medium text-black"></p>
                <p className="text-gray-700"></p>
                <p className="text-gray-600 text-sm mt-1"></p>
              </div>
            </div>
          </div>

          <div className="border border-gray-200 p-6 hover:bg-gray-50 hover:border-gray-300 transition-all duration-200">
            <h2 className="text-lg font-medium text-black mb-4">Skills</h2>
            <p className="text-gray-700">
              Backend dev using python and django/flask as frameworks
            </p>
          </div>

          <div className="border border-gray-200 p-6 hover:bg-gray-50 hover:border-gray-300 transition-all duration-200">
            <h2 className="text-lg font-medium text-black mb-4">
              Certifications
            </h2>
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
      </ParticlesLayout>
      <PaginationArrows  />
    </div>
  );
}
