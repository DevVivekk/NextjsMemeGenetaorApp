/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      dangerouslyAllowSVG:true,
      remotePatterns: [
        {
          protocol: "https",
          hostname: "**",
        },
      ],
    },
    images: {
      remotePatterns: [
        {
          protocol: "https",
          hostname: "**",
        },
      ],
    },
    compress:true,
    swcMinify:true,
    compiler:{
    removeConsole: false
    },
    reactStrictMode:false,
    poweredByHeader: false,
    productionBrowserSourceMaps: false,
  }
  
  export default nextConfig
  