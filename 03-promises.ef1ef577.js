function e(e){return e&&e.__esModule?e.default:e}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o={},t={},r=n.parcelRequired7c6;null==r&&((r=function(e){if(e in o)return o[e].exports;if(e in t){var n=t[e];delete t[e];var r={id:e,exports:{}};return o[e]=r,n.call(r.exports,r,r.exports),r.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,n){t[e]=n},n.parcelRequired7c6=r);var i=r("eWCmQ");const u=document.querySelector(".form"),l=document.querySelector('input[name="delay"]'),a=document.querySelector('input[name="step"]'),d=document.querySelector('input[name="amount"]');function s(e,n){const o=Math.random()>.3;return new Promise(((t,r)=>{setTimeout((()=>{o?t({position:e,delay:n}):r({position:e,delay:n})}),n)}))}u.addEventListener("submit",(function(n){n.preventDefault();const o=l.value,t=a.value,r=d.value;console.log("delay:",o,"step:",t,"amount:",r);for(let n=0;n<r;n+=1){const r=Number(n)+1,u=Number(o)+t*[n];s(r,u).then((({position:n,delay:o})=>{e(i).Notify.success(`✅ Fulfilled promise ${n} in ${o}ms`)})).catch((({position:n,delay:o})=>{e(i).Notify.failure(`❌ Rejected promise ${n} in ${o}ms`)}))}}));
//# sourceMappingURL=03-promises.ef1ef577.js.map
