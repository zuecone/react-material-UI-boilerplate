module.exports = {
	//tell where to process the code
	entry: [
		'script!jquery/dist/jquery.min.js',
		'./app/app.jsx'
	],
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
		loaders: [
			{
				test: /\.jsx?$/,
				loader: 'babel-loader',
				query: {
					presets: ['react', 'es2015', 'stage-0'],
					plugins: ['react-html-attrs']
				},
				exclude: /(node_modules|bower_components)/
			},
			{
				test: /\.css$/,
        		loader: "style-loader!css-loader"
			},
			{
				test: /\.(woff|woff2|eot|ttf|svg)$/,
        		loader: "url"
			}

		]
	}
}
