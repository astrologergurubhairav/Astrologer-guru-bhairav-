import type { Metadata } from "next"
import Image from "next/image"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { CTASection } from "@/components/cta-section"
import { Button } from "@/components/ui/button"
import {
  Award,
  Users,
  Clock,
  Star,
  CheckCircle,
  BookOpen,
  Heart,
  Shield,
  Sparkles,
  Phone,
} from "lucide-react"

export const metadata: Metadata = {
  title: "About Guru Bhairav | Trusted Astrologer & Spiritual Healer in USA",
  description:
    "Learn about Astrologer Guru Bhairav, a renowned Vedic astrologer and spiritual healer with 25+ years of experience helping thousands across the USA find clarity, peace, and success.",
  keywords:
    "about guru bhairav, vedic astrologer, spiritual healer, indian astrologer usa, psychic reader, palmist",
}

const timeline = [
  {
    year: "1985",
    title: "Born into Spiritual Heritage",
    description:
      "Born into a family of traditional Vedic pandits in India, inheriting centuries of astrological wisdom.",
  },
  {
    year: "1998",
    title: "Formal Training Begins",
    description:
      "Started intensive training in Vedic astrology, palmistry, and spiritual healing under renowned gurus.",
  },
  {
    year: "2005",
    title: "Recognized as Master Astrologer",
    description:
      "Achieved mastery in multiple spiritual disciplines and began serving clients professionally.",
  },
  {
    year: "2012",
    title: "Expanded to International Service",
    description:
      "Extended services to the United States, helping diaspora communities and American clients.",
  },
  {
    year: "2020",
    title: "50,000+ Lives Transformed",
    description:
      "Reached the milestone of helping over 50,000 clients achieve peace, success, and happiness.",
  },
]

const values = [
  {
    icon: Heart,
    title: "Compassion",
    description:
      "Every client is treated with genuine care and understanding, regardless of their background or situation.",
  },
  {
    icon: Shield,
    title: "Confidentiality",
    description:
      "Your personal matters remain strictly confidential. Trust and privacy are paramount in our practice.",
  },
  {
    icon: BookOpen,
    title: "Ancient Wisdom",
    description:
      "Authentic Vedic knowledge passed down through generations, combined with intuitive spiritual guidance.",
  },
  {
    icon: Sparkles,
    title: "Proven Results",
    description:
      "Thousands of success stories and transformed lives speak to the effectiveness of our spiritual solutions.",
  },
]

