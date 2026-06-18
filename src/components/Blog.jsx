import { useSelector, useDispatch } from 'react-redux'
import { setFilter } from '../store.js'

const filters = ['ALL', 'AI', 'ENGINEERING', 'STRATEGY']

export default function Blog() {
  const dispatch = useDispatch()
  const { posts, filter } = useSelector((state) => state.blog)

  const filteredPosts =
    filter === 'ALL' ? posts : posts.filter((p) => p.tag.toUpperCase() === filter)

  return (
    <section id="blog" className="py-16 relative">
      <div className="max-w-4xl mx-auto px-4">
        {/* Section header */}
        <div className="flex items-center gap-4 mb-8">
          <div className="h-px flex-1 bg-[#FFFF00]" style={{ boxShadow: '0 0 5px #FFFF00' }} />
          <h2 className="text-xl md:text-2xl font-pixel text-[#FFFF00] text-center">
            &lt;WRITING /&gt;
          </h2>
          <div className="h-px flex-1 bg-[#FFFF00]" style={{ boxShadow: '0 0 5px #FFFF00' }} />
        </div>

        <div className="mb-8 y2k-panel-yellow text-center">
          <p className="text-[#00FFFF] font-mono text-lg">
            Thoughts on technology, business, and the space where they overlap. I write to clarify my own thinking—shared here in case it helps yours too.
          </p>
        </div>

        {/* Filter buttons */}
        <div className="flex flex-wrap gap-2 mb-6 justify-center">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => dispatch(setFilter(f))}
              className={`px-4 py-2 text-xs font-pixel border-2 transition-all ${
                filter === f
                  ? 'bg-[#000033] text-[#FFFF00] border-[#FFFF00]'
                  : 'bg-black text-[#888] border-[#333] hover:border-[#00FFFF] hover:text-[#00FFFF]'
              }`}
              style={filter === f ? { boxShadow: '0 0 10px #FFFF00' } : {}}
            >
              [{f}]
            </button>
          ))}
        </div>

        <div className="space-y-4">
          {filteredPosts.map((post) => (
            <a
              key={post.id}
              href="#"
              className="group block y2k-panel hover:border-[#FFFF00] transition-all"
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-3">
                <h3 className="font-mono text-[#00FFFF] text-lg font-bold group-hover:text-[#FFFF00] transition-colors">
                  <span className="text-[#FF00FF] mr-2">▶</span>
                  {post.title}
                </h3>
                <div className="flex items-center gap-3 text-xs font-pixel shrink-0">
                  <span className="px-2 py-1 border border-[#00FF00] text-[#00FF00]">
                    {post.tag.toUpperCase()}
                  </span>
                  <span className="text-[#888]">{post.date}</span>
                  <span className="text-[#333]">|</span>
                  <span className="text-[#888]">{post.readTime}</span>
                </div>
              </div>
              <p className="text-[#888] font-mono leading-relaxed">
                {post.excerpt}
              </p>

              {/* Hover effect */}
              <div className="mt-3 flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                <span className="text-[#FFFF00] font-pixel text-[8px] animate-pulse">&gt;&gt;&gt;</span>
                <span className="text-[#FFFF00] font-pixel text-[8px]">READ_FULL_ARTICLE</span>
              </div>
            </a>
          ))}
        </div>

        {filteredPosts.length === 0 && (
          <div className="y2k-panel text-center py-8">
            <div className="font-pixel text-sm text-[#FF0000]">
              ✖ NO POSTS FOUND ✖
            </div>
            <div className="font-pixel text-[10px] text-[#888] mt-2">
              Try selecting a different filter...
            </div>
          </div>
        )}

        {/* Guestbook teaser */}
        <div className="mt-8 y2k-panel text-center py-4">
          <div className="font-pixel text-xs text-[#00FFFF] mb-2">
            ☆ SIGN MY GUESTBOOK ☆
          </div>
          <div className="font-pixel text-[10px] text-[#FF00FF] animate-blink">
            Coming in v3.0 // Stay tuned
          </div>
        </div>
      </div>
    </section>
  )
}
