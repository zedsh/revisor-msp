(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-8deb8c3c"],{"0c47":function(e,t,s){"use strict";var i=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},a=[function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"is-breadcrumb-list"},[s("nav",{attrs:{"aria-label":"breadcrumb"}},[s("ol",{staticClass:"breadcrumb"},[s("li",{staticClass:"breadcrumb-item"},[s("a",{attrs:{href:"/"}},[e._v(" Главная ")])]),s("li",{staticClass:"breadcrumb-item active"},[e._v(" Пример страницы ")])])])])}],n={name:"pageBreadCrumbs"},r=n,c=s("2877"),l=Object(c["a"])(r,i,a,!1,null,"1b172358",null);t["a"]=l.exports},f951:function(e,t,s){"use strict";s.r(t);var i=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"is-news container",attrs:{id:"news-page"}},[s("vue-headful",{attrs:{title:"Новости компании | Ревизор"}}),s("isBreadCrumbs"),s("newsPageItems",{attrs:{newsData:e.NEWS}})],1)},a=[],n=s("5530"),r=s("2f62"),c=s("0c47"),l=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"is-services",attrs:{id:"services"}},[s("div",{staticClass:"container"},[e._m(0),e._m(1),s("div",{staticClass:"row is-news__items"},e._l(e.newsData,(function(t){return s("newsItemElem",{key:t.id,attrs:{newsItemData:t},on:{newsItemClick:e.newsItemClick}})})),1)])])},u=[function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"row"},[s("h2",[e._v(" Новости компании ")])])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"row"},[s("div",{staticClass:"col-md-12"},[s("p",[e._v(" Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. ")]),s("p",[e._v(" Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. ")])])])}],o=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"col-md-6"},[s("div",{staticClass:"is-news__item card"},[s("div",{staticClass:"is-news__item-content"},[s("img",{attrs:{src:"https://a.al-dev.ru/assets/img/servicesIcon1.svg",alt:e.newsItemData.title.rendered}}),s("div",[s("p",[e._v(" "+e._s(e.newsItemData.title.rendered)+" ")]),e._m(0),s("a",{staticClass:"btn is-btn is-router-link-to",on:{click:function(t){return t.preventDefault(),e.newsItemClick(t)}}},[e._v(" Подробнее ")])]),s("p",{staticClass:"is-news__item-description",domProps:{innerHTML:e._s(e.newsItemData.excerpt.rendered)}},[e._v(" "+e._s(e.newsItemData.excerpt.rendered)+" ")])])]),s("div",{staticClass:"is-news__item-bg"})])},m=[function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("p",{staticClass:"is-news__item-chevron"},[s("i",{staticClass:"fas fa-chevron-right"})])}],d={name:"newsItemElem",props:{newsItemData:{type:Object,default:function(){return[]}}},data:function(){return{}},methods:{newsItemClick:function(){this.$emit("newsItemClick",this.newsItemData.slug)}}},p=d,_=s("2877"),v=Object(_["a"])(p,o,m,!1,null,null,null),f=v.exports,w={name:"newsPageItems",components:{newsItemElem:f},props:{newsData:{type:Array,default:function(){return[]}}},data:function(){return{}},methods:{newsItemClick:function(e){this.$router.push({name:"newsItemPage",query:{el:e}})}}},b=w,C=Object(_["a"])(b,l,u,!1,null,null,null),h=C.exports,I={name:"newsPage",components:{isBreadCrumbs:c["a"],newsPageItems:h},computed:Object(n["a"])({},Object(r["c"])(["NEWS"])),mounted:function(){this.GET_NEWS_FROM_API()},methods:Object(n["a"])({},Object(r["b"])(["GET_NEWS_FROM_API"]))},g=I,E=Object(_["a"])(g,i,a,!1,null,null,null);t["default"]=E.exports}}]);
//# sourceMappingURL=chunk-8deb8c3c.0e8ff3bd.js.map