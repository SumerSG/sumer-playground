const projects = [
  {
    title: 'Distributed Systems Simulator',
    description: 'A C++ event-driven simulator for modeling distributed consensus protocols with configurable latency and fault injection.',
    tags: ['C++', 'Systems', 'Research'],
    link: '#',
    status: 'ACTIVE',
  },
  {
    title: 'Rails Analytics Dashboard',
    description: 'A Ruby on Rails application with React frontend for visualizing business KPIs in real-time with Redux state management.',
    tags: ['Ruby', 'React', 'Redux'],
    link: '#',
    status: 'ONLINE',
  },
  {
    title: 'AI Market Scanner',
    description: 'A prototype tool that aggregates AI industry news and generates strategic briefs using NLP pipelines.',
    tags: ['Python', 'NLP', 'Strategy'],
    link: '#',
    status: 'BETA',
  },
]

export default function Projects() {
  return (
    <section id="projects" className="py-16 relative">
      <div className="max-w-4xl mx-auto px-4">
        {/* Section header */}
        <div className="flex items-center gap-4 mb-8">
          <div className="h-px flex-1 bg-[#FF00FF]" style={{ boxShadow: '0 0 5px #FF00FF' }} />
          <h2 className="text-xl md:text-2xl font-pixel text-[#FF00FF] text-center">
            &lt;WAREZ /&gt;
          </h2>
          <div className="h-px flex-1 bg-[#FF00FF]" style={{ boxShadow: '0 0 5px #FF00FF' }} />
        </div>

        <div className="mb-8 y2k-panel-pink text-center">
          <p className="text-[#00FFFF] font-mono text-lg">
            A few things I&apos;ve built across the engineering and business spectrum. Each project reflects my belief that good solutions start with understanding the problem deeply.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {projects.map((project) => (
            <a
              key={project.title}
              href={project.link}
              className="group block y2k-panel hover:border-[#FF00FF] transition-all hover:scale-[1.02]"
            >
              <div className="flex items-center justify-between mb-3">
                <div className="w-10 h-10 border-2 border-[#00FFFF] bg-[#000011] flex items-center justify-center text-[#00FFFF] font-pixel text-xs group-hover:border-[#FF00FF] group-hover:text-[#FF00FF] transition-colors">
                  ◈
                </div>
                <span className="px-2 py-0.5 border border-[#00FF00] text-[#00FF00] font-pixel text-[8px]">
                  {project.status}
                </span>
              </div>
              <h3 className="font-mono text-[#00FFFF] text-lg font-bold mb-2 group-hover:text-[#FF00FF] transition-colors">
                {project.title}
              </h3>
              <p className="text-sm text-[#888] font-mono leading-relaxed mb-4">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span key={tag} className="y2k-tag">
                    {tag}
                  </span>
                ))}
              </div>

              {/* Hover effect indicator */}
              <div className="mt-3 flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                <span className="text-[#FF00FF] font-pixel text-[8px] animate-pulse">&gt;&gt;</span>
                <span className="text-[#FF00FF] font-pixel text-[8px]">CLICK_TO_DEPLOY</span>
              </div>
            </a>
          ))}
        </div>

        {/* Under construction banner */}
        <div className="mt-8 y2k-panel-yellow text-center py-3">
          <div className="font-pixel text-xs text-[#FFFF00] animate-rainbow">
            ⚠ MORE WAREZ COMING SOON ⚠
          </div>
          <div className="font-pixel text-[8px] text-[#888] mt-1">
            Last updated: 2026-06-17 // Build v2.0.1-alpha
          </div>
        </div>
      </div>
    </section>
  )
}
