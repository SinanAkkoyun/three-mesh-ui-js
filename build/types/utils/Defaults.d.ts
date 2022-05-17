declare namespace _default {
    export const container: any;
    export const fontFamily: any;
    export const fontSize: number;
    export const fontKerning: string;
    export { fontStyle };
    export { fontWeight };
    export const bestFit: string;
    export const offset: number;
    export const interLine: number;
    export const breakOn: string;
    export { whiteSpace };
    export { contentDirection };
    export { alignItems };
    export { justifyContent };
    export const fontTexture: any;
    export { textAlign };
    export const fontColor: Color;
    export const fontOpacity: number;
    export const fontPXRange: number;
    export const fontSupersampling: boolean;
    export const borderRadius: Vector4;
    export const borderWidth: Vector4;
    export const borderColor: Color;
    export const borderOpacity: number;
    export const backgroundSize: string;
    export const backgroundColor: Color;
    export const backgroundWhiteColor: Color;
    export const backgroundOpacity: number;
    export const backgroundOpaqueOpacity: number;
    export const backgroundTexture: any;
    export const hiddenOverflow: boolean;
    export const letterSpacing: number;
}
export default _default;
import { NORMAL as fontStyle } from "./font/FontStyle";
import { NORMAL as fontWeight } from "./font/FontWeight";
import { PRE_LINE as whiteSpace } from "./inline-layout/Whitespace";
import { COLUMN as contentDirection } from "./block-layout/ContentDirection";
import { CENTER as alignItems } from "./block-layout/AlignItems";
import { START as justifyContent } from "./block-layout/JustifyContent";
import { CENTER as textAlign } from "./inline-layout/TextAlign";
import { Color } from "three/src/math/Color";
import { Vector4 } from "three/src/math/Vector4";