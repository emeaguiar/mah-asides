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
	<?php if ( ! empty( $attributes['title'] ) ) : ?>
		<h3 class="mah-asides__title">
			<?php echo esc_html( $attributes['title'] ); ?>
		</h3>
	<?php endif; ?>

	<?php if ( ! empty( $attributes['content'] ) ) : ?>
		<?php echo wp_kses_post( $attributes['content'] ); ?>
	<?php endif; ?>
</aside>
