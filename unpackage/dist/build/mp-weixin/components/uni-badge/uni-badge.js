(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["components/uni-badge/uni-badge"],{"31c9":function(t,e,n){"use strict";var u=n("e559"),i=n.n(u);i.a},c9f8:function(t,e,n){"use strict";n.r(e);var u=n("fbd2"),i=n("d2f8");for(var a in i)"default"!==a&&function(t){n.d(e,t,function(){return i[t]})}(a);n("31c9");var c,r=n("f0c5"),f=Object(r["a"])(i["default"],u["b"],u["c"],!1,null,"43ac843c",null,!1,u["a"],c);e["default"]=f.exports},d2f8:function(t,e,n){"use strict";n.r(e);var u=n("e799"),i=n.n(u);for(var a in u)"default"!==a&&function(t){n.d(e,t,function(){return u[t]})}(a);e["default"]=i.a},e559:function(t,e,n){},e799:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var u={name:"UniBadge",props:{type:{type:String,default:"default"},inverted:{type:Boolean,default:!1},text:{type:[String,Number],default:""},size:{type:String,default:"normal"}},data:function(){return{badgeStyle:""}},watch:{text:function(){this.setStyle()}},mounted:function(){this.setStyle()},methods:{setStyle:function(){this.badgeStyle="width: ".concat(8*String(this.text).length+12,"px")},onClick:function(){this.$emit("click")}}};e.default=u},fbd2:function(t,e,n){"use strict";var u,i=function(){var t=this,e=t.$createElement;t._self._c},a=[];n.d(e,"b",function(){return i}),n.d(e,"c",function(){return a}),n.d(e,"a",function(){return u})}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/uni-badge/uni-badge-create-component',
    {
        'components/uni-badge/uni-badge-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("c9f8"))
        })
    },
    [['components/uni-badge/uni-badge-create-component']]
]);
