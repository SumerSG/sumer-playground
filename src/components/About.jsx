export default function About() {
  return (
    <section id="about" className="py-16 relative">
      <div className="max-w-4xl mx-auto px-4">
        {/* Section header */}
        <div className="flex items-center gap-4 mb-8">
          <div className="h-px flex-1 bg-[#00FFFF]" style={{ boxShadow: '0 0 5px #00FFFF' }} />
          <h2 className="text-xl md:text-2xl font-pixel text-[#00FFFF] text-center">
            &lt;ABOUT_ME /&gt;
          </h2>
          <div className="h-px flex-1 bg-[#00FFFF]" style={{ boxShadow: '0 0 5px #00FFFF' }} />
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Bio text */}
          <div className="y2k-panel">
            <div className="space-y-4 text-[#00FFFF] leading-relaxed font-mono text-lg">
              <p>
                My journey started in <span className="text-[#FF00FF] font-bold">electrical engineering</span>—building circuits, writing firmware in <span className="text-[#FFFF00] font-bold">C++</span>, and understanding how hardware constraints shape software decisions.
              </p>
              <p>
                Today, I&apos;m pursuing an <span className="text-[#00FF00] font-bold">MBA</span> to bridge the gap between deep technical work and high-level business strategy. I believe the best products are built by people who understand both the stack <em>and</em> the market.
              </p>
              <p>
                At <span className="text-[#FF00FF] font-bold">ai&amp;</span>, I&apos;m working on the front lines of artificial intelligence—translating complex technical capabilities into tangible business value.
              </p>
            </div>

            {/* Animated divider */}
            <div className="my-4 flex items-center justify-center gap-2">
              <span className="text-[#FF00FF] animate-blink">◆</span>
              <span className="text-[#00FFFF] animate-blink" style={{ animationDelay: '0.2s' }}>◆</span>
              <span className="text-[#00FF00] animate-blink" style={{ animationDelay: '0.4s' }}>◆</span>
              <span className="text-[#FFFF00] animate-blink" style={{ animationDelay: '0.6s' }}>◆</span>
              <span className="text-[#FF00FF] animate-blink" style={{ animationDelay: '0.8s' }}>◆</span>
            </div>

            <div className="text-center font-pixel text-[10px] text-[#888] mt-4">
              [ SIGNAL: STRONG ]
            </div>
          </div>

          {/* Current Focus Panel */}
          <div className="y2k-panel-pink">
            <div className="font-pixel text-xs text-[#FF00FF] mb-4 border-b border-[#FF00FF] pb-2 text-center">
              ★ CURRENT_FOCUS ★
            </div>
            <ul className="space-y-4">
              {[
                { title: 'AI Strategy & Product', desc: 'Exploring how LLMs and ML reshape enterprise workflows', color: '00FFFF' },
                { title: 'Full-Stack Development', desc: 'React, Redux, Ruby, and modern web architecture', color: '00FF00' },
                { title: 'Systems Thinking', desc: 'From circuit design to organizational design', color: 'FFFF00' },
              ].map((item) => (
                <li key={item.title} className="flex items-start gap-3 group">
                  <span className="text-[#FF00FF] mt-1 text-xs">▶</span>
                  <div>
                    <p className="font-mono text-[#00FFFF] font-bold text-lg group-hover:text-[#FF00FF] transition-colors">
                      {item.title}
                    </p>
                    <p className="text-sm font-mono" style={{ color: `#${item.color}` }}>
                      {item.desc}
                    </p>
                  </div>
                </li>
              ))}
            </ul>

            {/* Progress bar decoration */}
            <div className="mt-6">
              <div className="flex justify-between text-[10px] font-pixel text-[#FF00FF] mb-1">
                <span>LOADING...</span>
                <span>87%</span>
              </div>
              <div className="w-full h-4 border-2 border-[#FF00FF] bg-[#000011] p-0.5">
                <div className="h-full bg-gradient-to-r from-[#FF00FF] to-[#00FFFF] animate-pulse" style={{ width: '87%' }} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
