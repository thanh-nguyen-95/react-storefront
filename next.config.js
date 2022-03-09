const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
});

module.exports = withBundleAnalyzer({
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: [
      "vercel.saleor.cloud",
      "img.youtube.com",
      "media-dev-store.egany.com",
      "media-stage-store.egany.com",
      "media-store.egany.com",
    ],
    formats: ["image/avif", "image/webp"],
  },
  async redirects() {
    return [
      {
        source: "/",
        // TODO: Investigate why constants from project cannot be imported
        // User should be redirected to the defaults defined in @lib/regions
        destination: "/channel-vnd/en-US",
        permanent: false,
      },
    ];
  },
  experimental: {
    reactRoot: true,
  },
});
