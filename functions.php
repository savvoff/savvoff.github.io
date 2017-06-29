<?php
// scripts, styles loading
function bizup_scripts(){
  wp_enqueue_style( '', get_template_directory_uri() . '/css/reset.css' );
	wp_enqueue_style( '', get_template_directory_uri() . '/css/main.css' );
	wp_enqueue_style( '', get_stylesheet_uri() );
	wp_enqueue_script(
		'',
		get_template_directory_uri() . '/js/bootstrap.min.js',
		false,
		'',
		true
	 );
}
add_action( 'wp_enqueue_scripts', 'bizup_scripts' );
// header menu
register_nav_menu( 'menu', 'menu in header' );
?>
