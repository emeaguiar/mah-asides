<?php
/**
 * @see https://github.com/WordPress/gutenberg/blob/trunk/docs/reference-guides/block-api/block-metadata.md#render
 */
?>

<aside <?php echo get_block_wrapper_attributes(); ?>>
	<h3 className="mah-asides__title">
		<?php echo esc_html( ucfirst( $attributes['type'] ) ); ?>
	</h3>

	<?php echo wp_kses_post( $attributes['content'] ); ?>
</aside>
