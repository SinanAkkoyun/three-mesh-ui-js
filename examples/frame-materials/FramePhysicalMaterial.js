import { MeshPhysicalMaterial } from 'three';
import FrameMaterialUtils from '../../src/frame/utils/FrameMaterialUtils';

export default class FramePhysicalMaterial extends MeshPhysicalMaterial {


	/**
	 * This static method is mandatory for extending ThreeMeshUI.FrameMaterial
	 * It will provide a transfer description for properties from ThreeMeshUI.Text to THREE.Material
	 * @see {FrameMaterialUtils.frameMaterialProperties}
	 * @returns {Object.<{m:string, t?:(frameMaterial:Material|ShaderMaterial, materialProperty:string, value:any) => void}>}
	 */
	static get fontMaterialProperties() {

		return FrameMaterialUtils.frameMaterialProperties;

	}

	constructor( options = {} ) {

		//ensure options
		FrameMaterialUtils.ensureMaterialOptions( options );

		super( options );

		FrameMaterialUtils.ensureDefines( this );

		FrameMaterialUtils.ensureUserData( this, options );

		// override the shaders
		this.onBeforeCompile = shader => {

			// links this material userDatas with its uniforms
			FrameMaterialUtils.bindUniformsWithUserData( shader, this );

			// inject ThreeMeshUI shaderChunks to provide msdf rendering
			FrameMaterialUtils.injectShaderChunks( shader );

		}

	}

}