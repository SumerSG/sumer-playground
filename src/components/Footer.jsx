import HitCounter from './HitCounter'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="py-8 border-t-2 border-[#FF00FF] relative" style={{ boxShadow: '0 0 20px rgba(255,0,255,0.3)' }}>
      <div className="max-w-4xl mx-auto px-4">
        {/* Webring decoration */}
        <div className="flex items-center justify-center gap-4 mb-6">
          <div className="h-px w-16 bg-[#00FFFF]" />
          <span className="font-pixel text-[10px] text-[#00FFFF]">◄ WEBRING ►</span>
          <div className="h-px w-16 bg-[#00FFFF]" />
        </div>

        <div className="grid md:grid-cols-3 gap-6 items-start mb-6">
          {/* Left: Info */}
          <div className="text-center md:text-left">
            <p className="font-pixel text-sm text-[#00FFFF]">SUMER.ZONE</p>
            <p className="font-pixel text-[10px] text-[#888] mt-2 leading-relaxed">
              MBA_CANDIDATE // AI&_INTERN // EE_BACKGROUND
            </p>
            <div className="mt-3 flex items-center gap-2 justify-center md:justify-start">
              <span className="w-2 h-2 rounded-full bg-[#00FF00] animate-pulse" />
              <span className="font-pixel text-[10px] text-[#00FF00]">SERVER UP</span>
            </div>
          </div>

          {/* Center: Hit Counter */}
          <div className="flex flex-col items-center justify-center">
            <HitCounter />
            <div className="mt-2 font-pixel text-[8px] text-[#888]">
              THANKS FOR VISITING MY SITE!
            </div>
          </div>

          {/* Right: Links */}
          <div className="text-center md:text-right">
            <div className="flex justify-center md:justify-end gap-4">
              {[
                { label: 'GITHUB', color: '00FFFF' },
                { label: 'LINKEDIN', color: 'FF00FF' },
                { label: 'XITTER', color: 'FFFF00' },
              ].map((link) => (
                <a
                  key={link.label}
                  href="#"
                  className="font-pixel text-[10px] transition-all hover:scale-110"
                  style={{ color: `#${link.color}` }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.textShadow = `0 0 10px #${link.color}`
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.textShadow = 'none'
                  }}
                >
                  [ {link.label} ]
                </a>
              ))}
            </div>
            <div className="mt-4 font-pixel text-[8px] text-[#333]">
              BEST VIEWED AT 800x600
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-[#000033] pt-4 flex flex-col md:flex-row items-center justify-between gap-2">
          <p className="font-pixel text-[8px] text-[#333]">
            &copy; {year} SUMER.ZONE // ALL RIGHTS RESERVED
          </p>
          <p className="font-pixel text-[8px] text-[#333]">
            MADE WITH ☕ AND 💾 IN CYBERSPACE
          </p>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 bg-[#FF0000]" />
            <span className="w-2 h-2 bg-[#FF9900]" />
            <span className="w-2 h-2 bg-[#FFFF00]" />
            <span className="w-2 h-2 bg-[#00FF00]" />
            <span className="w-2 h-2 bg-[#00FFFF]" />
            <span className="w-2 h-2 bg-[#9900FF]" />
            <span className="w-2 h-2 bg-[#FF00FF]" />
          </div>
        </div>

        {/* Final marquee */}
        <div className="mt-6 y2k-marquee-container">
          <div className="y2k-marquee-content font-pixel text-[10px] text-[#FF00FF] py-1">
            ★ THANKS FOR VISITING MY HOMEPAGE ★ PLEASE SIGN MY GUESTBOOK ★ EMAIL ME AT WEBMASTER@SUMER.ZONE ★ BEST VIEWED IN NETSCAPE NAVIGATOR ★ THANKS FOR VISITING MY HOMEPAGE ★ PLEASE SIGN MY GUESTBOOK ★
          </div>
        </div>
      </div>
    </footer>
  )
}
