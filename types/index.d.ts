declare const api: {
    equationSystem2: (equation1: import("./types").Vector3, equation2: import("./types").Vector3, decimalPlaces?: number) => import("./types").Vector2 | null;
    equationSystem3: (equation1: import("./types").Vector, equation2: import("./types").Vector, equation3: import("./types").Vector, decimalPlaces?: number) => import("./types").Vector3 | null;
    equationSystemN: (equations: import("./types").Matrix, decimalPlaces?: number) => import("./types").Vector | null;
    v2QuadraticBezierCurve: (t: number, startControlPoint: import("./types").Vector2, centerControlPoint: import("./types").Vector2, endControlPoint: import("./types").Vector2) => import("./types").Vector2;
    v3QuadraticBezierCurve: (t: number, startControlPoint: import("./types").Vector3, centerControlPoint: import("./types").Vector3, endControlPoint: import("./types").Vector3) => import("./types").Vector3;
    v2CubicBezierCurve: (t: number, startControlPoint: import("./types").Vector2, center1ControlPoint: import("./types").Vector2, center2ControlPoint: import("./types").Vector2, endControlPoint: import("./types").Vector2) => import("./types").Vector2;
    v3CubicBezierCurve: (t: number, startControlPoint: import("./types").Vector3, center1ControlPoint: import("./types").Vector3, center2ControlPoint: import("./types").Vector3, endControlPoint: import("./types").Vector3) => import("./types").Vector3;
    stringToNumber: (value: string | number | null | undefined, defaultNumber: number) => number;
    mod: (n: number, m: number) => number;
    convertRange: (x: number, a: number, b: number, c: number, d: number) => number;
    doRangesOverlap: (a: number, b: number, c: number, d: number) => boolean;
    isNumber: (value: any) => boolean;
    getRandom: (min: number, max: number, decimalPlaces?: number) => number;
    getRandomInt: (min: number, max: number) => number;
    getRandomBoolean: () => boolean;
    getRandomItemFromArray: (array: any[]) => any;
    getV2Angle: (v2: import("./types").Vector2, decimalPlaces?: number) => number;
    setV2Angle: (v2: import("./types").Vector2, newAngleRad: number, decimalPlaces?: number) => import("./types").Vector2;
    radiansToDegrees: (radians: number, decimalPlaces?: number) => number;
    degreesToRadians: (degrees: number, decimalPlaces?: number) => number;
    setDecimalPlaces: (num: number, decimalPlaces?: number | undefined) => number;
    mSum: (matrix1: import("./types").Matrix, matrix2: import("./types").Matrix, decimalPlaces?: number) => import("./types").Matrix;
    m2Sum: (matrix1: import("./types").Matrix2, matrix2: import("./types").Matrix2, decimalPlaces?: number) => import("./types").Matrix2;
    m3Sum: (matrix1: import("./types").Matrix3, matrix2: import("./types").Matrix3, decimalPlaces?: number) => import("./types").Matrix3;
    mSub: (matrix1: import("./types").Matrix, matrix2: import("./types").Matrix, decimalPlaces?: number) => import("./types").Matrix;
    m2Sub: (matrix1: import("./types").Matrix2, matrix2: import("./types").Matrix2, decimalPlaces?: number) => import("./types").Matrix2;
    m3Sub: (matrix1: import("./types").Matrix3, matrix2: import("./types").Matrix3, decimalPlaces?: number) => import("./types").Matrix3;
    mMulScalar: (m: import("./types").Matrix, scalar: number, decimalPlaces?: number) => import("./types").Matrix;
    m2MulScalar: (m2: import("./types").Matrix2, scalar: number, decimalPlaces?: number) => import("./types").Matrix2;
    m3MulScalar: (m3: import("./types").Matrix3, scalar: number, decimalPlaces?: number) => import("./types").Matrix3;
    mDivideScalar: (m: import("./types").Matrix, scalar: number, decimalPlaces?: number) => import("./types").Matrix;
    m2DivideScalar: (m2: import("./types").Matrix2, scalar: number, decimalPlaces?: number) => import("./types").Matrix2;
    m3DivideScalar: (m3: import("./types").Matrix3, scalar: number, decimalPlaces?: number) => import("./types").Matrix3;
    mTranspose: (m: import("./types").Matrix) => import("./types").Matrix;
    m2Transpose: (m2: import("./types").Matrix2) => import("./types").Matrix;
    m3Transpose: (m3: import("./types").Matrix3) => import("./types").Matrix;
    mReset: (m: import("./types").Matrix, defaultValue?: number) => import("./types").Matrix;
    m2Reset: (m2: import("./types").Matrix2, defaultValue?: number) => import("./types").Matrix2;
    m3Reset: (m3: import("./types").Matrix3, defaultValue?: number) => import("./types").Matrix3;
    m2x2: (defaultValue?: number) => import("./types").Matrix2;
    m3x3: (defaultValue?: number) => import("./types").Matrix3;
    mNxM: (N: number, M: number, defaultValue?: number) => import("./types").Matrix;
    identity2: () => import("./types").Matrix2;
    identity3: () => import("./types").Matrix3;
    identityN: (N: number) => import("./types").Matrix;
    mDeepCopy: (m: import("./types").Matrix) => import("./types").Matrix;
    m2DeepCopy: (m2: import("./types").Matrix2) => import("./types").Matrix2;
    m3DeepCopy: (m3: import("./types").Matrix3) => import("./types").Matrix3;
    mAppendCol: (m: import("./types").Matrix, col: import("./types").Vector) => import("./types").Matrix;
    mPrependCol: (m: import("./types").Matrix, col: import("./types").Vector) => import("./types").Matrix;
    mAppendRow: (m: import("./types").Matrix, row: import("./types").Vector) => import("./types").Matrix;
    m2AppendRow: (m2: import("./types").Matrix2, row: import("./types").Vector2) => import("./types").Matrix2;
    m3AppendRow: (m3: import("./types").Matrix3, row: import("./types").Vector3) => import("./types").Matrix3;
    mPrependRow: (m: import("./types").Matrix, row: import("./types").Vector) => import("./types").Matrix;
    m2PrependRow: (m2: import("./types").Matrix2, row: import("./types").Vector2) => import("./types").Matrix2;
    m3PrependRow: (m3: import("./types").Matrix3, row: import("./types").Vector3) => import("./types").Matrix3;
    mDelLastRow: (m: import("./types").Matrix) => import("./types").Matrix;
    mDelFirstRow: (m: import("./types").Matrix) => import("./types").Matrix;
    mDelLastColumn: (m: import("./types").Matrix) => import("./types").Matrix;
    mDelFirstColumn: (m: import("./types").Matrix) => import("./types").Matrix;
    mMul: (matrix1: import("./types").Matrix, matrix2: import("./types").Matrix, decimalPlaces?: number) => import("./types").Matrix;
    mMulVector: (matrix: import("./types").Matrix, vector: import("./types").Vector, decimalPlaces?: number) => import("./types").Vector;
    mEqual: (matrix1: import("./types").Matrix, matrix2: import("./types").Matrix) => boolean;
    m2Rotation: (angleRad: number) => import("./types").Matrix2;
    v2Rotate: (angleRad: number, vector: import("./types").Vector2) => import("./types").Vector2;
    m3RotationX: (angleRad: number) => import("./types").Matrix3;
    v3RotateX: (angleRad: number, vector: import("./types").Vector3) => import("./types").Vector3;
    m3RotationY: (angleRad: number) => import("./types").Matrix3;
    v3RotateY: (angleRad: number, vector: import("./types").Vector3) => import("./types").Vector3;
    m3RotationZ: (angleRad: number) => import("./types").Matrix3;
    v3RotateZ: (angleRad: number, vector: import("./types").Vector3) => import("./types").Vector3;
    m2Scale: (scaleVector: import("./types").Vector2) => import("./types").Matrix2;
    v2Scale: (scaleVector: import("./types").Vector2, vector: import("./types").Vector2) => import("./types").Vector2;
    m3Scale: (scaleVector: import("./types").Vector3) => import("./types").Matrix3;
    v3Scale: (scaleVector: import("./types").Vector3, vector: import("./types").Vector3) => import("./types").Vector3;
    mMinor: (m: import("./types").Matrix, row: number, col: number) => number;
    mDeterminant: (matrix: import("./types").Matrix) => number;
    m2Determinant: (m2: import("./types").Matrix2) => number;
    m3Determinant: (m3: import("./types").Matrix3) => number;
    m2Adjugate: (m2: import("./types").Matrix2) => import("./types").Matrix2 | null;
    m3Adjugate: (m3: import("./types").Matrix3) => import("./types").Matrix3 | null;
    mAdjugate: (m: import("./types").Matrix) => import("./types").Matrix | null;
    m2Inverse: (m2: import("./types").Matrix2, decimalPlaces?: number) => import("./types").Matrix2 | null;
    m3Inverse: (m3: import("./types").Matrix3, decimalPlaces?: number) => import("./types").Matrix3 | null;
    mInverse: (m: import("./types").Matrix, decimalPlaces?: number) => import("./types").Matrix | null;
    vSum: (vector1: import("./types").Vector, vector2: import("./types").Vector, decimalPlaces?: number) => import("./types").Vector;
    v2Sum: (vector1: import("./types").Vector2, vector2: import("./types").Vector2, decimalPlaces?: number) => import("./types").Vector2;
    v3Sum: (vector1: import("./types").Vector3, vector2: import("./types").Vector3, decimalPlaces?: number) => import("./types").Vector3;
    vSub: (vector1: import("./types").Vector, vector2: import("./types").Vector, decimalPlaces?: number) => import("./types").Vector;
    v2Sub: (vector1: import("./types").Vector2, vector2: import("./types").Vector2, decimalPlaces?: number) => import("./types").Vector2;
    v3Sub: (vector1: import("./types").Vector3, vector2: import("./types").Vector3, decimalPlaces?: number) => import("./types").Vector3;
    vMulScalar: (v: import("./types").Vector, scalar: number, decimalPlaces?: number) => import("./types").Vector;
    v2MulScalar: (v2: import("./types").Vector2, scalar: number, decimalPlaces?: number) => import("./types").Vector2;
    v3MulScalar: (v3: import("./types").Vector3, scalar: number, decimalPlaces?: number) => import("./types").Vector3;
    vDivideScalar: (v: import("./types").Vector, scalar: number, decimalPlaces?: number) => import("./types").Vector;
    v2DivideScalar: (v2: import("./types").Vector2, scalar: number, decimalPlaces?: number) => import("./types").Vector2;
    v3DivideScalar: (v3: import("./types").Vector3, scalar: number, decimalPlaces?: number) => import("./types").Vector3;
    vLength: (vector: import("./types").Vector, decimalPlaces?: number) => number;
    v2Length: (vector: import("./types").Vector2, decimalPlaces?: number) => number;
    v3Length: (vector: import("./types").Vector3, decimalPlaces?: number) => number;
    v2SetLength: (v2: import("./types").Vector2, newLength: number, decimalPlaces?: number) => import("./types").Vector2;
    vNormalize: (v: import("./types").Vector, decimalPlaces?: number) => import("./types").Vector;
    v2Normalize: (v2: import("./types").Vector2, decimalPlaces?: number) => import("./types").Vector2;
    v3Normalize: (v3: import("./types").Vector3, decimalPlaces?: number) => import("./types").Vector3;
    vDotProduct: (vector1: import("./types").Vector, vector2: import("./types").Vector, decimalPlaces?: number) => number;
    v2DotProduct: (vector1: import("./types").Vector2, vector2: import("./types").Vector2, decimalPlaces?: number) => number;
    v3DotProduct: (vector1: import("./types").Vector3, vector2: import("./types").Vector3, decimalPlaces?: number) => number;
    v3CrossProduct: (vector1: import("./types").Vector3, vector2: import("./types").Vector3, decimalPlaces?: number) => import("./types").Vector3;
    v2: (defaultValue?: number) => import("./types").Vector2;
    v3: (defaultValue?: number) => import("./types").Vector3;
    vN: (N: number, defaultValue?: number) => import("./types").Vector;
    vEqual: (vector1: import("./types").Vector, vector2: import("./types").Vector) => boolean;
};
declare global {
    interface Window {
        TCMath: typeof api;
    }
}
export * from './vector';
export * from './matrix';
export * from './format';
export * from './angle';
export * from './random';
export * from './other';
export * from './convert';
export * from './bezier-curve';
export * from './equations';
