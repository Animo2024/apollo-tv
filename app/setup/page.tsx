"use client"

import { useState } from "react"
import Link from "next/link"
import { Tv, Flame, Smartphone, Apple, Box, Monitor, Radio, ChevronDown, ChevronUp, MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Footer } from "@/components/footer"
import { Header } from "@/components/header"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { EmailButton } from "@/components/email-button"

const devices = [
  {
    id: "samsung",
    icon: Tv,
    label: "Samsung Smart TV",
    steps: [
      { title: "Open Smart Hub", desc: "Press the Smart Hub button on your remote." },
      { title: "Find the app", desc: "Search for IPTV SMARTERS PRO in the app store and install it." },
      { title: "Log in", desc: "Open the app and log in using your subscription details: username, password, and portal URL." },
    ],
  },
  {
    id: "lg",
    icon: Tv,
    label: "LG Smart TV",
    steps: [
      { title: "Open LG Content Store", desc: "Press the Home button on your remote and navigate to the LG Content Store." },
      { title: "Find the app", desc: "Search for IPTV SMARTERS PRO and install it." },
      { title: "Log in", desc: "Open the app and log in using your subscription details: username, password, and portal URL." },
    ],
  },
  {
    id: "firestick",
    icon: Flame,
    label: "Amazon Fire TV Stick",
    steps: [
      { title: "Open Downloader", desc: "Launch the Downloader application on your Fire TV Stick." },
      { title: "Enter the code", desc: "Enter code 78522 in the URL/code field." },
      { title: "Install the app", desc: "The IPTV SMARTERS PRO app will appear. Download and install it." },
      { title: "Log in", desc: 'Open the app, tap "Login with Xtream Codes", then enter your username, password, and URL.' },
      { title: "Enjoy", desc: "You're all set! Start streaming your content." },
    ],
  },
  {
    id: "android",
    icon: Smartphone,
    label: "Android (XCIPTV Player)",
    steps: [
      { title: "Open Google Play", desc: "Unlock your Android device and open the Play Store." },
      { title: "Search the app", desc: "Search for XCIPTV Player and tap Install." },
      { title: "Launch the app", desc: "Open XCIPTV Player once installation is complete." },
      { title: "Enter credentials", desc: "Enter your IPTV subscription login details and tap Log In." },
      { title: "Enjoy", desc: "You're ready to stream!" },
    ],
  },
  {
    id: "ios",
    icon: Apple,
    label: "Apple / iOS",
    steps: [
      {
        title: "Download Smarters Player Lite",
        desc: 'Search for "Smarters Player Lite" on the App Store or visit: https://apps.apple.com/in/app/smarters-player-lite/id1628995509 — install it on your iOS device.',
      },
      { title: "Open the app", desc: "Launch Smarters Player Lite after installation." },
      { title: "Enter your details", desc: 'Enter the login credentials provided after your subscription, then tap "ADD USER".' },
      { title: "Wait a moment", desc: "The app will load your channels — this takes a few seconds." },
      { title: "Open Live TV", desc: 'Tap the "Live TV" icon to browse your channels.' },
      { title: "Select a channel", desc: "Choose a channel group, then tap a channel name. Double-tap the small screen to go full screen." },
    ],
  },
  {
    id: "magbox",
    icon: Box,
    label: "MAG Box",
    steps: [
      { title: "Open Settings", desc: 'When the box finishes loading, click "Settings" on the main portal screen or press the SETUP/SET button on your remote.' },
      { title: "Go to System Settings", desc: 'Select "System Settings" then click "Servers".' },
      { title: "Open Portals", desc: 'Click on "Servers" then select the "Portals" option.' },
      { title: "Enter portal details", desc: 'In "Portal Name 1" enter a name of your choice. In "Portal URL 1" enter the portal URL we provided.' },
      {
        title: "Send us your MAC address",
        desc: "To activate your subscription on a MAG box, send us the MAC address found on the label on the back of the box. Activation is done remotely and we will send you the URL immediately.",
      },
      { title: "Save and restart", desc: 'Click "OK" to save, then press "EXIT". Restart the box and select "OK" to apply the changes.' },
    ],
  },
  {
    id: "windows",
    icon: Monitor,
    label: "Windows PC",
    steps: [
      { title: "Download IPTV Smarters Pro", desc: "Go to https://www.iptvsmarters.com, click Downloads, and download the latest version." },
      { title: "Install the app", desc: 'Run the downloaded file. When Windows asks for permission, click "Yes". Installation takes 1–2 minutes.' },
      { title: "Launch and add account", desc: 'Open IPTV Smarters Pro, click "Add New User", then select "Login with Xtream Code API".' },
      { title: "Enter credentials", desc: "Enter your subscription username, password, and URL, then confirm." },
      { title: "Enjoy", desc: "You're now ready to watch content on IPTV Smarters Pro!" },
    ],
  },
  {
    id: "enigma2",
    icon: Radio,
    label: "Enigma 2 / Linux",
    steps: [
      {
        title: "Find your device IP",
        desc: "On your Enigma 2 device: Settings → Configuration → System Network Device → Adapter Configuration → Settings. Note the IP address (starts with 192.168…).",
      },
      { title: "Install PuTTY", desc: "On your Windows PC, download and install PuTTY from the official site." },
      { title: "Connect via PuTTY", desc: "Open PuTTY. Enter your device's IP address and set the port to 23. Click Open." },
      { title: "Log in", desc: 'Enter root as both the login username and password when prompted.' },
      {
        title: "Run the install command",
        desc: 'Paste your install command (provided after subscription) — it looks like:\n\nwget -O /etc/enigma2/iptv.sh "your_m3u_link" && chmod 777 /etc/enigma2/iptv.sh && /etc/enigma2/iptv.sh\n\nRight-click to paste, then press Enter.',
      },
      { title: "Reboot", desc: 'Type "reboot" and press Enter. Your device will restart with the channels loaded.' },
    ],
  },
]

