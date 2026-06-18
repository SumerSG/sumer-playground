import { useState, useEffect } from 'react'

const navLinks = [
  { label: 'ABOUT', href: '#about' },
  { label: 'SKILLZ', href: '#skills' },
  { label: 'WAREZ', href: '#projects' },
  { label: 'BLOG', href: '#blog' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [online, setOnline] = useState(true)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)

    const blinkInterval = setInterval(() => {
      setOnline((prev) => !prev)
    }, 2000)

    return () => {
      window.removeEventListener('scroll', onScroll)
      clearInterval(blinkInterval)
    }
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-black/95 border-b-2 border-[#FF00FF]'
          : 'bg-black/80 border-b-2 border-[#00FFFF]'
      }`}
      style={scrolled ? { boxShadow: '0 0 15px #FF00FF' } : { boxShadow: '0 0 15px #00FFFF' }}
    >
      <div className="max-w-5xl mx-auto px-4 h-14 flex items-center justify-between">
        <a href="#" className="text-sm font-pixel text-[#00FFFF] hover:text-[#FF00FF] transition-colors">
          ★ SUMER.ZONE ★
        </a>

        {/* Online Status */}
        <div className="hidden md:flex items-center gap-2 mr-4">
          <span className={`w-2 h-2 rounded-full ${online ? 'bg-[#00FF00]' : 'bg-[#FF0000]'} ${online ? 'animate-pulse' : ''}`} />
          <span className="text-xs font-pixel text-[#00FF00]">
            {online ? 'ONLINE' : 'AWAY'}
          </span>
        </div>

        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="px-3 py-1 text-xs font-pixel text-[#00FFFF] hover:text-[#FF00FF] hover:bg-[#000033] border border-transparent hover:border-[#FF00FF] transition-all"
            >
              [{link.label}]
            </a>
          ))}
        </div>

        <button
          className="md:hidden p-2 text-[#00FFFF] border border-[#00FFFF] hover:border-[#FF00FF] hover:text-[#FF00FF]"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          <span className="font-pixel text-xs">
            {mobileOpen ? '[X]' : '[=]'}
          </span>
        </button>
      </div>

      {mobileOpen && (
        <div className="md:hidden bg-black border-t-2 border-[#FF00FF]" style={{ boxShadow: '0 0 20px rgba(255,0,255,0.5)' }}>
          <div className="px-4 py-2 flex flex-col gap-2">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-xs font-pixel text-[#00FFFF] hover:text-[#FF00FF] py-2 border-b border-[#000033]"
                onClick={() => setMobileOpen(false)}
              >
                &gt; {link.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  )
}