const specializations = [
  "Vedic Astrology & Horoscope Analysis",
  "Palm Reading & Life Path Guidance",
  "Psychic & Intuitive Reading",
  "Love & Relationship Healing",
  "Marriage Problem Solutions",
  "Black Magic & Negative Energy Removal",
  "Family Harmony Restoration",
  "Career & Business Success",
  "Spiritual Protection & Blessings",
  "Vashikaran & Attraction Mantras",
]

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="relative pt-24 pb-16 lg:pt-32 lg:pb-24 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/about-hero.jpg"
            alt="About Astrologer Guru Bhairav"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-black/50" />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-4 lg:px-8">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 mb-4">
              <Star className="h-5 w-5 text-primary fill-primary" />
              <span className="text-primary font-medium tracking-widest uppercase text-sm">
                About Guru Bhairav
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              A Lifetime Dedicated to{" "}
              <span className="text-primary">Spiritual Guidance</span>
            </h1>
            <p className="text-lg text-white/80 leading-relaxed">
              Discover the journey, values, and expertise that make Astrologer
              Guru Bhairav one of the most trusted spiritual advisors in the
              United States.
            </p>
          </div>
        </div>
      </section>

      {/* Main About Section */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Image */}
            <div className="relative">
              <div className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/guru-portrait.jpg"
                  alt="Astrologer Guru Bhairav Portrait"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary/20 rounded-full blur-3xl" />
              <div className="absolute -top-6 -left-6 w-24 h-24 bg-secondary/20 rounded-full blur-2xl" />
            </div>

            {/* Content */}
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                My Story & Mission
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  I am Astrologer Guru Bhairav, born into a revered family of
                  Vedic pandits in India. From a young age, I was immersed in
                  the ancient sciences of astrology, palmistry, and spiritual
                  healing, learning sacred knowledge that has been passed down
                  through generations of my family.
                </p>
                <p>
                  My spiritual journey began under the guidance of my
                  grandfather, a renowned astrologer who taught me to read the
                  cosmic language of the stars. Over 25 years of dedicated
                  practice have refined my abilities to provide accurate
                  predictions and powerful spiritual remedies.
                </p>
                <p>
                  Today, I am honored to serve clients across the United States,
                  helping them navigate life&apos;s challenges with wisdom,
                  compassion, and proven spiritual solutions. My mission is to
                  bring peace, prosperity, and happiness to every person who
                  seeks my guidance.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-6 mt-8">
                <div className="text-center p-4 bg-muted/50 rounded-xl">
                  <Clock className="h-6 w-6 text-primary mx-auto mb-2" />
                  <p className="text-2xl font-bold text-foreground">25+</p>
                  <p className="text-sm text-muted-foreground">
                    Years Experience
                  </p>
                </div>
                <div className="text-center p-4 bg-muted/50 rounded-xl">
                  <Users className="h-6 w-6 text-primary mx-auto mb-2" />
                  <p className="text-2xl font-bold text-foreground">50K+</p>
                  <p className="text-sm text-muted-foreground">Happy Clients</p>
                </div>
                <div className="text-center p-4 bg-muted/50 rounded-xl">
                  <Award className="h-6 w-6 text-primary mx-auto mb-2" />
                  <p className="text-2xl font-bold text-foreground">100%</p>
                  <p className="text-sm text-muted-foreground">Dedication</p>
                </div>
                <div className="text-center p-4 bg-muted/50 rounded-xl">
                  <Star className="h-6 w-6 text-primary mx-auto mb-2" />
                  <p className="text-2xl font-bold text-foreground">4.9</p>
                  <p className="text-sm text-muted-foreground">Client Rating</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 lg:py-24 bg-muted/30">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              My Core <span className="text-primary">Values</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              These principles guide every consultation and spiritual service I
              provide.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="text-center p-6 bg-card rounded-xl border border-border/50 hover:border-primary/30 transition-all duration-300 hover:shadow-lg"
              >
                <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <value.icon className="h-7 w-7 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {value.title}
                </h3>
                <p className="text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Journey Timeline */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              My Spiritual <span className="text-primary">Journey</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              A timeline of growth, learning, and dedication to helping others.
            </p>
          </div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-4 lg:left-1/2 top-0 bottom-0 w-0.5 bg-border lg:-translate-x-1/2" />

            <div className="space-y-12">
              {timeline.map((item, index) => (
                <div
                  key={index}
                  className={`relative flex flex-col lg:flex-row gap-8 ${
                    index % 2 === 0 ? "lg:flex-row-reverse" : ""
                  }`}
                >
                  {/* Dot */}
                  <div className="absolute left-4 lg:left-1/2 w-4 h-4 bg-primary rounded-full -translate-x-1/2 mt-1.5 z-10" />

                  {/* Content */}
                  <div
                    className={`lg:w-1/2 pl-12 lg:pl-0 ${
                      index % 2 === 0 ? "lg:pr-16 lg:text-right" : "lg:pl-16"
                    }`}
                  >
                    <span className="text-primary font-bold text-lg">
                      {item.year}
                    </span>
                    <h3 className="text-xl font-semibold text-foreground mt-1 mb-2">
                      {item.title}
                    </h3>
                    <p className="text-muted-foreground">{item.description}</p>
                  </div>

                  {/* Empty space for alternating layout */}
                  <div className="hidden lg:block lg:w-1/2" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Specializations */}
      <section className="py-16 lg:py-24 bg-muted/30">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Areas of <span className="text-primary">Expertise</span>
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                With extensive training and decades of experience, I offer
                comprehensive spiritual solutions across multiple disciplines.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {specializations.map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                    <span className="text-foreground">{item}</span>
                  </div>
                ))}
              </div>

              <div className="mt-8">
                <a href="tel:+19296362990">
                  <Button
                    size="lg"
                    className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold"
                  >
                    <Phone className="mr-2 h-5 w-5" />
                    Schedule a Consultation
                  </Button>
                </a>
              </div>
            </div>

            <div className="relative">
              <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/hero-1.jpg"
                  alt="Spiritual Expertise"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTASection />
      <Footer />
      <WhatsAppButton />
    </main>
  )
}
