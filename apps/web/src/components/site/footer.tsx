import Link from 'next/link';

export function SiteFooter() {
  return (
    <footer className="bg-emerald_deep-700 text-ivory-100 mt-24">
      <div className="container py-16 grid gap-12 md:grid-cols-4">
        <div className="md:col-span-2">
          <span className="font-display text-3xl">
            Bridal <span className="gold-shimmer">Belle</span> Boutique
          </span>
          <p className="mt-4 max-w-md text-ivory-100/70 leading-relaxed">
            Rwandan-rooted wedding rentals for every ceremony — from Gusaba to
            the reception. Curated by people who&apos;ve celebrated their own.
          </p>
        </div>

        <div>
          <h4 className="font-display text-lg text-gold-200 mb-4">Explore</h4>
          <ul className="space-y-2 text-sm">
            <li><Link href="/#ceremonies" className="hover:text-gold-200">Ceremonies</Link></li>
            <li><Link href="/#categories" className="hover:text-gold-200">Categories</Link></li>
            <li><Link href="/booking" className="hover:text-gold-200">Book</Link></li>
            <li><Link href="/login" className="hover:text-gold-200">Sign in</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-display text-lg text-gold-200 mb-4">Reach us</h4>
          <ul className="space-y-2 text-sm text-ivory-100/80 mb-6">
            <li>Kigali, Rwanda</li>
            <li>+250 795 857 921</li>
            <li>bridalbelle@outlook.com</li>
          </ul>
          <div className="flex gap-3 items-center">
            <a
              href="https://instagram.com/uwineza9985"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 flex items-center justify-center rounded-full bg-ivory-100/10 text-ivory-100 hover:bg-gold-200 hover:text-emerald_deep-700 hover:scale-110 transition-all duration-300"
              aria-label="Instagram"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
              </svg>
            </a>
            <a
              href="https://tiktok.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 flex items-center justify-center rounded-full bg-ivory-100/10 text-ivory-100 hover:bg-gold-200 hover:text-emerald_deep-700 hover:scale-110 transition-all duration-300"
              aria-label="TikTok"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.17-2.89-.6-4.09-1.5-1.07-.8-1.89-1.95-2.32-3.21a9.78 9.78 0 0 1-.08 3.52c.19 1.94.88 3.84 2.05 5.4 1.39 1.83 3.49 3.07 5.76 3.41v4.01c-2.02-.15-4.03-.83-5.71-2.03-1.8-1.28-3.14-3.18-3.83-5.28a10.23 10.23 0 0 1-.36-3.03V.02h.02Z"/>
              </svg>
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 flex items-center justify-center rounded-full bg-ivory-100/10 text-ivory-100 hover:bg-gold-200 hover:text-emerald_deep-700 hover:scale-110 transition-all duration-300"
              aria-label="Facebook"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
              </svg>
            </a>
            <a
              href="https://wa.me/250795857921"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 flex items-center justify-center rounded-full bg-ivory-100/10 text-ivory-100 hover:bg-gold-200 hover:text-emerald_deep-700 hover:scale-110 transition-all duration-300"
              aria-label="WhatsApp"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91C21.95 6.45 17.5 2 12.04 2zm0 1.62c4.57 0 8.29 3.72 8.29 8.29 0 4.57-3.72 8.29-8.29 8.29-1.46 0-2.89-.39-4.14-1.12l-.3-.18-3.08.81.82-3-.2-.31a8.23 8.23 0 0 1-1.26-4.38c0-4.57 3.72-8.31 8.29-8.31zm-1.63 3.12c-.22 0-.41.08-.57.24-.16.16-.62.61-.62 1.49 0 .88.64 1.73.73 1.85.09.12 1.23 1.88 3 2.61.42.17.75.28 1.01.36.43.14.82.12 1.13.07.35-.05 1.07-.44 1.22-.86.15-.42.15-.79.11-.86-.04-.07-.16-.11-.34-.2s-1.07-.53-1.24-.59c-.17-.06-.29-.09-.41.09-.12.18-.47.59-.57.7-.1.11-.2.12-.38.03a4.78 4.78 0 0 1-1.41-.87c-.36-.32-.61-.71-.68-.83-.07-.12-.01-.19.08-.28.08-.08.18-.21.27-.31.09-.1.12-.17.18-.29.06-.12.03-.22-.01-.31s-.41-1-.56-1.37c-.15-.36-.3-.31-.41-.31-.1-.01-.22-.01-.35-.01z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
      <div className="border-t border-ivory-100/10">
        <div className="container py-6 flex flex-col md:flex-row gap-2 items-center justify-between text-xs text-ivory-100/60">
          <span>© {new Date().getFullYear()} Bridal Belle Boutique. All rights reserved.</span>
          <span>Crafted in Kigali.</span>
        </div>
      </div>
    </footer>
  );
}
