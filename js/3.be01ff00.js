(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[3],{"57b9":function(e,t,o){"use strict";var n=o("5b53"),l=o.n(n);l.a},"5b53":function(e,t,o){},"8b24":function(e,t,o){"use strict";o.r(t);var n=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("q-page",{staticClass:"justify-evenly"},[o("q-card",{attrs:{id:"input-card"}},[e._l(e.inputs,(function(t){return o("div",{key:t.title,staticClass:"input-section"},[o("q-input",{attrs:{label:t.title,mask:t.mask},model:{value:e.$data.model[t.model],callback:function(o){e.$set(e.$data.model,t.model,o)},expression:"$data.model[input.model]"}})],1)})),o("q-btn",{staticClass:"submit-btn",attrs:{rounded:"",disable:e.disableButton(),label:"Enviar"},on:{click:function(t){return e.sendForm()}}})],2)],1)},l=[],s=o("2b0e"),i=s["a"].extend({name:"PageIndex",data:function(){var e={client:"",name:"",document:"",phone:"",zipcode:"",street:"",number:"",city:"",state:""},t=[{title:"Operadora",model:"client"},{title:"Nome completo",model:"name"},{title:"Documento do titular",model:"document"},{title:"Telefone para contato",model:"phone",mask:"(##) #####-####"},{title:"CEP",model:"zipcode",mask:"#####-###"},{title:"Rua",model:"street"},{title:"Número",model:"number"},{title:"Cidade",model:"city"},{title:"Estado",model:"state"}];return{model:e,inputs:t}},methods:{sendForm:function(){var e={mode:"no-cors",withCredentials:!0,credentials:"cross-origin",headers:{"Content-type":"application/x-www-form-urlencoded; charset=UTF-8",Accept:"application/xml, text/xml, */*; q=0.01","Access-Control-Allow-Methods":"GET,PUT,POST,DELETE,PATCH,OPTIONS","Access-Control-Allow-Origin":"*","Access-Control-Allow-Credentials":!0}},t={"entry.812528551":this.model.client,"entry.1283731858":this.model.name,"entry.41271002":this.model.document,"entry.859865581":this.model.phone,"entry.1795176255":this.model.zipcode,"entry.1947761237":this.model.street,"entry.2146802338":this.model.number,"entry.1001535927":this.model.city,"entry.838749747":this.model.state,fvv:1,draftResponse:"[]",pageHistory:0,fbzx:-0x5d3b299613967800};console.log(t),this.$axios.post("https://docs.google.com/forms/d/e/1FAIpQLSf3mlR1Z8m6oktUWVGBVa0LUGw0ZQj_EOMZME4y-4-qtusT9g/formResponse",t,e).then((function(e){console.log(e)})).catch((function(e){console.log(e)}))},disableButton:function(){return!this.model.client}}}),a=i,d=(o("57b9"),o("2877")),c=o("9989"),r=o("f09f"),m=o("27f9"),u=o("9c40"),p=o("eebe"),f=o.n(p),b=Object(d["a"])(a,n,l,!1,null,"07c72a9a",null);t["default"]=b.exports;f()(b,"components",{QPage:c["a"],QCard:r["a"],QInput:m["a"],QBtn:u["a"]})}}]);