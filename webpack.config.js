module.exports = {
	//tell where to process the code
	entry: './app/app.jsx',
	//specify the output
	output: {
		path: __dirname,
		filename: './public/bundle.js'
	},
	//take extension array
	resolve: {
		root: __dirname,
		modulesDirectories:[
			'node_modules',
			'./app/components' //Folder to look at for auto-alias
		],
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