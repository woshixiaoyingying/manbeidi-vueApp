webpackJsonp([48],{"/X1y":function(t,e,a){"use strict"},"5cDw":function(t,e,a){e=t.exports=a("FZ+f")(!1),e.push([t.i,".art[data-v-39d4b540]{width:100%;height:100%;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;background-color:#fff}.share[data-v-39d4b540]{position:relative;-webkit-transform:translateY(60%);transform:translateY(60%);width:20px}.van-nav-bar .van-icon[data-v-39d4b540]{color:#929292}",""])},H0ba:function(t,e,a){"use strict";function i(t){a("bKqo")}var n=(a("/X1y"),a("IlQx")),o=a("NIc1"),r=a("VU/8"),s=i,c=r(n.a,o.a,!1,s,"data-v-5ae1f363",null);e.a=c.exports},IlQx:function(t,e,a){"use strict";e.a={name:"ArtContent",props:["id","newdata"],data:function(){return{article:{}}},created:function(){this.getData()},methods:{getData:function(){var t=this;if(this.id){var e=function(e){t.article=e,console.log(e)},a={id:this.id};this.$store.dispatch({type:"getArtContent",params:a,successCallback:e})}}}}},"L+tK":function(t,e,a){"use strict";var i=a("H0ba"),n=a("NYxO"),o=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var a=arguments[e];for(var i in a)Object.prototype.hasOwnProperty.call(a,i)&&(t[i]=a[i])}return t};i.a,o({},Object(n.b)({fitPhoneTop:"fitPhoneTop",fitPhoneBottom:"fitPhoneBottom"}),{id:function(){return this.$route.query.id}})},NIc1:function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"article"},[a("div",{staticClass:"title-back"},[a("h1",{staticClass:"art_title art"},[t._v(t._s(t.article.title))]),t._v(" "),a("div",[a("span",[t._v(t._s(t.article.publish_time))])])]),t._v(" "),a("p",{staticClass:"art_content",domProps:{innerHTML:t._s(t.article.content)}})])},n=[],o={render:i,staticRenderFns:n};e.a=o},U5s7:function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"art",style:t.fitPhoneTop},[a("div",{staticClass:"header"},[a("van-nav-bar",{attrs:{title:t.title}},[a("router-link",{attrs:{slot:"left",to:{path:"/win_a/home"}},slot:"left"},[a("van-icon",{attrs:{name:"wap-home",size:"0.5rem"}})],1),t._v(" "),a("router-link",{attrs:{slot:"right",to:{path:"/win_a/shopcart"}},slot:"right"},[a("van-icon",{attrs:{name:"shopping-cart-o",size:"0.5rem"}})],1)],1)],1),t._v(" "),a("art-content",{attrs:{newdata:t.newdata,id:t.id}})],1)},n=[],o={render:i,staticRenderFns:n};e.a=o},ZIC8:function(t,e,a){var i=a("5cDw");"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);a("rjj0")("4c7a06aa",i,!0,{})},a8Bb:function(t,e,a){"use strict";function i(t){a("ZIC8")}Object.defineProperty(e,"__esModule",{value:!0});var n=(a("L+tK"),a("a9Dz")),o=a("U5s7"),r=a("VU/8"),s=i,c=r(n.a,o.a,!1,s,"data-v-39d4b540",null);e.default=c.exports},a9Dz:function(t,e,a){"use strict";var i=a("H0ba"),n=a("NYxO"),o=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var a=arguments[e];for(var i in a)Object.prototype.hasOwnProperty.call(a,i)&&(t[i]=a[i])}return t};e.a={components:{ArtContent:i.a},computed:o({},Object(n.b)({fitPhoneTop:"fitPhoneTop",fitPhoneBottom:"fitPhoneBottom"}),{id:function(){return this.$route.query.id}}),data:function(){return{newdata:null,title:""}},methods:{getTitle:function(){var t=this,e=JSON.parse(localStorage.getItem("homePageData"));if(e){e.news.map(function(e,a){if(e.id!=t.id)return!1;t.newdata=e,t.title=e.title})}}},mounted:function(){this.getTitle()}}},bKqo:function(t,e,a){var i=a("fr2b");"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);a("rjj0")("1770beef",i,!0,{})},fr2b:function(t,e,a){e=t.exports=a("FZ+f")(!1),e.push([t.i,".article[data-v-5ae1f363]{-webkit-box-flex:1;-ms-flex-positive:1;flex-grow:1;overflow-y:auto}.title-back[data-v-5ae1f363]{background-color:#e66466;color:#fff;border-bottom:1px dotted #ddd;padding:.5rem}.title-back div[data-v-5ae1f363]{text-align:right;font-size:.2rem}.art_title[data-v-5ae1f363]{text-align:center;font-weight:800;color:#fff;line-height:30px;font-size:.5rem;margin-bottom:.3rem}.art_content[data-v-5ae1f363]{text-align:left;padding:20px;line-height:28px;font-size:16px}",""])}});