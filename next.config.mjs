/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["nomauznkzwsyvjipldrf.supabase.co"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "nomauznkzwsyvjipldrf.supabase.co",
        port: "",
        pathname: "/storage/v1/object/public/cabin-images/**",
      },
    ],
  },
};

export default nextConfig;
