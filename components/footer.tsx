import Link from "next/link"
import { Star, Phone, Mail, MapPin, Facebook, Instagram, Youtube } from "lucide-react"

const services = [
  "Palm Reading",
  "Psychic Reading",
  "Love Problem Solution",
  "Black Magic Removal",
  "Family Problem Solution",
  "Job & Business Success",
]

const quickLinks = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Contact", href: "/contact" },
]

export function Footer() {
  return (
    <footer className="bg-foreground text-background">
      {/* Main Footer */}
      <div className="mx-auto max-w-7xl px-4 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-6">
              <Star className="h-8 w-8 text-primary fill-primary/20" />
              <div className="flex flex-col">
                <span className="text-xl font-bold text-background">
                  Guru Bhairav
                </span>
                <span className="text-xs text-primary tracking-widest uppercase">
                  Astrologer & Psychic
                </span>
              </div>
            </Link>
            <p className="text-background/70 mb-6 leading-relaxed">
              Trusted spiritual guide with 25+ years of experience in Vedic
              astrology, palmistry, and spiritual healing.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="p-2 bg-background/10 rounded-full hover:bg-primary transition-colors duration-300"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="p-2 bg-background/10 rounded-full hover:bg-primary transition-colors duration-300"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="p-2 bg-background/10 rounded-full hover:bg-primary transition-colors duration-300"
                aria-label="YouTube"
              >
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-background mb-6">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-background/70 hover:text-primary transition-colors duration-300"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold text-background mb-6">
              Our Services
            </h3>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service}>
                  <Link
                    href="/services"
                    className="text-background/70 hover:text-primary transition-colors duration-300"
                  >
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold text-background mb-6">
              Contact Us
            </h3>
            <ul className="space-y-4">
              <li>
                <a
                  href="tel:+19296362990"
                  className="flex items-center gap-3 text-background/70 hover:text-primary transition-colors duration-300"
                >
                  <Phone className="h-5 w-5 flex-shrink-0" />
                  <span>+1 929 636 2990</span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:contact@gurubhairav.com"
                  className="flex items-center gap-3 text-background/70 hover:text-primary transition-colors duration-300"
                >
                  <Mail className="h-5 w-5 flex-shrink-0" />
                  <span>contact@gurubhairav.com</span>
                </a>
              </li>
              <li className="flex items-start gap-3 text-background/70">
                <MapPin className="h-5 w-5 flex-shrink-0 mt-1" />
                <span>Serving clients across the United States</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-background/10">
        <div className="mx-auto max-w-7xl px-4 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-background/60">
            <p>
              &copy; {new Date().getFullYear()} Astrologer Guru Bhairav. All
              rights reserved.
            </p>
            <p>Trusted Spiritual Advisor in the USA</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