function DeviceCard({ device }: { device: typeof devices[0] }) {
  const [open, setOpen] = useState(false)
  const Icon = device.icon

  return (
    <div className="border border-border rounded-2xl bg-card/50 overflow-hidden transition-all">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between gap-4 p-5 text-left hover:bg-secondary/30 transition-colors"
      >
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
            <Icon className="w-5 h-5 text-primary" />
          </div>
          <span className="font-semibold text-foreground">{device.label}</span>
        </div>
        {open ? (
          <ChevronUp className="w-5 h-5 text-muted-foreground flex-shrink-0" />
        ) : (
          <ChevronDown className="w-5 h-5 text-muted-foreground flex-shrink-0" />
        )}
      </button>

      {open && (
        <div className="px-5 pb-6 border-t border-border">
          <ol className="mt-4 space-y-4">
            {device.steps.map((step, i) => (
              <li key={i} className="flex gap-4">
                <div className="flex-shrink-0 w-7 h-7 rounded-full bg-primary text-primary-foreground text-xs font-bold flex items-center justify-center mt-0.5">
                  {i + 1}
                </div>
                <div>
                  <p className="font-medium text-foreground text-sm">{step.title}</p>
                  <p className="text-muted-foreground text-sm mt-0.5 leading-relaxed break-words overflow-hidden">{step.desc}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      )}
    </div>
  )
}

export default function SetupPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="max-w-3xl mx-auto px-4 sm:px-6 py-16">
        {/* Hero */}
        <div className="text-center mb-14">
          <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Apollo TV IPTV Setup Guide
          </h1>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Follow the step-by-step instructions below to set up your Apollo TV IPTV subscription on any device.
          </p>
        </div>

        {/* Device Cards */}
        <div className="space-y-3">
          {devices.map((device) => (
            <DeviceCard key={device.id} device={device} />
          ))}
        </div>

        {/* Support CTA */}
        <div className="mt-14 rounded-2xl border border-border bg-card/50 p-8 text-center">
          <h2 className="text-xl font-semibold text-foreground mb-2">Need help setting up?</h2>
          <p className="text-muted-foreground text-sm mb-6">
            Our support team is available 24/7 to guide you through the setup process.
          </p>
          <Button asChild className="bg-primary text-primary-foreground hover:bg-primary/90">
            <Link href="https://wa.me/212622892003" target="_blank" rel="noopener noreferrer">
              <MessageCircle className="w-4 h-4 mr-2" />
              Chat on WhatsApp
            </Link>
          </Button>
        </div>

        <div className="mt-10 pt-8 border-t border-border">
          <Link href="/" className="text-primary hover:underline text-sm">
            ← Back to Home
          </Link>
        </div>
      </main>
      <Footer />
      <WhatsAppButton />
      <EmailButton />
    </div>
  )
}
