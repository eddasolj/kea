function t(n,e=window.parent){!function(t,n=window.parent){window.self!==window.top&&n.postMessage(JSON.stringify(t),"*")}(n),e!==e.top&&t(n,e.parent)}function n(){}function e(t){return t()}function o(){return Object.create(null)}function i(t){t.forEach(e)}function s(t){return"function"==typeof t}function c(t,n){return t!=t?n==n:t!==n||t&&"object"==typeof t||"function"==typeof t}function r(t,e,o){t.$$.on_destroy.push(function(t,...e){if(null==t)return n;const o=t.subscribe(...e);return o.unsubscribe?()=>o.unsubscribe():o}(e,o))}function a(t,n){t.appendChild(n)}function l(t,n,e){t.insertBefore(n,e||null)}function u(t){t.parentNode.removeChild(t)}function d(t){return document.createElement(t)}function p(t){return document.createTextNode(t)}function f(t,n,e,o){return t.addEventListener(n,e,o),()=>t.removeEventListener(n,e,o)}function h(t,n,e){null==e?t.removeAttribute(n):t.getAttribute(n)!==e&&t.setAttribute(n,e)}let m;function $(t){m=t}function y(t,n){const e=t.$$.callbacks[n.type];e&&e.slice().forEach(t=>t.call(this,n))}const b=[],g=[],x=[],w=[],v=Promise.resolve();let T=!1;function k(t){x.push(t)}const _=new Set;let C=0;function O(){const t=m;do{for(;C<b.length;){const t=b[C];C++,$(t),E(t.$$)}for($(null),b.length=0,C=0;g.length;)g.pop()();for(let t=0;t<x.length;t+=1){const n=x[t];_.has(n)||(_.add(n),n())}x.length=0}while(b.length);for(;w.length;)w.pop()();T=!1,_.clear(),$(t)}function E(t){if(null!==t.fragment){t.update(),i(t.before_update);const n=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,n),t.after_update.forEach(k)}}const I=new Set;let A;function L(t,n){t&&t.i&&(I.delete(t),t.i(n))}function P(t,n,e,o){if(t&&t.o){if(I.has(t))return;I.add(t),A.c.push(()=>{I.delete(t),o&&(e&&t.d(1),o())}),t.o(n)}}function N(t){t&&t.c()}function R(t,n,o,c){const{fragment:r,on_mount:a,on_destroy:l,after_update:u}=t.$$;r&&r.m(n,o),c||k(()=>{const n=a.map(e).filter(s);l?l.push(...n):i(n),t.$$.on_mount=[]}),u.forEach(k)}function S(t,n){const e=t.$$;null!==e.fragment&&(i(e.on_destroy),e.fragment&&e.fragment.d(n),e.on_destroy=e.fragment=null,e.ctx=[])}function j(t,n){-1===t.$$.dirty[0]&&(b.push(t),T||(T=!0,v.then(O)),t.$$.dirty.fill(0)),t.$$.dirty[n/31|0]|=1<<n%31}function q(t,e,s,c,r,a,l,d=[-1]){const p=m;$(t);const f=t.$$={fragment:null,ctx:null,props:a,update:n,not_equal:r,bound:o(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(p?p.$$.context:[])),callbacks:o(),dirty:d,skip_bound:!1,root:e.target||p.$$.root};l&&l(f.root);let h=!1;if(f.ctx=s?s(t,e.props||{},(n,e,...o)=>{const i=o.length?o[0]:e;return f.ctx&&r(f.ctx[n],f.ctx[n]=i)&&(!f.skip_bound&&f.bound[n]&&f.bound[n](i),h&&j(t,n)),e}):[],f.update(),h=!0,i(f.before_update),f.fragment=!!c&&c(f.ctx),e.target){if(e.hydrate){const t=function(t){return Array.from(t.childNodes)}(e.target);f.fragment&&f.fragment.l(t),t.forEach(u)}else f.fragment&&f.fragment.c();e.intro&&L(t.$$.fragment),R(t,e.target,e.anchor,e.customElement),O()}$(p)}class z{$destroy(){S(this,1),this.$destroy=n}$on(t,n){const e=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return e.push(n),()=>{const t=e.indexOf(n);-1!==t&&e.splice(t,1)}}$set(t){var n;this.$$set&&(n=t,0!==Object.keys(n).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}const M=[];const D=function(t,e=n){let o;const i=new Set;function s(n){if(c(t,n)&&(t=n,o)){const n=!M.length;for(const n of i)n[1](),M.push(n,t);if(n){for(let t=0;t<M.length;t+=2)M[t][0](M[t+1]);M.length=0}}}return{set:s,update:function(n){s(n(t))},subscribe:function(c,r=n){const a=[c,r];return i.add(a),1===i.size&&(o=e(s)||n),c(t),()=>{i.delete(a),0===i.size&&(o(),o=null)}}}}({i18n:{},uiLang:""});function B(t){let e,o,s,c,r,m,$;return{c(){e=d("button"),o=d("span"),s=d("span"),c=p(t[3]),h(s,"class",t[12]),h(o,"class","prom-button__text"),h(e,"aria-haspopup",t[6]),h(e,"id",t[1]),h(e,"type",t[5]),h(e,"class",r="prom-button prom-button__"+t[0]+" "+t[2]+" "+t[10]+" "+t[11]),e.disabled=t[4],h(e,"data-active",t[9]),h(e,"aria-describedby",t[7])},m(n,i){l(n,e,i),a(e,o),a(o,s),a(s,c),t[21](e),m||($=[f(e,"click",t[16]),f(e,"focus",t[17]),f(e,"blur",t[18]),f(e,"keyup",t[19]),f(e,"keydown",t[20])],m=!0)},p(t,[n]){8&n&&function(t,n){n=""+n,t.wholeText!==n&&(t.data=n)}(c,t[3]),4096&n&&h(s,"class",t[12]),64&n&&h(e,"aria-haspopup",t[6]),2&n&&h(e,"id",t[1]),32&n&&h(e,"type",t[5]),3077&n&&r!==(r="prom-button prom-button__"+t[0]+" "+t[2]+" "+t[10]+" "+t[11])&&h(e,"class",r),16&n&&(e.disabled=t[4]),512&n&&h(e,"data-active",t[9]),128&n&&h(e,"aria-describedby",t[7])},i:n,o:n,d(n){n&&u(e),t[21](null),m=!1,i($)}}}function G(t,n,e){let o,i,s,c,r,{type:a="basic"}=n,{iconOnly:l=!1}=n,{id:u="rnd"+Math.random().toString(36).substring(7)}=n,{cssClass:d=""}=n,{text:p=""}=n,{large:f=!1}=n,{disabled:h=!1}=n,{loading:m=!1}=n,{htmlType:$="submit"}=n,{haspopup:b=!1}=n,{describedby:x}=n;return t.$$set=t=>{"type"in t&&e(0,a=t.type),"iconOnly"in t&&e(13,l=t.iconOnly),"id"in t&&e(1,u=t.id),"cssClass"in t&&e(2,d=t.cssClass),"text"in t&&e(3,p=t.text),"large"in t&&e(14,f=t.large),"disabled"in t&&e(4,h=t.disabled),"loading"in t&&e(15,m=t.loading),"htmlType"in t&&e(5,$=t.htmlType),"haspopup"in t&&e(6,b=t.haspopup),"describedby"in t&&e(7,x=t.describedby)},t.$$.update=()=>{8192&t.$$.dirty&&e(12,o=l?"prom-button__text--hidden":""),16384&t.$$.dirty&&e(11,i=f?"prom-button--large":""),32768&t.$$.dirty&&e(10,s=m?"prom-button--loading":""),32784&t.$$.dirty&&e(9,c=!m&&!h)},[a,u,d,p,h,$,b,x,r,c,s,i,o,l,f,m,function(n){y.call(this,t,n)},function(n){y.call(this,t,n)},function(n){y.call(this,t,n)},function(n){y.call(this,t,n)},function(n){y.call(this,t,n)},function(t){g[t?"unshift":"push"](()=>{r=t,e(8,r)})}]}class V extends z{constructor(t){super(),q(this,t,G,B,c,{type:0,iconOnly:13,id:1,cssClass:2,text:3,large:14,disabled:4,loading:15,htmlType:5,haspopup:6,describedby:7})}}function F(t){let n,e,o={cssClass:"prom-icon-button "+t[14]+" "+t[12]+" "+t[3],disabled:t[0],haspopup:t[1],iconOnly:t[4],id:t[5],large:t[6],loading:t[7],text:t[8],type:t[10],htmlType:t[2]};return n=new V({props:o}),t[28](n),n.$on("blur",t[29]),n.$on("click",t[30]),n.$on("focus",t[31]),n.$on("keyup",t[32]),n.$on("keydown",t[33]),{c(){N(n.$$.fragment)},m(t,o){R(n,t,o),e=!0},p(t,e){const o={};20488&e[0]&&(o.cssClass="prom-icon-button "+t[14]+" "+t[12]+" "+t[3]),1&e[0]&&(o.disabled=t[0]),2&e[0]&&(o.haspopup=t[1]),16&e[0]&&(o.iconOnly=t[4]),32&e[0]&&(o.id=t[5]),64&e[0]&&(o.large=t[6]),128&e[0]&&(o.loading=t[7]),256&e[0]&&(o.text=t[8]),1024&e[0]&&(o.type=t[10]),4&e[0]&&(o.htmlType=t[2]),n.$set(o)},i(t){e||(L(n.$$.fragment,t),e=!0)},o(t){P(n.$$.fragment,t),e=!1},d(e){t[28](null),S(n,e)}}}function J(t){let n,e,o={cssClass:"prom-icon-button "+t[13],disabled:t[0],haspopup:t[1],iconOnly:t[4],id:t[5],large:t[6],loading:t[7],text:t[8],type:t[10],htmlType:t[2]};return n=new V({props:o}),t[22](n),n.$on("blur",t[23]),n.$on("click",t[24]),n.$on("focus",t[25]),n.$on("keyup",t[26]),n.$on("keydown",t[27]),{c(){N(n.$$.fragment)},m(t,o){R(n,t,o),e=!0},p(t,e){const o={};8192&e[0]&&(o.cssClass="prom-icon-button "+t[13]),1&e[0]&&(o.disabled=t[0]),2&e[0]&&(o.haspopup=t[1]),16&e[0]&&(o.iconOnly=t[4]),32&e[0]&&(o.id=t[5]),64&e[0]&&(o.large=t[6]),128&e[0]&&(o.loading=t[7]),256&e[0]&&(o.text=t[8]),1024&e[0]&&(o.type=t[10]),4&e[0]&&(o.htmlType=t[2]),n.$set(o)},i(t){e||(L(n.$$.fragment,t),e=!0)},o(t){P(n.$$.fragment,t),e=!1},d(e){t[22](null),S(n,e)}}}function U(t){let n,e,o={cssClass:"prom-icon-button "+t[12]+" "+t[3],disabled:t[0],haspopup:t[1],id:t[5],large:t[6],loading:t[7],text:t[8],type:t[10],htmlType:t[2]};return n=new V({props:o}),t[16](n),n.$on("blur",t[17]),n.$on("click",t[18]),n.$on("focus",t[19]),n.$on("keyup",t[20]),n.$on("keydown",t[21]),{c(){N(n.$$.fragment)},m(t,o){R(n,t,o),e=!0},p(t,e){const o={};4104&e[0]&&(o.cssClass="prom-icon-button "+t[12]+" "+t[3]),1&e[0]&&(o.disabled=t[0]),2&e[0]&&(o.haspopup=t[1]),32&e[0]&&(o.id=t[5]),64&e[0]&&(o.large=t[6]),128&e[0]&&(o.loading=t[7]),256&e[0]&&(o.text=t[8]),1024&e[0]&&(o.type=t[10]),4&e[0]&&(o.htmlType=t[2]),n.$set(o)},i(t){e||(L(n.$$.fragment,t),e=!0)},o(t){P(n.$$.fragment,t),e=!1},d(e){t[16](null),S(n,e)}}}function Z(t){let n,e,o,s;const c=[U,J,F],r=[];function a(t,n){return t[9]&&t[4]?0:t[9]?1:2}return n=a(t),e=r[n]=c[n](t),{c(){e.c(),o=p("")},m(t,e){r[n].m(t,e),l(t,o,e),s=!0},p(t,s){let l=n;n=a(t),n===l?r[n].p(t,s):(A={r:0,c:[],p:A},P(r[l],1,1,()=>{r[l]=null}),A.r||i(A.c),A=A.p,e=r[n],e?e.p(t,s):(e=r[n]=c[n](t),e.c()),L(e,1),e.m(o.parentNode,o))},i(t){s||(L(e),s=!0)},o(t){P(e),s=!1},d(t){r[n].d(t),t&&u(o)}}}function H(t,n,e){let o,i,s,c,{disabled:r=!1}=n,{haspopup:a=!1}=n,{htmlType:l="submit"}=n,{iconClass:u=""}=n,{iconOnly:d=!1}=n,{iconPlacement:p="start"}=n,{id:f=""}=n,{large:h=!1}=n,{loading:m=!1}=n,{text:$=""}=n,{textOnly:b=!1}=n,{type:x="basic"}=n;return t.$$set=t=>{"disabled"in t&&e(0,r=t.disabled),"haspopup"in t&&e(1,a=t.haspopup),"htmlType"in t&&e(2,l=t.htmlType),"iconClass"in t&&e(3,u=t.iconClass),"iconOnly"in t&&e(4,d=t.iconOnly),"iconPlacement"in t&&e(15,p=t.iconPlacement),"id"in t&&e(5,f=t.id),"large"in t&&e(6,h=t.large),"loading"in t&&e(7,m=t.loading),"text"in t&&e(8,$=t.text),"textOnly"in t&&e(9,b=t.textOnly),"type"in t&&e(10,x=t.type)},t.$$.update=()=>{528&t.$$.dirty[0]&&d&&b&&console.warn("The attributes iconOnly and textOnly cannot be both set to false."),32768&t.$$.dirty[0]&&(!p||"string"!=typeof p||"start"!==p&&"end"!==p)&&console.warn('Valid values for iconPlacement is "start" and "end".'),16&t.$$.dirty[0]&&e(14,o=d?"prom-icon-button--icon-only":""),512&t.$$.dirty[0]&&e(13,i=b?"prom-icon-button--text-only":""),32768&t.$$.dirty[0]&&e(12,s="end"===p?"prom-icon-button--icon-end":"")},[r,a,l,u,d,f,h,m,$,b,x,c,s,i,o,p,function(t){g[t?"unshift":"push"](()=>{c=t,e(11,c)})},function(n){y.call(this,t,n)},function(n){y.call(this,t,n)},function(n){y.call(this,t,n)},function(n){y.call(this,t,n)},function(n){y.call(this,t,n)},function(t){g[t?"unshift":"push"](()=>{c=t,e(11,c)})},function(n){y.call(this,t,n)},function(n){y.call(this,t,n)},function(n){y.call(this,t,n)},function(n){y.call(this,t,n)},function(n){y.call(this,t,n)},function(t){g[t?"unshift":"push"](()=>{c=t,e(11,c)})},function(n){y.call(this,t,n)},function(n){y.call(this,t,n)},function(n){y.call(this,t,n)},function(n){y.call(this,t,n)},function(n){y.call(this,t,n)}]}class K extends z{constructor(t){super(),q(this,t,H,Z,c,{disabled:0,haspopup:1,htmlType:2,iconClass:3,iconOnly:4,iconPlacement:15,id:5,large:6,loading:7,text:8,textOnly:9,type:10},null,[-1,-1])}}const Q=(t,n)=>`/restapi/personal/immersivereader/v1?ResourceType=${t}&ResourceId=${n}`,W=".immersive-reader";class X extends Error{constructor(t,n){super(t),this.response=n}}const Y=Object.freeze({ok:200,created:201,accepted:202,nonAuthoritativeInformation:203,noContent:204,resetContent:205,partialContent:206,multipleChoices:300,movedPermanently:301,found:302,seeOther:303,notModified:304,useProxy:305,temporaryRedirect:307,badRequest:400,unauthorized:401,paymentRequired:402,forbidden:403,notFound:404,methodNotAllowed:405,notAcceptable:406,proxyAuthenticationRequired:407,requestTimeout:408,conflict:409,gone:410,internalServerError:500,notImplemented:501,badGateway:502,serviceUnavailable:503,gatewayTimeout:504,httpVersionNotSupported:505});function tt(t){if(!t.ok)throw new X(t.statusText,t);return t.status===Y.noContent?new Promise(t=>t(void 0)):t.clone().json().catch(()=>t.text())}const nt=function(t,n={}){return new Promise((e,o)=>{fetch(t,function(t,n,e){return{method:t,mode:void 0!==e.mode?e.mode:"cors",cache:void 0!==e.cache?e.cache:"default",credentials:void 0!==e.credentials?e.credentials:"same-origin",headers:Object.assign({"Content-Type":"application/json; charset=utf-8"},e.headers),body:n}}("GET",void 0,n)).then(tt).then(e).catch(o)})};function et(t){let n,e;return n=new K({props:{text:t[0].i18n.ImmersiveReaderName,class:"immersive-reader",iconClass:"immersive-reader-icon",htmlType:"button"}}),n.$on("click",t[1]),{c(){N(n.$$.fragment)},m(t,o){R(n,t,o),e=!0},p(t,[e]){const o={};1&e&&(o.text=t[0].i18n.ImmersiveReaderName),n.$set(o)},i(t){e||(L(n.$$.fragment,t),e=!0)},o(t){P(n.$$.fragment,t),e=!1},d(t){S(n,t)}}}function ot(t,n,e){let o;r(t,D,t=>e(0,o=t));let{resourceType:i}=n,{resourceId:s}=n;return t.$$set=t=>{"resourceType"in t&&e(2,i=t.resourceType),"resourceId"in t&&e(3,s=t.resourceId)},[o,function(){(function(t,n){return nt(Q(t,n))})(i,s).then(t=>{const n={accessToken:(e=t).AccessToken,subDomain:e.SubDomain,content:{title:e.Title,chunks:[{content:e.Text}]},zindex:{uiZIndex:1e6}};var e;const i={uiLang:o.uiLang};window.ImmersiveReader.launchAsync(n.accessToken,n.subDomain,n.content,i)})},i,s]}class it extends z{constructor(t){super(),q(this,t,ot,et,c,{resourceType:2,resourceId:3})}}document.addEventListener("DOMContentLoaded",(function(){(()=>{const n=navigator.userAgent.toLowerCase().match(/(iphone|ipod|ipad)/);document.addEventListener("click",t("iframeClickBubble")),n||document.addEventListener("touchstart",t("iframeTouchstartBubble"))})();const n=window["immersive-reader-configuration"];D.set({...n});const e=document.querySelector(W);if(e){const t=e.attributes["data-resource-type"].value,n=parseInt(e.attributes["data-resource-id"].value);new it({target:e,props:{resourceType:t,resourceId:n}})}}));
//# sourceMappingURL=index.bundle.js.map
