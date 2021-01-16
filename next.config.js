const isProd = process.env.NODE_ENV === "production";

module.exports = {
  target: "serverless",
  webpack: function (config) {
    config.module.rules.push({ test: /\.md$/, use: "raw-loader" });
    config.module.rules.push({ test: /\.yaml$/, use: "raw-loader" });
    return config;
  },
  // assetPrefix: isProd
  //   ? "https://cdn.statically.io/gh/NosearY/noseary.github.io/gh-pages/"
  //   : "",
};
