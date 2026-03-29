import { Tv, Flame, Apple, Monitor, Smartphone } from "lucide-react"

const devices = [
  { icon: Tv, name: "Android TV", description: "Smart TVs & Android boxes" },
  { icon: Flame, name: "FireStick", description: "Amazon Fire TV devices" },
  { icon: Apple, name: "Apple TV", description: "All Apple TV models" },
  { icon: Monitor, name: "PC / Mac", description: "Windows & macOS" },
  { icon: Smartphone, name: "Mobile", description: "iOS & Android phones" },
]

export function Devices() {
  return (
    <section className="py-20 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4 text-balance">
            Compatible With All Devices
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Stream your favorite content on any device, anytime, anywhere. 
            One subscription, unlimited possibilities.
          </p>
        </div>

        {/* Devices Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4">
          {devices.map((device) => (
            <div
              key={device.name}
              className="bg-card/50 border border-border rounded-2xl p-3 sm:p-6 text-center hover:border-primary/50 transition-all duration-300 group"
            >
              <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                <device.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground mb-1">{device.name}</h3>
              <p className="text-xs text-muted-foreground">{device.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
