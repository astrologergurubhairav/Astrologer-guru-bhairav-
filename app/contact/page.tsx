import type { Metadata } from "next"
import Image from "next/image"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { ContactForm } from "@/components/contact-form"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
  Star,
  Phone,
  Mail,
  MapPin,
  Clock,
  MessageCircle,
  Facebook,
  Instagram,
  Youtube,
} from "lucide-react"

export const metadata: Metadata = {
  title: "Contact Guru Bhairav | Book Your Consultation Today",
  description:
    "Get in touch with Astrologer Guru Bhairav for spiritual guidance and consultation. Available 24/7 via phone, WhatsApp, and email. Serving clients across the USA.",
  keywords:
    "contact astrologer, book consultation, spiritual guidance, psychic consultation, astrology appointment",
}

const contactInfo = [
  {
    icon: Phone,
    title: "Phone",
    value: "+1 929 636 2990",
    href: "tel:+19296362990",
    description: "Call anytime for immediate assistance",
  },
  {
    icon: MessageCircle,
    title: "WhatsApp",
    value: "+1 929 636 2990",
    href: "https://wa.me/19296362990",
    description: "Chat with us on WhatsApp",
  },
  {
    icon: Mail,
    title: "Email",
    value: "contact@gurubhairav.com",
    href: "mailto:contact@gurubhairav.com",
    description: "Email us your queries",
  },
  {
    icon: Clock,
    title: "Hours",
    value: "Available 24/7",
    href: null,
    description: "We are here for you anytime",
  },
]

const socialLinks = [
  {
    icon: Facebook,
    name: "Facebook",
    href: "#",
    color: "hover:bg-blue-600",
  },
  {
    icon: Instagram,
    name: "Instagram",
    href: "#",
    color: "hover:bg-pink-600",
  },
  {
    icon: Youtube,
    name: "YouTube",
    href: "#",
    color: "hover:bg-red-600",
  },
]

const faqs = [
  {
    question: "How do consultations work?",
    answer:
      "Consultations can be done via phone call, video call, or WhatsApp. After you contact us, we will schedule a convenient time for your personalized reading or consultation.",
  },
  {
    question: "What information do you need from me?",
    answer:
      "For astrological consultations, we typically need your date, time, and place of birth. For other services, we will discuss your specific situation during the consultation.",
  },
  {
    question: "How long does a consultation take?",
    answer:
      "Initial consultations typically last 30-60 minutes, depending on the complexity of your situation. Follow-up sessions may vary in duration.",
  },
  {
    question: "Is my information kept confidential?",
    answer:
      "Absolutely. All consultations and personal information are kept 100% confidential. Your privacy and trust are our top priorities.",
  },
]

export default function ContactPage() {
  return (
    <main className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="relative pt-24 pb-16 lg:pt-32 lg:pb-24 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/contact-hero.jpg"
            alt="Contact Astrologer Guru Bhairav"
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
                Contact Us
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Get in Touch for{" "}
              <span className="text-primary">Spiritual Guidance</span>
            </h1>
            <p className="text-lg text-white/80 leading-relaxed">
              Ready to transform your life? Reach out to Astrologer Guru Bhairav
              today and take the first step towards a brighter future.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info & Form Section */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Information */}
            <div className="lg:col-span-1 space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">
                  Contact Information
                </h2>
                <p className="text-muted-foreground">
                  Reach out through any of these channels. We are available 24/7
                  to assist you.
                </p>
              </div>

              {/* Contact Cards */}
              <div className="space-y-4">
                {contactInfo.map((item, index) => (
                  <Card
                    key={index}
                    className="bg-card border-border/50 hover:border-primary/30 transition-all duration-300"
                  >
                    <CardContent className="p-4">
                      {item.href ? (
                        <a
                          href={item.href}
                          target={
                            item.href.startsWith("http") ? "_blank" : undefined
                          }
                          rel={
                            item.href.startsWith("http")
                              ? "noopener noreferrer"
                              : undefined
                          }
                          className="flex items-start gap-4 group"
                        >
                          <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                            <item.icon className="h-6 w-6 text-primary" />
                          </div>
                          <div>
                            <p className="font-semibold text-foreground group-hover:text-primary transition-colors">
                              {item.title}
                            </p>
                            <p className="text-foreground">{item.value}</p>
                            <p className="text-sm text-muted-foreground">
                              {item.description}
                            </p>
                          </div>
                        </a>
                      ) : (
                        <div className="flex items-start gap-4">
                          <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                            <item.icon className="h-6 w-6 text-primary" />
                          </div>
                          <div>
                            <p className="font-semibold text-foreground">
                              {item.title}
                            </p>
                            <p className="text-foreground">{item.value}</p>
                            <p className="text-sm text-muted-foreground">
                              {item.description}
                            </p>
                          </div>
                        </div>
                      )}
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Location */}
              <Card className="bg-card border-border/50">
                <CardContent className="p-4">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <MapPin className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">
                        Service Area
                      </p>
                      <p className="text-foreground">United States</p>
                      <p className="text-sm text-muted-foreground">
                        Serving clients nationwide via phone and video
                        consultations
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Social Links */}
              <div>
                <h3 className="font-semibold text-foreground mb-4">
                  Follow Us
                </h3>
                <div className="flex gap-4">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`w-12 h-12 bg-muted rounded-lg flex items-center justify-center text-foreground transition-all duration-300 ${social.color} hover:text-white`}
                      aria-label={social.name}
                    >
                      <social.icon className="h-5 w-5" />
                    </a>
                  ))}
                </div>
              </div>

              {/* Quick WhatsApp */}
              <a
                href="https://wa.me/19296362990"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button className="w-full bg-green-600 hover:bg-green-700 text-white py-6">
                  <MessageCircle className="mr-2 h-5 w-5" />
                  Chat on WhatsApp Now
                </Button>
              </a>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 lg:py-24 bg-muted/30">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Frequently Asked <span className="text-primary">Questions</span>
            </h2>
            <p className="text-muted-foreground">
              Have questions about our services? Find answers to common
              inquiries below.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {faqs.map((faq, index) => (
              <Card
                key={index}
                className="bg-card border-border/50 hover:border-primary/30 transition-all duration-300"
              >
                <CardContent className="p-6">
                  <h3 className="font-semibold text-foreground mb-2">
                    {faq.question}
                  </h3>
                  <p className="text-muted-foreground">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-muted-foreground mb-4">
              Still have questions? We are here to help!
            </p>
            <a href="tel:+19296362990">
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground"
              >
                <Phone className="mr-2 h-5 w-5" />
                Call +1 929 636 2990
              </Button>
            </a>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </main>
  )
}
