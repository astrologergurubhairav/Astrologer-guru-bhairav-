"use client"

import { useRef, useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react"
import { useInView } from "@/hooks/use-in-view"
import { cn } from "@/lib/utils"

const testimonials = [
  {
    name: "Sarah Johnson",
    location: "New York, NY",
    rating: 5,
    text: "Guru Bhairav changed my life completely. His predictions about my career were spot-on, and his remedies helped me land my dream job within weeks. I am forever grateful for his guidance.",
  },
  {
    name: "Michael Rodriguez",
    location: "Los Angeles, CA",
    rating: 5,
    text: "I was skeptical at first, but after my session with Guru Bhairav, I became a believer. He knew things about my life that no one else could have known. His spiritual healing gave me peace I had been searching for years.",
  },
  {
    name: "Priya Sharma",
    location: "Houston, TX",
    rating: 5,
    text: "My marriage was falling apart until I consulted Guru Bhairav. His love problem solutions worked miracles. Today, my husband and I are happier than ever. Thank you, Guruji!",
  },
  {
    name: "David Thompson",
    location: "Chicago, IL",
    rating: 5,
    text: "The black magic removal performed by Guru Bhairav saved my family from years of suffering. We finally have peace and prosperity in our home. He is truly gifted.",
  },
  {
    name: "Jennifer Martinez",
    location: "Miami, FL",
    rating: 5,
    text: "Guru Bhairav&apos;s palm reading revealed things about my past that amazed me. His predictions for my future have already started coming true. I recommend him to everyone!",
  },
  {
    name: "Robert Chen",
    location: "San Francisco, CA",
    rating: 5,
    text: "My business was struggling until I sought Guru Bhairav&apos;s help. His astrological remedies and spiritual guidance turned everything around. My business has tripled in revenue!",
  },
]

export function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [itemsPerView, setItemsPerView] = useState(3)
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { threshold: 0.1, once: true })

  useEffect(() => {
    const updateItemsPerView = () => {
      if (window.innerWidth < 768) {
        setItemsPerView(1)
      } else if (window.innerWidth < 1024) {
        setItemsPerView(2)
      } else {
        setItemsPerView(3)
      }
    }

    updateItemsPerView()
    window.addEventListener("resize", updateItemsPerView)
    return () => window.removeEventListener("resize", updateItemsPerView)
  }, [])

  const maxIndex = Math.max(0, testimonials.length - itemsPerView)

  const next = () => {
    setCurrentIndex((prev) => Math.min(prev + 1, maxIndex))
  }

  const prev = () => {
    setCurrentIndex((prev) => Math.max(prev - 1, 0))
  }

  return (
    <section className="py-20 lg:py-32 bg-muted/30 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        {/* Section Header */}
        <div
          ref={ref}
          className={cn(
            "text-center max-w-3xl mx-auto mb-16 transition-all duration-700",
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          )}
        >
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="h-px w-8 bg-primary" />
            <span className="text-primary font-medium tracking-widest uppercase text-sm">
              Testimonials
            </span>
            <div className="h-px w-8 bg-primary" />
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            What Our <span className="text-primary">Clients Say</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Thousands of satisfied clients have transformed their lives with
            Guru Bhairav&apos;s spiritual guidance. Read their stories of hope and
            success.
          </p>
        </div>

        {/* Testimonials Carousel */}
        <div className="relative">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-out"
              style={{
                transform: `translateX(-${currentIndex * (100 / itemsPerView)}%)`,
              }}
            >
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 px-3"
                  style={{ width: `${100 / itemsPerView}%` }}
                >
                  <Card className="h-full bg-card border-border/50 hover:border-primary/30 transition-all duration-300 hover:shadow-lg">
                    <CardContent className="p-6">
                      {/* Quote Icon */}
                      <Quote className="h-10 w-10 text-primary/30 mb-4" />

                      {/* Rating */}
                      <div className="flex gap-1 mb-4">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star
                            key={i}
                            className="h-4 w-4 text-primary fill-primary"
                          />
                        ))}
                      </div>

                      {/* Text */}
                      <p className="text-foreground/80 mb-6 leading-relaxed">
                        {testimonial.text}
                      </p>

                      {/* Author */}
                      <div className="border-t border-border pt-4">
                        <p className="font-semibold text-foreground">
                          {testimonial.name}
                        </p>
                        <p className="text-sm text-muted-foreground">
                          {testimonial.location}
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={prev}
            disabled={currentIndex === 0}
            className={cn(
              "absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 p-3 rounded-full bg-background shadow-lg border border-border transition-all duration-300",
              currentIndex === 0
                ? "opacity-50 cursor-not-allowed"
                : "hover:bg-primary hover:border-primary hover:text-primary-foreground"
            )}
            aria-label="Previous testimonials"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            onClick={next}
            disabled={currentIndex === maxIndex}
            className={cn(
              "absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 p-3 rounded-full bg-background shadow-lg border border-border transition-all duration-300",
              currentIndex === maxIndex
                ? "opacity-50 cursor-not-allowed"
                : "hover:bg-primary hover:border-primary hover:text-primary-foreground"
            )}
            aria-label="Next testimonials"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center gap-2 mt-8">
          {[...Array(maxIndex + 1)].map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={cn(
                "h-2 rounded-full transition-all duration-300",
                index === currentIndex
                  ? "w-8 bg-primary"
                  : "w-2 bg-muted-foreground/30 hover:bg-muted-foreground/50"
              )}
              aria-label={`Go to testimonial group ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
