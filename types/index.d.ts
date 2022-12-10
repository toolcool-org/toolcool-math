import * as vector from './vector';
import * as matrix from './matrix';
import * as format from './format';
import * as angle from './angle';
import * as random from './random';
import * as other from './other';
import * as convert from './convert';
import * as bezierCurve from './bezier-curve';
declare global {
    interface Window {
        TCMath: {
            vSum: typeof vector.vSum;
            v2Sum: typeof vector.v2Sum;
            v3Sum: typeof vector.v3Sum;
            vSub: typeof vector.vSub;
            v2Sub: typeof vector.v2Sub;
            v3Sub: typeof vector.v3Sub;
            vMulScalar: typeof vector.vMulScalar;
            v2MulScalar: typeof vector.v2MulScalar;
            v3MulScalar: typeof vector.v3MulScalar;
            vLength: typeof vector.vLength;
            v2Length: typeof vector.v2Length;
            v3Length: typeof vector.v3Length;
            v2SetLength: typeof vector.v2SetLength;
            v2Normalize: typeof vector.v2Normalize;
            v3Normalize: typeof vector.v3Normalize;
            v2DotProduct: typeof vector.v2DotProduct;
            v3DotProduct: typeof vector.v3DotProduct;
            v3CrossProduct: typeof vector.v3CrossProduct;
            m2Sum: typeof matrix.m2Sum;
            m3Sum: typeof matrix.m3Sum;
            m2Sub: typeof matrix.m2Sub;
            m3Sub: typeof matrix.m3Sub;
            m2MulScalar: typeof matrix.m2MulScalar;
            m3MulScalar: typeof matrix.m3MulScalar;
            getV2Angle: typeof angle.getV2Angle;
            setV2Angle: typeof angle.setV2Angle;
            radiansToDegrees: typeof angle.radiansToDegrees;
            degreesToRadians: typeof angle.degreesToRadians;
            setDecimalPlaces: typeof format.setDecimalPlaces;
            getRandom: typeof random.getRandom;
            getRandomInt: typeof random.getRandomInt;
            getRandomBoolean: typeof random.getRandomBoolean;
            getRandomItemFromArray: typeof random.getRandomItemFromArray;
            mod: typeof other.mod;
            convertRange: typeof other.convertRange;
            doRangesOverlap: typeof other.doRangesOverlap;
            isNumber: typeof other.isNumber;
            stringToNumber: typeof convert.stringToNumber;
            v2QuadraticBezierCurve: typeof bezierCurve.v2QuadraticBezierCurve;
            v3QuadraticBezierCurve: typeof bezierCurve.v3QuadraticBezierCurve;
            v2CubicBezierCurve: typeof bezierCurve.v2CubicBezierCurve;
            v3CubicBezierCurve: typeof bezierCurve.v3CubicBezierCurve;
        };
    }
}
