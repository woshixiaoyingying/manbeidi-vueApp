webpackJsonp([45],{"135c":function(e,t,r){"use strict";var o=r("NYxO"),i=r("J9J0"),n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var o in r)Object.prototype.hasOwnProperty.call(r,o)&&(e[o]=r[o])}return e};i.a,n({},Object(o.b)({fitPhoneTop:"fitPhoneTop",fitPhoneBottom:"fitPhoneBottom"}))},"41Ct":function(e,t,r){"use strict";var o=r("NYxO"),i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var o in r)Object.prototype.hasOwnProperty.call(r,o)&&(e[o]=r[o])}return e};i({},Object(o.b)({fitPhoneTop:"fitPhoneTop",fitPhoneBottom:"fitPhoneBottom"}),Object(o.c)({areaData:"areaData"}),{provinceList:function(){return this.areaData||{}},cityList:function(){return this.provinceList[this.ruleForm.province]?this.provinceList[this.ruleForm.province].c:{}},countyList:function(){return this.cityList[this.ruleForm.city]?this.cityList[this.ruleForm.city].c:{}}})},"4EuC":function(e,t,r){"use strict";var o=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"ucenter-info-content"},[r("el-form",{ref:"ruleForm",attrs:{model:e.ruleForm,rules:e.rules}},[r("el-form-item",{attrs:{label:"账号"}},[r("span",{staticClass:"disabel"},[e._v(e._s(""+e.ruleForm.name))])]),e._v(" "),r("el-form-item",{attrs:{label:"真实姓名"}},[r("span",{staticClass:"disabel"},[e._v(e._s(""+e.ruleForm.real_name))])]),e._v(" "),r("el-form-item",{attrs:{prop:"sex",label:"性别："}},[r("input",{directives:[{name:"model",rawName:"v-model",value:e.ruleForm.sex,expression:"ruleForm.sex"}],attrs:{name:"sex",type:"radio",value:"0"},domProps:{checked:e._q(e.ruleForm.sex,"0")},on:{change:function(t){e.$set(e.ruleForm,"sex","0")}}}),e._v(" "),r("label",[e._v(" 女")]),e._v("\n            \n          "),r("input",{directives:[{name:"model",rawName:"v-model",value:e.ruleForm.sex,expression:"ruleForm.sex"}],attrs:{name:"sex",type:"radio",value:"1"},domProps:{checked:e._q(e.ruleForm.sex,"1")},on:{change:function(t){e.$set(e.ruleForm,"sex","1")}}}),e._v(" "),r("label",[e._v(" 男")])]),e._v(" "),r("el-form-item",{attrs:{prop:"birthday",label:"生日"}},[r("el-date-picker",{ref:"birthdayPicker",staticStyle:{width:"100%"},attrs:{"value-format":"yyyy-MM-dd",type:"date",size:"small",editable:!1,placeholder:"生日"},model:{value:e.ruleForm.birthday,callback:function(t){e.$set(e.ruleForm,"birthday",t)},expression:"ruleForm.birthday"}})],1),e._v(" "),r("el-form-item",{attrs:{prop:"mobile",label:"电话"}},[r("el-input",{ref:"mobileInput",attrs:{type:"text",placeholder:"联系人电话，11位手机号码",alt:"联系人电话，11位手机号码"},on:{click:function(t){e.textareaTab(e.mobileInput)}},model:{value:e.ruleForm.mobile,callback:function(t){e.$set(e.ruleForm,"mobile",t)},expression:"ruleForm.mobile"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"省份/直辖市",prop:"province"}},[r("br"),e._v(" "),r("el-select",{staticStyle:{width:"100%"},attrs:{placeholder:"请选择",disabled:!0},model:{value:e.ruleForm.province,callback:function(t){e.$set(e.ruleForm,"province",t)},expression:"ruleForm.province"}},e._l(e.provinceList,function(e,t){return r("el-option",{key:t,attrs:{label:e.t,value:t}})}))],1),e._v(" "),r("el-form-item",{attrs:{label:"市",prop:"city"}},[r("br"),e._v(" "),r("el-select",{staticStyle:{width:"100%"},attrs:{placeholder:"请选择",disabled:!0},model:{value:e.ruleForm.city,callback:function(t){e.$set(e.ruleForm,"city",t)},expression:"ruleForm.city"}},e._l(e.cityList,function(e,t){return r("el-option",{key:t,attrs:{label:e.t,value:t}})}))],1),e._v(" "),r("el-form-item",{attrs:{label:"县区",prop:"county"}},[r("el-select",{staticStyle:{width:"100%"},attrs:{placeholder:"请选择",disabled:!0},model:{value:e.ruleForm.county,callback:function(t){e.$set(e.ruleForm,"county",t)},expression:"ruleForm.county"}},e._l(e.countyList,function(e,t){return r("el-option",{key:t,attrs:{label:e.t,value:t}})}))],1),e._v(" "),r("el-form-item",{attrs:{label:"详细地址",prop:"addr"}},[r("textarea",{directives:[{name:"model",rawName:"v-model",value:e.ruleForm.addr,expression:"ruleForm.addr"}],ref:"addressTextarea",staticClass:"address-textarea",attrs:{rows:4,placeholder:"路名或街道地址，门牌号。"},domProps:{value:e.ruleForm.addr},on:{click:function(t){e.textareaTab(e.addressTextarea)},input:function(t){t.target.composing||e.$set(e.ruleForm,"addr",t.target.value)}}})]),e._v(" "),r("el-form-item",{staticStyle:{"margin-top":"10px"}},[r("el-button",{staticClass:"btn",attrs:{type:"primary"},on:{click:function(t){e.confirmRevise("ruleForm")}}},[e._v("保存")])],1)],1)],1)},i=[],n={render:o,staticRenderFns:i};t.a=n},"9g62":function(e,t,r){"use strict";var o=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"shezhi"},[r("div",{staticClass:"header",style:e.fitPhoneTop},[r("van-nav-bar",{attrs:{title:"设置","left-arrow":""},on:{"click-left":function(t){e.$router.go(-1)}}})],1),e._v(" "),r("div",{staticClass:"content"},[r("v-content")],1),e._v(" "),r("div",{staticClass:"bottom",style:e.fitPhoneBottom})])},i=[],n={render:o,staticRenderFns:i};t.a=n},Am8Y:function(e,t,r){t=e.exports=r("FZ+f")(!1),t.push([e.i,".shezhi[data-v-068e5006]{width:100%;height:100%;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;background-color:#fff}.header[data-v-068e5006]{-ms-flex-negative:0;flex-shrink:0;border-bottom:1px solid #dcdee3;background:#fff}.content[data-v-068e5006]{-webkit-box-flex:1;-ms-flex-positive:1;flex-grow:1;overflow-y:auto}.bottom[data-v-068e5006]{-ms-flex-negative:0;flex-shrink:0}",""])},EkJK:function(e,t,r){var o=r("Am8Y");"string"==typeof o&&(o=[[e.i,o,""]]),o.locals&&(e.exports=o.locals);r("rjj0")("255cd7e2",o,!0,{})},J9J0:function(e,t,r){"use strict";function o(e){r("gI5Z")}var i=(r("41Ct"),r("WaMt")),n=r("4EuC"),a=r("VU/8"),s=o,l=a(i.a,n.a,!1,s,null,null);t.a=l.exports},J9NM:function(e,t,r){"use strict";function o(e){r("EkJK")}Object.defineProperty(t,"__esModule",{value:!0});var i=(r("135c"),r("aK0R")),n=r("9g62"),a=r("VU/8"),s=o,l=a(i.a,n.a,!1,s,"data-v-068e5006",null);t.default=l.exports},WaMt:function(e,t,r){"use strict";var o=r("NYxO"),i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var o in r)Object.prototype.hasOwnProperty.call(r,o)&&(e[o]=r[o])}return e};t.a={data:function(){return{ruleForm:{real_name:"",sex:"",birthday:"",mobile:"",province:"",city:"",county:"",addr:""},rules:{real_name:[{required:!0,message:"请输入真实姓名",trigger:"blur"}],sex:[{required:!0,message:"请选择性别",trigger:"blur"}],birthday:[{required:!0,message:"请选择出生日期",trigger:"blur"}],mobile:[{required:!0,message:"请输入正确的手机号",max:11,min:11,trigger:"blur"}],province:[{required:!0,message:"请选择",trigger:"blur"}],city:[{required:!0,message:"请选择",trigger:"blur"}],county:[{required:!0,message:"请选择",trigger:"blur"}],addr:[{required:!0,message:"请输入5-120字",min:5,max:120,trigger:"blur"}]}}},created:function(){this.getData(),this.getAreaData()},computed:i({},Object(o.b)({fitPhoneTop:"fitPhoneTop",fitPhoneBottom:"fitPhoneBottom"}),Object(o.c)({areaData:"areaData"}),{provinceList:function(){return this.areaData||{}},cityList:function(){return this.provinceList[this.ruleForm.province]?this.provinceList[this.ruleForm.province].c:{}},countyList:function(){return this.cityList[this.ruleForm.city]?this.cityList[this.ruleForm.city].c:{}}}),watch:{provinceList:function(e){for(var t in e)if(t==this.ruleForm.province)return;this.ruleForm.province=""},cityList:function(e){for(var t in e)if(t==this.ruleForm.city)return;this.ruleForm.city=""},countyList:function(e){for(var t in e)if(t==this.ruleForm.county)return;this.ruleForm.county=""}},methods:{getData:function(){var e=this,t=function(t){console.log(t),e.ruleForm=i({},e.ruleForm,t)};this.$store.dispatch({type:"getUcenterInfo",successCallback:t})},getAreaData:function(){this.$store.dispatch({type:"getAreaData"})},submitForm:function(){var e=this,t=i({},this.ruleForm),r=function(t){e.$router.go(-1)};this.$store.dispatch({type:"changeUcenterInfo",params:t,successCallback:r})},confirmRevise:function(e){var t=this;this.$refs[e].validate(function(e){if(!e)return console.log("error submit!!"),!1;t.submitForm()})},birthdayInput:function(){this.$refs.birthdayPicker.focus()},textareaTab:function(e){this.$refs[e].focus()}},mounted:function(){}}},ZLP8:function(e,t,r){t=e.exports=r("FZ+f")(!1),t.push([e.i,".ucenter-info-content{padding:0 .4rem .5rem}.ucenter-info-content .el-form{padding-bottom:250px}.ucenter-info-content .el-form-item__error{left:auto;top:16px;right:2px}.ucenter-info-content .el-form-item{margin-bottom:0}.ucenter-info-content .el-form-item .el-form-item__content span.disabel{float:left;padding-left:10px;display:block;width:100%;-webkit-box-sizing:border-box;box-sizing:border-box;border-radius:3px;border:1px solid #d7dae2}.ucenter-info-content .btn{display:block;width:100%}.ucenter-info-content .el-input.is-disabled .el-input__inner{color:#232121;-webkit-text-fill-color:#232121}.ucenter-info-content .address-textarea{display:block;width:100%;-webkit-box-sizing:border-box;box-sizing:border-box;border-radius:3px;border:1px solid #d7dae2;min-height:100px}",""])},aK0R:function(e,t,r){"use strict";var o=r("NYxO"),i=r("J9J0"),n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var o in r)Object.prototype.hasOwnProperty.call(r,o)&&(e[o]=r[o])}return e};t.a={components:{VContent:i.a},computed:n({},Object(o.b)({fitPhoneTop:"fitPhoneTop",fitPhoneBottom:"fitPhoneBottom"}))}},gI5Z:function(e,t,r){var o=r("ZLP8");"string"==typeof o&&(o=[[e.i,o,""]]),o.locals&&(e.exports=o.locals);r("rjj0")("1165d46e",o,!0,{})}});