/*
 * Welcome to your app's main JavaScript file!
 *
 * We recommend including the built version of this JavaScript file
 * (and its CSS file) in your base layout (base.html.twig).
 */
const $ = require('jquery');
// this "modifies" the jquery module: adding behavior to it
// the bootstrap module doesn't export/return anything
require('bootstrap');
//import "bootstrap/dist/js/bootstrap.min.js";
// any CSS you import will output into a single css file (app.css in this case)
import './styles/app.css';
//import 'bootstrap';