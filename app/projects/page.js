import Navbar from "@/components/navbar";
import PaginationArrows from "@/components/arrow"
import ParticlesLayout from "@/components/ParticlesLayout";
import PageTransition from "@/components/PageTransition";

async function getGitHubRepos(username) {
  try {
    const res = await fetch(
      `https://api.github.com/users/${username}/repos?sort=updated&per_page=6`,
      { 
        next: { revalidate: 3600 },
        headers: {
          'Accept': 'application/vnd.github.v3+json',
        }
      }
    );

    if (!res.ok) {
      throw new Error('Failed to fetch repos');
    }

    const repos = await res.json();
    
    return repos.map(repo => ({
      title: repo.name,
      description: repo.description || 'No description provided',
      tech: repo.language ? [repo.language] : ['Code'],
      link: repo.html_url,
      stars: repo.stargazers_count,
      color: getColorForLanguage(repo.language)
    }));
  } catch (error) {
    console.error('Error fetching repos:', error);
    return [];
  }
}

async function getGitHubContributions(username) {
  try {
    const res = await fetch(
      `https://github-contributions-api.jogruber.de/v4/${username}`,
      { next: { revalidate: 3600 } }
    );

    if (!res.ok) {
      throw new Error('Failed to fetch contributions');
    }

    const data = await res.json();
    
    const contributions = [];
    let week = [];
    
    data.contributions.forEach((day, index) => {
      week.push(day.count);
      if ((index + 1) % 7 === 0) {
        contributions.push(week);
        week = [];
      }
    });
    
    if (week.length > 0) {
      contributions.push(week);
    }
    
    return contributions;
  } catch (error) {
    console.error('Error fetching contributions:', error);
    return generateMockContributions();
  }
}

function generateMockContributions() {
  const weeks = 52;
  const days = 7;
  const contributions = [];
  
  for (let week = 0; week < weeks; week++) {
    const weekData = [];
    for (let day = 0; day < days; day++) {
      weekData.push(Math.floor(Math.random() * 11));
    }
    contributions.push(weekData);
  }
  return contributions;
}

function getColorForLanguage(language) {
  const colors = {
    'JavaScript': 'from-yellow-600 to-orange-600',
    'TypeScript': 'from-blue-600 to-cyan-600',
    'Python': 'from-green-600 to-emerald-600',
    'Java': 'from-red-600 to-orange-600',
    'HTML': 'from-orange-600 to-red-600',
    'CSS': 'from-blue-600 to-indigo-600',
    'React': 'from-cyan-600 to-blue-600',
    'default': 'from-purple-600 to-pink-600'
  };
  return colors[language] || colors.default;
}

function getTailwindColorForLanguage(language) {
  const colors = {
    'JavaScript': 'bg-yellow-500',
    'TypeScript': 'bg-blue-500',
    'Python': 'bg-green-500',
    'Java': 'bg-red-500',
    'HTML': 'bg-orange-500',
    'CSS': 'bg-blue-600',
    'C++': 'bg-pink-500',
    'C': 'bg-gray-600',
    'Go': 'bg-cyan-500',
    'Rust': 'bg-orange-600',
    'Ruby': 'bg-red-600',
    'PHP': 'bg-indigo-500',
    'Swift': 'bg-orange-400',
    'Kotlin': 'bg-purple-500',
    'default': 'bg-gray-500'
  };
  return colors[language] || colors.default;
}

async function getLanguageStats(username) {
  try {
    const reposRes = await fetch(
      `https://api.github.com/users/${username}/repos?per_page=100`,
      { 
        next: { revalidate: 3600 },
        headers: { 'Accept': 'application/vnd.github.v3+json' }
      }
    );

    if (!reposRes.ok) {
      throw new Error('Failed to fetch repos for language stats');
    }

    const repos = await reposRes.json();
    const langTotals = {};

    for (const repo of repos) {
      if (repo.fork) continue;

      try {
        const langRes = await fetch(repo.languages_url, {
          next: { revalidate: 3600 }
        });
        
        if (langRes.ok) {
          const langData = await langRes.json();
          for (const [lang, bytes] of Object.entries(langData)) {
            langTotals[lang] = (langTotals[lang] || 0) + bytes;
          }
        }
      } catch (error) {
        console.error(`Error fetching languages for ${repo.name}:`, error);
      }
    }

    const total = Object.values(langTotals).reduce((a, b) => a + b, 0);
    
    if (total === 0) {
      return [];
    }

    return Object.entries(langTotals)
      .map(([name, bytes]) => ({
        name,
        level: Math.round((bytes / total) * 100),
        color: getTailwindColorForLanguage(name)
      }))
      .sort((a, b) => b.level - a.level)
      .slice(0, 6);
  } catch (error) {
    console.error('Error fetching language stats:', error);
    return [];
  }
}

function getContributionColor(count) {
  if (count === 0) return "bg-gray-100";
  if (count <= 2) return "bg-green-200";
  if (count <= 5) return "bg-green-400";
  if (count <= 8) return "bg-green-600";
  return "bg-green-800";
}

export default async function Projects() {
  const GITHUB_USERNAME = 'Swe2123';
  
  const [projects, contributions, languages] = await Promise.all([
    getGitHubRepos(GITHUB_USERNAME),
    getGitHubContributions(GITHUB_USERNAME),
    getLanguageStats(GITHUB_USERNAME)
  ]);

  return (
    <div className="min-h-screen bg-white select-none">
      <ParticlesLayout>
        <PageTransition>
          <Navbar />

          <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
            <div className="mb-16">
              <div className="mb-8">
                <h1 className="text-4xl font-bold text-black mb-2">Projects</h1>
                <div className="h-1 w-50 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full"></div>
              </div>

              {projects.length > 0 ? (
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
                        <p className="text-gray-600 text-sm mb-4 line-clamp-2">{project.description}</p>
                        <div className="flex flex-wrap gap-2 items-center">
                          {project.tech.map((tech, i) => (
                            <span
                              key={i}
                              className="px-3 py-1 text-xs font-medium bg-gray-100 text-gray-700 rounded-full"
                            >
                              {tech}
                            </span>
                          ))}
                          {project.stars > 0 && (
                            <span className="ml-auto text-xs text-gray-500 flex items-center gap-1">
                              ⭐ {project.stars}
                            </span>
                          )}
                        </div>
                      </div>
                    </a>
                  ))}
                </div>
              ) : (
                <div className="text-center py-12 text-gray-500">
                  <p>No projects found. Make sure your GitHub username is correct.</p>
                </div>
              )}
            </div>

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
                            className={`w-3 h-3 rounded-sm ${getContributionColor(count)} transition-all hover:ring-2 hover:ring-green-500 cursor-pointer`}
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

            <div className="mb-16">
              <div className="mb-8">
                <h2 className="text-3xl font-bold text-black mb-2">Languages & Skills</h2>
                <div className="h-1 w-20 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full"></div>
              </div>

              <div className="grid gap-6 md:grid-cols-2">
                {languages.length > 0 ? (
                  languages.map((lang, index) => (
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
                  ))
                ) : (
                  <div className="col-span-2 text-center py-12 text-gray-500">
                    <p>No language data available.</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </PageTransition>
        <PaginationArrows />
      </ParticlesLayout>
    </div>
  );
}