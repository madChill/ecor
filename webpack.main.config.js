var webpack = require("webpack"),
  path = require("path"),
  fileSystem = require("fs-extra"),
  env = require("./utils/env"),
  { CleanWebpackPlugin } = require("clean-webpack-plugin"),
  CopyWebpackPlugin = require("copy-webpack-plugin"),
  HtmlWebpackPlugin = require("html-webpack-plugin"),
  TerserPlugin = require("terser-webpack-plugin");

const ASSET_PATH = process.env.ASSET_PATH || "/";

var alias = {
  // "react-dom": "@hot-loader/react-dom",
};

// load the secrets
var secretsPath = path.join(__dirname, "secrets." + env.NODE_ENV + ".js");

var fileExtensions = [
  "jpg",
  "jpeg",
  "png",
  "gif",
  "eot",
  "otf",
  "svg",
  "ttf",
  "woff",
  "woff2",
];

if (fileSystem.existsSync(secretsPath)) {
  alias["secrets"] = secretsPath;
}

var options = {
  mode: process.env.NODE_ENV || "development",
  entry: {
    main: path.join(__dirname, "main", "index.jsx"),
  },
  // chromeExtensionBoilerplate: {
  //   notHotReload: ['contentScript', 'devtools'],
  // },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].bundle.js",
    publicPath: ASSET_PATH,
  },
  module: {
    rules: [
      {
        // look for .css or .scss files
        test: /\.(css|scss)$/,
        // in the `src` directory
        use: [
          {
            loader: "style-loader",
          },
          {
            loader: "css-loader",
            options: {
              importLoaders: 1,
              modules: true,
            },
          },
        ],
      },
      {
        test: new RegExp(".(" + fileExtensions.join("|") + ")$"),
        loader: "file-loader",
        options: {
          name: "[name].[ext]",
        },
        exclude: /node_modules/,
      },
      {
        test: /\.html$/,
        loader: "html-loader",
        exclude: /node_modules/,
      },
      { test: /\.(ts|tsx)$/, loader: "ts-loader", exclude: /node_modules/ },
      {
        test: /\.(js|jsx)$/,
        use: [
          // {
          //   loader: "source-map-loader",
          // },
          {
            loader: "babel-loader",
          },
        ],
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    alias: alias,
    extensions: fileExtensions
      .map((extension) => "." + extension)
      .concat([".js", ".jsx", ".ts", ".tsx", ".css"]),
  },
  plugins: [
    new webpack.ProgressPlugin(),
    new HtmlWebpackPlugin({
      template: "utils/index.html",
    }),
    // clean the build folder
    // new CleanWebpackPlugin({
    //   verbose: true,
    //   cleanStaleWebpackAssets: true,
    // }),
    // expose and write the allowed env vars on the compiled bundle
    // new webpack.EnvironmentPlugin({
    //   NODE_ENV: "development", // use 'development' unless process.env.NODE_ENV is defined
    //   BABEL_ENV: "development",
    // }),
    new CopyWebpackPlugin([
      {
        from: "main/assets",
        // transform: function (content, path) {
        //   // generates the manifest file using the package.json informations
        //   return Buffer.from(
        //     JSON.stringify({
        //       description: process.env.npm_package_description,
        //       version: process.env.npm_package_version,
        //       ...JSON.parse(content.toString()),
        //     })
        //   );
        // },
      },
    ]),
  ],
  // infrastructureLogging: {
  //   level: "info",
  // },
};

if (env.NODE_ENV === "development") {
  options.devtool = "cheap-module-source-map";
} else {
  options.optimization = {
    minimize: true,
    minimizer: [
      new TerserPlugin({
        extractComments: false,
      }),
    ],
  };
}

module.exports = options;
