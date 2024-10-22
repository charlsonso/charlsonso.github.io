module.exports = {
  // Ensures exported pages work correctly when deployed to static hosting
  exportTrailingSlash: true,

  // Disable image optimization if necessary (since GitHub Pages does not support Next.js' image optimization)
  images: {
    unoptimized: true,
  },
};
