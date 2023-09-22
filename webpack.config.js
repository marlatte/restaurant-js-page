const path = require("path");
// const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
	mode: "development",
	entry: "./src/index.js",
	///////////////// HTMLWebpackPlugin generates an index.html that doesn't have the <head> tags I need
	// plugins: [
	// 	new HtmlWebpackPlugin({
	// 		title: "Output Management",
	// 	}),
	// ],
	output: {
		filename: "main.js",
		path: path.resolve(__dirname, "dist"),
	},
	module: {
		rules: [
			{
				test: /\.css$/i,
				use: ["style-loader", "css-loader"],
			},
			{
				test: /\.(woff|woff2|eot|ttf|otf)$/i,
				type: "asset/resource",
			},
		],
	},
};
