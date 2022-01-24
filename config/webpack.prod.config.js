const webpack = require('webpack')
const { merge } = require('webpack-merge')

const { WebpackManifestPlugin } = require('webpack-manifest-plugin')
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin')
const UglifyJSPlugin = require('uglifyjs-webpack-plugin')
const Visualizer = require('webpack-visualizer-plugin2')

const baseConfig = require('./webpack.base.config')

const prodConfiguration = (env) => {
	return merge([
		{
			optimization: {
				splitChunks: {
					chunks: 'all',
					maxInitialRequests: Infinity,
					minSize: 0,
					cacheGroups: {
						vendor: {
							test: / [\\/]node_modules[\\/]/,
							name(module) {
								// get the name. E.g. node_modules/packageName/not/this/part.js
								// or node_modules/packageName
								const packageName = module.context.match(
									/[\\/]node_modules[\\/](.*?)([\\/]|$)/,
								)[1]

								// npm package names are URL-safe, but some servers don't like @ symbols
								return `npm.${packageName.replace('@', '')}`
							},
						},
						styles: {
							name: 'main',
							test: /\.css$/,
							chunks: 'all',
							enforce: true,
						},
					},
				},
				runtimeChunk: 'single',
				minimizer: [
					new UglifyJSPlugin(),
					new OptimizeCssAssetsPlugin(),
				],
			},
			plugins: [
				new WebpackManifestPlugin({
					fileName: 'asset-manifest.json',
				}),
				new webpack.ids.HashedModuleIdsPlugin(),
				new Visualizer({ filename: './statistics.html' }),
			],
		},
	])
}

module.exports = (env) => {
	return merge(baseConfig(env), prodConfiguration(env))
}
