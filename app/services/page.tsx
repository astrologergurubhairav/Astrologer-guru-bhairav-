import type { Metadata } from "next"
import Image from "next/image"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { CTASection } from "@/components/cta-section"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Star, CheckCircle, ArrowRight, Phone } from "lucide-react"

export const metadata: Metadata = {
  title: "Spiritual Services | Astrologer Guru Bhairav - Expert Solutions",
  description:
    "Explore our comprehensive spiritual services including palm reading, psychic reading, love problem solution, black magic removal, family problems, and more. Expert solutions by Guru Bhairav.",
  keywords:
    "palm reading, psychic reading, love problem solution, black magic removal, negative energy removal, family problems, marriage problems, job problems, spiritual healing, astrology services",
}

const services = [
  {
    id: "palm-reading",
    title: "Palm Reading",
    subtitle: "Discover Your Destiny in Your Hands",
    image: "/images/palm-reading.jpg",
    description:
      "Palm reading, also known as palmistry or chiromancy, is an ancient art that reveals the secrets of your life through the lines, shapes, and patterns on your hands. Each palm is unique, containing a map of your past, present, and future.",
    benefits: [
      "Understand your life path and purpose",
      "Gain insights into your personality and character",
      "Discover hidden talents and abilities",
      "Learn about your health and longevity indicators",
      "Receive guidance on love and relationships",
      "Understand your career potential",
    ],
    process:
      "During a palm reading session, I carefully examine both your dominant and non-dominant hands. The dominant hand reveals your current life and choices, while the non-dominant hand shows your inherent potential. Together, they provide a complete picture of your journey.",
  },
  {
    id: "psychic-reading",
    title: "Psychic Reading",
    subtitle: "Connect with Higher Spiritual Realms",
    image: "/images/psychic-reading.jpg",
    description:
      "Psychic reading transcends ordinary perception to access information from the spiritual realm. Through my intuitive abilities developed over decades, I can perceive energies, receive messages, and provide guidance that goes beyond what the physical senses can detect.",
    benefits: [
      "Receive messages from spiritual guides",
      "Gain clarity on confusing situations",
      "Understand the deeper meaning of life events",
      "Connect with departed loved ones",
      "Discover your spiritual path and purpose",
      "Receive warnings about potential challenges",
    ],
    process:
      "I enter a meditative state to connect with higher spiritual energies. Through this connection, I receive impressions, visions, and messages specific to your situation. Each reading is unique and tailored to what you most need to know.",
  },
  {
    id: "love-solution",
    title: "Love Problem Solution",
    subtitle: "Reunite Hearts and Restore Love",
    image: "/images/love-solution.jpg",
    description:
      "Love is the most powerful force in the universe, yet relationships can face tremendous challenges. Through ancient Vedic remedies and spiritual interventions, I help couples overcome obstacles, reunite separated lovers, and strengthen bonds of affection.",
    benefits: [
      "Bring back lost love and ex-partners",
      "Remove obstacles in love life",
      "Strengthen existing relationships",
      "Attract true love into your life",
      "Resolve misunderstandings and conflicts",
      "Create lasting harmony in relationships",
    ],
    process:
      "After understanding your situation, I prescribe personalized remedies that may include mantras, rituals, and spiritual practices. These powerful techniques work on subtle energy levels to influence outcomes in your favor while respecting the free will of all involved.",
  },
  {
    id: "marriage-solution",
    title: "Marriage Problem Solution",
    subtitle: "Restore Harmony in Your Marriage",
    image: "/images/marriage-solution.jpg",
    description:
      "Marriage is a sacred bond that requires nurturing and protection. When disputes, misunderstandings, or external influences threaten this bond, spiritual intervention can restore peace and understanding between partners.",
    benefits: [
      "Resolve ongoing marital disputes",
      "Improve communication between spouses",
      "Remove third-party interference",
      "Strengthen the marital bond",
      "Overcome in-law problems",
      "Prevent divorce and separation",
    ],
    process:
      "I analyze the astrological compatibility between partners and identify the root causes of problems. Through targeted remedies, mantras, and spiritual counseling, I help restore the love and respect that forms the foundation of a successful marriage.",
  },
  {
    id: "black-magic-removal",
    title: "Black Magic Removal",
    subtitle: "Break Free from Dark Forces",
    image: "/images/black-magic-removal.jpg",
    description:
      "Black magic and dark spiritual attacks can cause unexplained problems in health, finances, relationships, and overall well-being. With powerful protective mantras and purification rituals, I remove these negative influences and restore your natural state of harmony.",
    benefits: [
      "Complete removal of black magic effects",
      "Protection from future attacks",
      "Restoration of health and vitality",
      "Recovery of lost fortune and success",
      "Mental peace and clarity",
      "Permanent spiritual shielding",
    ],
    process:
      "First, I diagnose whether black magic is truly present and identify its source and intensity. Then, through a series of powerful rituals and mantras, I systematically remove the negative energy and establish protective barriers to prevent recurrence.",
  },
  {
    id: "negative-energy",
    title: "Negative Energy Removal",
    subtitle: "Cleanse Your Life and Space",
    image: "/images/evil-spirits.jpg",
    description:
      "Negative energy can accumulate in your home, workplace, or personal aura, causing persistent problems such as illness, financial troubles, family conflicts, and general bad luck. Spiritual cleansing removes these energies and restores positive vibrations.",
    benefits: [
      "Complete energy cleansing and purification",
      "Improved luck and opportunities",
      "Better health and well-being",
      "Harmonious family relationships",
      "Enhanced mental clarity and peace",
      "Positive energy restoration",
    ],
    process:
      "Using ancient purification techniques including mantras, sacred herbs, and energy healing, I cleanse the affected person or space. I also teach you methods to maintain positive energy and prevent future accumulation of negativity.",
  },
  {
    id: "family-solution",
    title: "Family Problem Solution",
    subtitle: "Bring Peace and Unity to Your Home",
    image: "/images/family-solution.jpg",
    description:
      "Family harmony is essential for happiness and prosperity. When conflicts, misunderstandings, or external influences disrupt family peace, spiritual intervention can restore love, respect, and understanding among family members.",
    benefits: [
      "Resolve parent-child conflicts",
      "Improve sibling relationships",
      "Handle joint family disputes",
      "Overcome property and inheritance issues",
      "Restore family reputation",
      "Create lasting family harmony",
    ],
    process:
      "I examine the astrological charts of family members to understand the planetary influences causing discord. Through appropriate remedies and spiritual practices, I help neutralize negative influences and enhance positive bonds.",
  },
  {
    id: "business-success",
    title: "Job & Business Success",
    subtitle: "Unlock Prosperity and Achievement",
    image: "/images/business-success.jpg",
    description:
      "Career and financial success are influenced by planetary positions and spiritual energies. Through astrological analysis and powerful remedies, I help remove obstacles, attract opportunities, and enhance your potential for success and prosperity.",
    benefits: [
      "Remove career obstacles and delays",
      "Attract promotions and opportunities",
      "Improve business growth and profits",
      "Enhance leadership and decision-making",
      "Resolve workplace conflicts",
      "Attract wealth and abundance",
    ],
    process:
      "After analyzing your birth chart for career indicators, I identify blocks and recommend specific remedies. These may include gemstones, mantras, charitable acts, and other practices to align your energy with success and prosperity.",
  },
]

