module.exports = {
  plugins: {
    "postcss-pxtorem": {
      rootValue: 75,
      minPixelValue: 3,
      propList: ["*"],
      exclude: /node_modules/i,
    },
  },
};