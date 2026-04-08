"use client"

import { MessageCircle } from "lucide-react"
import { cn } from "@/lib/utils"

export function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/19296362990"
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "fixed bottom-6 right-6 z-50 flex items-center justify-center",
        "w-14 h-14 md:w-16 md:h-16 rounded-full",
        "bg-green-500 hover:bg-green-600 text-white",
        "shadow-lg shadow-green-500/30 hover:shadow-green-500/50",
        "transition-all duration-300 hover:scale-110",
        "animate-bounce"
      )}
      aria-label="Contact on WhatsApp"
      style={{ animationDuration: "2s" }}
    >
      <MessageCircle className="h-7 w-7 md:h-8 md:w-8" />
      <span className="sr-only">Contact on WhatsApp</span>
      
      {/* Pulse Effect */}
      <span className="absolute inset-0 rounded-full bg-green-500 animate-ping opacity-30" />
    </a>
  )
}
