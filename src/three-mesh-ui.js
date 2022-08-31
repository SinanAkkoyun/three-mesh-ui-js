/* global global */

import UpdateManager from './components/core/UpdateManager.js';
import FontLibrary from './font/FontLibrary.js';
import MSDFFontMaterialUtils from './font/msdf/utils/MSDFFontMaterialUtils';
import { ShaderChunkUI } from './renderers/shaders/ShaderChunkUI';
import FontVariant from './font/FontVariant';
import TypographicFont from './font/TypographicFont';
import TypographicGlyph from './font/TypographicGlyph';
import InlineGlyph from './font/InlineGlyph';
import BlockElement from './elements/basic/BlockElement';
import TextElement from './elements/basic/TextElement';
import InlineElement from './elements/basic/InlineElement';
import InlineBlockElement from './elements/basic/InlineBlockElement';
import MeshUIBaseElement from './core/elements/MeshUIBaseElement';
import * as DefaultValues from './core/DefaultValues';
import InheritableProperty from './core/properties/InheritableProperty';
import BaseProperty from './core/properties/BaseProperty';
import * as MaterialTransformers from './utils/mediator/transformers/MaterialTransformers';
import Behavior from './utils/Behavior';

const update = () => UpdateManager.update();

const ThreeMeshUI = {
	Block: BlockElement,
	Text : TextElement,
	Inline: InlineElement,
	InlineBlock : InlineBlockElement,
	// Keyboard : KeyboardElement,
	MeshUIBaseElement,
	FontLibrary,
	update,
	MSDFFontMaterialUtils,
	ShaderChunkUI,
	Behavior
};


if ( typeof global !== 'undefined' ) global.ThreeMeshUI = ThreeMeshUI;

export { BlockElement as Block };
export { TextElement as Text };
export { InlineElement as Inline };
export { InlineBlockElement as InlineBlock };
export { FontLibrary };
export { update };
export { ShaderChunkUI };
export { MSDFFontMaterialUtils };
export { FontVariant }
export { TypographicFont }
export { TypographicGlyph }
export { InlineGlyph }
export { MeshUIBaseElement }
export { DefaultValues }
export { InheritableProperty }
export { BaseProperty }
export { MaterialTransformers }
export { Behavior }

export default ThreeMeshUI;




