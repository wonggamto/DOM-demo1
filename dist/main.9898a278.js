parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"epB2":[function(require,module,exports) {
var o=dom.create("<div>newDiv</div>");console.log(o),dom.after(test,o);var e=dom.create('<div id="parent"></div>');dom.wrap(test,e);var t=dom.empty(window.empty);console.log(t),dom.attr(test,"title","Hi, I am Frank");var d=dom.attr(test,"title");console.log("title: ".concat(d)),dom.text(test,"你好，这是新的内容"),dom.text(test),dom.style(test,{border:"1px solid red",color:"blue"}),console.log(dom.style(test,"border")),dom.style(test,"border","1px solid black"),dom.class.add(test,"red"),dom.class.add(test,"blue"),dom.class.remove(test,"blue"),console.log(dom.class.has(test,"blue"));var l=function(){console.log("点击了")};dom.on(test,"click",l),dom.off(test,"click",l);var s=dom.find("#test")[0];console.log(s);var r=dom.find("#test2")[0];console.log(dom.find(".red",r)[0]),console.log(dom.parent(test));var m=dom.find("#s2")[0];console.log(dom.siblings(m)),console.log(dom.next(m)),console.log(dom.previous(m));var n=dom.find("#travel")[0];dom.each(dom.children(n),function(o){return dom.style(o,"color","red")}),console.log(dom.index(m));
},{}]},{},["epB2"], null)
//# sourceMappingURL=main.9898a278.js.map