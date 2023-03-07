/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["avatars.githubusercontent.com"]
  },
  env: {
    githubApi: process.env.GH_API,
    githubToken: process.env.GH_TOKEN,
  }
}

module.exports = nextConfig
