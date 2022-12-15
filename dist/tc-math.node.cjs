/* 
Tool Cool Math Helpers
Version: 1.0.15
Documentation: https://github.com/toolcool-org/toolcool-math
License: MIT License        
Author: Tool Cool, toolcool.org@gmail.com>                          
*/
var I=Object.defineProperty;var W=Object.getOwnPropertyDescriptor;var X=Object.getOwnPropertyNames;var Y=Object.prototype.hasOwnProperty;var k=Math.pow;var Z=(t,r)=>{for(var e in r)I(t,e,{get:r[e],enumerable:!0})},_=(t,r,e,n)=>{if(r&&typeof r=="object"||typeof r=="function")for(let o of X(r))!Y.call(t,o)&&o!==e&&I(t,o,{get:()=>r[o],enumerable:!(n=W(r,o))||n.enumerable});return t};var $=t=>_(I({},"__esModule",{value:!0}),t);var yr={};Z(yr,{circleMovement:()=>gr,convertRange:()=>sr,degreesToRadians:()=>tt,doRangesOverlap:()=>ur,ellipseMovement:()=>br,equationSystem2:()=>fr,equationSystem3:()=>lr,equationSystemN:()=>Vr,getRandom:()=>nr,getRandomBoolean:()=>or,getRandomInt:()=>K,getRandomItemFromArray:()=>ir,getV2Angle:()=>w,identity2:()=>At,identity3:()=>Lt,identity4:()=>Ft,identityN:()=>Bt,isNumber:()=>xr,isSingularMatrix:()=>er,m2Adjugate:()=>G,m2AppendRow:()=>Ot,m2DeepCopy:()=>N,m2Determinant:()=>B,m2DivideScalar:()=>J,m2Inverse:()=>H,m2MulScalar:()=>wt,m2PrependRow:()=>Kt,m2Reset:()=>Tt,m2Sub:()=>vt,m2Sum:()=>bt,m2Transpose:()=>Et,m2x2:()=>zt,m3Adjugate:()=>rr,m3AppendRow:()=>kt,m3DeepCopy:()=>q,m3Determinant:()=>tr,m3DivideScalar:()=>Dt,m3Inverse:()=>O,m3MulScalar:()=>St,m3PrependRow:()=>Ut,m3Reset:()=>dt,m3Sub:()=>It,m3Sum:()=>yt,m3Transpose:()=>Rt,m3x3:()=>jt,m4x4:()=>Nt,mAdjugate:()=>Q,mAppendCol:()=>Gt,mAppendRow:()=>Ht,mDeepCopy:()=>x,mDelFirstColumn:()=>Yt,mDelFirstRow:()=>Xt,mDelLastColumn:()=>A,mDelLastRow:()=>Wt,mDeterminant:()=>g,mDivideScalar:()=>y,mEqual:()=>Ct,mGetColumn:()=>_t,mGetFirstColumn:()=>Zt,mGetLastColumn:()=>L,mInverse:()=>v,mMinor:()=>F,mMul:()=>$t,mMulScalar:()=>z,mMulVector:()=>V,mNxM:()=>qt,mPrependCol:()=>Qt,mPrependRow:()=>Jt,mReset:()=>j,mSub:()=>d,mSum:()=>T,mTranspose:()=>l,mod:()=>cr,radiansToDegrees:()=>P,setDecimalPlaces:()=>s,setV2Angle:()=>C,stringToNumber:()=>pr,v2:()=>lt,v2CubicBezierCurve:()=>Mr,v2DivideScalar:()=>st,v2DotProduct:()=>Mt,v2Length:()=>S,v2MulScalar:()=>it,v2Normalize:()=>at,v2QuadraticBezierCurve:()=>ar,v2SetLength:()=>pt,v2Sub:()=>nt,v2Sum:()=>rt,v3:()=>Vt,v3CrossProduct:()=>ft,v3CubicBezierCurve:()=>hr,v3DivideScalar:()=>ut,v3DotProduct:()=>ht,v3Length:()=>xt,v3MulScalar:()=>ct,v3Normalize:()=>mt,v3QuadraticBezierCurve:()=>mr,v3Sub:()=>ot,v3Sum:()=>et,v4:()=>gt,vDivideScalar:()=>f,vDotProduct:()=>a,vEqual:()=>R,vLength:()=>b,vMulScalar:()=>h,vN:()=>E,vNormalize:()=>D,vSub:()=>M,vSum:()=>m});module.exports=$(yr);var s=(t,r=1/0)=>{if(r===1/0)return t;r<0&&(r=0);let e=k(10,r);return Math.round(t*e)/e};var w=(t,r=1/0)=>{let e=Math.atan2(t[1],t[0]);return s(e,r)},C=(t,r,e=1/0)=>{let n=S(t);return[s(Math.cos(r)*n,e),s(Math.sin(r)*n,e)]},P=(t,r=1/0)=>{let e=t*(180/Math.PI);return s(e,r)},tt=(t,r=1/0)=>{let e=t*(Math.PI/180);return s(e,r)};var m=(t,r,e=1/0)=>{let n=[];for(let o=0;o<t.length;o++)n.push(s(t[o]+r[o],e));return n},rt=(t,r,e=1/0)=>m(t,r,e),et=(t,r,e=1/0)=>m(t,r,e),M=(t,r,e=1/0)=>{let n=[];for(let o=0;o<t.length;o++)n.push(s(t[o]-r[o],e));return n},nt=(t,r,e=1/0)=>M(t,r,e),ot=(t,r,e=1/0)=>M(t,r,e),h=(t,r,e=1/0)=>{let n=[];for(let o=0;o<t.length;o++)n.push(s(t[o]*r,e));return n},it=(t,r,e=1/0)=>h(t,r,e),ct=(t,r,e=1/0)=>h(t,r,e),f=(t,r,e=1/0)=>{if(r===0)throw new Error("Division by zero error.");let n=[];for(let o=0;o<t.length;o++)n.push(s(t[o]/r,e));return n},st=(t,r,e=1/0)=>f(t,r,e),ut=(t,r,e=1/0)=>f(t,r,e),b=(t,r=1/0)=>{let e=0;for(let n=0;n<t.length;n++)e+=t[n]*t[n];return s(Math.sqrt(e),r)},S=(t,r=1/0)=>b(t,r),xt=(t,r=1/0)=>b(t,r),pt=(t,r,e=1/0)=>{let n=w(t);return[s(Math.cos(n)*r,e),s(Math.sin(n)*r,e)]},D=(t,r=1/0)=>{let e=b(t),n=[];for(let o=0;o<t.length;o++)n.push(e===0?0:s(t[o]/e,r));return n},at=(t,r=1/0)=>D(t,r),mt=(t,r=1/0)=>D(t,r),a=(t,r,e=1/0)=>{let n=0;for(let o=0;o<t.length;o++)n+=t[o]*r[o];return s(n,e)},Mt=(t,r,e=1/0)=>a(t,r,e),ht=(t,r,e=1/0)=>a(t,r,e),ft=(t,r,e=1/0)=>[s(t[1]*r[2]-t[2]*r[1],e),s(t[2]*r[0]-t[0]*r[2],e),s(t[0]*r[1]-t[1]*r[0],e)],lt=(t=0)=>[t,t],Vt=(t=0)=>[t,t,t],gt=(t=0)=>[t,t,t,t],E=(t,r=0)=>{if(t<0)throw new Error("N must be a non-negative number.");let e=[];for(let n=0;n<t;n++)e.push(r);return e},R=(t,r)=>{if(t.length!==r.length)return!1;for(let e=0;e<t.length;e++)if(t[e]!==r[e])return!1;return!0};var T=(t,r,e=1/0)=>{let n=[];for(let o=0;o<t.length;o++)n.push(m(t[o],r[o],e));return n},bt=(t,r,e=1/0)=>T(t,r,e),yt=(t,r,e=1/0)=>T(t,r,e),d=(t,r,e=1/0)=>{let n=[];for(let o=0;o<t.length;o++)n.push(M(t[o],r[o],e));return n},vt=(t,r,e=1/0)=>d(t,r,e),It=(t,r,e=1/0)=>d(t,r,e),z=(t,r,e=1/0)=>{let n=[];for(let o of t)n.push(h(o,r,e));return n},wt=(t,r,e=1/0)=>z(t,r,e),St=(t,r,e=1/0)=>z(t,r,e),y=(t,r,e=1/0)=>{if(r===0)throw new Error("Division by zero error.");let n=[];for(let o of t)n.push(f(o,r,e));return n},J=(t,r,e=1/0)=>y(t,r,e),Dt=(t,r,e=1/0)=>y(t,r,e),l=t=>{let r=t.length;if(r<=0)return t;let e=t[0].length;if(e<=0)return t;let n=[];for(let o=0;o<e;o++)n.push([]);for(let o=0;o<r;o++)for(let i=0;i<e;i++)n[i].push(t[o][i]);return n},Et=t=>l(t),Rt=t=>l(t),j=(t,r=0)=>{if(t.length<=0)return[];let e=[];for(let n=0;n<t.length;n++){let o=t[n].length,i=[];for(let c=0;c<o;c++)i.push(r);e.push(i)}return e},Tt=(t,r=0)=>j(t,r),dt=(t,r=0)=>j(t,r),zt=(t=0)=>[[t,t],[t,t]],jt=(t=0)=>[[t,t,t],[t,t,t],[t,t,t]],Nt=(t=0)=>[[t,t,t,t],[t,t,t,t],[t,t,t,t],[t,t,t,t]],qt=(t,r,e=0)=>{if(t<=0||r<=0)throw new Error("M and N must be positive numbers.");let n=[];for(let o=0;o<t;o++)n.push(E(r,e));return n},At=()=>[[1,0],[0,1]],Lt=()=>[[1,0,0],[0,1,0],[0,0,1]],Ft=()=>[[1,0,0,0],[0,1,0,0],[0,0,1,0],[0,0,0,1]],Bt=t=>{if(t<0)throw new Error("N must be a non-negative number.");if(t===0)return[];let r=[];for(let e=0;e<t;e++){let n=[];for(let o=0;o<t;o++)n.push(e===o?1:0);r.push(n)}return r},x=t=>{let r=[];for(let e=0;e<t.length;e++){let n=t[e],o=[];for(let i=0;i<n.length;i++)o.push(n[i]);r.push(o)}return r},N=t=>x(t),q=t=>x(t),Gt=(t,r)=>{if(t.length<=0)return[];let e=x(t);for(let n=0;n<e.length;n++)e[n].push(r[n]);return e},Qt=(t,r)=>{if(t.length<=0)return[];let e=x(t);for(let n=0;n<e.length;n++)e[n].unshift(r[n]);return e},Ht=(t,r)=>{let e=x(t);return e.push(r),e},Ot=(t,r)=>{let e=N(t);return e.push(r),e},kt=(t,r)=>{let e=q(t);return e.push(r),e},Jt=(t,r)=>{let e=x(t);return e.unshift(r),e},Kt=(t,r)=>{let e=N(t);return e.unshift(r),e},Ut=(t,r)=>{let e=q(t);return e.unshift(r),e},Wt=t=>{if(t.length<=0)return[];let r=x(t);return r.pop(),r},Xt=t=>{if(t.length<=0)return[];let r=x(t);return r.shift(),r},A=t=>{if(t.length<=0)return[];let r=x(t);for(let e=0;e<r.length;e++)r[e].pop();return r},Yt=t=>{if(t.length<=0)return[];let r=x(t);for(let e=0;e<r.length;e++)r[e].shift();return r},Zt=t=>{if(t.length<=0)return[];let r=[];for(let e=0;e<t.length;e++)r.push(t[e][0]);return r},L=t=>{if(t.length<=0)return[];let r=t[0].length,e=[];for(let n=0;n<t.length;n++)e.push(t[n][r-1]);return e},_t=(t,r)=>{if(t.length<=0)return[];let e=[];for(let n=0;n<t.length;n++)e.push(t[n][r]);return e},$t=(t,r,e=1/0)=>{let n=[];for(let i=0;i<t.length;i++)n.push([]);let o=l(r);if(n.length!==o.length)throw new Error("The number of columns in the 1st matrix must be equal to the number of rows in the 2nd matrix.");for(let i=0;i<t.length;i++){let c=t[i];for(let u=0;u<o.length;u++){let p=o[u],U=a(c,p,e);n[i].push(U)}}return n},V=(t,r,e=1/0)=>{if(t.length<0)return[];if(t[0].length!==r.length)throw new Error("The number of columns in the matrix must be equal to the length of the vector.");let n=[];for(let o=0;o<t.length;o++)n[o]=a(t[o],r,e);return n},Ct=(t,r)=>{if(t.length!==r.length)return!1;for(let e=0;e<t.length;e++)if(!R(t[e],r[e]))return!1;return!0},Pt=(t,r,e)=>{let n=t.length;if(n<=0)throw new Error("The matrix should not be empty.");if(n!==t[0].length)throw new Error("The matrix must be square.");let o=[];for(let i=0;i<n;i++){if(i===r)continue;let c=[];for(let u=0;u<n;u++)u!==e&&c.push(t[i][u]);o.push(c)}return o},F=(t,r,e)=>{let n=t.length;if(n<=0)throw new Error("The matrix should not be empty.");if(n!==t[0].length)throw new Error("The matrix must be square.");let o=Pt(t,r,e);return g(o)},g=t=>{let r=t.length;if(r===0)return 1;if(r!==t[0].length)throw new Error("The matrix must be square.");if(r===1)return t[0][0];if(r===2)return B(t);let e=0;for(let n=0;n<r;n++){let o=F(t,0,n),i=t[0][n];n%2!==0&&(i=-i),e+=o*i}return e},B=t=>{if(t.length!==t[0].length)throw new Error("The matrix must be square.");return t[0][0]*t[1][1]-t[1][0]*t[0][1]},tr=t=>{if(t.length!==t[0].length)throw new Error("The matrix must be square.");return g(t)},G=t=>{if(t.length!==t[0].length)throw new Error("The matrix must be square.");return[[t[1][1],-t[0][1]],[-t[1][0],t[0][0]]]},rr=t=>Q(t),Q=t=>{let r=t.length;if(r<=0)return null;if(r!==t[0].length)throw new Error("The matrix must be square.");if(r===1)return t;if(r===2)return G(t);let e=[];for(let n=0;n<r;n++){let o=[];for(let i=0;i<r;i++){let c=F(t,n,i),u=Math.pow(-1,n+i);o.push(u*c)}e.push(o)}return l(e)},er=t=>{if(t.length>0&&t.length!==t[0].length)throw new Error("The matrix must be square.");return g(t)===0},H=(t,r=1/0)=>{if(t.length>0&&t.length!==t[0].length)throw new Error("The matrix must be square.");let e=B(t);if(e===0)return null;let n=G(t);return n===null?null:J(n,e,r)},O=(t,r=1/0)=>v(t,r),v=(t,r=1/0)=>{let e=t.length;if(e>0&&e!==t[0].length)throw new Error("The matrix must be square.");let n=g(t),o=Q(t);return o===null?null:y(o,n,r)};var nr=(t,r,e=1/0)=>s(Math.random()*(r-t)+t,e),K=(t,r)=>Math.floor(Math.random()*(r-t+1)+t),or=()=>Math.random()<.5,ir=t=>{let r=K(0,t.length-1);return t[r]};var cr=(t,r)=>(t%r+r)%r,sr=(t,r,e,n,o)=>(o-n)*(t-r)/(e-r)+n,ur=(t,r,e,n)=>Math.max(t,e)<=Math.min(r,n),xr=t=>!isNaN(parseFloat(t))&&isFinite(t);var pr=(t,r)=>{var n;if(t==null)return r;let e=(n=Number(t))!=null?n:r;return isNaN(e)?r:e};var ar=(t,r,e,n)=>{let o=Math.pow(1-t,2),i=(1-t)*2*t,c=t*t;return[o*r[0]+i*e[0]+c*n[0],o*r[1]+i*e[1]+c*n[1]]},mr=(t,r,e,n)=>{let o=Math.pow(1-t,2),i=(1-t)*2*t,c=t*t;return[o*r[0]+i*e[0]+c*n[0],o*r[1]+i*e[1]+c*n[1],o*r[2]+i*e[2]+c*n[2]]},Mr=(t,r,e,n,o)=>{let i=Math.pow(1-t,3),c=Math.pow(1-t,2)*3*t,u=(1-t)*3*t*t,p=t*t*t;return[i*r[0]+c*e[0]+u*n[0]+p*o[0],i*r[1]+c*e[1]+u*n[1]+p*o[1]]},hr=(t,r,e,n,o)=>{let i=Math.pow(1-t,3),c=Math.pow(1-t,2)*3*t,u=(1-t)*3*t*t,p=t*t*t;return[i*r[0]+c*e[0]+u*n[0]+p*o[0],i*r[1]+c*e[1]+u*n[1]+p*o[1],i*r[2]+c*e[2]+u*n[2]+p*o[2]]};var fr=(t,r,e=1/0)=>{let n=[[t[0],t[1]],[r[0],r[1]]],o=H(n);if(o===null)return null;let i=[t[2],r[2]];return V(o,i,e)},lr=(t,r,e,n=1/0)=>{let o=[[t[0],t[1],t[2]],[r[0],r[1],r[2]],[e[0],e[1],e[2]]],i=O(o);if(i===null)return null;let c=[t[3],r[3],e[3]];return V(i,c,n)},Vr=(t,r=1/0)=>{if(t.length<=0)return null;let e=A(t),n=v(e);if(n===null)return null;let o=L(t);return V(n,o,r)};var gr=(t,r,e)=>(r=r%Math.PI*2,[t[0]+Math.cos(r)*e,t[1]+Math.sin(r)*e]),br=(t,r,e,n)=>(r=r%Math.PI*2,[t[0]+Math.cos(r)*e,t[1]+Math.sin(r)*n]);0&&(module.exports={circleMovement,convertRange,degreesToRadians,doRangesOverlap,ellipseMovement,equationSystem2,equationSystem3,equationSystemN,getRandom,getRandomBoolean,getRandomInt,getRandomItemFromArray,getV2Angle,identity2,identity3,identity4,identityN,isNumber,isSingularMatrix,m2Adjugate,m2AppendRow,m2DeepCopy,m2Determinant,m2DivideScalar,m2Inverse,m2MulScalar,m2PrependRow,m2Reset,m2Sub,m2Sum,m2Transpose,m2x2,m3Adjugate,m3AppendRow,m3DeepCopy,m3Determinant,m3DivideScalar,m3Inverse,m3MulScalar,m3PrependRow,m3Reset,m3Sub,m3Sum,m3Transpose,m3x3,m4x4,mAdjugate,mAppendCol,mAppendRow,mDeepCopy,mDelFirstColumn,mDelFirstRow,mDelLastColumn,mDelLastRow,mDeterminant,mDivideScalar,mEqual,mGetColumn,mGetFirstColumn,mGetLastColumn,mInverse,mMinor,mMul,mMulScalar,mMulVector,mNxM,mPrependCol,mPrependRow,mReset,mSub,mSum,mTranspose,mod,radiansToDegrees,setDecimalPlaces,setV2Angle,stringToNumber,v2,v2CubicBezierCurve,v2DivideScalar,v2DotProduct,v2Length,v2MulScalar,v2Normalize,v2QuadraticBezierCurve,v2SetLength,v2Sub,v2Sum,v3,v3CrossProduct,v3CubicBezierCurve,v3DivideScalar,v3DotProduct,v3Length,v3MulScalar,v3Normalize,v3QuadraticBezierCurve,v3Sub,v3Sum,v4,vDivideScalar,vDotProduct,vEqual,vLength,vMulScalar,vN,vNormalize,vSub,vSum});
//# sourceMappingURL=tc-math.node.cjs.map
