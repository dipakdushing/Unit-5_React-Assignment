const path = require("path");

module.exports = {
	entry: "./src/index.js",
    watch: true,
	output: {
		path: path.join(__dirname, "build"),
		filename: path.join("bundle.js"),
	},
	mode: "development",
	module: {
		rules: [{test: /\.css$/i, use: ["style-loader", "css-loader"],},],
		rules: [{test: /\.(png|jpe?g|gif)$/i, use: ["file-loader"],},]
	},
};
