export const dynamic = "force-dynamic";

import Navbar from "@/components/navbar"
import PaginationArrows from "@/components/arrow"
import ParticlesLayout from "@/components/ParticlesLayout"
import PageTransition from "@/components/PageTransition"
import { supabase } from "@/lib/supabase"




export default async function Qualifications() {
  const { data: education } = await supabase
    .from("education")
    .select("*")
    

  const { data: experience } = await supabase
    .from("experience")
    .select("*")
    

  const { data: skills } = await supabase
    .from("skills")
    .select("*")
    
  const { data: certs } = await supabase
    .from("certifications")
    .select("*")
    
  return (
    <div className="min-h-screen bg-white select-none">
      <ParticlesLayout>
        <PageTransition>
          <Navbar />

          <div className="mx-auto max-w-2xl px-4 py-20 sm:px-6 lg:px-8">
            <div className="mb-12">
              <h1 className="text-4xl font-bold text-black mb-2">Background</h1>
              <div className="h-1 w-50 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full"></div>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              
              {/* Education */}
              <div className="group relative overflow-hidden rounded-xl backdrop-blur-sm bg-white/80 p-6 shadow-md ring-1 ring-gray-200/50 transition-all hover:shadow-2xl hover:ring-blue-400 hover:-translate-y-2">
                <div className="relative z-10">
                  <h2 className="text-lg font-semibold text-black mb-4">Education</h2>
                  <div className="space-y-4">
                    {education?.map((e) => (
                      <div key={e.id}>
                        <p className="font-medium text-black">{e.title}</p>
                        <p className="text-gray-700">{e.place} • {e.year}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Experience */}
              <div className="group relative overflow-hidden rounded-xl backdrop-blur-sm bg-white/80 p-6 shadow-md ring-1 ring-gray-200/50 transition-all hover:shadow-2xl hover:ring-purple-400 hover:-translate-y-2">
                <div className="relative z-10">
                  <h2 className="text-lg font-semibold text-black mb-4">Experience</h2>
                  <div className="space-y-4">
                    {experience?.map((exp) => (
                      <div key={exp.id}>
                        <p className="font-medium text-black">{exp.role}</p>
                        <p className="text-gray-700">{exp.company}</p>
                        <p className="text-gray-600 text-sm mt-1">{exp.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Skills */}
              <div className="group relative overflow-hidden rounded-xl backdrop-blur-sm bg-white/80 p-6 shadow-md ring-1 ring-gray-200/50 transition-all hover:shadow-2xl hover:ring-indigo-400 hover:-translate-y-2">
                <div className="relative z-10">
                  <h2 className="text-lg font-semibold text-black mb-4">Skills</h2>
                  <ul className="text-gray-700 space-y-2">
                    {skills?.map((s) => (
                      <li key={s.id}>{s.skill}</li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Certifications */}
              <div className="group relative overflow-hidden rounded-xl backdrop-blur-sm bg-white/80 p-6 shadow-md ring-1 ring-gray-200/50 transition-all hover:shadow-2xl hover:ring-green-400 hover:-translate-y-2">
                <div className="relative z-10">
                  <h2 className="text-lg font-semibold text-black mb-4">Certifications</h2>
                  <div className="flex space-x-6 overflow-x-auto">
                    {certs?.map((c) => (
                      <div
                        key={c.id}
                        data-iframe-width="150"
                        data-iframe-height="270"
                        data-share-badge-id={c.badge_id}
                        data-share-badge-host="https://www.credly.com"
                      ></div>
                    ))}
                  </div>

                  <script
                    type="text/javascript"
                    async
                    src="//cdn.credly.com/assets/utilities/embed.js"
                  ></script>
                </div>
              </div>

            </div>
          </div>
        </PageTransition>

        <PaginationArrows />
      </ParticlesLayout>
    </div>
  )
}
