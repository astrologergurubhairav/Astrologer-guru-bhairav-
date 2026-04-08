"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Spinner } from "@/components/ui/spinner"
import { CheckCircle, Send } from "lucide-react"

const services = [
  "Palm Reading",
  "Psychic Reading",
  "Love Problem Solution",
  "Marriage Problem Solution",
  "Black Magic Removal",
  "Negative Energy Removal",
  "Family Problem Solution",
  "Job & Business Success",
  "Other",
]

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500))

    // In a real implementation, you would send this to your backend
    // For now, we redirect to WhatsApp with the form data
    const whatsappMessage = encodeURIComponent(
      `Hello Guru Bhairav,\n\nName: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nService: ${formData.service}\n\nMessage: ${formData.message}`
    )
    
    setIsSubmitting(false)
    setIsSubmitted(true)
    
    // Open WhatsApp after showing success
    setTimeout(() => {
      window.open(`https://wa.me/19296362990?text=${whatsappMessage}`, "_blank")
    }, 1500)
  }

  if (isSubmitted) {
    return (
      <Card className="bg-card border-border/50">
        <CardContent className="p-8 text-center">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="h-8 w-8 text-green-600" />
          </div>
          <h3 className="text-2xl font-bold text-foreground mb-4">
            Thank You!
          </h3>
          <p className="text-muted-foreground mb-6">
            Your message has been received. Redirecting you to WhatsApp for
            immediate assistance...
          </p>
          <Button
            onClick={() => setIsSubmitted(false)}
            variant="outline"
            className="border-primary/30"
          >
            Send Another Message
          </Button>
        </CardContent>
      </Card>
    )
  }

  return (
    <Card className="bg-card border-border/50">
      <CardHeader>
        <CardTitle className="text-2xl font-bold text-foreground">
          Send Us a Message
        </CardTitle>
        <p className="text-muted-foreground">
          Fill out the form below and we will get back to you within 24 hours.
        </p>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label
                htmlFor="name"
                className="text-sm font-medium text-foreground"
              >
                Full Name *
              </label>
              <Input
                id="name"
                type="text"
                placeholder="Your full name"
                required
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                className="bg-background border-input"
              />
            </div>
            <div className="space-y-2">
              <label
                htmlFor="email"
                className="text-sm font-medium text-foreground"
              >
                Email Address *
              </label>
              <Input
                id="email"
                type="email"
                placeholder="your@email.com"
                required
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                className="bg-background border-input"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label
                htmlFor="phone"
                className="text-sm font-medium text-foreground"
              >
                Phone Number *
              </label>
              <Input
                id="phone"
                type="tel"
                placeholder="+1 (555) 000-0000"
                required
                value={formData.phone}
                onChange={(e) =>
                  setFormData({ ...formData, phone: e.target.value })
                }
                className="bg-background border-input"
              />
            </div>
            <div className="space-y-2">
              <label
                htmlFor="service"
                className="text-sm font-medium text-foreground"
              >
                Service Needed *
              </label>
              <Select
                value={formData.service}
                onValueChange={(value) =>
                  setFormData({ ...formData, service: value })
                }
                required
              >
                <SelectTrigger className="bg-background border-input">
                  <SelectValue placeholder="Select a service" />
                </SelectTrigger>
                <SelectContent>
                  {services.map((service) => (
                    <SelectItem key={service} value={service}>
                      {service}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="space-y-2">
            <label
              htmlFor="message"
              className="text-sm font-medium text-foreground"
            >
              Your Message *
            </label>
            <Textarea
              id="message"
              placeholder="Please describe your situation and how we can help you..."
              required
              rows={5}
              value={formData.message}
              onChange={(e) =>
                setFormData({ ...formData, message: e.target.value })
              }
              className="bg-background border-input resize-none"
            />
          </div>

          <Button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold py-6"
          >
            {isSubmitting ? (
              <>
                <Spinner className="mr-2 h-4 w-4" />
                Sending...
              </>
            ) : (
              <>
                <Send className="mr-2 h-4 w-4" />
                Send Message
              </>
            )}
          </Button>

          <p className="text-xs text-muted-foreground text-center">
            Your information is 100% confidential and will never be shared with
            third parties.
          </p>
        </form>
      </CardContent>
    </Card>
  )
}
