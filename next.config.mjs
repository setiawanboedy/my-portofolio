/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "setiawanboedy.github.io"
            }
        ],
      },
};

export default nextConfig;
