module.exports = {
	//tell where to process the code
	entry: './app/app.jsx',
	//specify the output
	output: {
		path: __dirname,
		filename: './public/bundle.js'
	},
	//take xtension array
	resolve: {
		root: __dirname,
		alias: {
			
		},
		extensions: ['', '.js', '.jsx']
	},
	module: {
		loaders: [{
			loader: 'babel-loader',
			query: {
				presets: ['react', 'es2015', 'stage-0']
			},
			test: /\.jsx?$/,
			exclude: /(node_modules|bower_components)/
		}]
	}
}