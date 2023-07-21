/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-i18n/
 */
import { __ } from '@wordpress/i18n';
import { InspectorControls, RichText } from '@wordpress/block-editor';
import {
	PanelBody,
	SelectControl,
} from '@wordpress/components';

/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import { useBlockProps } from '@wordpress/block-editor';

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import './editor.scss';
import metadata from './block.json';

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#edit
 *
 * @return {WPElement} Element to render.
 */
export default function Edit( { attributes, setAttributes } ) {
	const types = metadata.attributes.type.enum;
	const blockProps = useBlockProps( {
		className: `mah-asides--${ attributes.type }`,
	} );

	return (
		<>
			<InspectorControls>
				<PanelBody title={ __( 'Type', 'mah-asides' ) }>
					<SelectControl
						label={ __( 'Type', 'mah-asides' ) }
						value={ attributes.type }
						options={
							types.map( ( type ) => ( {
								label: type.charAt( 0 ).toUpperCase() + type.slice( 1 ),
								value: type
						} ) ) }
						onChange={ ( type ) => setAttributes( { type } ) }
					/>
                </PanelBody>
			</InspectorControls>

			<RichText
				tagName="p"
				placeholder={ __( 'Mah Asides – hello from the editor!', 'mah-asides' ) }
				value={ attributes.content }
				onChange={ ( content ) => setAttributes( { content } ) }
				{ ...blockProps }
			/>
		</>
	);
}
