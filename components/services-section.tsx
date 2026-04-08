"use client"

import { useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, Star } from "lucide-react"
import { useInView } from "@/hooks/use-in-view"
import { cn } from "@/lib/utils"

const services = [
  {
    title: "Palm Reading",
    description:
      "Discover your destiny through the ancient art of palmistry. Every line on your palm tells a story of your past, present, and future.",
    image: "/images/palm-reading.jpg",
    features: ["Life Line Analysis", "Love Line Reading", "Career Predictions"],
  },
  {
    title: "Psychic Reading",
    description:
      "Connect with higher spiritual realms for profound insights into your life. Receive guidance that transcends ordinary understanding.",
    image: "/images/psychic-reading.jpg",
    features: ["Intuitive Guidance", "Spirit Connection", "Future Visions"],
  },
  {
    title: "Love Problem Solution",
    description:
      "Reunite with your loved ones and restore harmony in your relationships through powerful spiritual remedies and guidance.",
    image: "/images/love-solution.jpg",
    features: ["Lost Love Return", "Relationship Healing", "Marriage Blessing"],
  },
  {
    title: "Black Magic Removal",
    description:
      "Break free from negative energies and dark forces affecting your life. Experience powerful protection and spiritual cleansing.",
    image: "/images/black-magic-removal.jpg",
    features: ["Curse Removal", "Protection Shield", "Energy Cleansing"],
  },
  {
    title: "Family Problem Solution",
    description:
      "Bring peace and harmony back to your family. Resolve conflicts and strengthen family bonds through spiritual guidance.",
    image: "/images/family-solution.jpg",
    features: ["Conflict Resolution", "Family Harmony", "Parent-Child Bond"],
  },
  {
    title: "Job & Business Success",
    description:
      "Unlock prosperity and success in your career. Remove obstacles and attract opportunities for growth and wealth.",
    image: "/images/business-success.jpg",
    features: ["Career Growth", "Business Prosperity", "Financial Success"],
  },
]

function ServiceCard({
  service,
  index,
}: {
  service: (typeof services)[0]
  index: number
}) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { threshold: 0.1, once: true })

  return (
    <div
      ref={ref}
      className={cn(
        "transition-all duration-700 ease-out",
        isInView
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-12"
      )}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <Card className="group h-full overflow-hidden border-border/50 bg-card hover:border-primary/30 transition-all duration-500 hover:shadow-xl hover:shadow-primary/10">
        <div className="relative h-56 overflow-hidden">
          <Image
            src={service.image}
            alt={service.title}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
          <div className="absolute bottom-4 left-4 right-4">
            <h3 className="text-xl font-bold text-white">{service.title}</h3>
          </div>
        </div>
        <CardContent className="p-6">
          <p className="text-muted-foreground mb-4 line-clamp-3">
            {service.description}
          </p>
          <ul className="space-y-2 mb-6">
            {service.features.map((feature, i) => (
              <li key={i} className="flex items-center gap-2 text-sm">
                <Star className="h-3 w-3 text-primary fill-primary" />
                <span className="text-foreground/80">{feature}</span>
              </li>
            ))}
          </ul>
          <Link href="/services">
            <Button
              variant="outline"
              className="w-full group/btn border-primary/30 hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-300"
            >
              Learn More
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
            </Button>
          </Link>
        </CardContent>
      </Card>
    </div>
  )
}

export function ServicesSection() {
  const titleRef = useRef<HTMLDivElement>(null)
  const isTitleInView = useInView(titleRef, { threshold: 0.1, once: true })

  return (
    <section className="py-20 lg:py-32 bg-muted/30">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        {/* Section Header */}
        <div
          ref={titleRef}
          className={cn(
            "text-center max-w-3xl mx-auto mb-16 transition-all duration-700",
            isTitleInView
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-8"
          )}
        >
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="h-px w-8 bg-primary" />
            <span className="text-primary font-medium tracking-widest uppercase text-sm">
              Our Services
            </span>
            <div className="h-px w-8 bg-primary" />
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Spiritual Solutions for{" "}
            <span className="text-primary">Every Problem</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            With over 25 years of experience in Vedic astrology and spiritual
            healing, Guru Bhairav offers comprehensive solutions for all aspects
            of life.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={service.title} service={service} index={index} />
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <Link href="/services">
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-10 py-6 text-lg shadow-lg shadow-primary/30 transition-all duration-300 hover:shadow-primary/50 hover:scale-105"
            >
              View All Services
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
