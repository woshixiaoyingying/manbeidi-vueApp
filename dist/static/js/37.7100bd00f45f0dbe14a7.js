webpackJsonp([37],{"+UIV":function(t,a,e){"use strict";var i=e("NYxO"),s=e("Eje6"),n=e("vu+C"),o=Object.assign||function(t){for(var a=1;a<arguments.length;a++){var e=arguments[a];for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&(t[i]=e[i])}return t};s.a,n.a,o({},Object(i.b)({fitPhoneTop:"fitPhoneTop",fitPhoneBottom:"fitPhoneBottom"}))},"1Zed":function(t,a,e){"use strict";function i(t){if(Array.isArray(t)){for(var a=0,e=Array(t.length);a<t.length;a++)e[a]=t[a];return e}return Array.from(t)}var s=e("F5sT");a.a={data:function(){return{page:1,type:2,status:"y",pageSize:4,activeTab:0,listData:[],settings:s.a,loading:!1,finished:!1}},methods:{onLoad:function(){this.getData()},getData:function(){var t=this,a=this.page,e=this.type,s=this.status,n=this.pageSize,o={page:a,type:e,status:s,pageSize:n},r=function(a){var e=[].concat(i(t.listData),i(a.data));e.length>=Number(a.page.total)&&(t.finished=!0),t.loading=!1,t.listData=e};this.$store.dispatch({type:"ucenterGetConsult",params:o,successCallback:r}),this.page+=1}}}},"1hJU":function(t,a,e){"use strict";e("F5sT")},"35n0":function(t,a,e){a=t.exports=e("FZ+f")(!1),a.push([t.i,"",""])},"4y7E":function(t,a,e){"use strict";var i=e("NYxO"),s=e("Eje6"),n=e("vu+C"),o=Object.assign||function(t){for(var a=1;a<arguments.length;a++){var e=arguments[a];for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&(t[i]=e[i])}return t};a.a={components:{ConsultY:s.a,ConsultN:n.a},data:function(){return{activeTab:0}},computed:o({},Object(i.b)({fitPhoneTop:"fitPhoneTop",fitPhoneBottom:"fitPhoneBottom"}))}},"5R8M":function(t,a,e){var i=e("xlq+");"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);e("rjj0")("3aa19632",i,!0,{})},"9nx/":function(t,a,e){var i=e("cyIf");"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);e("rjj0")("2fe6af92",i,!0,{})},CeJT:function(t,a,e){"use strict";var i=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("div",{staticClass:"clearfix",staticStyle:{"font-size":"10px"}},[e("div",{staticClass:"page-content list-nav"},[e("van-list",{attrs:{finished:t.finished,"finished-text":"没有更多了"},on:{load:t.onLoad},model:{value:t.loading,callback:function(a){t.loading=a},expression:"loading"}},t._l(t.listData,function(a,i){return e("div",{key:i,staticClass:"item"},[e("div",{staticClass:"layout-2 mt10 line-b"},[e("div",[e("a",{on:{click:function(e){t.$router.push("///product/"+a.goods_id)}}},[e("img",{attrs:{src:""+t.settings.imgBaseUrl+a.img}})])]),t._v(" "),e("div",{staticStyle:{height:"6em"}},[e("p",{staticStyle:{}},[e("a",{on:{click:function(e){t.$router.push("///product/"+a.goods_id)}}},[t._v(t._s(a.name))])]),t._v(" "),e("p",[t._v("价格：\n                "),e("b",{staticClass:"red"},[t._v("￥"+t._s(a.sell_price))])])])]),t._v(" "),e("div",{staticClass:"mt20 mb20"},[e("div",{},[e("span",{staticClass:"bg-title-1",staticStyle:{padding:"0.1em","margin-right":"0.5em"}},[t._v("问")]),t._v(t._s(a.question)+"\n            ")]),t._v(" "),e("p",{staticClass:"tr gray"},[t._v("咨询时间："+t._s(a.ask_time))])])])}))],1)])])},s=[],n={render:i,staticRenderFns:s};a.a=n},Eje6:function(t,a,e){"use strict";function i(t){e("5R8M")}var s=(e("1hJU"),e("1Zed")),n=e("SAfN"),o=e("VU/8"),r=i,c=o(s.a,n.a,!1,r,null,null);a.a=c.exports},"F67+":function(t,a,e){"use strict";var i=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"wodezixun"},[e("div",{staticClass:"header",style:t.fitPhoneTop},[e("van-nav-bar",{attrs:{title:"商品咨询","left-arrow":""},on:{"click-left":function(a){t.$router.go(-1)}}})],1),t._v(" "),e("div",{staticClass:"content"},[e("van-tabs",{model:{value:t.activeTab,callback:function(a){t.activeTab=a},expression:"activeTab"}},[e("van-tab",{attrs:{title:"已答复"}},[e("consult-y")],1),t._v(" "),e("van-tab",{attrs:{title:"未答复"}},[e("consult-n")],1)],1)],1),t._v(" "),e("div",{staticClass:"bottom",style:t.fitPhoneBottom})])},s=[],n={render:i,staticRenderFns:s};a.a=n},MDdX:function(t,a,e){var i=e("35n0");"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);e("rjj0")("349bcd36",i,!0,{})},SAfN:function(t,a,e){"use strict";var i=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("div",{staticClass:"clearfix",staticStyle:{"font-size":"10px"}},[e("div",{staticClass:"page-content list-nav"},[e("van-list",{attrs:{finished:t.finished,"finished-text":"没有更多了"},on:{load:t.onLoad},model:{value:t.loading,callback:function(a){t.loading=a},expression:"loading"}},t._l(t.listData,function(a,i){return e("div",{key:i,staticClass:"item"},[e("div",{staticClass:"layout-2 mt10 line-b"},[e("div",[e("a",{on:{click:function(e){t.$router.push("///product/"+a.goods_id)}}},[e("img",{attrs:{src:""+t.settings.imgBaseUrl+a.img}})])]),t._v(" "),e("div",{staticStyle:{height:"6em"}},[e("p",{staticStyle:{}},[e("a",{on:{click:function(e){t.$router.push("///product/"+a.goods_id)}}},[t._v(t._s(a.name))])]),t._v(" "),e("p",[t._v("价格：\n                "),e("b",{staticClass:"red"},[t._v("￥"+t._s(a.sell_price))])])])]),t._v(" "),e("div",{staticClass:"mt20 mb20"},[e("div",{},[e("span",{staticClass:"bg-title-1",staticStyle:{padding:"0.1em","margin-right":"0.5em"}},[t._v("问")]),t._v(t._s(a.question)+"\n            ")]),t._v(" "),e("div",{},[e("span",{staticClass:"bg-title-3",staticStyle:{padding:"0.1em","margin-right":"0.5em"}},[t._v("答")]),t._v(t._s(a.content)+"\n            ")]),t._v(" "),e("p",{staticClass:"tr gray"},[t._v("回复时间："+t._s(a.reply_time))])])])}))],1)])])},s=[],n={render:i,staticRenderFns:s};a.a=n},aOIz:function(t,a,e){"use strict";function i(t){e("9nx/")}Object.defineProperty(a,"__esModule",{value:!0});var s=(e("+UIV"),e("4y7E")),n=e("F67+"),o=e("VU/8"),r=i,c=o(s.a,n.a,!1,r,"data-v-2d7c8c2a",null);a.default=c.exports},bcxw:function(t,a,e){"use strict";e("F5sT")},cyIf:function(t,a,e){a=t.exports=e("FZ+f")(!1),a.push([t.i,".wodezixun[data-v-2d7c8c2a]{width:100%;height:100%;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;background-color:#fff}.header[data-v-2d7c8c2a]{-ms-flex-negative:0;flex-shrink:0;background:#fff}.content[data-v-2d7c8c2a]{-webkit-box-flex:1;-ms-flex-positive:1;flex-grow:1;overflow-y:auto}.bottom[data-v-2d7c8c2a]{-ms-flex-negative:0;flex-shrink:0}",""])},h6Bb:function(t,a,e){"use strict";function i(t){if(Array.isArray(t)){for(var a=0,e=Array(t.length);a<t.length;a++)e[a]=t[a];return e}return Array.from(t)}var s=e("F5sT");a.a={data:function(){return{page:1,type:2,status:"n",pageSize:6,activeTab:0,listData:[],settings:s.a,loading:!1,finished:!1}},methods:{onLoad:function(){this.getData()},getData:function(){var t=this,a=this.page,e=this.type,s=this.status,n=this.pageSize,o={page:a,type:e,status:s,pageSize:n},r=function(a){var e=[].concat(i(t.listData),i(a.data));e.length>=Number(a.page.total)&&(t.finished=!0),t.loading=!1,t.listData=e};this.$store.dispatch({type:"ucenterGetConsult",params:o,successCallback:r}),this.page+=1}}}},"vu+C":function(t,a,e){"use strict";function i(t){e("MDdX")}var s=(e("bcxw"),e("h6Bb")),n=e("CeJT"),o=e("VU/8"),r=i,c=o(s.a,n.a,!1,r,null,null);a.a=c.exports},"xlq+":function(t,a,e){a=t.exports=e("FZ+f")(!1),a.push([t.i,"",""])}});