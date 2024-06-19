/** @type {import('next').NextConfig} */
const nextConfig = {
    output: "export",  // <=== enables static exports
    reactStrictMode: true,
};

module.exports = nextConfig;
module.exports = {
    images: {
        // Disable image optimization during export
        unoptimized: true,
    },
};
