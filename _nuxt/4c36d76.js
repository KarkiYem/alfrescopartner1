(window.webpackJsonp=window.webpackJsonp||[]).push([[37],{459:function(e,t,n){"use strict";var l=n(11),o=(n(43),{components:{},data:function(){return{validated:!1,model:{firstName:"Mark",lastName:"Otto",username:"",city:"",state:"",zip:"",agree:!1}}},methods:{firstFormSubmit:function(){return Object(l.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:case"end":return e.stop()}}),e)})))()}}}),r=n(7),component=Object(r.a)(o,(function(){var e=this,t=e._self._c;return t("card",[t("h3",{staticClass:"mb-0",attrs:{slot:"header"},slot:"header"},[e._v("Custom styles")]),e._v(" "),t("div",{staticClass:"row"},[t("div",{staticClass:"col-lg-8"},[t("p",{staticClass:"mb-0"},[e._v("\n        For custom form validation messages, you’ll need to provide error messages to your\n        "),t("code",[e._v("<base-input>")]),e._v(" components. This disables the browser default feedback tooltips, but still\n        provides access to the form\n        validation APIs in JavaScript.\n        "),t("br"),t("br"),e._v("\n        When attempting to submit, you’ll see the"),t("code",[e._v(".is-valid")]),e._v(" and "),t("code",[e._v(".is-invalid")]),e._v(" classes applied\n        to your form controls.\n      ")])])]),e._v(" "),t("hr"),e._v(" "),t("validation-observer",{ref:"formValidator",scopedSlots:e._u([{key:"default",fn:function(n){var l=n.handleSubmit;return[t("form",{staticClass:"needs-validation",on:{submit:function(t){return t.preventDefault(),l(e.firstFormSubmit)}}},[t("div",{staticClass:"form-row"},[t("div",{staticClass:"col-md-4"},[t("base-input",{attrs:{label:"First name",name:"First name",placeholder:"First name","success-message":"Looks good!",rules:"required"},model:{value:e.model.firstName,callback:function(t){e.$set(e.model,"firstName",t)},expression:"model.firstName"}})],1),e._v(" "),t("div",{staticClass:"col-md-4"},[t("base-input",{attrs:{label:"Last name",name:"Last name",placeholder:"Last name",rules:"required","success-message":"Looks good!"},model:{value:e.model.lastName,callback:function(t){e.$set(e.model,"lastName",t)},expression:"model.lastName"}})],1),e._v(" "),t("div",{staticClass:"col-md-4"},[t("base-input",{attrs:{label:"Username",name:"Username",placeholder:"Username",rules:"required"},model:{value:e.model.username,callback:function(t){e.$set(e.model,"username",t)},expression:"model.username"}})],1)]),e._v(" "),t("div",{staticClass:"form-row"},[t("div",{staticClass:"col-md-6"},[t("base-input",{attrs:{label:"City",name:"City",placeholder:"City",rules:"required"},model:{value:e.model.city,callback:function(t){e.$set(e.model,"city",t)},expression:"model.city"}})],1),e._v(" "),t("div",{staticClass:"col-md-3"},[t("base-input",{attrs:{label:"State",name:"State",placeholder:"State",rules:"required"},model:{value:e.model.state,callback:function(t){e.$set(e.model,"state",t)},expression:"model.state"}})],1),e._v(" "),t("div",{staticClass:"col-md-3"},[t("base-input",{attrs:{label:"Zip",name:"Zip",placeholder:"Zip",rules:"required"},model:{value:e.model.zip,callback:function(t){e.$set(e.model,"zip",t)},expression:"model.zip"}})],1)]),e._v(" "),t("base-input",{attrs:{rules:{required:{allowFalse:!1}},name:"Terms"}},[t("base-checkbox",{model:{value:e.model.agree,callback:function(t){e.$set(e.model,"agree",t)},expression:"model.agree"}},[e._v("\n          Agree to terms and conditions\n        ")])],1),e._v(" "),t("base-button",{attrs:{type:"primary","native-type":"submit"}},[e._v("Submit form")])],1)]}}])})],1)}),[],!1,null,null,null);t.a=component.exports},460:function(e,t,n){"use strict";var l=n(11),o=(n(43),{components:{},data:function(){return{model:{firstName:"Mark",lastName:"Otto",username:"",city:"",state:"",zip:"",agree:!1}}},methods:{submit:function(){return Object(l.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:case"end":return e.stop()}}),e)})))()}}}),r=n(7),component=Object(r.a)(o,(function(){var e=this,t=e._self._c;return t("card",[t("h3",{staticClass:"mb-0",attrs:{slot:"header"},slot:"header"},[e._v("Browser defaults")]),e._v(" "),t("div",{staticClass:"row"},[t("div",{staticClass:"col-lg-8"},[t("p",{staticClass:"mb-0"},[e._v("\n        Not interested in custom validation feedback messages or writing JavaScript to change form behaviors? All good, you can use the browser defaults. Try submitting the form below. Depending on your browser and OS, you’ll\n        see a slightly different style of feedback.\n        "),t("br"),t("br"),e._v("\n        While these feedback styles cannot be styled with CSS, you can still customize the feedback text through JavaScript.\n      ")])])]),e._v(" "),t("hr"),e._v(" "),t("form",{staticClass:"needs-validation",on:{submit:function(t){return t.preventDefault(),e.submit.apply(null,arguments)}}},[t("div",{staticClass:"form-row"},[t("div",{staticClass:"col-md-4"},[t("base-input",{attrs:{label:"First name",name:"First name",placeholder:"First name",required:""},model:{value:e.model.firstName,callback:function(t){e.$set(e.model,"firstName",t)},expression:"model.firstName"}})],1),e._v(" "),t("div",{staticClass:"col-md-4"},[t("base-input",{attrs:{label:"Last name",name:"Last name",placeholder:"Last name",required:""},model:{value:e.model.lastName,callback:function(t){e.$set(e.model,"lastName",t)},expression:"model.lastName"}})],1),e._v(" "),t("div",{staticClass:"col-md-4"},[t("base-input",{attrs:{label:"Username",name:"Username",placeholder:"Username",required:""},model:{value:e.model.username,callback:function(t){e.$set(e.model,"username",t)},expression:"model.username"}})],1)]),e._v(" "),t("div",{staticClass:"form-row"},[t("div",{staticClass:"col-md-6"},[t("base-input",{attrs:{label:"City",name:"City",placeholder:"City",required:""},model:{value:e.model.city,callback:function(t){e.$set(e.model,"city",t)},expression:"model.city"}})],1),e._v(" "),t("div",{staticClass:"col-md-3"},[t("base-input",{attrs:{label:"State",name:"State",placeholder:"State",required:""},model:{value:e.model.state,callback:function(t){e.$set(e.model,"state",t)},expression:"model.state"}})],1),e._v(" "),t("div",{staticClass:"col-md-3"},[t("base-input",{attrs:{label:"Zip",name:"Zip",placeholder:"Zip",required:""},model:{value:e.model.zip,callback:function(t){e.$set(e.model,"zip",t)},expression:"model.zip"}})],1)]),e._v(" "),t("base-input",[t("base-checkbox",{model:{value:e.model.agree,callback:function(t){e.$set(e.model,"agree",t)},expression:"model.agree"}},[e._v("\n        Agree to terms and conditions\n      ")])],1),e._v(" "),t("base-button",{attrs:{type:"primary","native-type":"submit"}},[e._v("Submit form")])],1)])}),[],!1,null,null,null);t.a=component.exports},461:function(e,t,n){"use strict";var l=n(11),o=(n(43),{components:{},data:function(){return{validated:!1,model:{firstName:"Mark",lastName:"Otto",username:"",city:"",state:"",zip:"",agree:!1}}},methods:{onSubmit:function(){return Object(l.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:case"end":return e.stop()}}),e)})))()}},mounted:function(){this.$refs.formValidator.validate()}}),r=n(7),component=Object(r.a)(o,(function(){var e=this,t=e._self._c;return t("card",[t("h3",{staticClass:"mb-0",attrs:{slot:"header"},slot:"header"},[e._v("Server side validation")]),e._v(" "),t("div",{staticClass:"row"},[t("div",{staticClass:"col-lg-8"},[t("p",{staticClass:"mb-0"},[e._v("\n        We recommend using client side validation, but in case you require server side, you can indicate invalid and\n        valid form fields with "),t("code",[e._v(".is-invalid")]),e._v(" and "),t("code",[e._v(".is-valid")]),e._v(". Note that\n        "),t("code",[e._v(".invalid-feedback")]),e._v("\n        is also supported with these classes.\n      ")])])]),e._v(" "),t("hr"),e._v(" "),t("validation-observer",{ref:"formValidator",scopedSlots:e._u([{key:"default",fn:function(n){var l=n.handleSubmit;return[t("form",{staticClass:"needs-validation",on:{submit:function(t){return t.preventDefault(),l(e.onSubmit)}}},[t("div",{staticClass:"form-row"},[t("div",{staticClass:"col-md-4"},[t("base-input",{attrs:{label:"First name",rules:"required",name:"First name",placeholder:"First name","success-message":"Looks good!"},model:{value:e.model.firstName,callback:function(t){e.$set(e.model,"firstName",t)},expression:"model.firstName"}})],1),e._v(" "),t("div",{staticClass:"col-md-4"},[t("base-input",{attrs:{label:"Last name",rules:"required",name:"Last name",placeholder:"Last name","success-message":"Looks good!"},model:{value:e.model.lastName,callback:function(t){e.$set(e.model,"lastName",t)},expression:"model.lastName"}})],1),e._v(" "),t("div",{staticClass:"col-md-4"},[t("base-input",{attrs:{label:"Username",rules:"required",name:"Username",placeholder:"Username","success-message":"Looks good!"},model:{value:e.model.username,callback:function(t){e.$set(e.model,"username",t)},expression:"model.username"}})],1)]),e._v(" "),t("div",{staticClass:"form-row"},[t("div",{staticClass:"col-md-6"},[t("base-input",{attrs:{label:"City",name:"City",rules:"required",placeholder:"City","success-message":"Looks good!"},model:{value:e.model.city,callback:function(t){e.$set(e.model,"city",t)},expression:"model.city"}})],1),e._v(" "),t("div",{staticClass:"col-md-3"},[t("base-input",{attrs:{label:"State",name:"State",rules:"required",placeholder:"State","success-message":"Looks good!"},model:{value:e.model.state,callback:function(t){e.$set(e.model,"state",t)},expression:"model.state"}})],1),e._v(" "),t("div",{staticClass:"col-md-3"},[t("base-input",{attrs:{label:"Zip",name:"Zip",rules:"required",placeholder:"Zip","success-message":"Looks good!"},model:{value:e.model.zip,callback:function(t){e.$set(e.model,"zip",t)},expression:"model.zip"}})],1)]),e._v(" "),t("base-input",{attrs:{rules:{required:{allowFalse:!1}},name:"Terms"}},[t("base-checkbox",{model:{value:e.model.agree,callback:function(t){e.$set(e.model,"agree",t)},expression:"model.agree"}},[e._v("\n          Agree to terms and conditions\n        ")])],1),e._v(" "),t("base-button",{attrs:{type:"primary","native-type":"submit"}},[e._v("Submit form")])],1)]}}])})],1)}),[],!1,null,null,null);t.a=component.exports},462:function(e,t,n){"use strict";n(33),n(21),n(27),n(37),n(38),n(23),n(19),n(44),n(45),n(46);var l=n(9);n(10);function o(e,t){var n="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!n){if(Array.isArray(e)||(n=function(e,t){if(!e)return;if("string"==typeof e)return r(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return r(e,t)}(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var i=0,l=function(){};return{s:l,n:function(){return i>=e.length?{done:!0}:{done:!1,value:e[i++]}},e:function(e){throw e},f:l}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,c=!0,d=!1;return{s:function(){n=n.call(e)},n:function(){var e=n.next();return c=e.done,e},e:function(e){d=!0,o=e},f:function(){try{c||null==n.return||n.return()}finally{if(d)throw o}}}}function r(e,t){(null==t||t>e.length)&&(t=e.length);for(var i=0,n=new Array(t);i<t;i++)n[i]=e[i];return n}function c(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,n)}return t}function d(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?c(Object(source),!0).forEach((function(t){Object(l.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):c(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var m={name:"file-input",inheritAttrs:!1,props:{initialLabel:{type:String,default:"Select file"}},data:function(){return{files:[]}},computed:{listeners:function(){return d(d({},this.$listeners),{},{change:this.fileChange})},label:function(){var e,t=[],n=o(this.files);try{for(n.s();!(e=n.n()).done;){var l=e.value;t.push(l.name)}}catch(e){n.e(e)}finally{n.f()}return t.length?t.join(", "):this.initialLabel}},methods:{fileChange:function(e){this.files=e.target.files,this.$emit("change",this.files)}}},v=n(7),component=Object(v.a)(m,(function(){var e=this,t=e._self._c;return t("div",{staticClass:"custom-file"},[t("input",e._g(e._b({staticClass:"custom-file-input",attrs:{type:"file",id:"customFileLang",lang:"en"}},"input",e.$attrs,!1),e.listeners)),e._v(" "),t("label",{staticClass:"custom-file-label",attrs:{for:"customFileLang"}},[e._v("\n    "+e._s(e.label)+"\n  ")])])}),[],!1,null,null,null);t.a=component.exports},639:function(e,t,n){},640:function(e,t,n){},701:function(e,t,n){"use strict";n(639)},702:function(e,t,n){"use strict";n(640)},750:function(e,t,n){"use strict";n.r(t);n(10),n(131),n(33),n(21),n(27),n(37),n(38),n(249),n(86);var l,o=n(170),r=n.n(o),c=n(11),d=n(9),m=(n(437),n(438)),v=n.n(m),f=(n(439),n(440)),h=n.n(f),k=(n(43),n(23),n(118)),y=n(459),C=n(460),_=n(461),w=n(462),S=n(451),x=n.n(S);n(452);function O(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,n)}return t}function j(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?O(Object(source),!0).forEach((function(t){Object(d.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):O(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var $={name:"form-components",layout:"DashboardLayout",middleware:["isAuthenticated","checkAdmin"],components:(l={CustomStylesValidation:y.a,BrowserDefaultsValidation:C.a,ServerSideValidation:_.a},Object(d.a)(l,h.a.name,h.a),Object(d.a)(l,v.a.name,v.a),Object(d.a)(l,"FileInput",w.a),Object(d.a)(l,"flatPicker",x.a),l),data:function(){return{validated:!1,seen:!0,se:!0,sin:!0,model:{id:"",name:"",avatar:"",phone:"",email:"",cmail:"",city:"",state:"",pincode:"",address:"",gst:"",gtsaddress:"",bankDetails:{name:"",acc:"",ifsc:"",upi:""}},link:"",obj:null,link1:"",obj1:null,ok:!0}},methods:{seeme:function(e){window.open(e,"_blank")},firstFormSubmit:function(){var e=this;return Object(c.a)(regeneratorRuntime.mark((function t(){var n,l,o,c;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n=e,l=new FormData,""==n.model.name||""==n.model.address||""==n.model.city||""==n.model.state||""==n.model.pin||""==n.model.phone||10!=n.model.phone.length||1!=!isNaN(n.model.phone)){t.next=15;break}for(c in n.sin=!1,n.model.avatar=null==n.obj?n.model.avatar:n.obj,n.model.document=null==n.obj1?n.model.document:n.obj1,n.model.email=n.model.cmail,(o=j({},n.model)).phone="+91"+n.model.phone,o.bankDetails=JSON.stringify(o.bankDetails),o)o.hasOwnProperty(c)&&l.append(c,o[c]);return t.next=13,k.a.collection("partners").update(n.model.id,l).then((function(){setTimeout((function(){r()({showClose:!0,message:"Profile Updated Successfuly!",type:"success"}),n.sin=!0,o.phone=o.phone.slice(3)}),1500)})).catch((function(){n.sin=!0,o.phone=o.phone.slice(3),r()({showClose:!0,message:"Something went wrong!",type:"warning"})}));case 13:t.next=16;break;case 15:r()({showClose:!0,message:"All fields are required!",type:"warning"});case 16:case"end":return t.stop()}}),t)})))()},getcat:function(){var e=this;return Object(c.a)(regeneratorRuntime.mark((function t(){var n,l,o;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=e,t.prev=1,l=n.model.bankDetails,t.next=5,k.a.collection("partners").getOne(k.a.authStore.model.id);case 5:o=t.sent,n.model=o,n.link=""!=n.model.avatar?"https://alfrescogrand.com/api/files/partners/".concat(n.model.id,"/").concat(n.model.avatar):"",n.link1=""!=n.model.document?"https://alfrescogrand.com/api/files/partners/".concat(n.model.id,"/").concat(n.model.document):"",n.model.phone=n.model.phone.slice(3),n.model.bankDetails=n.model.bankDetails||l,t.next=16;break;case 13:t.prev=13,t.t0=t.catch(1),n.ok=!1;case 16:case"end":return t.stop()}}),t,null,[[1,13]])})))()},filesChange1:function(e){var t=this;return Object(c.a)(regeneratorRuntime.mark((function n(){var l;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:l=t,0!=e.length&&(l.link="",l.se=!1,l.link=URL.createObjectURL(e[0]),l.obj=e[0],l.se=!0);case 2:case"end":return n.stop()}}),n)})))()},dlt:function(){this.link="",this.obj=null},filesChange11:function(e){var t=this;return Object(c.a)(regeneratorRuntime.mark((function n(){var l;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:l=t,0!=e.length&&(l.link1="",l.se=!1,l.link1=URL.createObjectURL(e[0]),l.obj1=e[0],l.se=!0);case 2:case"end":return n.stop()}}),n)})))()},dlt1:function(){this.link1="",this.obj1=null}},mounted:function(){this.getcat()}},N=(n(701),n(702),n(7)),component=Object(N.a)($,(function(){var e=this,t=e._self._c;return t("div",[t("base-header",{staticClass:"pb-2"},[t("div",{staticClass:"row align-items-center py-4"},[t("div",{staticClass:"col-lg-6 col-7"},[t("h6",{staticClass:"h2 text-white d-inline-block mb-0"},[e._v("Profile")])])])]),e._v(" "),t("div",{staticClass:"container-fluid mt--6"},[t("div",{staticClass:"row ht"},[t("div",{staticClass:"col"},[t("div",{staticClass:"card-wrapper"},[t("validation-observer",{ref:"formValidator",scopedSlots:e._u([{key:"default",fn:function(n){var l=n.handleSubmit;return[t("form",{staticClass:"needs-validation",on:{submit:function(e){e.preventDefault()}}},[t("div",{staticClass:"form-row"},[t("div",{staticClass:"col-md-3"},[t("base-input",{attrs:{label:"Name",name:"Name",placeholder:"EnterName","success-message":"Looks good!",rules:"required"},model:{value:e.model.name,callback:function(t){e.$set(e.model,"name",t)},expression:"model.name"}})],1),e._v(" "),t("div",{staticClass:"col-md-3"},[t("base-input",{attrs:{label:"Phone (10 digits)",name:"Phone",maxLength:"10",minLength:"10",placeholder:"Enter Phone"},model:{value:e.model.phone,callback:function(t){e.$set(e.model,"phone",t)},expression:"model.phone"}})],1),e._v(" "),1==e.ok?t("div",{staticClass:"col-md-3"},[t("base-input",{attrs:{label:"Email",name:"Email",placeholder:"Enter Email",readonly:""},model:{value:e.model.cmail,callback:function(t){e.$set(e.model,"cmail",t)},expression:"model.cmail"}})],1):t("div",{staticClass:"col-md-3"},[t("base-input",{attrs:{label:"Email",name:"Email",placeholder:"Enter Email"},model:{value:e.model.cmail,callback:function(t){e.$set(e.model,"cmail",t)},expression:"model.cmail"}})],1),e._v(" "),t("div",{staticClass:"col-md-3"},[t("base-input",{attrs:{label:"Address",name:"Address",placeholder:"Enter Address"},model:{value:e.model.address,callback:function(t){e.$set(e.model,"address",t)},expression:"model.address"}})],1),e._v(" "),t("div",{staticClass:"col-md-3"},[t("base-input",{attrs:{label:"City",name:"City",placeholder:"Enter City"},model:{value:e.model.city,callback:function(t){e.$set(e.model,"city",t)},expression:"model.city"}})],1),e._v(" "),t("div",{staticClass:"col-md-3"},[t("base-input",{attrs:{label:"State",name:"State",placeholder:"Enter State"},model:{value:e.model.state,callback:function(t){e.$set(e.model,"state",t)},expression:"model.state"}})],1),e._v(" "),t("div",{staticClass:"col-md-3"},[t("base-input",{attrs:{label:"Pincode",name:"Pincode",placeholder:"Enter Pincode"},model:{value:e.model.pincode,callback:function(t){e.$set(e.model,"pincode",t)},expression:"model.pincode"}})],1),e._v(" "),t("div",{staticClass:"col-md-3"},[t("base-input",{attrs:{label:"GST",name:"GST",placeholder:"Enter GST"},model:{value:e.model.gst,callback:function(t){e.$set(e.model,"gst",t)},expression:"model.gst"}})],1),e._v(" "),t("div",{staticClass:"col-md-3"},[t("base-input",{attrs:{label:"GST Address",name:"GST Address",placeholder:"Enter GST Address"},model:{value:e.model.gtsaddress,callback:function(t){e.$set(e.model,"gtsaddress",t)},expression:"model.gtsaddress"}})],1),e._v(" "),t("div",{staticClass:"col-md-12"},[t("h3",[e._v("Bank Details")])]),e._v(" "),t("div",{staticClass:"col-md-3"},[t("base-input",{attrs:{label:"Bank Name",name:"Bank Name",placeholder:"Enter Bank Name"},model:{value:e.model.bankDetails.name,callback:function(t){e.$set(e.model.bankDetails,"name",t)},expression:"model.bankDetails.name"}})],1),e._v(" "),t("div",{staticClass:"col-md-3"},[t("base-input",{attrs:{label:"IFSC Code",name:"IFSC Code",placeholder:"Enter IFSC Code"},model:{value:e.model.bankDetails.ifsc,callback:function(t){e.$set(e.model.bankDetails,"ifsc",t)},expression:"model.bankDetails.ifsc"}})],1),e._v(" "),t("div",{staticClass:"col-md-3"},[t("base-input",{attrs:{label:"Account Number",name:"Account Number",placeholder:"Enter Account Number"},model:{value:e.model.bankDetails.acc,callback:function(t){e.$set(e.model.bankDetails,"acc",t)},expression:"model.bankDetails.acc"}})],1),e._v(" "),t("div",{staticClass:"col-md-3"},[t("base-input",{attrs:{label:"UPI",name:"UPI",placeholder:"Enter UPI"},model:{value:e.model.bankDetails.upi,callback:function(t){e.$set(e.model.bankDetails,"upi",t)},expression:"model.bankDetails.upi"}})],1),e._v(" "),t("div",{staticClass:"mb-4",staticStyle:{width:"100%"}},[t("div",{staticClass:"col-md-3"},[t("base-input",{attrs:{label:"Image"}},[t("file-input",{attrs:{accept:".jpg,.png,.jpeg,.webp,.pdf"},on:{change:e.filesChange1}})],1)],1),e._v(" "),""!=e.link?t("div",{staticClass:"col-md-3 cnm",staticStyle:{height:"250px"}},[t("a",{attrs:{href:e.link}},[t("img",{staticClass:"op",attrs:{src:e.link}})]),e._v(" "),t("i",{staticClass:"fa fa-trash plg",on:{click:function(t){return e.dlt(e.link)}}})]):e._e(),e._v(" "),t("div",{staticClass:"col-md-3 kp",staticStyle:{height:"250px"},attrs:{hidden:e.se}},[t("p",{staticClass:"spinners",attrs:{hidden:e.se}})])]),e._v(" "),t("div",{staticClass:"mb-4",staticStyle:{width:"100%"}},[t("div",{staticClass:"col-md-3"},[t("base-input",{attrs:{label:"GST /LISENCES"}},[t("file-input",{attrs:{accept:".jpg,.png,.jpeg,.webp,.pdf"},on:{change:e.filesChange11}})],1)],1),e._v(" "),""!=e.link1?t("div",{staticClass:"col-md-3 cnm",staticStyle:{height:"250px"}},[t("button",{staticClass:"btn sm btn-primary ml-3",on:{click:function(t){return e.seeme(e.link1)}}},[e._v("\n                      View Doc\n                    ")])]):e._e(),e._v(" "),t("div",{staticClass:"col-md-3 kp",staticStyle:{height:"250px"},attrs:{hidden:e.se}},[t("p",{staticClass:"spinners",attrs:{hidden:e.se}})])])]),e._v(" "),1==e.sin&&1==e.ok?t("base-button",{attrs:{type:"success","native-type":"submit"},on:{click:function(t){return l(e.firstFormSubmit)}}},[e._v("Update")]):e._e(),e._v(" "),0==e.sin&&1==e.ok?t("base-button",{attrs:{type:"success","native-type":"submit",disabled:""}},[e._v("Updating\n                "),t("p",{staticClass:"spinner"})]):e._e(),e._v(" "),1==e.sin&&0==e.ok?t("base-button",{attrs:{type:"success","native-type":"submit"},on:{click:function(t){return l(e.firstFormSubmit)}}},[e._v("Save")]):e._e(),e._v(" "),0==e.sin&&0==e.ok?t("base-button",{attrs:{type:"success","native-type":"submit",disabled:""}},[e._v("Saving\n                "),t("p",{staticClass:"spinner"})]):e._e()],1)]}}])})],1)])])])],1)}),[],!1,null,"64c2ef73",null);t.default=component.exports}}]);