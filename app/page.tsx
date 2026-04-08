import Image from "next/image";
import { getArtistImage, getLatestReleases } from "@/lib/spotify";
import { extractPalette } from "@/lib/colors";
import { getLatestVideos } from "@/lib/youtube";

export default async function EPK() {
  const [artistImage, releases, videos] = await Promise.all([
    getArtistImage(),
    getLatestReleases(1),
    getLatestVideos(3),
  ]);

  const albumImageUrl = releases[0]?.image ?? "";
  const palette = albumImageUrl ? await extractPalette(albumImageUrl) : { vibrant: "#c9b99a", darkVibrant: "#1a1a1a", muted: "#6a6460" };
  const accent = palette.vibrant;

  return (
    <main className="min-h-screen bg-[#F5F2ED] text-[#1a1a1a]"
      style={{ "--accent": accent, "--accent-dark": palette.darkVibrant } as React.CSSProperties}>

      {/* ── HERO ── */}
      <section className="relative h-screen flex items-end overflow-hidden">
        <Image
          src="/press-photo.jpg"
          alt="Michael Cantor"
          fill
          priority
          className="object-cover object-center"
          style={{ filter: "brightness(0.9)" }}
        />
        <div className="relative z-10 px-8 pb-16 md:px-20 md:pb-24 max-w-4xl">
          <p className="fade-up fade-up-1 text-xs tracking-[0.3em] uppercase text-[#1a1a1a] mb-3">
            Electronic Press Kit
          </p>
          <h1 className="fade-up fade-up-2 text-6xl md:text-8xl font-bold tracking-tight leading-none mb-4">
            Michael<br />Cantor
          </h1>
          <p className="fade-up fade-up-3 text-lg md:text-xl text-[#1a1a1a] font-light">
            Singer-songwriter · Folk / Pop · New York, NY
          </p>
        </div>
        <div className="absolute bottom-8 right-8 z-10 flex flex-col items-center gap-2 opacity-40">
          <div className="w-px h-12 bg-[#f0ede8]" />
        </div>
      </section>

      {/* ── BIO ── */}
      <section id="bio" className="py-24 px-8 md:px-20 max-w-5xl mx-auto">
        <p className="text-xs tracking-[0.3em] uppercase text-[var(--accent)] mb-8">About</p>
        <div className="grid md:grid-cols-2 gap-16 items-start">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-8">
              Music that stays with you.
            </h2>
            <div className="w-12 h-px bg-[var(--accent)] mb-8" />
            <div className="relative w-full aspect-[3/4] rounded-2xl overflow-hidden">
              <Image
                src="/bio-photo.jpg"
                alt="Michael Cantor"
                fill
                className="object-cover object-top"
              />
            </div>
          </div>
          <div className="space-y-5 text-[#4a4a4a] leading-relaxed text-[15px]">
            <p>
              Michael Cantor is a singer-songwriter based in New York, NY, crafting intimate folk-pop that balances raw honesty with melodic warmth. Drawing on influences ranging from classic Americana to contemporary indie, his songs are built around thoughtful lyricism and a sound that feels both timeless and personal.
            </p>
            <p>
              His recent releases — <em>Letters</em>, <em>Sweet Tooth</em>, and <em>Make It Last Forever</em> — showcase an artist refining his voice with each record: open, earnest, and unafraid to sit with the complicated parts of being human.
            </p>
            <p>
              Michael performs regularly throughout Connecticut and the Northeast, bringing an engaging, stripped-back live show equally at home on an intimate café stage or an outdoor amphitheater.
            </p>
          </div>
        </div>
      </section>

      {/* ── MUSIC ── */}
      <section id="music" className="py-24 bg-[#EDE9E3]">
        <div className="px-8 md:px-20 max-w-5xl mx-auto">
          <p className="text-xs tracking-[0.3em] uppercase text-[var(--accent)] mb-8">Music</p>
          <h2 className="text-4xl md:text-5xl font-bold mb-12">Latest Releases</h2>
          <iframe
            src="https://open.spotify.com/embed/album/7MrQ6muRWJ8U0KSdGK63w2?utm_source=generator&theme=0"
            width="100%"
            height="352"
            style={{ borderRadius: 12 }}
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
          />
          <div className="mt-8 flex flex-wrap gap-4">
            <a href="https://open.spotify.com/artist/2nyS5xoo0whI3q74gsRmHL" target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#1DB954] text-black text-sm font-semibold hover:opacity-90 transition">
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z" />
              </svg>
              Spotify
            </a>
            <a href="https://music.apple.com/us/artist/michael-cantor/1631765548" target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#fc3c44] text-white text-sm font-semibold hover:opacity-90 transition">
              Apple Music
            </a>
            <a href="https://youtube.com/channel/UCHLDDkR-qNPVgtFQFGk4aDw" target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#FF0000] text-white text-sm font-semibold hover:opacity-90 transition">
              YouTube
            </a>
          </div>
        </div>
      </section>

      {/* ── LIVE ── */}
      <section id="live" className="py-24 px-8 md:px-20 max-w-5xl mx-auto">
        <p className="text-xs tracking-[0.3em] uppercase text-[var(--accent)] mb-8">Live</p>
        <h2 className="text-4xl md:text-5xl font-bold mb-12">Live Performances</h2>
        {videos.length > 0 && (
          <div className="grid md:grid-cols-3 gap-6 mb-10">
            {videos.map((video) => (
              <a
                key={video.id}
                href={video.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group"
              >
                <div className="relative aspect-video rounded-xl overflow-hidden mb-3">
                  <img
                    src={video.thumbnail}
                    alt={video.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 flex items-center justify-center bg-black/0 group-hover:bg-black/30 transition-colors duration-300">
                    <div className="w-12 h-12 rounded-full bg-white/90 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <svg className="w-5 h-5 text-black ml-0.5" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>
                  </div>
                </div>
                <p className="text-sm font-medium leading-snug group-hover:text-[var(--accent)] transition-colors">{video.title}</p>
                <p className="text-xs text-[#6a6460] mt-1">{video.published}</p>
              </a>
            ))}
          </div>
        )}
      </section>

      {/* ── SOCIAL ── */}
      <section className="py-24 px-8 md:px-20 max-w-5xl mx-auto">
        <p className="text-xs tracking-[0.3em] uppercase text-[var(--accent)] mb-8">Follow</p>
        <h2 className="text-4xl md:text-5xl font-bold mb-12">Stay Connected</h2>
        <div className="flex flex-wrap gap-4">
          {[
            { label: "Instagram", href: "https://www.instagram.com/michaelrcantor", color: "#E1306C" },
            { label: "TikTok", href: "https://www.tiktok.com/@michaelrcantor", color: "#010101" },
            { label: "YouTube", href: "https://youtube.com/@michaelcantor3", color: "#FF0000" },
          ].map((link) => (
            <a key={link.label} href={link.href} target="_blank" rel="noopener noreferrer"
              style={{ borderColor: link.color, color: link.color }}
              className="px-6 py-3 rounded-full border text-sm font-semibold hover:opacity-70 transition">
              {link.label}
            </a>
          ))}
        </div>
      </section>

      {/* ── BOOKING ── */}
      <section id="contact" className="py-24 bg-[#EDE9E3]">
        <div className="px-8 md:px-20 max-w-5xl mx-auto">
          <p className="text-xs tracking-[0.3em] uppercase text-[var(--accent)] mb-8">Booking</p>
          <h2 className="text-4xl md:text-5xl font-bold mb-12">Get in Touch</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <a href="mailto:Michael.r.cantor@gmail.com"
              className="group flex items-center gap-4 border border-[#D8D4CE] rounded-2xl p-8 hover:border-[var(--accent)] transition-colors">
              <div className="w-12 h-12 rounded-full bg-[#E8E4DE] flex items-center justify-center text-[var(--accent)]">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                </svg>
              </div>
              <div>
                <p className="text-xs text-[#6a6460] uppercase tracking-widest mb-1">Email</p>
                <p className="font-semibold group-hover:text-[var(--accent)] transition-colors text-sm">
                  Michael.r.cantor@gmail.com
                </p>
              </div>
            </a>
            <a href="tel:2032167905"
              className="group flex items-center gap-4 border border-[#D8D4CE] rounded-2xl p-8 hover:border-[var(--accent)] transition-colors">
              <div className="w-12 h-12 rounded-full bg-[#E8E4DE] flex items-center justify-center text-[var(--accent)]">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                </svg>
              </div>
              <div>
                <p className="text-xs text-[#6a6460] uppercase tracking-widest mb-1">Phone</p>
                <p className="font-semibold group-hover:text-[var(--accent)] transition-colors">
                  (203) 216-7905
                </p>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="py-8 px-8 md:px-20 border-t border-[#D8D4CE]">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-[#5a5a5a]">© 2026 Michael Cantor. All rights reserved.</p>
          <p className="text-sm text-[#5a5a5a]">michaelcantormusic.com</p>
        </div>
      </footer>

    </main>
  );
}
