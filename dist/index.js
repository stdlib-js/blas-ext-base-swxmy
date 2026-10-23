"use strict";var y=function(e,r){return function(){try{return r||e((r={exports:{}}).exports,r),r.exports}catch(o){throw (r=0, o)}};};var j=y(function(J,R){
var s=5;function k(e,r,o,c,v,f,q,a,p,h){var i,u,n,m,t;if(e<=0)return a;if(i=c,u=q,n=h,o===1&&f===1&&p===1){if(m=e%s,m>0)for(t=0;t<m;t++)a[n]=r[i]*v[u],i+=o,u+=f,n+=p;if(e<s)return a;for(t=m;t<e;t+=s)a[n]=r[i]*v[u],a[n+1]=r[i+1]*v[u+1],a[n+2]=r[i+2]*v[u+2],a[n+3]=r[i+3]*v[u+3],a[n+4]=r[i+4]*v[u+4],i+=s,u+=s,n+=s;return a}for(t=0;t<e;t++)a[n]=r[i]*v[u],i+=o,u+=f,n+=p;return a}R.exports=k
});var E=y(function(K,_){
var x=require('@stdlib/strided-base-stride2offset/dist'),z=j();function A(e,r,o,c,v,f,q){return z(e,r,o,x(e,o),c,v,x(e,v),f,q,x(e,q))}_.exports=A
});var b=y(function(L,O){
var B=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),M=E(),C=j();B(M,"ndarray",C);O.exports=M
});var D=require("path").join,F=require('@stdlib/utils-try-require/dist'),G=require('@stdlib/assert-is-error/dist'),H=b(),l,g=F(D(__dirname,"./native.js"));G(g)?l=H:l=g;module.exports=l;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
