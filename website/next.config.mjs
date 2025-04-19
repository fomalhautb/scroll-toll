/** @type {import('next').NextConfig} */
const nextConfig = {
  // Ignore build errors to allow the build to continue even with errors
  typescript: {
    // !! WARN !!
    // Dangerously allow production builds to successfully complete even if
    // your project has type errors.
    // !! WARN !!
    ignoreBuildErrors: true,
  },
  eslint: {
    // Similarly, ignore ESLint errors during the build process
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
