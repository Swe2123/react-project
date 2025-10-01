import Navbar from "@/components/navbar"
import PaginationArrows from "@/components/arrow"
import ParticlesLayout from "@/components/ParticlesLayout";
import PageTransition from "@/components/PageTransition";

export default function About() {
  
  return (
    <div className="min-h-screen bg-white select-none" >
          <ParticlesLayout>
            <PageTransition>
            <div className="relative z-10">
              <Navbar />
    
              <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
                <div className="mb-12">
                  <h1 className="text-4xl font-bold text-black mb-2">Christie Payne</h1>
                  <div className="h-1 w-20 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full"></div>
                </div>
    
                
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                  <div className="group relative overflow-hidden rounded-xl backdrop-blur-sm bg-white/80 p-6 shadow-md ring-1 ring-gray-200/50 transition-all duration-300 hover:shadow-2xl hover:ring-blue-400 hover:-translate-y-2">
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-cyan-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="relative z-10">
                      <h2 className="text-lg font-semibold text-black mb-3">Hello</h2>
                      <p className="text-gray-700 text-sm">
                        I'm Christie Payne, an aspiring cybersecurity and game developer.
                      </p>
                    </div>
                  </div>
    
                  
                  <div className="group relative overflow-hidden rounded-xl backdrop-blur-sm bg-white/80 p-6 shadow-md ring-1 ring-gray-200/50 transition-all duration-300 hover:shadow-2xl hover:ring-purple-400 hover:-translate-y-2">
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-50/50 to-pink-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="relative z-10">
                      <h2 className="text-lg font-semibold text-black mb-3">What I Do</h2>
                      <p className="text-gray-700 text-sm">
                        2 years of programming through the courses Code Academy and CS50.
                        My current skills are fullstack web developer that specialises in
                        backend using Django.
                      </p>
                    </div>
                  </div>
    
                  <div className="group relative overflow-hidden rounded-xl backdrop-blur-sm bg-white/80 p-6 shadow-md ring-1 ring-gray-200/50 transition-all duration-300 hover:shadow-2xl hover:ring-indigo-400 hover:-translate-y-2">
                    <div className="absolute inset-0 bg-gradient-to-br from-indigo-50/50 to-blue-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-indigo-100 to-transparent opacity-50 rounded-bl-full"></div>
                    <div className="relative z-10">
                      <h2 className="text-lg font-semibold text-black mb-3">Recent Work</h2>
                      <p className="text-gray-700 text-sm mb-2">
                        This project, which is a Next.js project using React and Tailwind
                        and a financial application using C.
                      </p>
                    </div>
                  </div>
    
    
                  <div className="group relative overflow-hidden rounded-xl backdrop-blur-sm bg-white/80 p-6 shadow-md ring-1 ring-gray-200/50 transition-all duration-300 hover:shadow-2xl hover:ring-green-400 hover:-translate-y-2">
                    <div className="absolute inset-0 bg-gradient-to-br from-green-50/50 to-emerald-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="relative z-10">
                      <h2 className="text-lg font-semibold text-black mb-3">Currently</h2>
                      <p className="text-gray-700 text-sm">
                        Currently looking to study at university and improve my skills and
                        broaden my knowledge within this field as a whole
                      </p>
                    </div>
                  </div>
    
    
                <div className="group relative overflow-hidden rounded-xl backdrop-blur-sm bg-white/80 p-6 shadow-md ring-1 ring-gray-200/50 transition-all duration-300 hover:shadow-2xl hover:ring-orange-400 hover:-translate-y-2">
                  <div className="absolute inset-0 bg-gradient-to-br from-orange-50/50 to-amber-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="relative z-10">
                    <h2 className="text-lg font-semibold text-black mb-3">Contact</h2>
                    <div className="space-y-1 text-sm">
                      <div>
                        <span className="text-gray-700">Email: </span>
                        <a 
                          href="mailto:christiepaynr@gmail.com"
                          className="text-black underline hover:text-blue-600"
                        >
                          christiepaynr@gmail.com
                        </a>
                      </div>
                      <div>
                        <span className="text-gray-700">GitHub: </span>
                        <a 
                          href="https://github.com/Swe2123"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-black underline hover:text-blue-600"
                        >
                          Swe2123
                        </a>
                      </div>
                      <div>
                        <span className="text-gray-700">YouTube: </span>
                        <a 
                          href="https://youtube.com/@NoStringsAttached-f8n"
                          target="_blank"
                          rel="noopener noreferrer"
                            className="text-black underline hover:text-blue-600"
                          >
                            @NoStringsAttached-f8n
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
    
              
                  <div className="group relative overflow-hidden rounded-xl backdrop-blur-sm bg-white/80 p-6 shadow-md ring-1 ring-gray-200/50 transition-all duration-300 hover:shadow-2xl hover:ring-red-400 hover:-translate-y-2">
                    <div className="absolute inset-0 bg-gradient-to-br from-red-50/50 to-rose-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="relative z-10">
                      <h2 className="text-lg font-semibold text-black mb-3">Quick Links</h2>
                      <div className="space-y-1 text-sm">
                        
                          <a href="/resume.pdf"
                          download="Christie-Payne-Resume.pdf"
                          className="text-black underline hover:text-blue-600">
                        
                          Download resume
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <PaginationArrows />
            </div>
            </PageTransition>
          </ParticlesLayout>
        </div>
  );
}