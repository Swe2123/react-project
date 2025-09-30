import Navbar from "@/components/navbar";
import PaginationArrows from "@/components/arrow"
import ParticlesLayout from "@/components/ParticlesLayout";
import PageTransition from "@/components/PageTransition";

export default function Projects() {
  // Sample projects data - replace with your actual projects
  const projects = [
    {
      title: "Portfolio Website",
      description: "Personal portfolio built with Next.js, Tailwind CSS, and interactive particles",
      tech: ["Next.js", "Tailwind", "React"],
      link: "https://github.com/yourusername/portfolio",
      color: "from-blue-600 to-cyan-600"
    },
    {
      title: "Project Name",
      description: "Brief description of what this project does and the problem it solves",
      tech: ["React", "Node.js", "MongoDB"],
      link: "https://github.com/yourusername/project",
      color: "from-purple-600 to-pink-600"
    },
    {
      title: "Another Project",
      description: "Another cool project you've built with interesting features",
      tech: ["TypeScript", "Next.js", "API"],
      link: "https://github.com/yourusername/another",
      color: "from-green-600 to-emerald-600"
    }
  ];

  // Sample languages/tech stack
  const languages = [
    { name: "JavaScript", level: 90, color: "bg-yellow-500" },
    { name: "TypeScript", level: 85, color: "bg-blue-500" },
    { name: "React/Next.js", level: 88, color: "bg-cyan-500" },
    { name: "Python", level: 75, color: "bg-green-500" },
    { name: "Node.js", level: 80, color: "bg-emerald-600" },
    { name: "Tailwind CSS", level: 92, color: "bg-teal-500" }
  ];

  // Generate mock GitHub contribution data (replace with real data from GitHub API)
  const generateContributions = () => {
    const weeks = 52;
    const days = 7;
    const contributions = [];
    
    for (let week = 0; week < weeks; week++) {
      const weekData = [];
      for (let day = 0; day < days; day++) {
        // Random contribution count for demo (0-10)
        const count = Math.floor(Math.random() * 11);
        weekData.push(count);
      }
      contributions.push(weekData);
    }
    return contributions;
  };

  const contributions = generateContributions();

  const getContributionColor = (count) => {
    if (count === 0) return "bg-gray-100";
    if (count <= 2) return "bg-green-200";
    if (count <= 5) return "bg-green-400";
    if (count <= 8) return "bg-green-600";
    return "bg-green-800";
  };

  return (
    <div className="min-h-screen bg-white">
      <ParticlesLayout>
        <PageTransition>
          <Navbar />

          <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
            {/* Projects Section */}
            <div className="mb-16">
              <div className="mb-8">
                <h1 className="text-4xl font-bold text-black mb-2">Projects</h1>
                <div className="h-1 w-20 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full"></div>
              </div>

              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {projects.map((project, index) => (
                  <a
                    key={index}
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative overflow-hidden rounded-xl backdrop-blur-sm bg-white/80 p-6 shadow-md ring-1 ring-gray-200/50 transition-all duration-300 hover:shadow-2xl hover:ring-blue-400 hover:-translate-y-2"
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-purple-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="relative z-10">
                      <div className={`h-1 w-12 bg-gradient-to-r ${project.color} rounded-full mb-4`}></div>
                      <h3 className="text-xl font-semibold text-black mb-2">{project.title}</h3>
                      <p className="text-gray-600 text-sm mb-4">{project.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {project.tech.map((tech, i) => (
                          <span
                            key={i}
                            className="px-3 py-1 text-xs font-medium bg-gray-100 text-gray-700 rounded-full"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* GitHub Activity Section */}
            <div className="mb-16">
              <div className="mb-8">
                <h2 className="text-3xl font-bold text-black mb-2">GitHub Activity</h2>
                <div className="h-1 w-20 bg-gradient-to-r from-green-600 to-emerald-600 rounded-full"></div>
              </div>

              <div className="relative overflow-hidden rounded-xl backdrop-blur-sm bg-white/80 p-6 shadow-md ring-1 ring-gray-200/50">
                <div className="overflow-x-auto">
                  <div className="inline-flex gap-[3px] p-4">
                    {contributions.map((week, weekIndex) => (
                      <div key={weekIndex} className="flex flex-col gap-[3px]">
                        {week.map((count, dayIndex) => (
                          <div
                            key={dayIndex}
                            className={`w-3 h-3 rounded-sm ${getContributionColor(count)} transition-all hover:ring-2 hover:ring-green-500`}
                            title={`${count} contributions`}
                          />
                        ))}
                      </div>
                    ))}
                  </div>
                </div>
                <div className="mt-4 flex items-center gap-2 text-xs text-gray-600">
                  <span>Less</span>
                  <div className="flex gap-1">
                    <div className="w-3 h-3 bg-gray-100 rounded-sm"></div>
                    <div className="w-3 h-3 bg-green-200 rounded-sm"></div>
                    <div className="w-3 h-3 bg-green-400 rounded-sm"></div>
                    <div className="w-3 h-3 bg-green-600 rounded-sm"></div>
                    <div className="w-3 h-3 bg-green-800 rounded-sm"></div>
                  </div>
                  <span>More</span>
                </div>
              </div>
            </div>

            {/* Languages & Skills Section */}
            <div className="mb-16">
              <div className="mb-8">
                <h2 className="text-3xl font-bold text-black mb-2">Languages & Skills</h2>
                <div className="h-1 w-20 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full"></div>
              </div>

              <div className="grid gap-6 md:grid-cols-2">
                {languages.map((lang, index) => (
                  <div
                    key={index}
                    className="relative overflow-hidden rounded-xl backdrop-blur-sm bg-white/80 p-6 shadow-md ring-1 ring-gray-200/50 transition-all duration-300 hover:shadow-xl"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-semibold text-black">{lang.name}</span>
                      <span className="text-sm text-gray-600">{lang.level}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
                      <div
                        className={`h-full ${lang.color} rounded-full transition-all duration-500`}
                        style={{ width: `${lang.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </PageTransition>
        <PaginationArrows />
      </ParticlesLayout>
    </div>
  );
}