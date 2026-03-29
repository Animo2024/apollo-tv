/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    optimizePackageImports: ["lucide-react", "@radix-ui/react-accordion"],
  },
  compiler: {
    removeConsole: true,
  },
}

export default nextConfig
