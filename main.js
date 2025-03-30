(()=>{"use strict";var e={baseUrl:"https://nomoreparties.co/v1/wff-cohort-34",headers:{authorization:"f6e14b62-7ca7-405c-be33-7e7af4f9d67f","Content-Type":"application/json"}};function t(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))}var n=document.querySelector(".places__list");function r(e,t,n,r,o){var c=document.querySelector("#card-template").content.querySelector(".card").cloneNode(!0),a=c.querySelector(".card__image"),u=c.querySelector(".card__title"),i=c.querySelector(".card__delete-button"),l=c.querySelector(".card__like-button"),s=c.querySelector(".card__like-count"),d=e._id,p=e.owner._id;return t!==p&&i.remove(),a.src=e.link,a.alt=e.name,u.textContent=e.name,s.textContent=e.likes.length,i.addEventListener("click",(function(){return n(c,p,t,d)})),l.addEventListener("click",(function(e){return r(e,d,s)})),a.addEventListener("click",o),c}function o(n,r,o,c){r===o&&(n.remove(),function(n){fetch("".concat(e.baseUrl,"/cards/").concat(n),{method:"DELETE",headers:e.headers}).then(t)}(c))}function c(n,r,o){n.target.classList.contains("card__like-button_is-active")?function(n){return fetch("".concat(e.baseUrl,"/cards/likes/").concat(n),{method:"DELETE",headers:e.headers}).then(t)}(r).then((function(e){n.target.classList.remove("card__like-button_is-active"),o.textContent=e.likes.length})):function(n){return fetch("".concat(e.baseUrl,"/cards/likes/").concat(n),{method:"PUT",headers:e.headers}).then(t)}(r).then((function(e){n.target.classList.add("card__like-button_is-active"),o.textContent=e.likes.length}))}function a(e){e.classList.add("popup_is-opened"),document.addEventListener("keydown",i)}function u(e){e.classList.remove("popup_is-opened"),document.removeEventListener("keydown",i)}function i(e){if("Escape"===e.key){var t=document.querySelector(".popup_is-opened");t&&u(t)}}var l={formSelector:".popup__form",inputSelector:".popup__input",submitButtonSelector:".popup__button",inactiveButtonClass:"popup__button_disabled",inputErrorClass:"popup__input_type_error",errorClass:"popup__input-error_active"},s=function(e,t,n){var r=e.querySelector(".".concat(t.id,"-error"));t.classList.remove(n.inputErrorClass),r.classList.remove(n.errorClass),r.textContent=""},d=function(e,t,n){!function(e){return e.some((function(e){return!e.validity.valid}))}(e)?(t.disabled=!1,t.classList.remove(n.inactiveButtonClass)):(t.disabled=!0,t.classList.add(n.inactiveButtonClass))};function p(e,t){var n=Array.from(e.querySelectorAll(t.inputSelector)),r=e.querySelector(t.submitButtonSelector);n.forEach((function(n){s(e,n,t)})),d(n,r,t)}function f(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=Array(t);n<t;n++)r[n]=e[n];return r}var _,m=document.querySelectorAll(".popup"),y=document.querySelector(".profile__image"),v=document.querySelectorAll(".popup__button"),h=document.querySelector(".profile__image-button"),S=document.querySelector(".profile__edit-button"),b=document.querySelector(".profile__add-button"),q=document.querySelector(".popup__image"),g=document.querySelector(".popup__caption"),C=document.querySelector(".popup_type_avatar"),E=document.querySelector(".popup_type_edit"),L=document.querySelector(".popup_type_new-card"),k=document.querySelector(".popup_type_image"),x=document.forms.avatar,A=document.forms.profile,U=document.forms.place,w=document.querySelector(".profile__title"),T=document.querySelector(".profile__description"),j=document.querySelector(".popup__input_type_avatar-url"),O=document.querySelector(".popup__input_type_name"),B=document.querySelector(".popup__input_type_description"),D=document.querySelector(".popup__input_type_card-name"),P=document.querySelector(".popup__input_type_url");function M(e){y.style.background="url(".concat(e,") center center/cover no-repeat")}function N(e){v.forEach((function(t){e?t.textContent="Сохранение...":e||(t.textContent="Сохранить")}))}function I(e){var t=e.target.closest(".places__item").querySelector(".card__title").textContent;q.src=e.target.src,q.alt=t,g.textContent=t,a(k)}Promise.all([fetch("".concat(e.baseUrl,"/users/me"),{headers:e.headers}).then(t),fetch("".concat(e.baseUrl,"/cards"),{headers:e.headers}).then(t)]).then((function(e){var t,a,u=(a=2,function(e){if(Array.isArray(e))return e}(t=e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,c,a,u=[],i=!0,l=!1;try{if(c=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;i=!1}else for(;!(i=(r=c.call(n)).done)&&(u.push(r.value),u.length!==t);i=!0);}catch(e){l=!0,o=e}finally{try{if(!i&&null!=n.return&&(a=n.return(),Object(a)!==a))return}finally{if(l)throw o}}return u}}(t,a)||function(e,t){if(e){if("string"==typeof e)return f(e,t);var n={}.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?f(e,t):void 0}}(t,a)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),i=u[0],l=u[1];w.textContent=i.name,T.textContent=i.about,_=i._id,M(i.avatar),l.forEach((function(e){n.append(r(e,_,o,c,I))}))})).catch((function(e){console.log(e)})),m.forEach((function(e){e.addEventListener("mousedown",(function(t){t.target.classList.contains("popup_is-opened")&&u(e),t.target.classList.contains("popup__close")&&u(e)}))})),m.forEach((function(e){e.classList.add("popup_is-animated")})),h.addEventListener("click",(function(){j.value="",a(C),p(x,l)})),S.addEventListener("click",(function(){!function(e,t,n,r){n.value=e.textContent,r.value=t.textContent,p(A,l),v.forEach((function(e){e.disabled=!0,e.classList.add("popup__button_disabled")})),a(E)}(w,T,O,B)})),b.addEventListener("click",(function(){!function(e,t,n){e.value="",t.value="",a(n),p(U,l)}(D,P,L)})),x.addEventListener("submit",(function(n){return function(n){var r;n.preventDefault(),M(!0),(r=j.value,fetch("".concat(e.baseUrl,"/users/me/avatar"),{method:"PATCH",headers:e.headers,body:JSON.stringify({avatar:r})}).then(t)).then((function(e){M(e.avatar),u(C),n.target.reset()})).catch((function(e){console.log("Ошибка: ".concat(e," в функции обработки добавления нового аватара"))})).finally((function(){N(!1)}))}(n)})),A.addEventListener("submit",(function(n){!function(n){var r,o;n.preventDefault(),w.textContent=O.value,T.textContent=B.value,N(!0),(r=w.textContent,o=T.textContent,fetch("".concat(e.baseUrl,"/users/me"),{method:"PATCH",headers:e.headers,body:JSON.stringify({name:r,about:o})}).then(t)).catch((function(e){console.log("Ошибка: ".concat(e," в функции обработки редактирования профиля"))})).finally((function(){N(!1)})),u(E)}(n)})),U.addEventListener("submit",(function(a){!function(a,i,l){var s,d;a.preventDefault(),N(!0),(s=i.value,d=l.value,fetch("".concat(e.baseUrl,"/cards"),{method:"POST",headers:e.headers,body:JSON.stringify({name:s,link:d})}).then(t)).then((function(e){n.prepend(r(e,_,o,c,I)),u(L),a.target.reset()})).catch((function(e){console.log("Ошибка: ".concat(e," в функции обработки добавления новой карточки"))})).finally((function(){N(!1)}))}(a,D,P)})),function(e){Array.from(document.querySelectorAll(e.formSelector)).forEach((function(t){t.addEventListener("submit",(function(e){e.preventDefault()})),function(e,t){var n=Array.from(e.querySelectorAll(t.inputSelector)),r=e.querySelector(t.submitButtonSelector);d(n,r,t),n.forEach((function(o){o.addEventListener("input",(function(){!function(e,t,n){t.validity.patternMismatch?t.setCustomValidity(t.dataset.errorMessage):t.setCustomValidity(""),t.validity.valid?s(e,t,n):function(e,t,n,r){var o=e.querySelector(".".concat(t.id,"-error"));t.classList.add(r.inputErrorClass),o.textContent=n,o.classList.add(r.errorClass)}(e,t,t.validationMessage,n)}(e,o,t),d(n,r,t)}))}))}(t,e)}))}(l)})();