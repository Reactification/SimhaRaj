/** @type {import('next').NextConfig} */
// Updated config for latest deployment
const nextConfig = {
    transpilePackages: [],
    webpack: (config) => {
        config.resolve.fallback = {
            ...config.resolve.fallback,
            fs: false,
        };
        return config;
    },
}

module.exports = nextConfig 