module.exports = {
  reactStrictMode: true,
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    config.module.rules.push({
      test: /\.resume.pdf$/i,
      loader: "raw-loader",
    });

    // Important: return the modified config
    return config;
  },
  // assetPrefix: "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/fontawesome.min.css" 
}
