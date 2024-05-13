/*! For license information please see main.js.LICENSE.txt */
(()=>{"use strict";function t(e){return t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},t(e)}function e(){e=function(){return r};var n,r={},o=Object.prototype,c=o.hasOwnProperty,a=Object.defineProperty||function(t,e,n){t[e]=n.value},i="function"==typeof Symbol?Symbol:{},u=i.iterator||"@@iterator",s=i.asyncIterator||"@@asyncIterator",l=i.toStringTag||"@@toStringTag";function f(t,e,n){return Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{f({},"")}catch(n){f=function(t,e,n){return t[e]=n}}function p(t,e,n,r){var o=e&&e.prototype instanceof b?e:b,c=Object.create(o.prototype),i=new P(r||[]);return a(c,"_invoke",{value:q(t,n,i)}),c}function d(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(t){return{type:"throw",arg:t}}}r.wrap=p;var h="suspendedStart",y="suspendedYield",v="executing",m="completed",_={};function b(){}function g(){}function w(){}var L={};f(L,u,(function(){return this}));var S=Object.getPrototypeOf,E=S&&S(S(N([])));E&&E!==o&&c.call(E,u)&&(L=E);var k=w.prototype=b.prototype=Object.create(L);function x(t){["next","throw","return"].forEach((function(e){f(t,e,(function(t){return this._invoke(e,t)}))}))}function C(e,n){function r(o,a,i,u){var s=d(e[o],e,a);if("throw"!==s.type){var l=s.arg,f=l.value;return f&&"object"==t(f)&&c.call(f,"__await")?n.resolve(f.__await).then((function(t){r("next",t,i,u)}),(function(t){r("throw",t,i,u)})):n.resolve(f).then((function(t){l.value=t,i(l)}),(function(t){return r("throw",t,i,u)}))}u(s.arg)}var o;a(this,"_invoke",{value:function(t,e){function c(){return new n((function(n,o){r(t,e,n,o)}))}return o=o?o.then(c,c):c()}})}function q(t,e,r){var o=h;return function(c,a){if(o===v)throw new Error("Generator is already running");if(o===m){if("throw"===c)throw a;return{value:n,done:!0}}for(r.method=c,r.arg=a;;){var i=r.delegate;if(i){var u=O(i,r);if(u){if(u===_)continue;return u}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(o===h)throw o=m,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);o=v;var s=d(t,e,r);if("normal"===s.type){if(o=r.done?m:y,s.arg===_)continue;return{value:s.arg,done:r.done}}"throw"===s.type&&(o=m,r.method="throw",r.arg=s.arg)}}}function O(t,e){var r=e.method,o=t.iterator[r];if(o===n)return e.delegate=null,"throw"===r&&t.iterator.return&&(e.method="return",e.arg=n,O(t,e),"throw"===e.method)||"return"!==r&&(e.method="throw",e.arg=new TypeError("The iterator does not provide a '"+r+"' method")),_;var c=d(o,t.iterator,e.arg);if("throw"===c.type)return e.method="throw",e.arg=c.arg,e.delegate=null,_;var a=c.arg;return a?a.done?(e[t.resultName]=a.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=n),e.delegate=null,_):a:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,_)}function j(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function A(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function P(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(j,this),this.reset(!0)}function N(e){if(e||""===e){var r=e[u];if(r)return r.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var o=-1,a=function t(){for(;++o<e.length;)if(c.call(e,o))return t.value=e[o],t.done=!1,t;return t.value=n,t.done=!0,t};return a.next=a}}throw new TypeError(t(e)+" is not iterable")}return g.prototype=w,a(k,"constructor",{value:w,configurable:!0}),a(w,"constructor",{value:g,configurable:!0}),g.displayName=f(w,l,"GeneratorFunction"),r.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===g||"GeneratorFunction"===(e.displayName||e.name))},r.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,w):(t.__proto__=w,f(t,l,"GeneratorFunction")),t.prototype=Object.create(k),t},r.awrap=function(t){return{__await:t}},x(C.prototype),f(C.prototype,s,(function(){return this})),r.AsyncIterator=C,r.async=function(t,e,n,o,c){void 0===c&&(c=Promise);var a=new C(p(t,e,n,o),c);return r.isGeneratorFunction(e)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},x(k),f(k,l,"Generator"),f(k,u,(function(){return this})),f(k,"toString",(function(){return"[object Generator]"})),r.keys=function(t){var e=Object(t),n=[];for(var r in e)n.push(r);return n.reverse(),function t(){for(;n.length;){var r=n.pop();if(r in e)return t.value=r,t.done=!1,t}return t.done=!0,t}},r.values=N,P.prototype={constructor:P,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=n,this.done=!1,this.delegate=null,this.method="next",this.arg=n,this.tryEntries.forEach(A),!t)for(var e in this)"t"===e.charAt(0)&&c.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=n)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function r(r,o){return i.type="throw",i.arg=t,e.next=r,o&&(e.method="next",e.arg=n),!!o}for(var o=this.tryEntries.length-1;o>=0;--o){var a=this.tryEntries[o],i=a.completion;if("root"===a.tryLoc)return r("end");if(a.tryLoc<=this.prev){var u=c.call(a,"catchLoc"),s=c.call(a,"finallyLoc");if(u&&s){if(this.prev<a.catchLoc)return r(a.catchLoc,!0);if(this.prev<a.finallyLoc)return r(a.finallyLoc)}else if(u){if(this.prev<a.catchLoc)return r(a.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return r(a.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var r=this.tryEntries[n];if(r.tryLoc<=this.prev&&c.call(r,"finallyLoc")&&this.prev<r.finallyLoc){var o=r;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc&&(o=null);var a=o?o.completion:{};return a.type=t,a.arg=e,o?(this.method="next",this.next=o.finallyLoc,_):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),_},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),A(n),_}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r=n.completion;if("throw"===r.type){var o=r.arg;A(n)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:N(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=n),_}},r}function n(t,e,n,r,o,c,a){try{var i=t[c](a),u=i.value}catch(t){return void n(t)}i.done?e(u):Promise.resolve(u).then(r,o)}function r(t){return function(){var e=this,r=arguments;return new Promise((function(o,c){var a=t.apply(e,r);function i(t){n(a,o,c,i,u,"next",t)}function u(t){n(a,o,c,i,u,"throw",t)}i(void 0)}))}}var o={baseUrl:"https://nomoreparties.co/v1/wff-cohort-12",headers:{authorization:"b858c9fa-b514-4457-ad53-456e482f6654","Content-Type":"application/json"}};function c(t){return t.ok?t.json():Promise.reject("Ошибка ".concat(t.status))}function a(){return(a=r(e().mark((function t(){return e().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",fetch("".concat(o.baseUrl,"/users/me"),{headers:o.headers}).then((function(t){return c(t)})).catch((function(t){return t})));case 1:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function i(){return(i=r(e().mark((function t(){return e().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",fetch("".concat(o.baseUrl,"/cards"),{headers:o.headers}).then((function(t){return c(t)})).catch((function(t){return t})));case 1:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function u(){return(u=r(e().mark((function t(n,r){return e().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",fetch("".concat(o.baseUrl,"/users/me"),{method:"PATCH",headers:o.headers,body:JSON.stringify({name:n,about:r})}).then((function(t){return c(t)})).catch((function(t){return t})));case 1:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function s(){return(s=r(e().mark((function t(n,r){return e().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",fetch("".concat(o.baseUrl,"/cards"),{method:"POST",headers:o.headers,body:JSON.stringify({name:n,link:r})}).then((function(t){return c(t)})).catch((function(t){return t})));case 1:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function l(){return(l=r(e().mark((function t(n){return e().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",fetch("".concat(o.baseUrl,"/cards/likes/").concat(n),{method:"PUT",headers:o.headers}).then((function(t){return c(t)})).catch((function(t){return t})));case 1:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function f(){return(f=r(e().mark((function t(n){return e().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",fetch("".concat(o.baseUrl,"/cards/likes/").concat(n),{method:"DELETE",headers:o.headers}).then((function(t){return c(t)})).catch((function(t){return t})));case 1:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function p(){return(p=r(e().mark((function t(n){return e().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",fetch("".concat(o.baseUrl,"/cards/").concat(n),{method:"DELETE",headers:o.headers}).then((function(t){return c(t)})).catch((function(t){return t})));case 1:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function d(){return(d=r(e().mark((function t(n){return e().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",fetch("".concat(o.baseUrl,"/users/me/avatar"),{method:"PATCH",headers:o.headers,body:JSON.stringify({avatar:n})}).then((function(t){return c(t)})).catch((function(t){return t})));case 1:case"end":return t.stop()}}),t)})))).apply(this,arguments)}var h=document.querySelector("#card-template").content;function y(t,e,n,r,o,c,a,i){var u=h.querySelector(".card").cloneNode(!0),s=u.querySelector(".card__delete-button");c!==i&&(s.classList.add("card__delete-button-disabled"),s.disabled=!0);var l=u.querySelector(".card__title");l.textContent=t.name,u.querySelector(".card_like-count").textContent=o;var f=u.querySelector(".card__image");f.src=t.link,f.alt=t.name,s.addEventListener("click",(function(){return e(a,u)}));var p=u.querySelector(".card__like-button");return p.addEventListener("click",(function(){return n(a,u,p)})),f.addEventListener("click",(function(){return r(f.src,f.alt,l.textContent)})),u}function v(t,e,n){n.classList.contains("card__like-button_is-active")?function(t){return f.apply(this,arguments)}(t).then((function(t){e.querySelector(".card_like-count").textContent=t.likes.length,n.classList.remove("card__like-button_is-active")})).catch((function(t){n.classList.add("card__like-button_is-active"),console.log(t)})):function(t){return l.apply(this,arguments)}(t).then((function(t){e.querySelector(".card_like-count").textContent=t.likes.length,n.classList.add("card__like-button_is-active")})).catch((function(t){n.classList.remove("card__like-button_is-active"),console.log(t)}))}function m(t){t.classList.add("popup_is-opened"),document.addEventListener("keydown",b)}function _(t){t.classList.remove("popup_is-opened"),document.removeEventListener("keydown",b)}function b(t){"Escape"===t.key&&_(document.querySelector(".popup_is-opened"))}function g(t){return t.target.classList.contains("popup_is-opened")?_(t.target):t.target.closest(".popup__close")?_(t.target.closest(".popup")):void 0}var w=function(t,e,n,r){var o=t.querySelector(".".concat(e.id,"-error"));e.classList.remove(n),o.classList.remove(r),o.textContent=""};function L(t,e,n){!function(t){return t.some((function(t){return!t.validity.valid}))}(t)?(e.classList.remove(n),e.disabled=!1):(e.classList.add(n),e.disabled=!0)}function S(t,e){var n=Array.from(t.querySelectorAll(e.inputSelector)),r=t.querySelector(e.submitButtonSelector);n.forEach((function(n){w(t,n,e.inputErrorClass,e.errorClass)})),L(n,r,e.inactiveButtonClass)}function E(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}var k,x={formSelector:".popup__form",inputSelector:".popup__input",submitButtonSelector:".popup__button",inactiveButtonClass:"popup__button-disabled",inputErrorClass:"form__input_type_error",errorClass:"form__input-error_active"};k=x,Array.from(document.querySelectorAll(k.formSelector)).forEach((function(t){t.addEventListener("submit",(function(t){t.preventDefault()})),function(t,e,n,r,o){var c=Array.from(t.querySelectorAll(n)),a=t.querySelector(r);L(c,a,o),c.forEach((function(n){n.addEventListener("input",(function(){!function(t,e,n){e.validity.patternMismatch?e.setCustomValidity(e.dataset.errorMessage):e.setCustomValidity(""),e.validity.valid?w(t,e,n.inputErrorClass,n.errorClass):function(t,e,n,r,o){var c=t.querySelector(".".concat(e.id,"-error"));e.classList.add(r),c.textContent=n,c.classList.add(o)}(t,e,e.validationMessage,n.inputErrorClass,n.errorClass)}(t,n,e),L(c,a,o)}))}))}(t,k,k.inputSelector,k.submitButtonSelector,k.inactiveButtonClass)}));var C,q=document.querySelector(".places__list"),O=document.querySelector(".profile__edit-button"),j=document.querySelector(".profile__add-button"),A=document.querySelector(".popup_type_edit"),P=document.querySelector(".popup_type_new-card"),N=document.forms["new-place"],T=document.querySelector(".profile__title"),U=document.querySelector(".profile__description"),G=document.querySelector(".profile__image"),I=document.forms["edit-profile"],B=document.querySelector(".button"),D=document.querySelectorAll(".popup__close"),F=document.querySelector(".popup_type_image"),M=F.querySelector(".popup__image"),J=F.querySelector(".popup__caption"),H=document.querySelector(".popup_card_delete"),V=document.querySelector(".popup__button-delete"),Y=document.querySelector(".popup_card_update-avatar"),z=document.forms["update-avatar"],$=z.elements.avatar,K=N.elements.placeName,Q=N.elements.link,R=I.elements.name,W=I.elements.description;function X(t,e){M.src=e,M.alt=t,J.textContent=t,m(F)}function Z(t,e){m(H),V.onclick=function(){(function(t){return p.apply(this,arguments)})(t).then((function(t){console.log(t),e.remove(),_(H)})).catch((function(t){console.log(t)}))}}function tt(t){_(t.target.closest(".popup"))}Promise.all([function(){return a.apply(this,arguments)}(),function(){return i.apply(this,arguments)}()]).then((function(t){var e,n,r=(n=2,function(t){if(Array.isArray(t))return t}(e=t)||function(t,e){var n=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=n){var r,o,c,a,i=[],u=!0,s=!1;try{if(c=(n=n.call(t)).next,0===e){if(Object(n)!==n)return;u=!1}else for(;!(u=(r=c.call(n)).done)&&(i.push(r.value),i.length!==e);u=!0);}catch(t){s=!0,o=t}finally{try{if(!u&&null!=n.return&&(a=n.return(),Object(a)!==a))return}finally{if(s)throw o}}return i}}(e,n)||function(t,e){if(t){if("string"==typeof t)return E(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?E(t,e):void 0}}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),o=r[0],c=r[1];T.textContent=o.name,U.textContent=o.about,G.style.backgroundImage="url(".concat(o.avatar,")"),c.forEach((function(t){var e=y(t,Z,v,X,t.likes.length,t.owner._id,t._id,C);q.append(e)}))})).catch((function(t){console.log(t)})),O.addEventListener("click",(function(){R.value=T.textContent,W.value=U.textContent,S(A,x),m(A)})),j.addEventListener("click",(function(){K.value="",Q.value="",S(P,x),m(P)})),I.addEventListener("submit",(function(t){t.preventDefault(),B.textContent="Сохранение...",function(t,e){return u.apply(this,arguments)}(R.value,W.value).then((function(t){T.textContent=t.name,U.textContent=t.about,_(A)})).catch((function(t){console.log(t)})).finally((function(){B.textContent="Сохранить"}))})),N.addEventListener("submit",(function(t){t.preventDefault(),B.textContent="Сохранение...",function(t,e){return s.apply(this,arguments)}(N.elements.placeName.value,N.elements.link.value).then((function(t){var e=y({name:t.name,link:t.link},Z,v,X,t.likes.length,t.owner._id,t._id,C);q.prepend(e),N.reset(),_(P)})).catch((function(t){console.log(t)})).finally((function(){B.textContent="Сохранить"}))})),G.addEventListener("click",(function(){m(Y),$.value="",S(Y,x)})),F.addEventListener("click",(function(t){g(t)})),Y.addEventListener("click",(function(t){g(t)})),P.addEventListener("click",(function(t){g(t)})),A.addEventListener("click",(function(t){g(t)})),D.forEach((function(t){t.addEventListener("click",tt)})),z.addEventListener("submit",(function(t){t.preventDefault(),B.textContent="Сохранение...",function(t){return d.apply(this,arguments)}($.value).then((function(t){G.style.backgroundImage="url(".concat(t.avatar,")"),g(Y)})).catch((function(t){console.log(t)})).finally((function(){B.textContent="Сохранить"}))}))})();
//# sourceMappingURL=main.js.map