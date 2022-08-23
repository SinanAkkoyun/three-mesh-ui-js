import { mergeBufferGeometries } from 'three/examples/jsm/utils/BufferGeometryUtils';
import { Mesh } from 'three';
import { CENTER, JUSTIFY, JUSTIFY_CENTER, JUSTIFY_LEFT, JUSTIFY_RIGHT, LEFT, RIGHT } from '../../../../utils/inline-layout/TextAlign';
import TextAlignProperty from './TextAlignProperty';


export default class TextAlignPropertyText extends TextAlignProperty {

	constructor() {

		super();

		// configure
		this._allowsInherit = false;
		this._needsUpdate = true;

		//
		// @TODO : strategies

	}


	/* eslint-disable no-unused-vars */computeOutputValue( element ) { /* eslint-enable no-unused-vars */

		// console.error( "TextAlign Property", this._inheritedInput );
		this._value = this._inheritedInput;

		this._needsProcess = true;

	}

	process( element ) {

		_process( element );

		for ( const inlineElement of element._children._inlines ) {

			if( !inlineElement._inlines._value || !inlineElement._inlines._value.length ) continue;

			const charactersAsGeometries = inlineElement._inlines._value.map(
				inline =>
					inlineElement._font._fontVariant.getGeometricGlyph( inline, inlineElement )
						.translate( inline.offsetX, inline.offsetY, 0 )

			);

			const mergedGeom = mergeBufferGeometries( charactersAsGeometries );

			inlineElement.setFontMesh( new Mesh( mergedGeom, inlineElement.fontMaterial) );

			inlineElement._fontMesh.renderOrder = Infinity;

		}

		// @TODO :
		element.performAfterUpdate();

	}

}

function _process( element ) {

	const lines = element._layouter._value;
	const ALIGNMENT = element._textAlign._value;
	const INNER_WIDTH = element._bounds._innerWidth;

	// Start the alignment by sticking to directions : left, right, center
	for ( let i = 0; i < lines.length; i++ ) {

		const line = lines[ i ];

		// compute the alignment offset of the line
		const offsetX = _computeLineOffset( element, line, i === lines.length - 1 );

		const padding = element._padding._value;
		const border = element._borderWidth._value;

		// const paddingAmount = - ( padding.w + padding.y ) / 2 - ( border.w + border.y ) / 2;
		// const paddingAmount = - ( padding.w + padding.y ) / 2;
		const paddingAmount = ( - padding.w + padding.y ) / 2 + ( - border.w + border.y ) / 2;

		// apply the offset to each characters of the line
		for ( let j = 0; j < line.length; j++ ) {

			line[ j ].offsetX += offsetX - paddingAmount;
			// line[ j ].offsetX += offsetX;

		}

		// line.x = line[ 0 ].offsetX;


	}

	// last operations for justifications alignments
	if ( ALIGNMENT.indexOf( 'justify' ) === 0 ) {

		for ( let i = 0; i < lines.length; i++ ) {

			const line = lines[ i ];


			// do not process last line for justify-left or justify-right
			if ( ALIGNMENT.indexOf( '-' ) !== -1 && i === lines.length - 1 ) return;

			// can only justify is space is remaining
			const REMAINING_SPACE = INNER_WIDTH - line.width;
			if ( REMAINING_SPACE <= 0 ) return;

			// count the valid spaces to extend
			// Do not take the first nor the last space into account
			let validSpaces = 0;
			for ( let j = 1; j < line.length - 1; j++ ) {

				validSpaces += line[ j ].char === ' ' ? 1 : 0;

			}
			const additionalSpace = REMAINING_SPACE / validSpaces;


			// for right justification, process the loop in reverse
			let inverter = 1;
			if ( ALIGNMENT === 'justify-right' ) {

				line.reverse();
				inverter = -1;

			}

			let incrementalOffsetX = 0;

			// start at ONE to avoid first space
			for ( let j = 1; j <= line.length - 1; j++ ) {

				// apply offset on each char
				const inlineCharacter = line[ j ];
				inlineCharacter.offsetX += incrementalOffsetX * inverter;

				// and increase it when space
				incrementalOffsetX += inlineCharacter.char === ' ' ? additionalSpace : 0;

			}

			// for right justification, the loop was processed in reverse
			if ( ALIGNMENT === 'justify-right' ) {
				line.reverse();
			}


		}

	}

}

function _computeLineOffset ( element, line, lastLine ) {

	switch ( element._textAlign._value ) {

		case JUSTIFY_LEFT:
		case JUSTIFY:
		case LEFT:
			return - element._bounds._innerWidth / 2;

		case JUSTIFY_RIGHT:
		case RIGHT:
			return -line.width + ( element._bounds._innerWidth / 2 );


		case CENTER:
			return -line.width / 2;

		case JUSTIFY_CENTER:
			if ( lastLine ) {

				// center alignement
				return -line.width / 2;

			}

			// left alignment
			return - element._bounds._innerWidth / 2;

		default:
			console.warn( `textAlign: '${element._textAlign._value}' is not valid` );

	}

}