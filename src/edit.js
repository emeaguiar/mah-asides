/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import {
	useBlockProps,
	InspectorControls,
	RichText,
} from '@wordpress/block-editor';
import { PanelBody, SelectControl } from '@wordpress/components';

/**
 * Internal dependencies
 */
import './editor.scss';
import metadata from './block.json';

/**
 * Edit function
 *
 * @param {Object}   props               Properties passed to the component
 * @param {Object}   props.attributes    Attributes for the block
 * @param {Function} props.setAttributes Function to set attributes
 */
export default function Edit( props ) {
	const { attributes, setAttributes } = props;
	const types = metadata.attributes.type.enum;
	const blockProps = useBlockProps( {
		className: `mah-asides mah-asides--${ attributes.type }`,
	} );
	const options = types.map( ( type ) => ( {
		label: type.charAt( 0 ).toUpperCase() + type.slice( 1 ),
		value: type,
	} ) );

	return (
		<>
			<InspectorControls>
				<PanelBody title={ __( 'Type', 'mah-asides' ) }>
					<SelectControl
						label={ __( 'Type', 'mah-asides' ) }
						value={ attributes.type }
						options={ options }
						onChange={ ( type ) => setAttributes( { type } ) }
					/>
				</PanelBody>
			</InspectorControls>

			<aside { ...blockProps }>
				<RichText
					className="mah-asides__title"
					tagName="h3"
					placeholder={ __( 'Title', 'mah-asides' ) }
					value={ attributes.title }
					onChange={ ( title ) => setAttributes( { title } ) }
				/>

				<RichText
					className="mah-asides__content"
					tagName="p"
					placeholder={ __( 'Content', 'mah-asides' ) }
					value={ attributes.content }
					onChange={ ( content ) => setAttributes( { content } ) }
				/>
			</aside>
		</>
	);
}
