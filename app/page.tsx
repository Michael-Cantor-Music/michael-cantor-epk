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
    <main className="min-h-screen bg-[#F5F2ED] text-[#8B6B4A]"
      style={{ "--accent": accent, "--accent-dark": palette.darkVibrant } as React.CSSProperties}>

      {/* ── NAV ── */}
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-start px-6 md:px-8 py-4 md:py-5">
        <div className="flex gap-4 md:gap-10 text-sm md:text-lg font-bold drop-shadow-md" style={{ color: "#8B6B4A" }}>
          {[
            { label: "Bio", href: "#bio" },
            { label: "Music", href: "#music" },
            { label: "Socials", href: "#socials" },
            { label: "Contact", href: "#contact" },
          ].map((link) => (
            <a key={link.label} href={link.href}
              className="hover:opacity-70 transition-opacity">
              {link.label}
            </a>
          ))}
        </div>
      </nav>

      {/* ── HERO ── */}
      <section className="relative h-screen overflow-hidden">
        <Image
          src="/press-photo.jpg"
          alt="Michael Cantor"
          fill
          priority
          className="object-cover object-center"
          style={{ filter: "brightness(0.9)" }}
        />
        <a href="#" className="absolute md:fixed bottom-2 left-6 md:bottom-4 md:left-8 z-50 group">
          <h1 className="fade-up fade-up-2 text-4xl md:text-6xl lg:text-8xl font-bold tracking-tight leading-none mb-2 md:mb-4 group-hover:opacity-70 transition-opacity drop-shadow-md" style={{ color: "#8B6B4A" }}>
            Michael<br />Cantor
          </h1>
        </a>
        {/* Upcoming Shows - fixed top right */}
        <div className="fixed top-0 right-8 z-50 py-4 md:py-5 hidden md:flex items-center">
          <p className="text-lg font-bold drop-shadow-md" style={{ color: "#8B6B4A" }}>Upcoming Shows</p>
        </div>

        {/* Social buttons */}
        <div className="absolute bottom-6 right-6 md:bottom-8 md:right-8 z-10 flex flex-col md:flex-row gap-2 md:gap-3">
          {[
            { label: "Instagram", href: "https://www.instagram.com/michaelrcantor" },
            { label: "TikTok", href: "https://www.tiktok.com/@michaelrcantor" },
            { label: "YouTube", href: "https://youtube.com/@michaelcantor3" },
          ].map((link) => (
            <a key={link.label} href={link.href} target="_blank" rel="noopener noreferrer"
              style={{ borderColor: "#8B6B4A", color: "#8B6B4A", backgroundColor: "rgba(255,255,255,0.85)" }}
              className="px-3 py-1.5 md:px-4 md:py-2 rounded-full border text-xs font-semibold hover:opacity-80 transition text-center">
              {link.label}
            </a>
          ))}
        </div>
      </section>

      {/* ── BIO ── */}
      <section id="bio" className="py-16 md:py-24 px-6 md:px-20 max-w-5xl mx-auto">
        <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-start">
          <div>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold leading-tight mb-2 md:mb-3">
              "Nothing — I mean nothing — beats a good cheeseburger."
            </h2>
            <p className="text-base md:text-lg font-medium mb-6 md:mb-8" style={{ color: "#a08060" }}>— Michael Cantor</p>
            <div className="w-12 h-px bg-[var(--accent)] mb-6 md:mb-8" />
            <div className="relative w-full aspect-[3/4] rounded-2xl overflow-hidden">
              <Image
                src="/bio-photo.jpg"
                alt="Michael Cantor"
                fill
                className="object-cover object-top"
              />
            </div>
          </div>
          <div className="space-y-5 text-[#8B6B4A] leading-relaxed text-[15px]">
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
      <section id="music" className="py-16 md:py-24 bg-[#EDE9E3]">
        <div className="px-6 md:px-20 max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8 md:mb-12">Latest Releases</h2>
          <iframe
            src="https://open.spotify.com/embed/album/7MrQ6muRWJ8U0KSdGK63w2?utm_source=generator&theme=0"
            width="100%"
            height="352"
            style={{ borderRadius: 12 }}
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
          />
          <div className="mt-6 md:mt-8 grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
            <a href="https://open.spotify.com/artist/2nyS5xoo0whI3q74gsRmHL" target="_blank" rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 px-3 md:px-5 py-2.5 rounded-full bg-[#1DB954] text-black text-sm font-semibold hover:opacity-90 transition">
              <svg className="w-4 h-4 shrink-0" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z" />
              </svg>
              Spotify
            </a>
            <a href="https://music.apple.com/us/artist/michael-cantor/1631765548" target="_blank" rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 px-3 md:px-5 py-2.5 rounded-full bg-[#fc3c44] text-white text-sm font-semibold hover:opacity-90 transition">
              Apple Music
            </a>
            <a href="https://youtube.com/channel/UCHLDDkR-qNPVgtFQFGk4aDw" target="_blank" rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 px-3 md:px-5 py-2.5 rounded-full bg-[#FF0000] text-white text-sm font-semibold hover:opacity-90 transition">
              YouTube
            </a>
            <a href="https://tidal.com/artist/32899611/u" target="_blank" rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 px-3 md:px-5 py-2.5 rounded-full bg-[#000000] text-white text-sm font-semibold hover:opacity-90 transition">
              <svg className="w-4 h-4 shrink-0" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12.012 3.992L8.008 7.996 4.004 3.992 0 7.996l4.004 4.004 4.004-4.004 4.004 4.004 4.004-4.004L12.012 3.992zM8.008 16.004l-4.004-4.004L0 16.004l4.004 4.004 4.004-4.004zm8.008 0l-4.004-4.004-4.004 4.004 4.004 4.004 4.004-4.004zm3.98-8.008l-4.004 4.004 4.004 4.004L24 11.996l-4.004-4.004z"/>
              </svg>
              Tidal
            </a>
          </div>
        </div>
      </section>

      {/* ── SOCIALS ── */}
      <section id="socials" className="py-16 md:py-24 px-6 md:px-20 max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8 md:mb-12">Follow Along</h2>
        <div className="grid grid-cols-3 md:grid-cols-3 gap-3 md:gap-6">
          {[
            {
              label: "Instagram",
              handle: "@michaelrcantor",
              href: "https://www.instagram.com/michaelrcantor",
              color: "#E1306C",
              icon: (
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 md:w-7 md:h-7">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                </svg>
              ),
            },
            {
              label: "TikTok",
              handle: "@michaelrcantor",
              href: "https://www.tiktok.com/@michaelrcantor",
              color: "#010101",
              icon: (
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 md:w-7 md:h-7">
                  <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
                </svg>
              ),
            },
            {
              label: "YouTube",
              handle: "@michaelcantor3",
              href: "https://youtube.com/@michaelcantor3",
              color: "#FF0000",
              icon: (
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 md:w-7 md:h-7">
                  <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
              ),
            },
          ].map((social) => (
            <a key={social.label} href={social.href} target="_blank" rel="noopener noreferrer"
              className="group flex flex-col items-center gap-3 md:gap-4 border border-[#D8D4CE] rounded-2xl p-5 md:p-10 hover:border-[var(--accent)] transition-colors text-center">
              <div className="w-10 h-10 md:w-14 md:h-14 rounded-full bg-[#E8E4DE] flex items-center justify-center transition-transform group-hover:scale-110 duration-300"
                style={{ color: social.color }}>
                {social.icon}
              </div>
              <div>
                <p className="font-semibold text-sm md:text-lg">{social.label}</p>
                <p className="text-xs md:text-sm text-[#a08060] mt-1 hidden md:block">{social.handle}</p>
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* ── BOOKING ── */}
      <section id="contact" className="py-16 md:py-24 bg-[#EDE9E3]">
        <div className="px-6 md:px-20 max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8 md:mb-12">Get in Touch</h2>
          <div className="grid md:grid-cols-2 gap-4 md:gap-6">
            <a href="mailto:Michael.r.cantor@gmail.com"
              className="group flex items-center gap-4 border border-[#D8D4CE] rounded-2xl p-6 md:p-8 hover:border-[var(--accent)] transition-colors">
              <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-[#E8E4DE] flex items-center justify-center text-[var(--accent)] shrink-0">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                </svg>
              </div>
              <div className="min-w-0">
                <p className="text-xs text-[#a08060] uppercase tracking-widest mb-1">Email</p>
                <p className="font-semibold group-hover:text-[var(--accent)] transition-colors text-sm truncate">
                  Michael.r.cantor@gmail.com
                </p>
              </div>
            </a>
            <a href="tel:2032167905"
              className="group flex items-center gap-4 border border-[#D8D4CE] rounded-2xl p-6 md:p-8 hover:border-[var(--accent)] transition-colors">
              <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-[#E8E4DE] flex items-center justify-center text-[var(--accent)] shrink-0">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                </svg>
              </div>
              <div>
                <p className="text-xs text-[#a08060] uppercase tracking-widest mb-1">Phone</p>
                <p className="font-semibold group-hover:text-[var(--accent)] transition-colors">
                  (203) 216-7905
                </p>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="py-8 px-6 md:px-20 border-t border-[#D8D4CE]">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-[#8B6B4A]">© 2026 Michael Cantor. All rights reserved.</p>
          <p className="text-sm text-[#8B6B4A]">michaelcantormusic.com</p>
        </div>
      </footer>

    </main>
  );
}
