let mix = require("laravel-mix");
require("dotenv")
	.config();

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.js("resources/assets/js/app.js", "public/js")
	.extract(["vue", "axios", "lodash", "vuetify"])
	.sass("resources/assets/sass/app.scss", "public/css");

mix.browserSync(process.env.MIX_APP_URL);