export default function ServicesPage() {
  return (
    <main className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="relative pt-24 pb-16 lg:pt-32 lg:pb-24 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/services-hero.jpg"
            alt="Spiritual Services"
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
                Our Services
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Comprehensive{" "}
              <span className="text-primary">Spiritual Solutions</span>
            </h1>
            <p className="text-lg text-white/80 leading-relaxed">
              Discover our full range of spiritual services designed to address
              every challenge in your life. From ancient Vedic astrology to
              powerful healing practices, find the guidance you need.
            </p>
          </div>
        </div>
      </section>

      {/* Services List */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="space-y-24">
            {services.map((service, index) => (
              <div
                key={service.id}
                id={service.id}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                {/* Image */}
                <div
                  className={`relative ${index % 2 === 1 ? "lg:order-2" : ""}`}
                >
                  <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                  </div>
                  <div className="absolute -bottom-4 -right-4 lg:bottom-6 lg:-right-6 w-24 h-24 bg-primary/20 rounded-full blur-2xl" />
                </div>

                {/* Content */}
                <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                  <span className="text-primary font-medium tracking-widest uppercase text-sm">
                    {service.subtitle}
                  </span>
                  <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 mb-4">
                    {service.title}
                  </h2>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  <Card className="bg-muted/30 border-border/50 mb-6">
                    <CardContent className="p-6">
                      <h3 className="font-semibold text-foreground mb-4">
                        Key Benefits:
                      </h3>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {service.benefits.map((benefit, i) => (
                          <div key={i} className="flex items-start gap-2">
                            <CheckCircle className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                            <span className="text-sm text-foreground/80">
                              {benefit}
                            </span>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>

                  <p className="text-sm text-muted-foreground mb-6 italic">
                    <strong>Our Process:</strong> {service.process}
                  </p>

                  <div className="flex flex-col sm:flex-row gap-4">
                    <a
                      href="https://wa.me/19296362990"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button className="bg-green-600 hover:bg-green-700 text-white">
                        Book This Service
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </a>
                    <a href="tel:+19296362990">
                      <Button
                        variant="outline"
                        className="border-primary/30 hover:bg-primary hover:text-primary-foreground"
                      >
                        <Phone className="mr-2 h-4 w-4" />
                        Call Now
                      </Button>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-16 lg:py-24 bg-muted/30">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Additional <span className="text-primary">Services</span>
            </h2>
            <p className="text-muted-foreground">
              Beyond our primary services, I also offer specialized solutions
              for unique situations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              "Husband Wife Problem",
              "Evil Spirits Removal",
              "Vashikaran Services",
              "Horoscope Matching",
              "Gemstone Recommendation",
              "Vastu Consultation",
              "Name Analysis",
              "Lucky Number Calculation",
              "Spiritual Counseling",
            ].map((service, index) => (
              <Card
                key={index}
                className="bg-card border-border/50 hover:border-primary/30 transition-all duration-300"
              >
                <CardContent className="p-6 flex items-center gap-4">
                  <Star className="h-5 w-5 text-primary flex-shrink-0" />
                  <span className="font-medium text-foreground">{service}</span>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-muted-foreground mb-6">
              Have a unique problem not listed here? Contact us for a
              personalized consultation.
            </p>
            <a
              href="https://wa.me/19296362990"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground"
              >
                Discuss Your Situation
              </Button>
            </a>
          </div>
        </div>
      </section>

      <CTASection />
      <Footer />
      <WhatsAppButton />
    </main>
  )
}
