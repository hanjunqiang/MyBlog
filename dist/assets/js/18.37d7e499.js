(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{464:function(e,n,t){"use strict";t.r(n);var o={props:["work","people","name","age"],data:function(){return{}},mounted:function(){},methods:{clickBtn:function(){this.$emit("update:people",{name:"李四",age:99}),this.$emit("update:work","good work!")}}},p=t(12),a=Object(p.a)(o,(function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",[t("span",[e._v("child中的work:"+e._s(e.work))]),e._v(" "),t("br"),e._v(" "),t("span",[e._v("child中的people:"+e._s(e.people))]),e._v(" "),t("button",{on:{click:e.clickBtn}},[e._v("改变父类work,people属性")]),e._v(" "),t("p",{staticClass:"red"},[e._v("\n    解析父类传递的对象中的属性:"+e._s(e.name+e.age)+"\n  ")])])}),[],!1,null,"3b99622a",null);n.default=a.exports}}]);