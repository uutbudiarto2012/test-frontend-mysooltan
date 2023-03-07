/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    githubApi: process.env.GH_API,
    githubToken: process.env.GH_TOKEN,
  }
}

module.exports = nextConfig
