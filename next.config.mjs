/** @type {import('next').NextConfig} */
const nextConfig = {
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            //CSP
            key: "Content-Security-Policy",
            value:
              "default-src 'self'; script-src 'self' https://trusted.cdn.com; style-src 'self' 'unsafe-inline'; img-src 'self' data:",
          },
          //X-Frame
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          //HSTS
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=31536000; includeSubDomains; preload',
          },
          //Content-type
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
        ],
      },
    ];
  },
};

export default nextConfig;
