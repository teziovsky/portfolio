(function(t){function e(e){for(var i,o,r=e[0],c=e[1],l=e[2],p=0,m=[];p<r.length;p++)o=r[p],Object.prototype.hasOwnProperty.call(n,o)&&n[o]&&m.push(n[o][0]),n[o]=0;for(i in c)Object.prototype.hasOwnProperty.call(c,i)&&(t[i]=c[i]);u&&u(e);while(m.length)m.shift()();return s.push.apply(s,l||[]),a()}function a(){for(var t,e=0;e<s.length;e++){for(var a=s[e],i=!0,r=1;r<a.length;r++){var c=a[r];0!==n[c]&&(i=!1)}i&&(s.splice(e--,1),t=o(o.s=a[0]))}return t}var i={},n={app:0},s=[];function o(e){if(i[e])return i[e].exports;var a=i[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,o),a.l=!0,a.exports}o.m=t,o.c=i,o.d=function(t,e,a){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(o.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)o.d(a,i,function(e){return t[e]}.bind(null,i));return a},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],c=r.push.bind(r);r.push=e,r=r.slice();for(var l=0;l<r.length;l++)e(r[l]);var u=c;s.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"06c7":function(t,e,a){t.exports=a.p+"img/movie_search_engine.9bf098df.png"},"0afe":function(t,e,a){t.exports=a.p+"img/bootstrap.fe69536b.png"},"128e":function(t,e,a){var i={"./image_search_engine.png":"b0ba","./lenovo.png":"6ad0","./movie_search_engine.png":"06c7","./servicebook.png":"e50d"};function n(t){var e=s(t);return a(e)}function s(t){if(!a.o(i,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return i[t]}n.keys=function(){return Object.keys(i)},n.resolve=s,t.exports=n,n.id="128e"},"13ea":function(t,e,a){},"421f":function(t,e,a){},"46fc":function(t,e,a){t.exports=a.p+"img/js.d7540b77.png"},4775:function(t,e,a){},"498e":function(t,e,a){"use strict";var i=a("fd74"),n=a.n(i);n.a},"4b92":function(t,e,a){},"4e8e":function(t,e,a){"use strict";var i=a("4775"),n=a.n(i);n.a},"554c":function(t,e,a){},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var i=a("2b0e"),n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("Hero"),a("AboutMe"),a("Technologies"),a("Projects"),a("Contact")],1)},s=[],o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",{attrs:{id:"hero"}},[a("nav",{staticClass:"nav"},[a("span",{staticClass:"nav__logo"},[t._v("Jakub Soboczyński")]),a("button",{staticClass:"hamburger",class:this.openMenu?"hamburger--active":null,attrs:{"aria-label":"menu"},on:{click:function(e){return e.preventDefault(),t.toggleMenu(e)}}},[t._m(0)]),a("ul",{staticClass:"nav__links",class:t.openMenu?"active":null},[a("li",{staticClass:"nav__item",on:{click:t.handleLinkClick}},[a("a",{attrs:{href:"#AboutMe"}},[t._v("AboutMe")])]),a("li",{staticClass:"nav__item",on:{click:t.handleLinkClick}},[a("a",{attrs:{href:"#Technologies"}},[t._v("Technologies")])]),a("li",{staticClass:"nav__item",on:{click:t.handleLinkClick}},[a("a",{attrs:{href:"#Projects"}},[t._v("Projects")])]),a("li",{staticClass:"nav__item",on:{click:t.handleLinkClick}},[a("a",{attrs:{href:"#Contact"}},[t._v("Contact")])])])]),t._m(1),t._m(2)])},r=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("span",{staticClass:"hamburger__container",attrs:{tabindex:"-1"}},[a("span",{staticClass:"hamburger__bars"})])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"hero"},[i("div",{staticClass:"image__container"},[i("img",{staticClass:"hero__img",attrs:{src:a("c3e7"),alt:"profile photo"}})]),i("div",{staticClass:"hero__header"},[i("h1",{staticClass:"hero__title"},[t._v("Hi, I'm Jakub")]),i("h2",{staticClass:"hero__subtitle"},[t._v("Frontend Developer")])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("a",{staticClass:"actionBtn",attrs:{href:"#Projects"}},[a("p",{staticClass:"actionBtn__title"},[t._v("View projects")]),a("span",{staticClass:"actionBtn__arrows"})])}],c={name:"Hero",data:function(){return{openMenu:!1}},methods:{toggleMenu:function(){var t=document.getElementsByTagName("html");this.openMenu?t[0].style.overflow="auto":t[0].style.overflow="hidden",this.openMenu=!this.openMenu},handleLinkClick:function(){var t=document.getElementsByTagName("html");this.openMenu&&(t[0].style.overflow="auto",this.openMenu=!1)}}},l=c,u=(a("b179"),a("2877")),p=Object(u["a"])(l,o,r,!1,null,"45f91424",null),m=p.exports,d=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",{attrs:{id:"AboutMe"}},[a("h1",{staticClass:"section--title"},[t._v("About Me")]),t._m(0),a("div",{staticClass:"wrapper"},t._l(t.notes,(function(t){return a("Note",{key:t.title,attrs:{note:t}})})),1)])},f=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("h3",{attrs:{"data-aos":"zoom-in"}},[t._v(" Hi! My name is Jakub Soboczyński. "),a("span",[t._v("All informations about me in few notes below!")])])}],g=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"note",attrs:{"data-aos":"zoom-out-up"}},[a("p",{staticClass:"note__title"},[t._v(t._s(t.note.title))]),a("p",{staticClass:"note__description",attrs:{"data-aos":"zoom-in","data-aos-delay":"400"}},[t._v(t._s(t.note.description))])])},h=[],v={props:["note"],name:"Note"},_=v,b=(a("4e8e"),Object(u["a"])(_,g,h,!1,null,null,null)),C=b.exports,y={name:"AboutMe",data:function(){return{notes:[{title:"general",description:"I'm a final year student of WSB University in Poznan in the faculty of informatics. I currently live in Plewiska near Poznań and I focus all my attention on developing my skills and learning about new technologies that will make my projects even better."},{title:"experience",description:"I have no commercial experience, but I still improve my programming skills by writing new web applications. My main goal is to find a job as a frontend developer that will help me gain experience needed in everyday work faster."},{title:"interests",description:"I love electronic music festivals, especially techno, trance and house sub genres. I also like to read news about android-based mobile devices and all new IT articles collected in the news aggregator - Inoreader. Since I bought my second car, I'm also interested in cars."}]}},components:{Note:C}},w=y,k=(a("ab07"),Object(u["a"])(w,d,f,!1,null,"7f0622d6",null)),x=k.exports,j=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",{attrs:{id:"Technologies"}},[a("h1",{staticClass:"section--title"},[t._v("Technologies")]),a("div",{staticClass:"wrapper"},t._l(t.technologies,(function(t,e){return a("Technology",{key:e,attrs:{technology:t}})})),1)])},$=[],M=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"card"},[i("div",{staticClass:"card__image",attrs:{"data-aos":"zoom-out-right","data-aos-duration":"1000","data-aos-anchor-placement":"center-bottom"}},[i("img",{attrs:{src:a("a603")("./"+t.technology.image+".png"),alt:"html"}})]),i("div",{staticClass:"card__info",attrs:{"data-aos":"zoom-in"}},[i("h2",{staticClass:"card__title"},[t._v(t._s(t.technology.name))]),i("span",{staticClass:"dot"}),i("p",{staticClass:"card__description"},[t._v(t._s(t.technology.subtitle))])])])},S=[],V={props:["technology"],name:"Technology"},O=V,H=(a("d5eb"),Object(u["a"])(O,M,S,!1,null,"5dee8a2d",null)),P=H.exports,T={name:"Technologies",data:function(){return{technologies:[{name:"HTML5",subtitle:"Knowledge of HTML document structure. Ability to use semantic tags.",image:"html"},{name:"CSS3",subtitle:"Knowledge of CSS. Using BEM methodology and SASS preprocessors in projects. Creating responsive websites using grid, flex and media queries.",image:"css"},{name:"JavaScript",subtitle:"Creating basic and medium JavaScript scripts also with using jQuery. Knowledge of spread operator, arrow functions and other ES6 functions. Knowledge of Vue.js and basic knowledge of React.js.",image:"js"},{name:"Vue.js",subtitle:"Ability to writing  apps in Vue.js using Vue-Cli, Vuetify, Vuex Store, Vue-Router, Vue-Axios, Vuelidate. Knowledge about transitions and animations.",image:"vue"},{name:"Bootstrap",subtitle:"Practical use of Bootstrap components in projects. Ability to personalize components for the needs of the project.",image:"bootstrap"},{name:"GIT",subtitle:"Ability to use the local and remote version-control system like GIT  and GitHub. Knowledge of git commands.",image:"git"},{name:"Gulp",subtitle:"Ability to configure Gulp to improve the speed of coding and for prepare production files.",image:"gulp"},{name:"Photoshop",subtitle:"Basic photo editing. Creating buttons, banners, icons for websites.",image:"photoshop"},{name:"Figma",subtitle:"Ability to create simple website layouts.",image:"figma"},{name:"Adobe XD",subtitle:"Ability to create simple website layouts.",image:"xd"}]}},components:{Technology:P}},E=T,D=(a("498e"),Object(u["a"])(E,j,$,!1,null,"170a3055",null)),z=D.exports,L=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",{attrs:{id:"Projects"}},[a("h1",{staticClass:"section--title"},[t._v("Projects")]),a("div",{staticClass:"wrapper"},t._l(t.projects,(function(t,e){return a("Project",{key:e,attrs:{project:t}})})),1)])},A=[],I=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"card"},[a("div",{staticClass:"card__links",attrs:{"data-aos":"zoom-out-left","data-aos-delay":"300","data-aos-anchor-placement":"center-bottom"}},[a("button",{staticClass:"card__links__item",on:{click:function(e){return t.showSingle(t.project.image)}}},[t._v("SCREEN")]),a("a",{staticClass:"card__links__item",attrs:{href:t.project.github_link}},[t._v("SOURCE")]),a("a",{staticClass:"card__links__item",attrs:{href:t.project.demo_link}},[t._v("DEMO")])]),a("div",{staticClass:"card__info",attrs:{"data-aos":"flip-up"}},[a("h2",{staticClass:"card__title"},[t._v(t._s(t.project.title))]),a("span",{staticClass:"dot"}),a("p",{staticClass:"card__description"},[t._v(t._s(t.project.description))])]),a("vue-easy-lightbox",{attrs:{visible:t.visible,imgs:t.imgs,index:t.index},on:{hide:t.handleHide}})],1)},B=[],Z=a("825ae"),q={props:["project"],name:"Project",components:{VueEasyLightbox:Z["a"]},data:function(){return{imgs:"",visible:!1,index:0}},methods:{showSingle:function(t){this.imgs=a("128e")("./"+t+".png"),this.show()},show:function(){this.visible=!0},handleHide:function(){this.visible=!1}}},N=q,J=(a("7d91"),Object(u["a"])(N,I,B,!1,null,"4462d648",null)),U=J.exports,F={name:"Projects",data:function(){return{projects:[{image:"movie_search_engine",title:"Movies search engine",description:"The movie search engine with The Movie DB API. Created for the needs of recruitment to Junior Frontend Developer.",github_link:"https://github.com/teziovsky/movie-search-engine#readme",demo_link:"https://teziovsky.github.io/movie-search-engine/"},{image:"servicebook",title:"Car service book",description:"The car service book website writed in Vue.js. Using vuetify, vuex store, vuelidate, vue-router and vue-axios to connect with MySQL database.",github_link:"https://github.com/teziovsky/service-book_v2#readme",demo_link:"http://servicebook.ct8.pl/"},{image:"lenovo",title:"Lenovo product card",description:"The Lenovo product card website created for the needs of recruitment to Junior Frontend Developer. PSD to HTML using HTML5, CSS3/SASS and RWD.",github_link:"https://github.com/teziovsky/product_card#readme",demo_link:"https://teziovsky.github.io/product_card/"},{image:"image_search_engine",title:"Image search engine",description:"The image search engine writed in Vue.js. Using axios to get data from Flickr API and SCSS to add styles to this project.",github_link:"https://github.com/teziovsky/Images-gallery#readme",demo_link:"https://teziovsky.github.io/images-gallery/"}]}},components:{Project:U}},R=F,K=(a("d963"),Object(u["a"])(R,L,A,!1,null,"48a0cb89",null)),G=K.exports,Q=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",{attrs:{id:"Contact"}},[a("h1",{staticClass:"section--title"},[t._v("Contact")]),a("p",{staticClass:"contact__info",attrs:{"data-aos":"zoom-in"}},[t._v("Don't forget to leave me a message!")]),a("form",{staticClass:"form",attrs:{id:"form",action:"https://formspree.io/xaypgwvk",method:"POST","data-aos":"zoom-in","data-aos-delay":"100",autocomplete:"off"},on:{submit:function(e){return e.preventDefault(),t.sendEmail(e)}}},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.email,expression:"email"}],staticClass:"form__input mail",class:{error:t.$v.email.$error},attrs:{type:"email",placeholder:"email"},domProps:{value:t.email},on:{input:[function(e){e.target.composing||(t.email=e.target.value)},function(e){return t.$v.email.$touch()}]}}),a("transition",{attrs:{name:"fade"}},[t.$v.email.$dirty&&!t.$v.email.required?a("span",{staticClass:"error"},[t._v("email is required.")]):t._e(),t.$v.email.$dirty&&!t.$v.email.email?a("span",{staticClass:"error"},[t._v("please write correct adress email.")]):t._e()]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.title,expression:"title"}],staticClass:"form__input title",class:{error:t.$v.title.$error},attrs:{type:"text",placeholder:"title"},domProps:{value:t.title},on:{input:[function(e){e.target.composing||(t.title=e.target.value)},function(e){return t.$v.title.$touch()}]}}),a("transition",{attrs:{name:"fade"}},[t.$v.title.$dirty&&!t.$v.title.required?a("span",{staticClass:"error"},[t._v("title is required.")]):t._e(),t.$v.title.$dirty&&!t.$v.title.minLength?a("span",{staticClass:"error"},[t._v("title must have at least "+t._s(t.$v.title.$params.minLength.min)+" letters.")]):t._e()]),a("textarea",{directives:[{name:"model",rawName:"v-model",value:t.message,expression:"message"}],staticClass:"form__input message",class:{error:t.$v.message.$error},attrs:{placeholder:"message"},domProps:{value:t.message},on:{input:[function(e){e.target.composing||(t.message=e.target.value)},function(e){return t.$v.message.$touch()}]}}),t._v(" "),a("transition",{attrs:{name:"fade"}},[t.$v.message.$dirty&&!t.$v.message.required?a("span",{staticClass:"error"},[t._v("message is required.")]):t._e(),t.$v.message.$dirty&&!t.$v.message.minLength?a("span",{staticClass:"error"},[t._v("title must have at least "+t._s(t.$v.message.$params.minLength.min)+" letters.")]):t._e()]),a("button",{staticClass:"form__submit",attrs:{type:"submit",disabled:t.$v.$invalid}},[t._v("send")])],1),a("footer",{staticClass:"footer"},[t._m(0),a("p",{staticClass:"footer__copy"},[t._v("© 2020 | Designed by Jakub Soboczyński")]),a("ul",{staticClass:"footer__links"},[a("li",{staticClass:"footer__links__item",attrs:{"data-aos":"flip-left","data-aos-anchor-placement":"top-bottom","data-aos-delay":"200"}},[a("a",{attrs:{href:"https://github.com/teziovsky"}},[a("svg",{attrs:{width:"36",height:"36",viewBox:"0 0 36 36",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[a("path",{attrs:{d:"M0 0V36H36V0H0ZM21.801 29.385C21.192 29.502 21 29.1285 21 28.809V25.5165C21 24.396 20.607 23.667 20.175 23.295C22.848 22.998 25.656 21.9825 25.656 17.3745C25.656 16.0635 25.1895 14.9925 24.42 14.154C24.5445 13.851 24.9555 12.63 24.3015 10.9785C24.3015 10.9785 23.295 10.656 21.0045 12.2085C20.046 11.9385 19.02 11.808 18 11.802C16.98 11.8065 15.954 11.9385 14.9955 12.2055C12.7035 10.653 11.6955 10.9755 11.6955 10.9755C11.0445 12.6285 11.4555 13.848 11.58 14.1525C10.812 14.9925 10.344 16.062 10.344 17.373C10.344 21.969 13.1445 22.9995 15.8115 23.304C15.468 23.604 15.1575 24.132 15.0495 24.909C14.364 25.215 12.6285 25.7445 11.5575 23.91C11.5575 23.91 10.923 22.758 9.717 22.6725C9.717 22.6725 8.547 22.6575 9.6345 23.403C9.6345 23.403 10.422 23.772 10.968 25.158C10.968 25.158 11.6625 27.3 15 26.574V28.8075C15 29.124 14.8065 29.496 14.208 29.385C9.438 27.7995 6 23.301 6 18C6 11.3715 11.373 6 18 6C24.627 6 30 11.3715 30 18C30 23.2995 26.5665 27.7965 21.801 29.385Z",fill:"#D4D4DC"}})])])]),a("li",{staticClass:"footer__links__item",attrs:{"data-aos":"flip-left","data-aos-anchor-placement":"top-bottom","data-aos-delay":"400"}},[a("a",{attrs:{href:"https://pl.linkedin.com/in/jakubsoboczynski"}},[a("svg",{attrs:{width:"36",height:"36",viewBox:"0 0 36 36",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[a("path",{attrs:{d:"M0 0V36H36V0H0ZM12 28.5H7.5V12H12V28.5ZM9.75 10.098C8.301 10.098 7.125 8.913 7.125 7.452C7.125 5.991 8.301 4.806 9.75 4.806C11.199 4.806 12.375 5.991 12.375 7.452C12.375 8.913 11.2005 10.098 9.75 10.098ZM30 28.5H25.5V20.094C25.5 15.042 19.5 15.4245 19.5 20.094V28.5H15V12H19.5V14.6475C21.5955 10.7685 30 10.482 30 18.3615V28.5Z",fill:"#D4D4DC"}})])])]),a("li",{staticClass:"footer__links__item",attrs:{"data-aos":"flip-left","data-aos-anchor-placement":"top-bottom","data-aos-delay":"600"}},[a("a",{attrs:{href:"https://www.facebook.com/Teziovsky"}},[a("svg",{attrs:{width:"36",height:"36",viewBox:"0 0 36 36",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[a("path",{attrs:{d:"M0 0V36H36V0H0ZM24 10.5H21.1155C20.1915 10.5 19.5 10.878 19.5 11.8335V13.5H24L23.6415 18H19.5V30H15V18H12V13.5H15V10.6155C15 7.5825 16.596 6 20.1915 6H24V10.5Z",fill:"#D4D4DC"}})])])]),a("li",{staticClass:"footer__links__item",attrs:{"data-aos":"flip-left","data-aos-anchor-placement":"top-bottom","data-aos-delay":"800"}},[a("a",{attrs:{href:"https://www.instagram.com/teziovsky/"}},[a("svg",{attrs:{width:"36",height:"36",viewBox:"0 0 36 36",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[a("g",{attrs:{"clip-path":"url(#clip0)"}},[a("path",{attrs:{d:"M22.0005 18C22.0005 20.2095 20.2095 22.0005 18 22.0005C15.7905 22.0005 13.9995 20.211 13.9995 18C13.9995 15.7905 15.7905 13.9995 18 13.9995C20.2095 13.9995 22.0005 15.7905 22.0005 18ZM27.7695 13.152C27.8265 14.4165 27.8385 14.796 27.8385 18C27.8385 21.204 27.8265 21.5835 27.7695 22.8495C27.6195 26.0745 26.106 27.621 22.851 27.768C21.585 27.825 21.2055 27.8385 18 27.8385C14.796 27.8385 14.415 27.8265 13.152 27.7695C9.891 27.621 8.3805 26.0715 8.2335 22.851C8.175 21.5835 8.1615 21.204 8.1615 18C8.1615 14.796 8.175 14.4165 8.232 13.152C8.3805 9.924 9.8955 8.3805 13.1505 8.2335C14.4165 8.175 14.796 8.163 18 8.163C21.204 8.163 21.585 8.175 22.8495 8.232C26.1015 8.3805 27.6195 9.924 27.7695 13.152ZM24.162 18C24.162 14.5965 21.402 11.838 18 11.838C14.5965 11.838 11.838 14.5965 11.838 18C11.838 21.4035 14.598 24.162 18 24.162C21.4035 24.162 24.162 21.4035 24.162 18ZM25.845 11.595C25.845 10.8 25.2 10.155 24.405 10.155C23.61 10.155 22.965 10.8 22.965 11.595C22.965 12.39 23.61 13.035 24.405 13.035C25.2015 13.035 25.845 12.39 25.845 11.595ZM36 0V36H0V0H36ZM30 18C30 14.742 29.9865 14.3325 29.928 13.053C29.7315 8.7 27.3105 6.273 22.9485 6.0735C21.6675 6.0135 21.2595 6 18 6C14.7405 6 14.334 6.0135 13.053 6.072C8.694 6.2715 6.273 8.6895 6.072 13.0515C6.0135 14.3325 6 14.742 6 18C6 21.2595 6.0135 21.6675 6.072 22.947C6.273 27.306 8.691 29.7285 13.053 29.928C14.334 29.9865 14.7405 30 18 30C21.2595 30 21.6675 29.9865 22.9485 29.928C27.3015 29.7285 29.7315 27.3105 29.928 22.947C29.9865 21.6675 30 21.2595 30 18Z",fill:"#D4D4DC"}})]),a("defs",[a("clipPath",{attrs:{id:"clip0"}},[a("rect",{attrs:{width:"36",height:"36",fill:"white"}})])])])])])])])])},W=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("p",{staticClass:"footer__separator"},[t._v(" ~ "),a("br"),t._v("~ ")])}],X=a("bc3a"),Y=a.n(X),tt=a("1dce"),et=a("b5ae"),at={mixins:[tt["validationMixin"]],name:"Contact",data:function(){return{email:"",title:"",message:""}},methods:{sendEmail:function(){var t=this;Y.a.post("https://formspree.io/xaypgwvk",{name:this.email,from:this.email,_subject:"".concat(this.title),message:this.message}).then((function(e){t.formReset()}))},formReset:function(){var t=document.getElementById("form");t.reset()},success:function(){console.log("success")},error:function(){console.log("error")}},validations:{email:{required:et["required"],email:et["email"]},title:{required:et["required"],minLength:Object(et["minLength"])(3)},message:{required:et["required"],minLength:Object(et["minLength"])(3)}}},it=at,nt=(a("6a22"),Object(u["a"])(it,Q,W,!1,null,"5e5d3770",null)),st=nt.exports,ot={name:"App",components:{Hero:m,AboutMe:x,Technologies:z,Projects:G,Contact:st},created:function(){history.pushState("",document.title,window.location.pathname)}},rt=ot,ct=(a("5c0b"),Object(u["a"])(rt,n,s,!1,null,null,null)),lt=ct.exports,ut=a("f5af"),pt=a.n(ut);a("e829");i["a"].use(Z["a"]),pt.a.init(),i["a"].config.productionTip=!1,new i["a"]({render:function(t){return t(lt)}}).$mount("#app")},"5c0b":function(t,e,a){"use strict";var i=a("9c0c"),n=a.n(i);n.a},"652c":function(t,e,a){t.exports=a.p+"img/xd.84e0c19c.png"},"6a22":function(t,e,a){"use strict";var i=a("4b92"),n=a.n(i);n.a},"6ad0":function(t,e,a){t.exports=a.p+"img/lenovo.6cc5094b.png"},"7a57":function(t,e,a){t.exports=a.p+"img/photoshop.c2d2946f.png"},"7d91":function(t,e,a){"use strict";var i=a("421f"),n=a.n(i);n.a},8204:function(t,e,a){t.exports=a.p+"img/css.2b8a6ca2.png"},8241:function(t,e,a){t.exports=a.p+"img/gulp.aab20cab.png"},"86a4":function(t,e,a){t.exports=a.p+"img/figma.8739df30.png"},"98f5":function(t,e,a){},"9c0c":function(t,e,a){},a18d:function(t,e,a){t.exports=a.p+"img/html.d9432dc4.png"},a603:function(t,e,a){var i={"./bootstrap.png":"0afe","./css.png":"8204","./figma.png":"86a4","./git.png":"ec9d","./gulp.png":"8241","./html.png":"a18d","./js.png":"46fc","./photoshop.png":"7a57","./vue.png":"cf88","./xd.png":"652c"};function n(t){var e=s(t);return a(e)}function s(t){if(!a.o(i,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return i[t]}n.keys=function(){return Object.keys(i)},n.resolve=s,t.exports=n,n.id="a603"},ab07:function(t,e,a){"use strict";var i=a("554c"),n=a.n(i);n.a},b0ba:function(t,e,a){t.exports=a.p+"img/image_search_engine.29937ac1.png"},b179:function(t,e,a){"use strict";var i=a("13ea"),n=a.n(i);n.a},c3e7:function(t,e,a){t.exports=a.p+"img/profile.024af377.png"},c7f7:function(t,e,a){},cf88:function(t,e,a){t.exports=a.p+"img/vue.359053ea.png"},d5eb:function(t,e,a){"use strict";var i=a("98f5"),n=a.n(i);n.a},d963:function(t,e,a){"use strict";var i=a("c7f7"),n=a.n(i);n.a},e50d:function(t,e,a){t.exports=a.p+"img/servicebook.1a31fc16.png"},ec9d:function(t,e,a){t.exports=a.p+"img/git.bf795d10.png"},fd74:function(t,e,a){}});
//# sourceMappingURL=app.819f53a6.js.map