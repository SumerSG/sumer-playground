export default function Hero() {
  return (
    <section className="min-h-[100vh] flex items-center pt-14 relative overflow-hidden">
      {/* Decorative corners */}
      <div className="absolute top-20 left-4 text-[#FF00FF] font-pixel text-xs animate-blink">◢</div>
      <div className="absolute top-20 right-4 text-[#00FFFF] font-pixel text-xs animate-blink">◣</div>
      <div className="absolute bottom-20 left-4 text-[#FFFF00] font-pixel text-xs animate-blink">◥</div>
      <div className="absolute bottom-20 right-4 text-[#00FF00] font-pixel text-xs animate-blink">◤</div>

      <div className="max-w-4xl mx-auto px-4 w-full">
        {/* Welcome banner */}
        <div className="y2k-panel-pink mb-6 text-center">
          <div className="y2k-marquee-container">
            <div className="y2k-marquee-content font-pixel text-xs text-[#00FF00] py-1">
              ★ WELCOME TO SUMER.ZONE ★ BEST VIEWED IN 800x600 ★ NETSCAPE NAVIGATOR 4.0+ RECOMMENDED ★ WELCOME TO SUMER.ZONE ★ BEST VIEWED IN 800x600 ★ NETSCAPE NAVIGATOR 4.0+ RECOMMENDED ★
            </div>
          </div>
        </div>

        {/* Main content */}
        <div className="y2k-panel text-center mb-6">
          <p className="font-pixel text-[10px] text-[#FF00FF] mb-4 tracking-widest">
            MBA_CANDIDATE // EX_EE // AI_ENTHUSIAST
          </p>

          <h1 className="text-2xl md:text-4xl font-pixel text-[#00FFFF] leading-relaxed mb-6 animate-glow-pulse">
            BUILDING AT THE
            <br />
            <span className="text-[#FF00FF]">INTERSECTION</span>
            <br />
            OF TECH & STRATEGY
          </h1>

          <div className="max-w-lg mx-auto mb-8 p-4 border border-[#FF00FF] bg-[#000011]" style={{ boxShadow: 'inset 0 0 20px rgba(255,0,255,0.1)' }}>
            <p className="text-lg md:text-xl text-[#00FFFF] leading-relaxed font-mono">
              Hey, I&apos;m <span className="text-[#FF00FF] font-bold">SUMER</span> — an MBA student with an EE background, currently interning at <span className="text-[#FFFF00] font-bold">ai&amp;</span>. I bridge code and business logic to solve real problems.
            </p>
          </div>

          <div className="flex flex-wrap gap-4 justify-center">
            <a href="#projects" className="y2k-btn">
              ▶ VIEW WAREZ
            </a>
            <a href="#blog" className="y2k-btn-pink">
              ▶ READ BLOG
            </a>
          </div>
        </div>

        {/* Status box */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="y2k-panel text-center">
            <div className="font-pixel text-[10px] text-[#00FF00] mb-1">STATUS</div>
            <div className="text-[#00FF00] font-mono text-sm animate-pulse">● INTERNSHIP_ACTIVE</div>
          </div>
          <div className="y2k-panel-yellow text-center">
            <div className="font-pixel text-[10px] text-[#FFFF00] mb-1">LOCATION</div>
            <div className="text-[#FFFF00] font-mono text-sm">CYBERSPACE / LOCALHOST</div>
          </div>
          <div className="y2k-panel-pink text-center">
            <div className="font-pixel text-[10px] text-[#FF00FF] mb-1">MOOD</div>
            <div className="text-[#FF00FF] font-mono text-sm">★ OPTIMISTIC ★</div>
          </div>
        </div>
      </div>
    </section>
  )
}
