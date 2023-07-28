<?php
/**
 * @see https://github.com/WordPress/gutenberg/blob/trunk/docs/reference-guides/block-api/block-metadata.md#render
 */

$classes_wrapper = [
	'mah-asides',
	sprintf( 'mah-asides--%s', $attributes['type'] ),
];
?>


<aside <?php echo get_block_wrapper_attributes( [
	'class' => implode(' ', $classes_wrapper ),
] ); ?>>
	<h3 className="mah-asides__title">
		<?php echo esc_html( ucfirst( $attributes['type'] ) ); ?>
	</h3>

	<?php echo wp_kses_post( $attributes['content'] ); ?>
</aside>
