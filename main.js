(()=>{"use strict";var e={724:(e,t,n)=>{e.exports=n.p+"6666407ac3aa5af1d5de.jpg"}},t={};function n(o){var r=t[o];if(void 0!==r)return r.exports;var c=t[o]={exports:{}};return e[o](c,c.exports,n),c.exports}n.m=e,n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.p="",n.b=document.baseURI||self.location.href,(()=>{function e(e,t,n,o){var r=document.getElementById("card-template").content.querySelector(".card").cloneNode(!0),c=r.querySelector(".card__title"),s=r.querySelector(".card__image"),a=r.querySelector(".card__delete-button"),p=r.querySelector(".card__like-button");return s.src=e.link,s.alt=e.name,c.textContent=e.name,a.addEventListener("click",t),p.addEventListener("click",n),s.addEventListener("click",(function(t){o(t,e.name,e.link)})),r}function t(e){e.target.closest(".card").remove()}function o(e){e.target.closest(".card__like-button").classList.toggle("card__like-button_is-active")}function r(e){e.classList.add("popup_is-opened"),document.addEventListener("keydown",s)}function c(e){e.classList.remove("popup_is-opened"),document.removeEventListener("keydown",s)}function s(e){"Escape"===e.key&&c(document.querySelector(".popup_is-opened"))}var a=document.forms["edit-profile"],p=document.forms["new-place"],d=document.querySelector(".popup_type_new-card"),l=document.querySelector(".popup_type_edit"),i=document.querySelector(".profile__title"),u=document.querySelector(".profile__description"),m=a.elements.name,v=a.elements.description,y=p.elements["place-name"],f=p.elements.link,_=document.querySelector(".places__list");function k(e,t){e.reset(),c(t)}var g=new URL(n(724),n.b);document.querySelector(".profile__image").style.backgroundImage="url(".concat(g,")");var h=document.querySelector(".places__list"),x=document.querySelector(".profile__edit-button"),b=document.querySelector(".profile__add-button"),q=document.querySelectorAll(".popup__close"),S=document.querySelector(".popup_type_image"),L=S.querySelector(".popup__image"),E=S.querySelector(".popup__caption");function j(e,t,n){e.target.classList.contains("card__delete-button")||(E.textContent=t,L.src=n,L.alt=t,r(S))}function w(e){c(e.target.closest(".popup"))}[{name:"Архыз",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg"},{name:"Челябинская область",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg"},{name:"Иваново",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg"},{name:"Камчатка",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg"},{name:"Холмогорский район",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg"},{name:"Байкал",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg"},{name:"Челябинская область",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg"},{name:"Иваново",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg"},{name:"Камчатка",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg"},{name:"Холмогорский район",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg"},{name:"Байкал",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg"}].forEach((function(n,r){var c=e(n,t,o,j);r?h.prepend(c):h.append(c)})),b.addEventListener("click",(function(){r(d)})),x.addEventListener("click",(function(){m.value=i.textContent,v.value=u.textContent,r(l)})),q.forEach((function(e){e.addEventListener("click",w)})),document.addEventListener("click",(function(e){var t=e.target.closest(".popup");e.stopPropagation(),e.target.classList.contains("popup")&&c(t)})),a.addEventListener("submit",(function(e){e.preventDefault(),i.textContent=m.value,u.textContent=v.value,k(a,l)})),p.addEventListener("submit",(function(n){var c;n.preventDefault(),c=e({name:y.value,link:f.value},t,o,r),_.prepend(c),k(p,d)}))})()})();
//# sourceMappingURL=main.js.map