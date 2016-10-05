/**
 * @license text 2.0.15 Copyright jQuery Foundation and other contributors.
 * Released under MIT license, http://github.com/requirejs/text/LICENSE
 */
/*jslint regexp: true */
/*global require, XMLHttpRequest, ActiveXObject,
  define, window, process, Packages,
  java, location, Components, FileUtils */
define(["module"],function(a){"use strict";function p(a,b){return void 0===a||""===a?b:a}function q(a,b,c,d){if(b===d)return!0;if(a===c){if("http"===a)return p(b,"80")===p(d,"80");if("https"===a)return p(b,"443")===p(d,"443")}return!1}var b,c,d,e,f,g=["Msxml2.XMLHTTP","Microsoft.XMLHTTP","Msxml2.XMLHTTP.4.0"],h=/^\s*<\?xml(\s)+version=[\'\"](\d)*.(\d)*[\'\"](\s)*\?>/im,i=/<body[^>]*>\s*([\s\S]+)\s*<\/body>/im,j="undefined"!=typeof location&&location.href,k=j&&location.protocol&&location.protocol.replace(/\:/,""),l=j&&location.hostname,m=j&&(location.port||void 0),n={},o=a.config&&a.config()||{};return b={version:"2.0.15",strip:function(a){if(a){a=a.replace(h,"");var b=a.match(i);b&&(a=b[1])}else a="";return a},jsEscape:function(a){return a.replace(/(['\\])/g,"\\$1").replace(/[\f]/g,"\\f").replace(/[\b]/g,"\\b").replace(/[\n]/g,"\\n").replace(/[\t]/g,"\\t").replace(/[\r]/g,"\\r").replace(/[\u2028]/g,"\\u2028").replace(/[\u2029]/g,"\\u2029")},createXhr:o.createXhr||function(){var a,b,c;if("undefined"!=typeof XMLHttpRequest)return new XMLHttpRequest;if("undefined"!=typeof ActiveXObject)for(b=0;b<3;b+=1){c=g[b];try{a=new ActiveXObject(c)}catch(a){}if(a){g=[c];break}}return a},parseName:function(a){var b,c,d,e=!1,f=a.lastIndexOf("."),g=0===a.indexOf("./")||0===a.indexOf("../");return f!==-1&&(!g||f>1)?(b=a.substring(0,f),c=a.substring(f+1)):b=a,d=c||b,f=d.indexOf("!"),f!==-1&&(e="strip"===d.substring(f+1),d=d.substring(0,f),c?c=d:b=d),{moduleName:b,ext:c,strip:e}},xdRegExp:/^((\w+)\:)?\/\/([^\/\\]+)/,useXhr:function(a,c,d,e){var f,g,h,i=b.xdRegExp.exec(a);return!i||(f=i[2],g=i[3],g=g.split(":"),h=g[1],g=g[0],(!f||f===c)&&(!g||g.toLowerCase()===d.toLowerCase())&&(!h&&!g||q(f,h,c,e)))},finishLoad:function(a,c,d,e){d=c?b.strip(d):d,o.isBuild&&(n[a]=d),e(d)},load:function(a,c,d,e){if(e&&e.isBuild&&!e.inlineText)return void d();o.isBuild=e&&e.isBuild;var f=b.parseName(a),g=f.moduleName+(f.ext?"."+f.ext:""),h=c.toUrl(g),i=o.useXhr||b.useXhr;return 0===h.indexOf("empty:")?void d():void(!j||i(h,k,l,m)?b.get(h,function(c){b.finishLoad(a,f.strip,c,d)},function(a){d.error&&d.error(a)}):c([g],function(a){b.finishLoad(f.moduleName+"."+f.ext,f.strip,a,d)}))},write:function(a,c,d,e){if(n.hasOwnProperty(c)){var f=b.jsEscape(n[c]);d.asModule(a+"!"+c,"define(function () { return '"+f+"';});\n")}},writeFile:function(a,c,d,e,f){var g=b.parseName(c),h=g.ext?"."+g.ext:"",i=g.moduleName+h,j=d.toUrl(g.moduleName+h)+".js";b.load(i,d,function(c){var d=function(a){return e(j,a)};d.asModule=function(a,b){return e.asModule(a,j,b)},b.write(a,i,d,f)},f)}},"node"===o.env||!o.env&&"undefined"!=typeof process&&process.versions&&process.versions.node&&!process.versions["node-webkit"]&&!process.versions["atom-shell"]?(c=require.nodeRequire("fs"),b.get=function(a,b,d){try{var e=c.readFileSync(a,"utf8");"\ufeff"===e[0]&&(e=e.substring(1)),b(e)}catch(a){d&&d(a)}}):"xhr"===o.env||!o.env&&b.createXhr()?b.get=function(a,c,d,e){var g,f=b.createXhr();if(f.open("GET",a,!0),e)for(g in e)e.hasOwnProperty(g)&&f.setRequestHeader(g.toLowerCase(),e[g]);o.onXhr&&o.onXhr(f,a),f.onreadystatechange=function(b){var e,g;4===f.readyState&&(e=f.status||0,e>399&&e<600?(g=new Error(a+" HTTP status: "+e),g.xhr=f,d&&d(g)):c(f.responseText),o.onXhrComplete&&o.onXhrComplete(f,a))},f.send(null)}:"rhino"===o.env||!o.env&&"undefined"!=typeof Packages&&"undefined"!=typeof java?b.get=function(a,b){var c,d,e="utf-8",f=new java.io.File(a),g=java.lang.System.getProperty("line.separator"),h=new java.io.BufferedReader(new java.io.InputStreamReader(new java.io.FileInputStream(f),e)),i="";try{for(c=new java.lang.StringBuffer,d=h.readLine(),d&&d.length()&&65279===d.charAt(0)&&(d=d.substring(1)),null!==d&&c.append(d);null!==(d=h.readLine());)c.append(g),c.append(d);i=String(c.toString())}finally{h.close()}b(i)}:("xpconnect"===o.env||!o.env&&"undefined"!=typeof Components&&Components.classes&&Components.interfaces)&&(d=Components.classes,e=Components.interfaces,Components.utils.import("resource://gre/modules/FileUtils.jsm"),f="@mozilla.org/windows-registry-key;1"in d,b.get=function(a,b){var c,g,h,i={};f&&(a=a.replace(/\//g,"\\")),h=new FileUtils.File(a);try{c=d["@mozilla.org/network/file-input-stream;1"].createInstance(e.nsIFileInputStream),c.init(h,1,0,!1),g=d["@mozilla.org/intl/converter-input-stream;1"].createInstance(e.nsIConverterInputStream),g.init(c,"utf-8",c.available(),e.nsIConverterInputStream.DEFAULT_REPLACEMENT_CHARACTER),g.readString(c.available(),i),g.close(),c.close(),b(i.value)}catch(a){throw new Error((h&&h.path||"")+": "+a)}}),b});