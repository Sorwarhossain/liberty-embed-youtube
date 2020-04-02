<?php
/**
* Plugin Name:       Liberty Embed Youtube
* Plugin URI:        https://libertyrevolution.tv
* Description:       A plugin for embeding the youtube videos as iframe with autoplay enabled automatically.
* Version:           1.0.0
* Author:            Christopher Cook
* Author URI:        https://libertyrevolution.tv
* License:           GPL v2 or later
* License URI:       https://www.gnu.org/licenses/gpl-2.0.html
* Text Domain:       liberty
* Domain Path:       /languages
**/

/*
* Including the assets for block editor screen
*/
add_action('enqueue_block_editor_assets', 'liberty_block_editor_assets');
function liberty_block_editor_assets(){
    // Including the style files
    wp_enqueue_style('liberty-editor-css', plugin_dir_url(__FILE__) . 'assets/css/liberty-editor.css', array('wp-edit-blocks'));
    
    // Including the js files
    wp_enqueue_script('liberty-editor-js', plugin_dir_url(__FILE__) . 'assets/js/liberty-block.js', array('wp-blocks', 'wp-element'));
}


/*
* Including the assets for front end
*/
add_action('enqueue_block_assets', 'liberty_front_assets');
function liberty_front_assets(){
    
   wp_enqueue_style('liberty-front-css', plugin_dir_url( __FILE__ ) . 'assets/css/liberty-editor.css', array('wp-blocks'));
    
}