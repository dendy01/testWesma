(()=>{"use strict";var e,r,n={140:(e,r,n)=>{var t=n(918),o=Object.create(null),i="undefined"==typeof document,c=Array.prototype.forEach;function a(){}function d(e,r){if(!r){if(!e.href)return;r=e.href.split("?")[0]}if(u(r)&&!1!==e.isLoaded&&r&&r.indexOf(".css")>-1){e.visited=!0;var n=e.cloneNode();n.isLoaded=!1,n.addEventListener("load",(function(){n.isLoaded||(n.isLoaded=!0,e.parentNode.removeChild(e))})),n.addEventListener("error",(function(){n.isLoaded||(n.isLoaded=!0,e.parentNode.removeChild(e))})),n.href="".concat(r,"?").concat(Date.now()),e.nextSibling?e.parentNode.insertBefore(n,e.nextSibling):e.parentNode.appendChild(n)}}function l(){var e=document.querySelectorAll("link");c.call(e,(function(e){!0!==e.visited&&d(e)}))}function u(e){return!!/^[a-zA-Z][a-zA-Z\d+\-.]*:/.test(e)}e.exports=function(e,r){if(i)return console.log("no window.document found, will not HMR CSS"),a;var n,s,f=function(e){var r=o[e];if(!r){if(document.currentScript)r=document.currentScript.src;else{var n=document.getElementsByTagName("script"),i=n[n.length-1];i&&(r=i.src)}o[e]=r}return function(e){if(!r)return null;var n=r.split(/([^\\/]+)\.js$/),o=n&&n[1];return o&&e?e.split(",").map((function(e){var n=new RegExp("".concat(o,"\\.js$"),"g");return t(r.replace(n,"".concat(e.replace(/{fileName}/g,o),".css")))})):[r.replace(".js",".css")]}}(e);return n=function(){var e=f(r.filename),n=function(e){if(!e)return!1;var r=document.querySelectorAll("link"),n=!1;return c.call(r,(function(r){if(r.href){var o=function(e,r){var n;return e=t(e),r.some((function(t){e.indexOf(r)>-1&&(n=t)})),n}(r.href,e);u(o)&&!0!==r.visited&&o&&(d(r,o),n=!0)}})),n}(e);if(r.locals)return console.log("[HMR] Detected local css modules. Reload all css"),void l();n?console.log("[HMR] css reload %s",e.join(" ")):(console.log("[HMR] Reload all css"),l())},50,s=0,function(){var e=this,r=arguments;clearTimeout(s),s=setTimeout((function(){return n.apply(e,r)}),50)}}},918:e=>{e.exports=function(e){if(e=e.trim(),/^data:/i.test(e))return e;var r=-1!==e.indexOf("//")?e.split("//")[0]+"//":"",n=e.replace(new RegExp(r,"i"),"").split("/"),t=n[0].toLowerCase().replace(/\.$/,"");return n[0]="",r+t+n.reduce((function(e,r){switch(r){case"..":e.pop();break;case".":break;default:e.push(r)}return e}),[]).join("/")}},747:(e,r,n)=>{var t,o;t=void 0,o=n(140)(e.id,{}),e.hot.data&&e.hot.data.value&&e.hot.data.value!==t?e.hot.invalidate():e.hot.accept(),e.hot.dispose((function(e){e.value=t,o()}))},44:(e,r,n)=>{n(747),document.body.prepend(function(e){const r=document.createElement("h1");return r.textContent="Проект собран на Webpack",r}())}},t={};function o(e){var r=t[e];if(void 0!==r){if(void 0!==r.error)throw r.error;return r.exports}var i=t[e]={id:e,exports:{}};try{var c={id:e,module:i,factory:n[e],require:o};o.i.forEach((function(e){e(c)})),i=c.module,c.factory.call(i.exports,i,i.exports,c.require)}catch(e){throw i.error=e,e}return i.exports}o.m=n,o.c=t,o.i=[],o.hu=e=>e+"."+o.h()+".hot-update.js",o.miniCssF=e=>{},o.hmrF=()=>"main."+o.h()+".hot-update.json",o.h=()=>"3b962639613db7e8da8b",o.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),o.o=(e,r)=>Object.prototype.hasOwnProperty.call(e,r),e={},r="testwesma:",o.l=(n,t,i,c)=>{if(e[n])e[n].push(t);else{var a,d;if(void 0!==i)for(var l=document.getElementsByTagName("script"),u=0;u<l.length;u++){var s=l[u];if(s.getAttribute("src")==n||s.getAttribute("data-webpack")==r+i){a=s;break}}a||(d=!0,(a=document.createElement("script")).charset="utf-8",a.timeout=120,o.nc&&a.setAttribute("nonce",o.nc),a.setAttribute("data-webpack",r+i),a.src=n),e[n]=[t];var f=(r,t)=>{a.onerror=a.onload=null,clearTimeout(p);var o=e[n];if(delete e[n],a.parentNode&&a.parentNode.removeChild(a),o&&o.forEach((e=>e(t))),r)return r(t)},p=setTimeout(f.bind(null,void 0,{type:"timeout",target:a}),12e4);a.onerror=f.bind(null,a.onerror),a.onload=f.bind(null,a.onload),d&&document.head.appendChild(a)}},(()=>{var e,r,n,t={},i=o.c,c=[],a=[],d="idle",l=0,u=[];function s(e){d=e;for(var r=[],n=0;n<a.length;n++)r[n]=a[n].call(null,e);return Promise.all(r).then((function(){}))}function f(){0==--l&&s("ready").then((function(){if(0===l){var e=u;u=[];for(var r=0;r<e.length;r++)e[r]()}}))}function p(e){if("idle"!==d)throw new Error("check() is only allowed in idle status");return s("check").then(o.hmrM).then((function(n){return n?s("prepare").then((function(){var t=[];return r=[],Promise.all(Object.keys(o.hmrC).reduce((function(e,i){return o.hmrC[i](n.c,n.r,n.m,e,r,t),e}),[])).then((function(){return r=function(){return e?v(e):s("ready").then((function(){return t}))},0===l?r():new Promise((function(e){u.push((function(){e(r())}))}));var r}))})):s(m()?"ready":"idle").then((function(){return null}))}))}function h(e){return"ready"!==d?Promise.resolve().then((function(){throw new Error("apply() is only allowed in ready status (state: "+d+")")})):v(e)}function v(e){e=e||{},m();var t=r.map((function(r){return r(e)}));r=void 0;var o=t.map((function(e){return e.error})).filter(Boolean);if(o.length>0)return s("abort").then((function(){throw o[0]}));var i=s("dispose");t.forEach((function(e){e.dispose&&e.dispose()}));var c,a=s("apply"),d=function(e){c||(c=e)},l=[];return t.forEach((function(e){if(e.apply){var r=e.apply(d);if(r)for(var n=0;n<r.length;n++)l.push(r[n])}})),Promise.all([i,a]).then((function(){return c?s("fail").then((function(){throw c})):n?v(e).then((function(e){return l.forEach((function(r){e.indexOf(r)<0&&e.push(r)})),e})):s("idle").then((function(){return l}))}))}function m(){if(n)return r||(r=[]),Object.keys(o.hmrI).forEach((function(e){n.forEach((function(n){o.hmrI[e](n,r)}))})),n=void 0,!0}o.hmrD=t,o.i.push((function(u){var v,m,y,g,b=u.module,E=function(r,n){var t=i[n];if(!t)return r;var o=function(o){if(t.hot.active){if(i[o]){var a=i[o].parents;-1===a.indexOf(n)&&a.push(n)}else c=[n],e=o;-1===t.children.indexOf(o)&&t.children.push(o)}else console.warn("[HMR] unexpected require("+o+") from disposed module "+n),c=[];return r(o)},a=function(e){return{configurable:!0,enumerable:!0,get:function(){return r[e]},set:function(n){r[e]=n}}};for(var u in r)Object.prototype.hasOwnProperty.call(r,u)&&"e"!==u&&Object.defineProperty(o,u,a(u));return o.e=function(e,n){return function(e){switch(d){case"ready":s("prepare");case"prepare":return l++,e.then(f,f),e;default:return e}}(r.e(e,n))},o}(u.require,u.id);b.hot=(v=u.id,m=b,g={_acceptedDependencies:{},_acceptedErrorHandlers:{},_declinedDependencies:{},_selfAccepted:!1,_selfDeclined:!1,_selfInvalidated:!1,_disposeHandlers:[],_main:y=e!==v,_requireSelf:function(){c=m.parents.slice(),e=y?void 0:v,o(v)},active:!0,accept:function(e,r,n){if(void 0===e)g._selfAccepted=!0;else if("function"==typeof e)g._selfAccepted=e;else if("object"==typeof e&&null!==e)for(var t=0;t<e.length;t++)g._acceptedDependencies[e[t]]=r||function(){},g._acceptedErrorHandlers[e[t]]=n;else g._acceptedDependencies[e]=r||function(){},g._acceptedErrorHandlers[e]=n},decline:function(e){if(void 0===e)g._selfDeclined=!0;else if("object"==typeof e&&null!==e)for(var r=0;r<e.length;r++)g._declinedDependencies[e[r]]=!0;else g._declinedDependencies[e]=!0},dispose:function(e){g._disposeHandlers.push(e)},addDisposeHandler:function(e){g._disposeHandlers.push(e)},removeDisposeHandler:function(e){var r=g._disposeHandlers.indexOf(e);r>=0&&g._disposeHandlers.splice(r,1)},invalidate:function(){switch(this._selfInvalidated=!0,d){case"idle":r=[],Object.keys(o.hmrI).forEach((function(e){o.hmrI[e](v,r)})),s("ready");break;case"ready":Object.keys(o.hmrI).forEach((function(e){o.hmrI[e](v,r)}));break;case"prepare":case"check":case"dispose":case"apply":(n=n||[]).push(v)}},check:p,apply:h,status:function(e){if(!e)return d;a.push(e)},addStatusHandler:function(e){a.push(e)},removeStatusHandler:function(e){var r=a.indexOf(e);r>=0&&a.splice(r,1)},data:t[v]},e=void 0,g),b.parents=c,b.children=[],c=[],u.require=E})),o.hmrC={},o.hmrI={}})(),(()=>{var e;o.g.importScripts&&(e=o.g.location+"");var r=o.g.document;if(!e&&r&&(r.currentScript&&(e=r.currentScript.src),!e)){var n=r.getElementsByTagName("script");if(n.length)for(var t=n.length-1;t>-1&&(!e||!/^http(s?):/.test(e));)e=n[t--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),o.p=e})(),(()=>{if("undefined"!=typeof document){var e=[],r=[],n=n=>({dispose:()=>{for(var r=0;r<e.length;r++){var n=e[r];n.parentNode&&n.parentNode.removeChild(n)}e.length=0},apply:()=>{for(var e=0;e<r.length;e++)r[e].rel="stylesheet";r.length=0}});o.hmrC.miniCss=(t,i,c,a,d,l)=>{d.push(n),t.forEach((n=>{var t=o.miniCssF(n),i=o.p+t,c=((e,r)=>{for(var n=document.getElementsByTagName("link"),t=0;t<n.length;t++){var o=(c=n[t]).getAttribute("data-href")||c.getAttribute("href");if("stylesheet"===c.rel&&(o===e||o===r))return c}var i=document.getElementsByTagName("style");for(t=0;t<i.length;t++){var c;if((o=(c=i[t]).getAttribute("data-href"))===e||o===r)return c}})(t,i);c&&a.push(new Promise(((t,a)=>{var d=((e,r,n,t,i)=>{var c=document.createElement("link");return c.rel="stylesheet",c.type="text/css",o.nc&&(c.nonce=o.nc),c.onerror=c.onload=n=>{if(c.onerror=c.onload=null,"load"===n.type)t();else{var o=n&&n.type,a=n&&n.target&&n.target.href||r,d=new Error("Loading CSS chunk "+e+" failed.\n("+o+": "+a+")");d.name="ChunkLoadError",d.code="CSS_CHUNK_LOAD_FAILED",d.type=o,d.request=a,c.parentNode&&c.parentNode.removeChild(c),i(d)}},c.href=r,n?n.parentNode.insertBefore(c,n.nextSibling):document.head.appendChild(c),c})(n,i,c,(()=>{d.as="style",d.rel="preload",t()}),a);e.push(c),r.push(d)})))}))}}})(),(()=>{var e,r,n,t,i,c=o.hmrS_jsonp=o.hmrS_jsonp||{792:0},a={};function d(r,n){return e=n,new Promise(((e,n)=>{a[r]=e;var t=o.p+o.hu(r),i=new Error;o.l(t,(e=>{if(a[r]){a[r]=void 0;var t=e&&("load"===e.type?"missing":e.type),o=e&&e.target&&e.target.src;i.message="Loading hot update chunk "+r+" failed.\n("+t+": "+o+")",i.name="ChunkLoadError",i.type=t,i.request=o,n(i)}}))}))}function l(e){function a(e){for(var r=[e],n={},t=r.map((function(e){return{chain:[e],id:e}}));t.length>0;){var i=t.pop(),c=i.id,a=i.chain,l=o.c[c];if(l&&(!l.hot._selfAccepted||l.hot._selfInvalidated)){if(l.hot._selfDeclined)return{type:"self-declined",chain:a,moduleId:c};if(l.hot._main)return{type:"unaccepted",chain:a,moduleId:c};for(var u=0;u<l.parents.length;u++){var s=l.parents[u],f=o.c[s];if(f){if(f.hot._declinedDependencies[c])return{type:"declined",chain:a.concat([s]),moduleId:c,parentId:s};-1===r.indexOf(s)&&(f.hot._acceptedDependencies[c]?(n[s]||(n[s]=[]),d(n[s],[c])):(delete n[s],r.push(s),t.push({chain:a.concat([s]),id:s})))}}}}return{type:"accepted",moduleId:e,outdatedModules:r,outdatedDependencies:n}}function d(e,r){for(var n=0;n<r.length;n++){var t=r[n];-1===e.indexOf(t)&&e.push(t)}}o.f&&delete o.f.jsonpHmr,r=void 0;var l={},u=[],s={},f=function(e){console.warn("[HMR] unexpected require("+e.id+") to disposed module")};for(var p in n)if(o.o(n,p)){var h,v=n[p],m=!1,y=!1,g=!1,b="";switch((h=v?a(p):{type:"disposed",moduleId:p}).chain&&(b="\nUpdate propagation: "+h.chain.join(" -> ")),h.type){case"self-declined":e.onDeclined&&e.onDeclined(h),e.ignoreDeclined||(m=new Error("Aborted because of self decline: "+h.moduleId+b));break;case"declined":e.onDeclined&&e.onDeclined(h),e.ignoreDeclined||(m=new Error("Aborted because of declined dependency: "+h.moduleId+" in "+h.parentId+b));break;case"unaccepted":e.onUnaccepted&&e.onUnaccepted(h),e.ignoreUnaccepted||(m=new Error("Aborted because "+p+" is not accepted"+b));break;case"accepted":e.onAccepted&&e.onAccepted(h),y=!0;break;case"disposed":e.onDisposed&&e.onDisposed(h),g=!0;break;default:throw new Error("Unexception type "+h.type)}if(m)return{error:m};if(y)for(p in s[p]=v,d(u,h.outdatedModules),h.outdatedDependencies)o.o(h.outdatedDependencies,p)&&(l[p]||(l[p]=[]),d(l[p],h.outdatedDependencies[p]));g&&(d(u,[h.moduleId]),s[p]=f)}n=void 0;for(var E,w=[],_=0;_<u.length;_++){var I=u[_],D=o.c[I];D&&(D.hot._selfAccepted||D.hot._main)&&s[I]!==f&&!D.hot._selfInvalidated&&w.push({module:I,require:D.hot._requireSelf,errorHandler:D.hot._selfAccepted})}return{dispose:function(){var e;t.forEach((function(e){delete c[e]})),t=void 0;for(var r,n=u.slice();n.length>0;){var i=n.pop(),a=o.c[i];if(a){var d={},s=a.hot._disposeHandlers;for(_=0;_<s.length;_++)s[_].call(null,d);for(o.hmrD[i]=d,a.hot.active=!1,delete o.c[i],delete l[i],_=0;_<a.children.length;_++){var f=o.c[a.children[_]];f&&(e=f.parents.indexOf(i))>=0&&f.parents.splice(e,1)}}}for(var p in l)if(o.o(l,p)&&(a=o.c[p]))for(E=l[p],_=0;_<E.length;_++)r=E[_],(e=a.children.indexOf(r))>=0&&a.children.splice(e,1)},apply:function(r){for(var n in s)o.o(s,n)&&(o.m[n]=s[n]);for(var t=0;t<i.length;t++)i[t](o);for(var c in l)if(o.o(l,c)){var a=o.c[c];if(a){E=l[c];for(var d=[],f=[],p=[],h=0;h<E.length;h++){var v=E[h],m=a.hot._acceptedDependencies[v],y=a.hot._acceptedErrorHandlers[v];if(m){if(-1!==d.indexOf(m))continue;d.push(m),f.push(y),p.push(v)}}for(var g=0;g<d.length;g++)try{d[g].call(null,E)}catch(n){if("function"==typeof f[g])try{f[g](n,{moduleId:c,dependencyId:p[g]})}catch(t){e.onErrored&&e.onErrored({type:"accept-error-handler-errored",moduleId:c,dependencyId:p[g],error:t,originalError:n}),e.ignoreErrored||(r(t),r(n))}else e.onErrored&&e.onErrored({type:"accept-errored",moduleId:c,dependencyId:p[g],error:n}),e.ignoreErrored||r(n)}}}for(var b=0;b<w.length;b++){var _=w[b],I=_.module;try{_.require(I)}catch(n){if("function"==typeof _.errorHandler)try{_.errorHandler(n,{moduleId:I,module:o.c[I]})}catch(t){e.onErrored&&e.onErrored({type:"self-accept-error-handler-errored",moduleId:I,error:t,originalError:n}),e.ignoreErrored||(r(t),r(n))}else e.onErrored&&e.onErrored({type:"self-accept-errored",moduleId:I,error:n}),e.ignoreErrored||r(n)}}return u}}}self.webpackHotUpdatetestwesma=(r,t,c)=>{for(var d in t)o.o(t,d)&&(n[d]=t[d],e&&e.push(d));c&&i.push(c),a[r]&&(a[r](),a[r]=void 0)},o.hmrI.jsonp=function(e,r){n||(n={},i=[],t=[],r.push(l)),o.o(n,e)||(n[e]=o.m[e])},o.hmrC.jsonp=function(e,a,u,s,f,p){f.push(l),r={},t=a,n=u.reduce((function(e,r){return e[r]=!1,e}),{}),i=[],e.forEach((function(e){o.o(c,e)&&void 0!==c[e]?(s.push(d(e,p)),r[e]=!0):r[e]=!1})),o.f&&(o.f.jsonpHmr=function(e,n){r&&o.o(r,e)&&!r[e]&&(n.push(d(e)),r[e]=!0)})},o.hmrM=()=>{if("undefined"==typeof fetch)throw new Error("No browser support: need fetch API");return fetch(o.p+o.hmrF()).then((e=>{if(404!==e.status){if(!e.ok)throw new Error("Failed to fetch update manifest "+e.statusText);return e.json()}}))}})(),o(44)})();