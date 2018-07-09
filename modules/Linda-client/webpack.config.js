const path = require("path");

module.exports = {
  entry: "./src/index.ts",
  //devtool: "inline-source-map",
  mode: "development",
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
  output: {
    path: path.resolve(__dirname, "lib"),
    filename: "linda-client.js",
    libraryTarget: "umd",
    library: "LindaClient",
    //umdNamedDefine: true,
  },
};