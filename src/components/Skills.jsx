const categories = [
  {
    title: 'LANGUAGES',
    items: ['C++', 'Ruby', 'JavaScript', 'TypeScript', 'Python'],
    color: 'FF00FF',
  },
  {
    title: 'FRONTEND',
    items: ['React', 'Redux', 'Tailwind', 'HTML5', 'CSS3'],
    color: '00FFFF',
  },
  {
    title: 'BACKEND',
    items: ['Ruby on Rails', 'Git', 'SQL', 'REST APIs', 'Vite'],
    color: '00FF00',
  },
  {
    title: 'BUSINESS',
    items: ['Product Strategy', 'Financial Modeling', 'Market Analysis', 'Operations', 'Data Analytics'],
    color: 'FFFF00',
  },
]

export default function Skills() {
  return (
    <section id="skills" className="py-16 relative">
      <div className="max-w-4xl mx-auto px-4">
        {/* Section header */}
        <div className="flex items-center gap-4 mb-8">
          <div className="h-px flex-1 bg-[#00FF00]" style={{ boxShadow: '0 0 5px #00FF00' }} />
          <h2 className="text-xl md:text-2xl font-pixel text-[#00FF00] text-center">
            &lt;SKILLZ /&gt;
          </h2>
          <div className="h-px flex-1 bg-[#00FF00]" style={{ boxShadow: '0 0 5px #00FF00' }} />
        </div>

        <div className="mb-8 y2k-panel text-center">
          <p className="text-[#00FFFF] font-mono text-lg">
            A mix of engineering depth and business breadth. I use the right tool for the problem—whether it&apos;s <span className="text-[#FF00FF] font-bold">C++</span> for performance, <span className="text-[#00FF00] font-bold">React</span> for interfaces, or a <span className="text-[#FFFF00] font-bold">spreadsheet</span> for strategy.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {categories.map((cat) => (
            <div
              key={cat.title}
              className="y2k-panel group hover:scale-[1.02] transition-transform"
              style={{ borderColor: `#${cat.color}`, boxShadow: `inset 0 0 20px rgba(${parseInt(cat.color.slice(0,2),16)}, ${parseInt(cat.color.slice(2,4),16)}, ${parseInt(cat.color.slice(4,6),16)}, 0.1), 0 0 5px #${cat.color}` }}
            >
              <div
                className="font-pixel text-[10px] mb-3 text-center border-b pb-2"
                style={{ color: `#${cat.color}`, borderColor: `#${cat.color}` }}
              >
                [ {cat.title} ]
              </div>
              <div className="flex flex-wrap gap-2">
                {cat.items.map((item) => (
                  <span
                    key={item}
                    className="y2k-tag"
                    style={{ borderColor: `#${cat.color}`, color: `#${cat.color}`, boxShadow: `0 0 3px #${cat.color}` }}
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Decorative terminal */}
        <div className="mt-8 y2k-panel-yellow">
          <div className="font-pixel text-[10px] text-[#FFFF00] mb-2">&gt; system_info.exe</div>
          <div className="font-mono text-sm space-y-1">
            <div className="text-[#00FF00]">$ uname -a</div>
            <div className="text-[#00FFFF]">Linux sumer-zone 5.15.0-y2k #1 SMP PREEMPT_DYNAMIC x86_64 GNU/Linux</div>
            <div className="text-[#00FF00]">$ df -h</div>
            <div className="text-[#00FFFF]">Filesystem &nbsp;&nbsp;&nbsp;&nbsp;Size &nbsp;Used &nbsp;Avail &nbsp;Use% &nbsp;Mounted on</div>
            <div className="text-[#FFFF00]">/dev/brain0 &nbsp;&nbsp;&nbsp;100% &nbsp;87% &nbsp;&nbsp;13% &nbsp;&nbsp;87% &nbsp;/strategy</div>
            <div className="text-[#FFFF00]">/dev/tech1 &nbsp;&nbsp;&nbsp;&nbsp;100% &nbsp;92% &nbsp;&nbsp;8% &nbsp;&nbsp;&nbsp;92% &nbsp;/engineering</div>
            <div className="text-[#00FF00]">$ <span className="animate-blink">_</span></div>
          </div>
        </div>
      </div>
    </section>
  )
}
