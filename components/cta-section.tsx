"use client"

import { useRef } from "react"
import { Button } from "@/components/ui/button"
import { Phone, MessageCircle, Sparkles } from "lucide-react"
import { useInView } from "@/hooks/use-in-view"
import { cn } from "@/lib/utils"

// Pre-defined star positions to avoid hydration mismatch
const STAR_POSITIONS = [
  { left: 8, top: 15, delay: 0.3, duration: 2.4 },
  { left: 92, top: 25, delay: 1.1, duration: 3.1 },
  { left: 35, top: 80, delay: 0.7, duration: 2.7 },
  { left: 72, top: 45, delay: 1.8, duration: 2.5 },
  { left: 18, top: 65, delay: 2.2, duration: 3.0 },
  { left: 88, top: 90, delay: 0.5, duration: 2.8 },
  { left: 5, top: 40, delay: 1.5, duration: 2.6 },
  { left: 58, top: 12, delay: 2.0, duration: 3.2 },
  { left: 28, top: 95, delay: 0.9, duration: 2.3 },
  { left: 78, top: 58, delay: 1.3, duration: 2.9 },
  { left: 12, top: 75, delay: 2.5, duration: 2.5 },
  { left: 95, top: 35, delay: 0.4, duration: 3.0 },
  { left: 42, top: 52, delay: 1.6, duration: 2.7 },
  { left: 65, top: 72, delay: 1.9, duration: 2.4 },
  { left: 22, top: 30, delay: 2.3, duration: 3.3 },
  { left: 82, top: 88, delay: 0.6, duration: 2.6 },
  { left: 48, top: 22, delay: 1.2, duration: 2.8 },
  { left: 32, top: 68, delay: 1.7, duration: 2.5 },
  { left: 68, top: 8, delay: 2.1, duration: 3.1 },
  { left: 15, top: 50, delay: 0.8, duration: 2.9 },
  { left: 55, top: 85, delay: 1.4, duration: 2.6 },
  { left: 85, top: 18, delay: 2.4, duration: 2.7 },
  { left: 38, top: 38, delay: 0.2, duration: 3.0 },
  { left: 75, top: 62, delay: 1.0, duration: 2.4 },
  { left: 25, top: 92, delay: 2.6, duration: 2.8 },
  { left: 62, top: 28, delay: 0.1, duration: 3.2 },
  { left: 45, top: 78, delay: 1.8, duration: 2.5 },
  { left: 8, top: 55, delay: 2.0, duration: 2.9 },
  { left: 98, top: 48, delay: 0.9, duration: 2.6 },
  { left: 52, top: 5, delay: 1.5, duration: 3.0 },
]

export function CTASection() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { threshold: 0.1, once: true })

  return (
    <section className="py-20 lg:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-foreground via-foreground/95 to-foreground" />
      
      {/* Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {STAR_POSITIONS.map((star, i) => (
          <div
            key={i}
            className="absolute animate-pulse opacity-20"
            style={{
              left: `${star.left}%`,
              top: `${star.top}%`,
              animationDelay: `${star.delay}s`,
              animationDuration: `${star.duration}s`,
            }}
          >
            <Sparkles className="h-3 w-3 text-primary" />
          </div>
        ))}
      </div>

      <div
        ref={ref}
        className={cn(
          "relative z-10 mx-auto max-w-4xl px-4 lg:px-8 text-center transition-all duration-1000",
          isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
        )}
      >
        <div className="flex items-center justify-center gap-2 mb-6">
          <div className="h-px w-8 bg-primary" />
          <span className="text-primary font-medium tracking-widest uppercase text-sm">
            Get Your Free Consultation
          </span>
          <div className="h-px w-8 bg-primary" />
        </div>

        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-background mb-6 leading-tight">
          Ready to Transform Your Life?
        </h2>

        <p className="text-lg text-background/80 mb-10 max-w-2xl mx-auto leading-relaxed">
          Take the first step towards a brighter future. Contact Astrologer Guru
          Bhairav today for a free consultation and discover the solutions to
          your problems.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="https://wa.me/19296362990"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button
              size="lg"
              className="bg-green-600 hover:bg-green-700 text-white font-semibold px-10 py-7 text-lg shadow-lg shadow-green-600/30 transition-all duration-300 hover:shadow-green-600/50 hover:scale-105 w-full sm:w-auto"
            >
              <MessageCircle className="mr-2 h-5 w-5" />
              WhatsApp Now
            </Button>
          </a>
          <a href="tel:+19296362990">
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-primary bg-transparent text-primary hover:bg-primary hover:text-primary-foreground font-semibold px-10 py-7 text-lg transition-all duration-300 hover:scale-105 w-full sm:w-auto"
            >
              <Phone className="mr-2 h-5 w-5" />
              Call: +1 929 636 2990
            </Button>
          </a>
        </div>

        <p className="mt-8 text-sm text-background/60">
          Available 24/7 for your convenience. All consultations are 100% confidential.
        </p>
      </div>
    </section>
  )
}
