/*
 * For font license information, see the CSS file loaded by this JavaScript.
 */
if(!window.Typekit)window.Typekit={};window.Typekit.config={"a":"66976","c":[".tk-brandon-grotesque","\"brandon-grotesque\",sans-serif"],"f":"//use.typekit.net/c/a46a56/1w;brandon-grotesque,7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191,Y2j:R:n3,Y2q:R:n7/{format}{/extras*}?3bb2a6e53c9684ffdc9a9bf51d5b2a62c96de82d85c740a9a6cf00238e44787a1a4f864b491e2f1e26b6913ab05f130bafff4e23c294a6dbb4581a8ed4c6930450e4b06062a1b3aef91b6014752c0ea1fa2cd055de4cf53f147abdadcae15040531d744d7ab0eeaa4d8e712145c1323d9142527c8a9e8fb034aaaae0dfe44191aaa3a27ddd6743d215","fi":[10296,10300],"fn":["brandon-grotesque",["n3","n7"]],"ht":"tk","js":"1.14.4","k":"//use.typekit.net/{id}.js","kt":"yjz4fyo","l":"typekit","p":"//p.typekit.net/p.gif?s=1&k=yjz4fyo&ht=tk&h={host}&f=10296.10300&a=66976&_={_}","ps":1,"w":"yjz4fyo"};
/*{"k":"1.14.4","auto_updating":true}*/
;(function(window,document,undefined){
function aa(a,b,c){return a.call.apply(a.bind,arguments)}function ba(a,b,c){if(!a)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var c=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(c,d);return a.apply(b,c)}}return function(){return a.apply(b,arguments)}}function h(a,b,c){h=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?aa:ba;return h.apply(null,arguments)}var ca=Date.now||function(){return+new Date};
function da(a,b){this.wa=a;this.T=b||a;this.C=this.T.document}var ea=!!window.FontFace;da.prototype.createElement=function(a,b,c){a=this.C.createElement(a);if(b)for(var d in b)b.hasOwnProperty(d)&&("style"==d?a.style.cssText=b[d]:a.setAttribute(d,b[d]));c&&a.appendChild(this.C.createTextNode(c));return a};function fa(a,b,c){a=a.C.getElementsByTagName(b)[0];a||(a=document.documentElement);a.insertBefore(c,a.lastChild)}function ga(a,b){function c(){a.C.body?b():setTimeout(c,0)}c()}
function m(a,b,c){b=b||[];c=c||[];for(var d=a.className.split(/\s+/),e=0;e<b.length;e+=1){for(var f=!1,g=0;g<d.length;g+=1)if(b[e]===d[g]){f=!0;break}f||d.push(b[e])}b=[];for(e=0;e<d.length;e+=1){f=!1;for(g=0;g<c.length;g+=1)if(d[e]===c[g]){f=!0;break}f||b.push(d[e])}a.className=b.join(" ").replace(/\s+/g," ").replace(/^\s+|\s+$/,"")}function ha(a,b){for(var c=a.className.split(/\s+/),d=0,e=c.length;d<e;d++)if(c[d]==b)return!0;return!1}
function ia(a){if("string"===typeof a.Ja)return a.Ja;var b=a.T.location.protocol;"about:"==b&&(b=a.wa.location.protocol);return"https:"==b?"https:":"http:"}function ja(a){return a.T.location.hostname||a.wa.location.hostname}
function ka(a,b,c,d){function e(){K&&q&&A&&(K(B),K=null)}function f(a){for(var c=0;c<k.length;c++)if(k[c].href&&-1!==k[c].href.indexOf(b)){a();return}setTimeout(function(){f(a)},0)}function g(a){for(var c=0;c<k.length;c++)if(k[c].href&&-1!==k[c].href.indexOf(b)&&(k[c].media&&"all"===k[c].media||"all"===k[c].media.mediaText)){a();return}setTimeout(function(){g(a)},0)}var l=a.createElement("link",{rel:"stylesheet",href:b,media:d?"only x":"all"}),k=a.C.styleSheets,q=!1,A=!d,B=null,K=c||null;ea?(l.onload=
function(){q=!0;e()},l.onerror=function(){q=!0;B=Error("Stylesheet failed to load");e()}):setTimeout(function(){q=!0;e()},0);fa(a,"head",l);d&&f(function(){l.media="all";g(function(){A=!0;e()})})}
function la(a,b,c){var d=a.C.getElementsByTagName("head")[0];if(d){var e=a.createElement("script",{src:b}),f=!1;e.onload=e.onreadystatechange=function(){f||this.readyState&&"loaded"!=this.readyState&&"complete"!=this.readyState||(f=!0,c&&c(null),e.onload=e.onreadystatechange=null,"HEAD"==e.parentNode.tagName&&d.removeChild(e))};d.appendChild(e);setTimeout(function(){f||(f=!0,c&&c(Error("Script load timeout")))},5E3)}}function ma(a){this.Ha=a||"-"}
ma.prototype.h=function(a){for(var b=[],c=0;c<arguments.length;c++)b.push(arguments[c].replace(/[\W_]+/g,"").toLowerCase());return b.join(this.Ha)};function na(a,b){this.e=a;this.v=a.T.document.documentElement;this.ea=b;this.q="wf";this.o=new ma("-");this.Fa=!1!==b.events;this.J=!1!==b.classes}function oa(a){if(a.J){var b=ha(a.v,a.o.h(a.q,"active")),c=[],d=[a.o.h(a.q,"loading")];b||c.push(a.o.h(a.q,"inactive"));m(a.v,c,d)}n(a,"inactive")}
function n(a,b,c){if(a.Fa&&a.ea[b])if(c)a.ea[b](c.getName(),p(c));else a.ea[b]()}function r(a,b){this.U=a;this.da=4;this.ca="n";var c=(b||"n4").match(/^([nio])([1-9])$/i);c&&(this.ca=c[1],this.da=parseInt(c[2],10))}r.prototype.getName=function(){return this.U};function pa(a){return qa(a)+" "+(a.da+"00")+" 300px "+ra(a.U)}
function ra(a){var b=[];a=a.split(/,\s*/);for(var c=0;c<a.length;c++){var d=a[c].replace(/['"]/g,"");-1!=d.indexOf(" ")||/^\d/.test(d)?b.push("'"+d+"'"):b.push(d)}return b.join(",")}function p(a){return a.ca+a.da}function qa(a){var b="normal";"o"===a.ca?b="oblique":"i"===a.ca&&(b="italic");return b}function t(a,b){this.e=a;this.B=b;this.s=this.e.createElement("span",{"aria-hidden":"true"},this.B)}function u(a){fa(a.e,"body",a.s)}
function v(a){return"display:block;position:absolute;top:-9999px;left:-9999px;font-size:300px;width:auto;height:auto;line-height:normal;margin:0;padding:0;font-variant:normal;white-space:nowrap;font-family:"+ra(a.U)+";"+("font-style:"+qa(a)+";font-weight:"+(a.da+"00")+";")}t.prototype.remove=function(){var a=this.s;a.parentNode&&a.parentNode.removeChild(a)};
function sa(a,b,c,d,e,f,g){this.X=a;this.aa=b;this.e=c;this.p=d;this.B=g||"BESbswy";this.I={};this.L=e||3E3;this.xa=f||null;this.S=this.R=this.Q=this.P=null;this.P=new t(this.e,this.B);this.Q=new t(this.e,this.B);this.R=new t(this.e,this.B);this.S=new t(this.e,this.B);a=new r(this.p.getName()+",serif",p(this.p));a=v(a);this.P.s.style.cssText=a;a=new r(this.p.getName()+",sans-serif",p(this.p));a=v(a);this.Q.s.style.cssText=a;a=new r("serif",p(this.p));a=v(a);this.R.s.style.cssText=a;a=new r("sans-serif",
p(this.p));a=v(a);this.S.s.style.cssText=a;u(this.P);u(this.Q);u(this.R);u(this.S)}var x={Ua:"serif",Ta:"sans-serif"},ta=null;function ua(){if(null===ta){var a=/AppleWebKit\/([0-9]+)(?:\.([0-9]+))/.exec(window.navigator.userAgent);ta=!!a&&(536>parseInt(a[1],10)||536===parseInt(a[1],10)&&11>=parseInt(a[2],10))}return ta}sa.prototype.start=function(){this.I.serif=this.R.s.offsetWidth;this.I["sans-serif"]=this.S.s.offsetWidth;this.Ma=ca();va(this)};
function wa(a,b,c){for(var d in x)if(x.hasOwnProperty(d)&&b===a.I[x[d]]&&c===a.I[x[d]])return!0;return!1}function va(a){var b=a.P.s.offsetWidth,c=a.Q.s.offsetWidth,d;(d=b===a.I.serif&&c===a.I["sans-serif"])||(d=ua()&&wa(a,b,c));d?ca()-a.Ma>=a.L?ua()&&wa(a,b,c)&&(null===a.xa||a.xa.hasOwnProperty(a.p.getName()))?xa(a,a.X):xa(a,a.aa):ya(a):xa(a,a.X)}function ya(a){setTimeout(h(function(){va(this)},a),50)}
function xa(a,b){setTimeout(h(function(){this.P.remove();this.Q.remove();this.R.remove();this.S.remove();b(this.p)},a),0)}function za(a,b,c,d,e,f){this.X=a;this.aa=b;this.p=d;this.e=c;this.L=e||3E3;this.B=f||void 0}za.prototype.start=function(){var a=this.e.T.document,b=this;Promise.race([new Promise(function(a,d){setTimeout(function(){d(b.p)},b.L)}),a.fonts.load(pa(this.p),this.B)]).then(function(a){1<=a.length?b.X(b.p):b.aa(b.p)},function(){b.aa(b.p)})};
function Aa(a,b,c){this.e=a;this.G=b;this.ga=0;this.Aa=this.va=!1;this.L=c}var y=null;Aa.prototype.qa=function(a){var b=this.G;b.J&&m(b.v,[b.o.h(b.q,a.getName(),p(a).toString(),"active")],[b.o.h(b.q,a.getName(),p(a).toString(),"loading"),b.o.h(b.q,a.getName(),p(a).toString(),"inactive")]);n(b,"fontactive",a);this.Aa=!0;Ba(this)};
Aa.prototype.ra=function(a){var b=this.G;if(b.J){var c=ha(b.v,b.o.h(b.q,a.getName(),p(a).toString(),"active")),d=[],e=[b.o.h(b.q,a.getName(),p(a).toString(),"loading")];c||d.push(b.o.h(b.q,a.getName(),p(a).toString(),"inactive"));m(b.v,d,e)}n(b,"fontinactive",a);Ba(this)};function Ba(a){0==--a.ga&&a.va&&(a.Aa?(a=a.G,a.J&&m(a.v,[a.o.h(a.q,"active")],[a.o.h(a.q,"loading"),a.o.h(a.q,"inactive")]),n(a,"active")):oa(a.G))}function Ca(){this.ka=0;this.ba=null}
function Da(a){a.ka++;return function(){a.ka--;Ea(a)}}function Fa(a,b){a.ba=b;Ea(a)}function Ea(a){0==a.ka&&a.ba&&(a.ba(),a.ba=null)}function z(){this.K=this.W=-1}z.prototype.now=function(){return(new Date).getTime()};z.prototype.start=function(){this.W=this.now();this.K=-1};z.prototype.stop=function(){this.K=this.now()};function Ga(){var a=[{name:"font-family",value:C.c[D+1]}];this.Ka=[C.c[D]];this.na=a}
function Ha(a){for(var b=a.Ka.join(","),c=[],d=0;d<a.na.length;d++){var e=a.na[d];c.push(e.name+":"+e.value+";")}return b+"{"+c.join("")+"}"}function E(a,b,c,d){this.n=null!=a?a:null;this.A=null!=b?b:null;this.V=null!=c?c:null;this.h=null!=d?d:null}var Ia=/^([0-9]+)(?:[\._-]([0-9]+))?(?:[\._-]([0-9]+))?(?:[\._+-]?(.*))?$/;
E.prototype.compare=function(a){return this.n>a.n||this.n===a.n&&this.A>a.A||this.n===a.n&&this.A===a.A&&this.V>a.V?1:this.n<a.n||this.n===a.n&&this.A<a.A||this.n===a.n&&this.A===a.A&&this.V<a.V?-1:0};function F(a,b){return-1===a.compare(b)}function G(a,b){return 0===a.compare(b)||1===a.compare(b)}function Ja(a,b){return 0===a.compare(b)||-1===a.compare(b)}function H(a,b){return 0===a.compare(b)}E.prototype.toString=function(){return[this.n,this.A||"",this.V||"",this.h||""].join("")};
function I(a){a=Ia.exec(a);var b=null,c=null,d=null,e=null;a&&(null!==a[1]&&a[1]&&(b=parseInt(a[1],10)),null!==a[2]&&a[2]&&(c=parseInt(a[2],10)),null!==a[3]&&a[3]&&(d=parseInt(a[3],10)),null!==a[4]&&a[4]&&(e=/^[0-9]+$/.test(a[4])?parseInt(a[4],10):a[4]));return new E(b,c,d,e)}function J(a,b,c,d,e,f,g){this.U=a;this.r=b;this.F=c;this.D=d;this.m=e;this.g=f;this.ha=g}J.prototype.getName=function(){return this.U};function Ka(a,b){this.b=a;this.N=b}
var La=new J("Unknown",new E,"Unknown",new E,"Unknown",new E,void 0);
Ka.prototype.parse=function(){var a;if(-1!=this.b.indexOf("MSIE")||-1!=this.b.indexOf("Trident/")){a=L(this);var b=I(M(this)),c=null,d=null,e=null,e=N(this.b,/Trident\/([\d\w\.]+)/,1),f=O(this.N),c=-1!=this.b.indexOf("MSIE")?I(N(this.b,/MSIE ([\d\w\.]+)/,1)):I(N(this.b,/rv:([\d\w\.]+)/,1));""!=e?(d="Trident",e=I(e)):(d="Unknown",e=new E);a=new J("MSIE",c,d,e,a,b,f)}else if(-1!=this.b.indexOf("Edge/"))a=L(this),b=I(M(this)),c=I(N(this.b,/Edge\/([\d\w\.]+)/,1)),a=new J("Edge",c,"Edge",c,a,b,O(this.N));
else if(-1!=this.b.indexOf("Opera"))a:if(a="Unknown",b=I(N(this.b,/Presto\/([\d\w\.]+)/,1)),c=I(M(this)),d=O(this.N),null!==b.n?a="Presto":(-1!=this.b.indexOf("Gecko")&&(a="Gecko"),b=I(N(this.b,/rv:([^\)]+)/,1))),-1!=this.b.indexOf("Opera Mini/"))f=I(N(this.b,/Opera Mini\/([\d\.]+)/,1)),a=new J("OperaMini",f,a,b,L(this),c,d);else{if(-1!=this.b.indexOf("Version/")&&(f=I(N(this.b,/Version\/([\d\.]+)/,1)),null!==f.n)){a=new J("Opera",f,a,b,L(this),c,d);break a}f=I(N(this.b,/Opera[\/ ]([\d\.]+)/,1));
a=null!==f.n?new J("Opera",f,a,b,L(this),c,d):new J("Opera",new E,a,b,L(this),c,d)}else/OPR\/[\d.]+/.test(this.b)?a=Ma(this):/AppleWeb(K|k)it/.test(this.b)?a=Ma(this):-1!=this.b.indexOf("Gecko")?(a="Unknown",b=new E,c=I(M(this)),-1!=this.b.indexOf("Firefox")?(a="Firefox",b=I(N(this.b,/Firefox\/([\d\w\.]+)/,1))):-1!=this.b.indexOf("Mozilla")&&(a="Mozilla"),d=I(N(this.b,/rv:([^\)]+)/,1)),a=new J(a,b,"Gecko",d,L(this),c,O(this.N))):a=La;return a};
function L(a){var b=N(a.b,/(iPod|iPad|iPhone|Android|Windows Phone|BB\d{2}|BlackBerry)/,1);if(""!=b)return/BB\d{2}/.test(b)&&(b="BlackBerry"),b;a=N(a.b,/(Linux|Mac_PowerPC|Macintosh|Windows|CrOS|PlayStation|CrKey)/,1);return""!=a?("Mac_PowerPC"==a?a="Macintosh":"PlayStation"==a&&(a="Linux"),a):"Unknown"}
function M(a){var b=N(a.b,/(OS X|Windows NT|Android) ([^;)]+)/,2);if(b||(b=N(a.b,/Windows Phone( OS)? ([^;)]+)/,2))||(b=N(a.b,/(iPhone )?OS ([\d_]+)/,2)))return b;if(b=N(a.b,/(?:Linux|CrOS|CrKey) ([^;)]+)/,1))for(var b=b.split(/\s/),c=0;c<b.length;c+=1)if(/^[\d\._]+$/.test(b[c]))return b[c];return(a=N(a.b,/(BB\d{2}|BlackBerry).*?Version\/([^\s]*)/,2))?a:"Unknown"}
function Ma(a){var b=L(a),c=I(M(a)),d=I(N(a.b,/AppleWeb(?:K|k)it\/([\d\.\+]+)/,1)),e="Unknown",f=new E,f="Unknown";/OPR\/[\d.]+/.test(a.b)?e="Opera":-1!=a.b.indexOf("Chrome")||-1!=a.b.indexOf("CrMo")||-1!=a.b.indexOf("CriOS")?e="Chrome":/Silk\/\d/.test(a.b)?e="Silk":"BlackBerry"==b||"Android"==b?e="BuiltinBrowser":-1!=a.b.indexOf("PhantomJS")?e="PhantomJS":-1!=a.b.indexOf("Safari")?e="Safari":-1!=a.b.indexOf("AdobeAIR")?e="AdobeAIR":-1!=a.b.indexOf("PlayStation")&&(e="BuiltinBrowser");"BuiltinBrowser"==
e?f="Unknown":"Silk"==e?f=N(a.b,/Silk\/([\d\._]+)/,1):"Chrome"==e?f=N(a.b,/(Chrome|CrMo|CriOS)\/([\d\.]+)/,2):-1!=a.b.indexOf("Version/")?f=N(a.b,/Version\/([\d\.\w]+)/,1):"AdobeAIR"==e?f=N(a.b,/AdobeAIR\/([\d\.]+)/,1):"Opera"==e?f=N(a.b,/OPR\/([\d.]+)/,1):"PhantomJS"==e&&(f=N(a.b,/PhantomJS\/([\d.]+)/,1));f=I(f);return new J(e,f,"AppleWebKit",d,b,c,O(a.N))}function N(a,b,c){return(a=a.match(b))&&a[c]?a[c]:""}function O(a){if(a.documentMode)return a.documentMode}function Na(a){this.e=a}
Na.prototype.toString=function(){return encodeURIComponent(ja(this.e))};function Oa(a,b){this.t=a;this.u=b}Oa.prototype.toString=function(){for(var a=[],b=0;b<this.u.length;b++)for(var c=this.u[b],d=c.H(),c=c.H(this.t),e=0;e<d.length;e++){var f;a:{for(f=0;f<c.length;f++)if(d[e]===c[f]){f=!0;break a}f=!1}a.push(f?1:0)}a=a.join("");a=a.replace(/^0+/,"");b=[];for(d=a.length;0<d;d-=4)b.unshift(parseInt(a.slice(0>d-4?0:d-4,d),2).toString(16));return b.join("")};function Q(a){this.Oa=a}
Q.prototype.h=function(a,b){var c=a||{},d=this.Oa.replace(/\{\/?([^*}]*)(\*?)\}/g,function(a,b,d){return d&&c[b]?"/"+c[b].join("/"):c[b]||""});d.match(/^\/\//)&&(d=(b?"http:":"https:")+d);return d.replace(/\/*\?*($|\?)/,"$1")};function Pa(a,b){for(var c=[],d=0;d<b.length;d++)c.push(b[d].toString());return{format:a,extras:c}}function Qa(a,b){this.O=a;this.$=b;this.ta={};this.pa={}}Qa.prototype.H=function(a){return a?(this.ta[a]||this.$).slice(0):this.$.slice(0)};
function Ra(a,b,c){for(var d=[],e=a.O.split(",")[0].replace(/"|'/g,""),f=a.H(),g,l=[],k={},q=0;q<f.length;q++)g=f[q],0<g.length&&!k[g]&&(k[g]=!0,l.push(g));c=c.za?c.za(e,l,d):l;a.ta[b]=c;a.pa[b]=d}function Sa(a,b){for(var c=a.H(b),d=a.pa[b]||[],e=[],f=0;f<c.length;f++)e.push(new r(a.O,c[f]));for(f=0;f<d.length;f++)if(c=d[f].O,c!==a.O)for(var g=d[f].H(),l=0;l<g.length;l++)e.push(new r(c,g[l]));return e}function Ta(a,b){this.O=a;this.$=b}Ta.prototype.H=function(){return this.$};
function Ua(a,b,c,d,e,f,g){this.La=a;this.Ga=b;this.Z=c||[];this.Ca=d||null;this.Na=e||null;this.version=f||null;this.Ea=g||null}
Ua.prototype.send=function(a,b,c){var d=new Q("//p.typekit.net/p.gif?s={service}&k={token}&app={app}&ht={hosting}&h={host}&f={variations}&a={account}&sl={stylesheetLoadTime}&fl={fontLoadTime}&js={version}&_={_}"),e=encodeURIComponent((window.__adobewebfontsappname__||this.Ea||"").toString().substr(0,20));a=encodeURIComponent(ja(a));var f=[],g=[];window.Typekit.fonts||(window.Typekit.fonts=[]);for(var g=window.Typekit.fonts,l=0;l<this.Z.length;l++){for(var k=!1,q=0;q<g.length;q++)if(this.Z[l]===g[q]){k=
!0;break}k||(f.push(this.Z[l]),g.push(this.Z[l]))}f.length&&Va(d.h({service:this.La,token:this.Na,app:e,hosting:this.Ga,host:a,variations:f.join("."),account:this.Ca,stylesheetLoadTime:b,fontLoadTime:c,version:this.version,_:(+new Date).toString()}))};function Va(a){var b=new Image(1,1),c=!1;b.src=a;b.onload=function(){c=!0;b.onload=null};setTimeout(function(){c||(b.src="about:blank",b.onload=null)},3E3)}function Xa(){this.la=this.Ba=this.M=this.ia=this.ja=!0}function R(a){return"Windows"===a.m}
function Ya(a){return R(a)&&G(a.g,new E(6,1))}function S(a){return R(a)&&H(a.g,new E(5,1))||R(a)&&H(a.g,new E(5,2))||R(a)&&H(a.g,new E(6,0))||Ya(a)}function T(a){return"Macintosh"===a.m&&(G(a.g,new E(10,4))||null===a.g.n)}function Za(a,b){return b.ja&&("iPhone"===a.m||"iPod"===a.m)&&G(a.g,new E(4,2))&&F(a.g,new E(5))}function $a(a,b){return b.ja&&("iPhone"===a.m||"iPod"===a.m)&&G(a.g,new E(5))}function ab(a,b){return b.ia&&"iPad"===a.m&&G(a.g,new E(4,2))&&F(a.g,new E(5))}
function bb(a,b){return b.ia&&"iPad"===a.m&&G(a.g,new E(5))}function U(a,b){return b.M&&"Android"===a.m}function cb(a,b){return U(a,b)&&G(a.g,new E(2,2))&&F(a.g,new E(3,1))}function db(a,b){return U(a,b)&&G(a.g,new E(3,1))&&F(a.g,new E(4,1))}function V(a){return"Linux"===a.m||"Ubuntu"===a.m}function eb(a){return"Safari"===a.getName()&&"AppleWebKit"===a.F||"Unknown"===a.getName()&&"AppleWebKit"===a.F&&("iPhone"===a.m||"iPad"===a.m||"iPod"===a.m)}
function fb(a){return"Chrome"===a.getName()&&G(a.r,new E(6))&&Ja(a.r,new E(35))}function gb(a){return"Chrome"===a.getName()&&G(a.r,new E(36))}function hb(a){return"BuiltinBrowser"===a.getName()}function ib(a){this.za=a}function jb(a,b){return b}
var kb={Ra:"a",Wa:"d",Qa:"i",Sa:"j",Pa:"k",Va:"l",NONE:"x"},lb={a:function(a,b){return"Safari"===a.getName()&&"AppleWebKit"===a.F&&G(a.D,new E(525,13))&&F(a.D,new E(534,50))&&(S(a)||T(a))||hb(a)&&(cb(a,b)||U(a,b)&&G(a.g,new E(4,1)))||b.M&&"Silk"===a.getName()&&F(a.r,new E(2))&&(cb(a,b)||T)||b.M&&"Silk"===a.getName()&&G(a.r,new E(2))&&U(a,b)&&G(a.g,new E(4,1))||eb(a)&&(ab(a,b)||Za(a,b))||fb(a)&&(ab(a,b)||Za(a,b))||gb(a)&&(ab(a,b)||Za(a,b))||"AdobeAIR"===a.getName()&&G(a.r,new E(2,5))&&(R(a)&&null===
a.g.n||V(a)||T(a))},d:function(a,b){var c;(c=fb(a)&&(S(a)||V(a)||T(a)||U(a,b)||"CrOS"===a.m||"CrKey"===a.m||bb(a,b)||$a(a,b))||gb(a)&&(bb(a,b)||$a(a,b)))||(c="Gecko"===a.F&&1===a.D.compare(new E(1,9,1))&&Ja(a.D,new E(38))&&(S(a)||V(a)||T(a)||U(a,b)));(c=c||"Safari"===a.getName()&&"AppleWebKit"===a.F&&G(a.D,new E(534,50))&&(S(a)||T(a))||eb(a)&&(bb(a,b)||$a(a,b)))||(c="Opera"===a.getName()&&G(a.r,new E(11,10))&&Ja(a.r,new E(22))&&(S(a)||V(a)||T(a)||U(a,b)));return c||"MSIE"===a.getName()&&9<=a.ha&&
(Ya(a)||R(a)&&H(a.g,new E(6,0)))||"Edge"===a.getName()&&Ya(a)||"MSIE"===a.getName()&&b.Ba&&"Windows Phone"===a.m&&G(a.g,new E(8))||hb(a)&&(b.la&&"BlackBerry"===a.m&&G(a.g,new E(10))||V(a))},j:function(a,b){return hb(a)&&db(a,b)||b.M&&"Silk"===a.getName()&&G(a.r,new E(2))&&(db(a,b)||V(a))},i:function(a){return"MSIE"===a.getName()&&G(a.r,new E(6,0))&&(void 0===a.ha||9>a.ha)&&S(a)},l:function(a,b){return gb(a)&&(S(a)||V(a)||T(a)||U(a,b)||"CrOS"===a.m||"CrKey"===a.m)||"Gecko"===a.F&&G(a.D,new E(39))&&
(S(a)||V(a)||T(a)||U(a,b))||"Opera"===a.getName()&&G(a.r,new E(23))&&(S(a)||V(a)||T(a)||U(a,b))},x:function(){return!1}},mb={};
mb.i=new ib(function(a,b,c){for(var d=0;d<b.length;d+=1){var e=b[d],f;f=e;f=a.replace(/(-1|-2)$/,"").slice(0,28)+"-"+f;c.push(new Ta(f,[e]))}a={};for(e=0;e<b.length;e++)c=b[e],d=c.charAt(1),(a[d]||(a[d]=[])).push(c);c=[[4,3,2,1,5,6,7,8,9],[7,8,9,6,5,4,3,2,1]];d=[];for(e=0;e<c.length;e++){f=c[e];for(var g=0;g<f.length;g++){var l=f[g];if(a[l]){d=d.concat(a[l]);break}}}c=d;d={};a=[];for(e=0;e<c.length;e++)f=c[e],d[f]||(d[f]=!0,a.push(f));c=[];for(d=0;d<b.length;d++)for(e=b[d],f=0;f<a.length;f++)g=a[f],
g==e&&c.push(g);return c});var W={};W.a=W.d=W.l=W.j=function(){return[]};W.i=function(a,b,c){return[new Na(a),new Oa(b,c)]};W.k=function(a){return[new Na(a)]};function nb(a,b,c){return W[b](a,b,c)}function X(a){this.e=a;this.t="x";this.ma=this.b=null;this.u=[];this.Y=[];this.ua=this.fa=null;this.oa=!1}X.prototype.supportsConfiguredBrowser=function(){return"x"!==this.t};
X.prototype.init=function(){if(0<this.Y.length){for(var a=[],b=0;b<this.Y.length;b++)a.push(Ha(this.Y[b]));var b=this.e,a=a.join(""),c=this.e.createElement("style");c.setAttribute("type","text/css");c.styleSheet?c.styleSheet.cssText=a:c.appendChild(document.createTextNode(a));fa(b,"head",c)}};
X.prototype.load=function(a,b,c){function d(){}var e=this,f=c||{},g=f.contextPath||".",l=f.hostname||this.ua;a=f.timeout;c=!!f.async;var k=!1!==f.events,q=null,A=new z,B=new z,K=new Ca;f.active&&(d=f.active);f.active=function(){B.stop();e.ya&&e.ya.send(e.e,-1!==A.W&&-1!==A.K?A.K-A.W:-1,-1!==B.W&&-1!==B.K?B.K-B.W:-1);d()};q=new na(this.e,f);if(this.t){for(var f=mb[this.t]||new ib(jb),w=0;w<this.u.length;w++)Ra(this.u[w],this.t,f);this.fa&&(f=nb(this.e,this.t,this.u),f=Pa(this.t,f),f.contextPath=g,
l&&(f.hostname=l),g=this.fa.h(f,this.oa?"https:"!==ia(this.e):!1),A.start(),ka(this.e,g,Da(K),c));if(k){for(var P=[],Wa={},s=new Aa(this.e,q,a),w=0;w<this.u.length;w++)P=P.concat(Sa(this.u[w],this.t));for(w=0;w<P.length;w++)Wa[P[w].getName()]="BESbswy\ue000\ue001\ue002\ue003\ue004\ue005\ue006";Fa(K,function(){A.stop();B.start();ga(e.e,function(){var a=P,c={},d=Wa||{};if(0===a.length&&b)oa(s.G);else{s.ga+=a.length;b&&(s.va=b);var e,f=[];for(e=0;e<a.length;e++){var g=a[e],l=d[g.getName()],k=s.G,q=g;
k.J&&m(k.v,[k.o.h(k.q,q.getName(),p(q).toString(),"loading")]);n(k,"fontloading",q);k=null;null===y&&(y=window.FontFace?(k=/Gecko.*Firefox\/(\d+)/.exec(window.navigator.userAgent))?42<parseInt(k[1],10):!0:!1);k=y?new za(h(s.qa,s),h(s.ra,s),s.e,g,s.L,l):new sa(h(s.qa,s),h(s.ra,s),s.e,g,s.L,c,l);f.push(k)}for(e=0;e<f.length;e++)f[e].start()}})})}}};X.prototype.performOptionalActions=function(){};function ob(a,b,c,d){this.Ia=a;this.e=b;this.b=c;this.v=d;this.w=[]}ob.prototype.Da=function(a){this.w.push(a)};
ob.prototype.load=function(a,b){var c=a,d=b||{};"string"==typeof c?c=[c]:c&&c.length||(d=c||{},c=[]);if(c.length)for(var e=this,f=c.length,g=0;g<c.length;g++)pb(this,c[g],function(){0==--f&&qb(e,d)});else qb(this,d)};function pb(a,b,c){b=a.Ia.h({id:encodeURIComponent(b)});la(a.e,b,c)}
function qb(a,b){if(0!=a.w.length){for(var c=new na(a.e,b),d=!1,e=0;e<a.w.length;e++)a.w[e].init(),d=d||a.w[e].supportsConfiguredBrowser();if(d)for(c.J&&m(c.v,[c.o.h(c.q,"loading")]),n(c,"loading"),c=0;c<a.w.length;c++)d=a.w[c],d.supportsConfiguredBrowser()&&d.load(null,c==a.w.length-1,b);else oa(c);a.w=[]}}var rb=(new Ka(navigator.userAgent,document)).parse(),sb=new da(window);window.Typekit||(window.Typekit={});
if(!window.Typekit.load){var tb=window.Typekit.config||{},ub=null;tb.k&&(ub=new Q(tb.k));var vb=new ob(ub,sb,rb,document.documentElement);window.Typekit.load=function(){vb.load.apply(vb,arguments)};window.Typekit.addKit=function(){vb.Da.apply(vb,arguments)}}var wb,Y,Z,C=window.Typekit.config||{};Z=new X(sb);Z.ya=new Ua(C.ps,C.ht,C.fi,C.a,C.kt,C.js,C.l);Y=new Xa;Y.ja=!C.si;Y.ia=!C.st;Y.M=!C.sa;Y.Ba=!C.sw;Y.la=!C.sb;Z.ma=Y;C.ds&&(Z.oa=C.ds);C.f&&(wb=new Q(C.f),Z.fa=wb);C.hn&&(Z.ua=C.hn);var D;
if(C.fn)for(D=0;D<C.fn.length;D+=2)Z.u.push(new Qa(C.fn[D],C.fn[D+1]));if(C.c)for(D=0;D<C.c.length;D+=2)Z.Y.push(new Ga);Z.b=rb;var xb;a:{var yb=Z.b,zb=new Xa,Ab=Z.ma||zb,Bb;for(Bb in kb){var $=kb[Bb];if(lb[$]&&lb[$](yb,Ab)){xb=$;break a}}for(Bb in kb)if($=kb[Bb],lb[$]&&lb[$](yb,zb)){xb="x";break a}xb="k"}Z.t=xb;window.Typekit.addKit(Z);if(window.WebFont)try{window.Typekit.load()}catch(Cb){};
})(this,document);
