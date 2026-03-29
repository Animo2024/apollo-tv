import Link from "next/link"
import { CreditCard, Download, Play, BookOpen } from "lucide-react"
import { Button } from "@/components/ui/button"

const steps = [
  {
    icon: CreditCard,
    number: "01",
    title: "Choose Your Plan",
    description: "Select the subscription plan that best fits your entertainment needs and budget.",
  },
  {
    icon: Download,
    number: "02",
    title: "Install the App",
    description: "Download and install our app on your preferred device. We'll guide you through the setup.",
  },
  {
    icon: Play,
    number: "03",
    title: "Start Streaming",
    description: "Enter your credentials and enjoy unlimited access to thousands of channels and VOD content.",
  },
]

export function HowItWorks() {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4 text-balance">
            Get Started in 3 Easy Steps
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Setting up Apollo TV is quick and simple. 
            Start streaming in just minutes.
          </p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div key={step.title} className="relative">
              {/* Connector Line */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-12 left-1/2 w-full h-0.5 bg-gradient-to-r from-primary/50 to-primary/20" />
              )}
              
              <div className="relative bg-card/50 backdrop-blur-sm border border-border rounded-2xl p-8 text-center hover:border-primary/50 transition-all duration-300">
                {/* Step Number */}
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground text-sm font-bold px-3 py-1 rounded-full">
                  Step {step.number}
                </div>
                
                <div className="w-20 h-20 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-6">
                  <step.icon className="w-10 h-10 text-primary" />
                </div>
                
                <h3 className="text-xl font-semibold text-foreground mb-3">{step.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{step.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Setup Guide CTA */}
        <div className="text-center mt-12">
          <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-6 text-lg">
            <Link href="/setup">
              <BookOpen className="w-5 h-5 mr-2" />
              View Full Setup Guide
            </Link>
          </Button>
          <p className="text-sm text-muted-foreground mt-3">Step-by-step instructions for every device</p>
        </div>
      </div>
    </section>
  )
}
