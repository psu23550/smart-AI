(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[4],{d212:function(a,t,s){"use strict";s.r(t);var e=function(){var a=this,t=a.$createElement,s=a._self._c||t;return s("div",{staticClass:"page q-mt-xl"},[s("div",[s("h5",[a._v(a._s(a.datas.data.info1.title))]),s("p",[a._v(a._s(a.datas.data.info1.data))])]),s("div",[s("h5",[a._v(a._s(a.datas.data.info2.title))]),s("p",[a._v(a._s(a.datas.data.info2.data))])])])},d=[],i=(s("e6cf"),{name:"page1",data(){return{datas:{}}},async mounted(){let a=await this.$store.dispatch("getData");this.datas=await a.filter((a=>"page1"===a.id))[0],console.log(this.datas)}}),n=i,o=s("2877"),l=Object(o["a"])(n,e,d,!1,null,"5991b232",null);t["default"]=l.exports}}]);