!function(){"use strict";function t(t,e){return t(e={exports:{}},e.exports),e.exports}var e=t(function(t){function s(t,e,n,r,o,i,a){try{var c=t[i](a),s=c.value}catch(t){return void n(t)}c.done?e(s):Promise.resolve(s).then(r,o)}t.exports=function(c){return function(){var t=this,a=arguments;return new Promise(function(e,n){var r=c.apply(t,a);function o(t){s(r,e,n,o,i,"next",t)}function i(t){s(r,e,n,o,i,"throw",t)}o(void 0)})}},t.exports.__esModule=!0,t.exports.default=t.exports}),n=(s=e)&&s.__esModule&&Object.prototype.hasOwnProperty.call(s,"default")?s.default:s,w=t(function(e){e=function(a){var s,t=Object.prototype,u=t.hasOwnProperty,e="function"==typeof Symbol?Symbol:{},r=e.iterator||"@@iterator",n=e.asyncIterator||"@@asyncIterator",o=e.toStringTag||"@@toStringTag";function i(t,e,n){return Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{i({},"")}catch(t){i=function(t,e,n){return t[e]=n}}function c(t,e,n,r){var o,i,a,c,e=e&&e.prototype instanceof m?e:m,e=Object.create(e.prototype),r=new E(r||[]);return e._invoke=(o=t,i=n,a=r,c=p,function(t,e){if(c===h)throw new Error("Generator is already running");if(c===d){if("throw"===t)throw e;return N()}for(a.method=t,a.arg=e;;){var n=a.delegate;if(n){var r=function t(e,n){var r=e.iterator[n.method];if(r===s){if(n.delegate=null,"throw"===n.method){if(e.iterator.return&&(n.method="return",n.arg=s,t(e,n),"throw"===n.method))return y;n.method="throw",n.arg=new TypeError("The iterator does not provide a 'throw' method")}return y}var r=l(r,e.iterator,n.arg);if("throw"===r.type)return n.method="throw",n.arg=r.arg,n.delegate=null,y;r=r.arg;if(!r)return n.method="throw",n.arg=new TypeError("iterator result is not an object"),n.delegate=null,y;{if(!r.done)return r;n[e.resultName]=r.value,n.next=e.nextLoc,"return"!==n.method&&(n.method="next",n.arg=s)}n.delegate=null;return y}(n,a);if(r){if(r===y)continue;return r}}if("next"===a.method)a.sent=a._sent=a.arg;else if("throw"===a.method){if(c===p)throw c=d,a.arg;a.dispatchException(a.arg)}else"return"===a.method&&a.abrupt("return",a.arg);c=h;r=l(o,i,a);if("normal"===r.type){if(c=a.done?d:f,r.arg!==y)return{value:r.arg,done:a.done}}else"throw"===r.type&&(c=d,a.method="throw",a.arg=r.arg)}}),e}function l(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(t){return{type:"throw",arg:t}}}a.wrap=c;var p="suspendedStart",f="suspendedYield",h="executing",d="completed",y={};function m(){}function g(){}function v(){}var w={};i(w,r,function(){return this});e=Object.getPrototypeOf,e=e&&e(e(_([])));e&&e!==t&&u.call(e,r)&&(w=e);var S=v.prototype=m.prototype=Object.create(w);function I(t){["next","throw","return"].forEach(function(e){i(t,e,function(t){return this._invoke(e,t)})})}function x(a,c){var e;this._invoke=function(n,r){function t(){return new c(function(t,e){!function e(t,n,r,o){t=l(a[t],a,n);if("throw"!==t.type){var i=t.arg;return(n=i.value)&&"object"==typeof n&&u.call(n,"__await")?c.resolve(n.__await).then(function(t){e("next",t,r,o)},function(t){e("throw",t,r,o)}):c.resolve(n).then(function(t){i.value=t,r(i)},function(t){return e("throw",t,r,o)})}o(t.arg)}(n,r,t,e)})}return e=e?e.then(t,t):t()}}function b(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function P(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function E(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(b,this),this.reset(!0)}function _(e){if(e){var t=e[r];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var n=-1,t=function t(){for(;++n<e.length;)if(u.call(e,n))return t.value=e[n],t.done=!1,t;return t.value=s,t.done=!0,t};return t.next=t}}return{next:N}}function N(){return{value:s,done:!0}}return i(S,"constructor",g.prototype=v),i(v,"constructor",g),g.displayName=i(v,o,"GeneratorFunction"),a.isGeneratorFunction=function(t){t="function"==typeof t&&t.constructor;return!!t&&(t===g||"GeneratorFunction"===(t.displayName||t.name))},a.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,v):(t.__proto__=v,i(t,o,"GeneratorFunction")),t.prototype=Object.create(S),t},a.awrap=function(t){return{__await:t}},I(x.prototype),i(x.prototype,n,function(){return this}),a.AsyncIterator=x,a.async=function(t,e,n,r,o){void 0===o&&(o=Promise);var i=new x(c(t,e,n,r),o);return a.isGeneratorFunction(e)?i:i.next().then(function(t){return t.done?t.value:i.next()})},I(S),i(S,o,"Generator"),i(S,r,function(){return this}),i(S,"toString",function(){return"[object Generator]"}),a.keys=function(n){var t,r=[];for(t in n)r.push(t);return r.reverse(),function t(){for(;r.length;){var e=r.pop();if(e in n)return t.value=e,t.done=!1,t}return t.done=!0,t}},a.values=_,E.prototype={constructor:E,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=s,this.done=!1,this.delegate=null,this.method="next",this.arg=s,this.tryEntries.forEach(P),!t)for(var e in this)"t"===e.charAt(0)&&u.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=s)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(n){if(this.done)throw n;var r=this;function t(t,e){return i.type="throw",i.arg=n,r.next=t,e&&(r.method="next",r.arg=s),!!e}for(var e=this.tryEntries.length-1;0<=e;--e){var o=this.tryEntries[e],i=o.completion;if("root"===o.tryLoc)return t("end");if(o.tryLoc<=this.prev){var a=u.call(o,"catchLoc"),c=u.call(o,"finallyLoc");if(a&&c){if(this.prev<o.catchLoc)return t(o.catchLoc,!0);if(this.prev<o.finallyLoc)return t(o.finallyLoc)}else if(a){if(this.prev<o.catchLoc)return t(o.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return t(o.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;0<=n;--n){var r=this.tryEntries[n];if(r.tryLoc<=this.prev&&u.call(r,"finallyLoc")&&this.prev<r.finallyLoc){var o=r;break}}var i=(o=o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc?null:o)?o.completion:{};return i.type=t,i.arg=e,o?(this.method="next",this.next=o.finallyLoc,y):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),y},finish:function(t){for(var e=this.tryEntries.length-1;0<=e;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),P(n),y}},catch:function(t){for(var e=this.tryEntries.length-1;0<=e;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r,o=n.completion;return"throw"===o.type&&(r=o.arg,P(n)),r}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,n){return this.delegate={iterator:_(t),resultName:e,nextLoc:n},"next"===this.method&&(this.arg=s),y}},a}(e.exports);try{regeneratorRuntime=e}catch(t){"object"==typeof globalThis?globalThis.regeneratorRuntime=e:Function("r","regeneratorRuntime = r")(e)}}),p="LikeCoin WordPress Plugin",r=document.querySelector("#lcTitleStatus"),S=document.querySelector("#lcISCNStatus");function I(t,e){var n=e.text,r=e.className,o=e.id,i=e.rel,a=e.target,e=e.href,t=document.createElement(t);return n&&(t.innerText=n),o&&t.setAttribute("id",o),r&&t.setAttribute("class",r),i&&t.setAttribute("rel",i),a&&t.setAttribute("target",a),e&&t.setAttribute("href",e),t}var o=lcStringInfo,i=o.mainStatusLoading,a=o.mainStatusFailedPopUp,c=o.mainStatusLIKEPay,e=o.mainStatusUploadArweave,s=o.mainStatusRegisterISCN,x=o.buttonSubmitISCN,b=o.buttonRegisterISCN,P=o.buttonUpdateISCN,E=o.draft,u={loading:i,failedPopup:a,onLIKEPay:c,onUploadArweave:e,onRegisterISCN:s},f="https://".concat(window.wpApiSettings.likecoHost);function _(t,e){r.textContent="";t=I("h1",{text:" · ",className:t}),e=I("h3",{text:e,className:"iscn-status-text"});r.appendChild(t),r.appendChild(e)}function N(t){return u[t]||"-"}function T(t,e){t&&(t.textContent="",t.appendChild(e))}function k(t,e){T(t,I("p",{text:e}))}function l(t){return h.apply(this,arguments)}function h(){return(h=n(w.mark(function t(e){var n,r,o,i,a,c,s,u,l,p,f,h,d,y,m,g,v;return w.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return e&&e.preventDefault(),n=document.querySelector("#lcMattersStatus"),r=document.querySelector("#lcArweaveStatus"),o=document.querySelector("#lcIPFSStatus"),h=lcPostInfo,i=h.iscnHash,a=h.iscnId,c=h.isMattersPublished,s=h.lastModifiedTime,u=h.iscnTimestamp,t.next=7,jQuery.ajax({type:"POST",url:"".concat(wpApiSettings.root,"likecoin/v1/posts/").concat(wpApiSettings.postId,"/iscn/refresh"),method:"POST",beforeSend:function(t){t.setRequestHeader("X-WP-Nonce",wpApiSettings.nonce)}});case 7:l=t.sent,g=l.matters,m=l.ipfs,d=l.arweave,h=l.wordpress_published,lcPostInfo.isMattersPublished=l.matters.status,lcPostInfo.mattersIPFSHash=l.matters.ipfs_hash,i&&a&&(p=encodeURIComponent(a),_("iscn-status-green",lcStringInfo.mainTitleDone),f=I("a",{text:a,rel:"noopener",target:"_blank",href:"https://app.".concat(window.wpApiSettings.likecoHost,"/view/").concat(p)}),T(S,f)),"publish"!==h||"initial"!==lcPostInfo.mainStatus&&!lcPostInfo.mainStatus.includes("failed")||a&&!(u<s)?"publish"!==h?(_("iscn-status-red",lcStringInfo.mainTitleDraft),(p=I("button",{text:x,className:"button button-primary",id:"lcArweaveUploadBtn"})).disabled="disabled",f=I("p",{text:lcStringInfo.mainTitleDraft}),(h=document.createElement("div")).appendChild(p),h.appendChild(f),T(S,h)):(_("iscn-status-orange",lcStringInfo.mainTitleIntermediate),k(S,N(lcPostInfo.mainStatus))):(_("iscn-status-orange",lcStringInfo.mainTitleIntermediate),y=d.url?b:x,y=I("button",{text:y=a?P:y,className:"button button-primary",id:"lcArweaveUploadBtn"}),T(S,y),y.addEventListener("click",L)),d.url&&(y=d.url,d=d.arweave_id,y=I("a",{text:d,rel:"noopener",target:"_blank",href:y}),T(r,y)),m.url&&(v=m.url,m=m.hash,v=I("a",{text:m,rel:"noopener",target:"_blank",href:v}),T(o,v)),g.url&&(v=g.url,g=g.article_id,v="Published"===c?I("a",{text:g,rel:"noopener",target:"_blank",href:v}):0!==g.length?I("a",{text:E,rel:"noopener",target:"_blank",href:v}):I("p",{text:"-"}),T(n,v));case 17:case"end":return t.stop()}},t)}))).apply(this,arguments)}function d(t){return y.apply(this,arguments)}function y(){return(y=n(w.mark(function t(e){var n,r,o;return w.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(e.origin!==f)return t.abrupt("return");t.next=2;break;case 2:try{n=JSON.parse(e.data),r=n.action,o=n.data,"ISCN_WIDGET_READY"===r?function(){A.apply(this,arguments)}():"ARWEAVE_SUBMITTED"===r?function(){m.apply(this,arguments)}(o):"ISCN_SUBMITTED"===r?function(){g.apply(this,arguments)}(o):console.warn("Unknown event: ".concat(r))}catch(t){console.error(t)}case 3:case"end":return t.stop()}},t)}))).apply(this,arguments)}function m(){return(m=n(w.mark(function t(e){var n,r;return w.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(n=e.ipfsHash,r=e.arweaveId,n&&r)return lcPostInfo.arweaveIPFSHash=n,lcPostInfo.arweaveId=r,k(S,N(lcPostInfo.mainStatus)),r={arweaveIPFSHash:n,arweaveId:r},t.prev=6,t.next=9,jQuery.ajax({type:"POST",url:"".concat(wpApiSettings.root,"likecoin/v1/posts/").concat(wpApiSettings.postId,"/iscn/arweave"),dataType:"json",contentType:"application/json; charset=UTF-8",data:JSON.stringify(r),method:"POST",beforeSend:function(t){t.setRequestHeader("X-WP-Nonce",wpApiSettings.nonce)}});t.next=18;break;case 9:t.next=14;break;case 11:t.prev=11,t.t0=t.catch(6),console.error(t.t0);case 14:return t.prev=14,t.next=17,l();case 17:return t.finish(14);case 18:case"end":return t.stop()}},t,null,[[6,11,14,18]])}))).apply(this,arguments)}function g(){return(g=n(w.mark(function t(e){var n,r,o,i;return w.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(lcPostInfo.mainStatus="onRegisterISCN",t.prev=1,n=e.tx_hash,r=e.error,o=e.success,i=e.iscnId,r||!1===o)throw new Error("REGISTER_ISCN_SERVER_ERROR");t.next=5;break;case 5:return t.next=7,jQuery.ajax({type:"POST",url:"".concat(wpApiSettings.root,"likecoin/v1/posts/").concat(wpApiSettings.postId,"/iscn/metadata"),dataType:"json",contentType:"application/json; charset=UTF-8",data:JSON.stringify({iscnHash:n,iscnId:i}),method:"POST",beforeSend:function(t){t.setRequestHeader("X-WP-Nonce",wpApiSettings.nonce)}});case 7:lcPostInfo.iscnHash=n,lcPostInfo.iscnId=i,lcPostInfo.mainStatus="done",t.next=16;break;case 12:t.prev=12,t.t0=t.catch(1),console.error(t.t0),lcPostInfo.mainStatus="failed";case 16:return t.prev=16,t.next=19,l();case 19:return t.finish(16);case 20:case"end":return t.stop()}},t,null,[[1,12,16,20]])}))).apply(this,arguments)}function L(t){return v.apply(this,arguments)}function v(){return(v=n(w.mark(function t(e){var n,r;return w.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(e&&e.preventDefault(),n=wpApiSettings,r=n.siteurl,lcPostInfo.mainStatus="onRegisterISCN",k(S,N(lcPostInfo.mainStatus)),n=encodeURIComponent(r),r=encodeURIComponent(lcPostInfo.iscnId||""),r="".concat(f,"/in/widget/iscn-ar?opener=1&blocking=1&mint=1&redirect_uri=").concat(n,"&iscn_id=").concat(r),!(r=window.open(r,"likeCoISCNWindow","menubar=no,location=no,width=576,height=768"))||r.closed||void 0===r.closed)return lcPostInfo.mainStatus="failedPopup",k(S,N(lcPostInfo.mainStatus)),t.abrupt("return");t.next=12;break;case 12:lcPostInfo.ISCNWindow=r,lcPostInfo.mainStatus="initial",window.addEventListener("message",d,!1);case 15:case"end":return t.stop()}},t)}))).apply(this,arguments)}function A(){return(A=n(w.mark(function t(){var e,n,r,o,i,a,c,s,u,l;return w.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(l=lcPostInfo,e=l.ISCNWindow){t.next=3;break}throw new Error("POPUP_WINDOW_NOT_FOUND");case 3:return e.postMessage(JSON.stringify({action:"INIT_WIDGET"}),f),t.prev=4,t.next=7,jQuery.ajax({type:"GET",url:"".concat(wpApiSettings.root,"likecoin/v1/posts/").concat(wpApiSettings.postId,"/iscn/arweave/upload"),dataType:"json",method:"GET",beforeSend:function(t){t.setRequestHeader("X-WP-Nonce",wpApiSettings.nonce)}});case 7:u=t.sent,n=u.files,r=u.title,o=u.tags,i=u.url,a=u.author,c=u.authorDescription,s=u.description,l=u.mattersIPFSHash,u=[],l&&(l="ipfs://".concat(l),u.push(l)),e.postMessage(JSON.stringify({action:"SUBMIT_ISCN_DATA",data:{files:n,metadata:{name:r,tags:o,url:i,author:a,authorDescription:c,description:s,fingerprints:u,type:"article",license:"",recordNotes:p,memo:p}}}),f),t.next=19;break;case 14:t.prev=14,t.t0=t.catch(4),console.error("error occured when submitting ISCN:"),console.error(t.t0),lcPostInfo.mainStatus="failed";case 19:case"end":return t.stop()}},t,null,[[4,14]])}))).apply(this,arguments)}(s=document.getElementById("lcPublishRefreshBtn"))&&s.addEventListener("click",l),l()}();
//# sourceMappingURL=likecoin_metabox.js.map
