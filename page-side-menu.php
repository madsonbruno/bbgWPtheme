<?php
/**
 * The template for displaying all pages.
 *
 * This is the template that displays all pages by default.
 * Please note that this is the WordPress construct of pages
 * and that other 'pages' on your WordPress site may use a
 * different template.
 *
 * @link https://codex.wordpress.org/Template_Hierarchy
 *
 * @package bbginnovate
 * template name: Side Menu
 */

get_header(); ?>

	<div id="primary" class="content-area">
		<main id="main" class="site-main" role="main">

			<?php while ( have_posts() ) : the_post(); ?>

				<?php get_template_part( 'template-parts/content', 'page' ); ?>

				<?php
					// If comments are open or we have at least one comment, load up the comment template.
					if ( comments_open() || get_comments_number() ) :
						comments_template();
					endif;
				?>

			<?php endwhile; // End of the loop. ?>

		</main><!-- #main -->
	</div><!-- #primary -->

    <aside id="menu-content" class="widget-area sidenav" role="complementary">
        <!-- Adding main navigation to the sidebar -->
        <?php wp_nav_menu( array( 'theme_location' => 'menu-side', 'container' => 'nav', 'container_class' => '', 'menu_id' => 'primary-menu', 'menu_class' => 'menu usa-sidenav-list', 'walker' => new themeslug_walker_nav_menu() )); ?>
            <!-- #primary-menu -->
    </aside><!-- #secondary -->
<?php /*get_footer();*/ ?>
