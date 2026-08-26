import { Link } from "react-router-dom";
import { brand } from "../data/brand.js";
import { footer } from "../data/navigation.js";

function InstagramIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" {...props}>
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

function LinkedinIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" {...props}>
      <rect x="3" y="3" width="18" height="18" rx="3" />
      <line x1="8" y1="11" x2="8" y2="16" />
      <circle cx="8" cy="8" r="0.6" fill="currentColor" stroke="none" />
      <line x1="12" y1="11" x2="12" y2="16" />
      <path d="M12 13c0-1.5 1-2 2-2s2 .5 2 2v3" />
    </svg>
  );
}

export default function Footer() {
  return (
    <footer id="contact" className="bg-vyda-blue text-ivory/70 pt-20 pb-8">
      <div className="max-w-[1400px] mx-auto px-5 md:px-10">
        <div className="grid grid-cols-1 md:grid-cols-[1.4fr_1fr_1fr_1.2fr] gap-10 pb-14 border-b border-white/10">
          <div>
            <Link to="/" className="inline-flex" aria-label={brand.fullName}>
              <img
                src={brand.logoFooter}
                alt={brand.fullName}
                className="h-16 w-auto"
                width={80}
                height={64}
              />
            </Link>
            <p className="mt-4 text-sm max-w-[32ch] text-ivory/55 leading-relaxed">
              {brand.officeAddress}
            </p>
          </div>

          <div>
            <h5 className="text-[0.72rem] uppercase tracking-wider text-champagne-light mb-5">
              Quick Links
            </h5>
            <nav className="flex flex-col gap-3">
              {footer.quickLinks.map((l) => (
                <Link key={l.label} to={l.href} className="text-sm hover:text-ivory transition-colors">
                  {l.label}
                </Link>
              ))}
            </nav>
          </div>

          <div>
            <h5 className="text-[0.72rem] uppercase tracking-wider text-champagne-light mb-5">
              Enquiries
            </h5>
            <a href={`mailto:${brand.email}`} className="block text-sm mb-3 hover:text-ivory transition-colors">
              {brand.email}
            </a>
            <a href={`mailto:${brand.miceEmail}`} className="block text-sm mb-3 hover:text-ivory transition-colors">
              {brand.miceEmail}
            </a>
            <a href={`tel:${brand.micePhone.replace(/\s/g, "")}`} className="block text-sm hover:text-ivory transition-colors">
              {brand.micePhone}
            </a>
          </div>

          <div>
            <h5 className="text-[0.72rem] uppercase tracking-wider text-champagne-light mb-5">
              Follow VYDA
            </h5>
            <div className="flex gap-4">
              <a
                href={brand.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-9 h-9 border border-white/15 rounded-full flex items-center justify-center hover:border-champagne-light transition-colors"
              >
                <InstagramIcon className="w-4 h-4" />
              </a>
              <a
                href={brand.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="w-9 h-9 border border-white/15 rounded-full flex items-center justify-center hover:border-champagne-light transition-colors"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap justify-between items-center gap-4 pt-6 text-sm">
          <span>© {new Date().getFullYear()} VYDA Hotels. All rights reserved.</span>
          <div className="flex gap-6">
            {footer.legal.map((l) => (
              <a key={l.label} href={l.href} className="hover:text-ivory transition-colors">
                {l.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
