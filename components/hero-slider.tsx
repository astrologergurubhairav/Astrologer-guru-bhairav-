"use client"

import { useState, useEffect, useCallback, useMemo } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, Star, Sparkles } from "lucide-react"
import { cn } from "@/lib/utils"

// Pre-defined star positions to avoid hydration mismatch
const STAR_POSITIONS = [
  { left: 15, top: 20, delay: 0.5, duration: 2.5 },
  { left: 85, top: 10, delay: 1.2, duration: 3.0 },
  { left: 45, top: 75, delay: 0.8, duration: 2.8 },
  { left: 70, top: 40, delay: 1.5, duration: 2.3 },
  { left: 25, top: 60, delay: 2.0, duration: 3.2 },
  { left: 90, top: 85, delay: 0.3, duration: 2.6 },
  { left: 10, top: 45, delay: 1.8, duration: 2.9 },
  { left: 55, top: 15, delay: 2.5, duration: 2.4 },
  { left: 35, top: 90, delay: 1.0, duration: 3.1 },
  { left: 75, top: 55, delay: 0.7, duration: 2.7 },
  { left: 5, top: 80, delay: 2.2, duration: 2.5 },
  { left: 95, top: 30, delay: 1.4, duration: 3.0 },
  { left: 40, top: 50, delay: 0.9, duration: 2.8 },
  { left: 60, top: 70, delay: 1.6, duration: 2.6 },
  { left: 20, top: 35, delay: 2.3, duration: 3.3 },
  { left: 80, top: 95, delay: 0.4, duration: 2.4 },
  { left: 50, top: 25, delay: 1.1, duration: 2.9 },
  { left: 30, top: 65, delay: 1.9, duration: 2.7 },
  { left: 65, top: 5, delay: 2.1, duration: 3.0 },
  { left: 12, top: 55, delay: 0.6, duration: 2.5 },
]

const slides = [
  {
    image: "/images/hero-1.jpg",
    title: "Unlock the Secrets of Your Destiny",
    subtitle: "Expert Astrology & Psychic Readings",
    description:
      "Discover your true path with ancient Vedic astrology and intuitive guidance from one of America&apos;s most trusted spiritual advisors.",
  },
  {
    image: "/images/hero-2.jpg",
    title: "Palm Reading & Life Guidance",
    subtitle: "Your Future Revealed in Your Hands",
    description:
      "Experience the ancient art of palmistry combined with modern spiritual insights to understand your life&apos;s journey.",
  },
  {
    image: "/images/hero-3.jpg",
    title: "Spiritual Healing & Protection",
    subtitle: "Remove Negative Energy & Find Peace",
    description:
      "Powerful spiritual remedies for black magic removal, negative energy cleansing, and divine protection.",
  },
]

export function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)

  const nextSlide = useCallback(() => {
    if (isAnimating) return
    setIsAnimating(true)
    setCurrentSlide((prev) => (prev + 1) % slides.length)
    setTimeout(() => setIsAnimating(false), 700)
  }, [isAnimating])

  const prevSlide = useCallback(() => {
    if (isAnimating) return
    setIsAnimating(true)
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
    setTimeout(() => setIsAnimating(false), 700)
  }, [isAnimating])

  useEffect(() => {
    const interval = setInterval(nextSlide, 6000)
    return () => clearInterval(interval)
  }, [nextSlide])

  return (
    <section className="relative h-screen min-h-[700px] overflow-hidden">
      {/* Background Slides */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={cn(
            "absolute inset-0 transition-all duration-700 ease-in-out",
            index === currentSlide
              ? "opacity-100 scale-100"
              : "opacity-0 scale-105"
          )}
        >
          <Image
            src={slide.image}
            alt={slide.title}
            fill
            priority={index === 0}
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-black/30" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20" />
        </div>
      ))}

      {/* Animated Stars Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {STAR_POSITIONS.map((star, i) => (
          <div
            key={i}
            className="absolute animate-pulse"
            style={{
              left: `${star.left}%`,
              top: `${star.top}%`,
              animationDelay: `${star.delay}s`,
              animationDuration: `${star.duration}s`,
            }}
          >
            <Sparkles className="h-2 w-2 text-primary/40" />
          </div>
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="mx-auto max-w-7xl px-4 lg:px-8 w-full">
          <div className="max-w-3xl">
            {slides.map((slide, index) => (
              <div
                key={index}
                className={cn(
                  "transition-all duration-700 ease-out",
                  index === currentSlide
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8 absolute"
                )}
              >
                {index === currentSlide && (
                  <>
                    <div className="flex items-center gap-2 mb-4">
                      <Star className="h-5 w-5 text-primary fill-primary" />
                      <span className="text-primary font-medium tracking-widest uppercase text-sm">
                        {slide.subtitle}
                      </span>
                    </div>
                    <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight">
                      <span className="block">{slide.title.split(" ").slice(0, 3).join(" ")}</span>
                      <span className="block text-primary">
                        {slide.title.split(" ").slice(3).join(" ")}
                      </span>
                    </h1>
                    <p className="text-lg md:text-xl text-white/80 mb-8 max-w-2xl leading-relaxed">
                      {slide.description}
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4">
                      <a href="https://wa.me/19296362990" target="_blank" rel="noopener noreferrer">
                        <Button
                          size="lg"
                          className="bg-green-600 hover:bg-green-700 text-white font-semibold px-8 py-6 text-lg shadow-lg shadow-green-600/30 transition-all duration-300 hover:shadow-green-600/50 hover:scale-105"
                        >
                          Get Free Consultation
                        </Button>
                      </a>
                      <a href="tel:+19296362990">
                        <Button
                          size="lg"
                          variant="outline"
                          className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground font-semibold px-8 py-6 text-lg transition-all duration-300 hover:scale-105"
                        >
                          Call Now
                        </Button>
                      </a>
                    </div>
                  </>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 lg:left-8 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-primary hover:border-primary transition-all duration-300 hover:scale-110"
        aria-label="Previous slide"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 lg:right-8 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-primary hover:border-primary transition-all duration-300 hover:scale-110"
        aria-label="Next slide"
      >
        <ChevronRight className="h-6 w-6" />
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              if (!isAnimating) {
                setIsAnimating(true)
                setCurrentSlide(index)
                setTimeout(() => setIsAnimating(false), 700)
              }
            }}
            className={cn(
              "h-3 rounded-full transition-all duration-500",
              index === currentSlide
                ? "w-10 bg-primary"
                : "w-3 bg-white/50 hover:bg-white/70"
            )}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 right-8 z-20 hidden lg:block">
        <div className="flex flex-col items-center gap-2 text-white/60">
          <span className="text-xs tracking-widest uppercase">Scroll</span>
          <div className="w-px h-12 bg-gradient-to-b from-white/60 to-transparent animate-pulse" />
        </div>
      </div>
    </section>
  )
}
