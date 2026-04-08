"use client"

import { useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Award, Users, Clock, Star, CheckCircle, ArrowRight } from "lucide-react"
import { useInView } from "@/hooks/use-in-view"
import { cn } from "@/lib/utils"

const stats = [
  { icon: Clock, value: "25+", label: "Years Experience" },
  { icon: Users, value: "50K+", label: "Happy Clients" },
  { icon: Award, value: "100%", label: "Satisfaction" },
  { icon: Star, value: "4.9", label: "Rating" },
]

const highlights = [
  "World-renowned Vedic Astrologer",
  "Expert in Palmistry & Psychic Reading",
  "Spiritual Healer & Life Coach",
  "Trusted by thousands across the USA",
]

export function AboutSection() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { threshold: 0.1, once: true })

  return (
    <section className="py-20 lg:py-32 bg-background overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div
          ref={ref}
          className={cn(
            "grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center transition-all duration-1000",
            isInView ? "opacity-100" : "opacity-0"
          )}
        >
          {/* Image Side */}
          <div
            className={cn(
              "relative transition-all duration-700 delay-200",
              isInView ? "translate-x-0 opacity-100" : "-translate-x-12 opacity-0"
            )}
          >
            <div className="relative">
              {/* Main Image */}
              <div className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/guru-portrait.jpg"
                  alt="Astrologer Guru Bhairav"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              </div>

              {/* Decorative Elements */}
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-primary/20 rounded-full blur-2xl" />
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-secondary/20 rounded-full blur-2xl" />

              {/* Experience Badge */}
              <div className="absolute -bottom-4 -right-4 lg:bottom-8 lg:-right-8 bg-card p-6 rounded-xl shadow-xl border border-primary/20">
                <div className="text-center">
                  <span className="text-4xl font-bold text-primary">25+</span>
                  <p className="text-sm text-muted-foreground mt-1">
                    Years of Excellence
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Content Side */}
          <div
            className={cn(
              "transition-all duration-700 delay-400",
              isInView ? "translate-x-0 opacity-100" : "translate-x-12 opacity-0"
            )}
          >
            <div className="flex items-center gap-2 mb-4">
              <div className="h-px w-8 bg-primary" />
              <span className="text-primary font-medium tracking-widest uppercase text-sm">
                About Guru Bhairav
              </span>
            </div>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 leading-tight">
              Your Trusted Guide to{" "}
              <span className="text-primary">Spiritual Enlightenment</span>
            </h2>

            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              Astrologer Guru Bhairav is a renowned spiritual healer and Vedic
              astrologer with over 25 years of experience helping people find
              clarity, peace, and success in their lives.
            </p>

            <p className="text-muted-foreground mb-8 leading-relaxed">
              Born into a family of traditional pandits in India, Guru Bhairav
              inherited the ancient wisdom of Vedic astrology, palmistry, and
              spiritual healing. His accurate predictions and powerful remedies
              have transformed the lives of over 50,000 clients across the
              United States and worldwide.
            </p>

            {/* Highlights */}
            <ul className="space-y-3 mb-8">
              {highlights.map((item, index) => (
                <li key={index} className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                  <span className="text-foreground">{item}</span>
                </li>
              ))}
            </ul>

            <Link href="/about">
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 transition-all duration-300 hover:scale-105"
              >
                Learn More About Me
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>

        {/* Stats */}
        <div
          className={cn(
            "grid grid-cols-2 md:grid-cols-4 gap-6 mt-20 transition-all duration-700 delay-600",
            isInView ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
          )}
        >
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center p-6 bg-muted/50 rounded-xl border border-border/50 hover:border-primary/30 transition-all duration-300 hover:shadow-lg"
            >
              <stat.icon className="h-8 w-8 text-primary mx-auto mb-3" />
              <p className="text-3xl font-bold text-foreground">{stat.value}</p>
              <p className="text-sm text-muted-foreground mt-1">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
