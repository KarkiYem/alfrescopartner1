(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{454:function(t,e,r){"use strict";r(467);var o=r(466);e.a={mounted:function(){Object(o.c)()}}},466:function(t,e,r){"use strict";r.d(e,"a",(function(){return m})),r.d(e,"c",(function(){return C})),r.d(e,"b",(function(){return y}));r(33),r(21),r(27),r(37),r(38);var o=r(9),n=r(30);function c(t,e){for(var r in e)"object"!==Object(n.a)(e[r])?t[r]=e[r]:c(t[r],e[r])}var l=r(467),d=r.n(l);function h(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function f(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?h(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):h(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var m={mode:"light",fonts:{base:"Open Sans"},colors:{gray:{100:"#f6f9fc",200:"#e9ecef",300:"#dee2e6",400:"#ced4da",500:"#adb5bd",600:"#8898aa",700:"#525f7f",800:"#32325d",900:"#212529"},theme:{default:"#172b4d",primary:"#5e72e4",secondary:"#f4f5f7",info:"#11cdef",success:"#2dce89",danger:"#f5365c",warning:"#fb6340"},black:"#12263F",white:"#FFFFFF",orange:"#ffc1c1",transparent:"transparent"}};var j=!1;function C(){var t,e,r,o;j||(c(d.a,(t=m.colors,e=m.mode,r=m.fonts,o={defaults:{global:{responsive:!0,maintainAspectRatio:!1,defaultColor:"dark"===e?t.gray[700]:t.gray[800],defaultFontColor:"dark"===e?t.gray[700]:t.gray[800],defaultFontFamily:r.base,defaultFontSize:13,layout:{padding:0},legend:{display:!1,position:"bottom",labels:{usePointStyle:!0,padding:16}},elements:{point:{radius:0,backgroundColor:t.theme.warning},line:{tension:.4,borderWidth:4,borderColor:t.theme.warning,backgroundColor:t.transparent,borderCapStyle:"rounded"},rectangle:{backgroundColor:t.theme.warning},arc:{backgroundColor:t.theme.primary,borderColor:"dark"==e?t.gray[800]:t.white,borderWidth:4}},tooltips:{enabled:!0,mode:"index",intersect:!1}},pie:{tooltips:{mode:"point"}},doughnut:{tooltips:{mode:"point"},cutoutPercentage:83,legendCallback:function(t){var data=t.data,content="";return data.labels.forEach((function(label,t){var e=data.datasets[0].backgroundColor[t];content+='<span class="chart-legend-item">',content+='<i class="chart-legend-indicator" style="background-color: '+e+'"></i>',content+=label,content+="</span>"})),content}}}},d.a.scaleService.updateScaleDefaults("linear",{gridLines:{borderDash:[2],borderDashOffset:[2],color:"dark"===e?t.gray[900]:t.gray[700],drawBorder:!1,drawTicks:!0,zeroLineWidth:1,zeroLineColor:"dark"===e?t.gray[900]:t.gray[700],zeroLineBorderDash:[2],zeroLineBorderDashOffset:[2]},ticks:{beginAtZero:!0,padding:10,callback:function(t){if(!(t%10))return t}}}),d.a.scaleService.updateScaleDefaults("category",{gridLines:{drawBorder:!1,drawOnChartArea:!1,drawTicks:!1,lineWidth:1,zeroLineWidth:1},ticks:{padding:20},maxBarThickness:10}),o)),j=!0)}var v={maintainAspectRatio:!1,legend:{display:!1},responsive:!0},y={scales:{yAxes:[{gridLines:{color:m.colors.gray[800],zeroLineColor:m.colors.gray[800]}}]}};f(f({},v),{},{tooltips:{backgroundColor:"#f5f5f5",titleFontColor:"#333",bodyFontColor:"#666",bodySpacing:4,xPadding:12,mode:"nearest",intersect:0,position:"nearest"},responsive:!0,scales:{yAxes:[{barPercentage:1.6,gridLines:{drawBorder:!1,color:"rgba(29,140,248,0.0)",zeroLineColor:"transparent"},ticks:{suggestedMin:60,suggestedMax:125,padding:20,fontColor:"#9e9e9e"}}],xAxes:[{barPercentage:1.6,gridLines:{drawBorder:!1,color:"rgba(29,140,248,0.1)",zeroLineColor:"transparent"},ticks:{padding:20,fontColor:"#9e9e9e"}}]}}),f(f({},v),{},{tooltips:{backgroundColor:"#f5f5f5",titleFontColor:"#333",bodyFontColor:"#666",bodySpacing:4,xPadding:12,mode:"nearest",intersect:0,position:"nearest"},responsive:!0,scales:{yAxes:[{gridLines:{drawBorder:!1,color:"rgba(253,93,147,0.1)",zeroLineColor:"transparent"},ticks:{suggestedMin:60,suggestedMax:125,padding:20,fontColor:"#9e9e9e"}}],xAxes:[{gridLines:{drawBorder:!1,color:"rgba(253,93,147,0.1)",zeroLineColor:"transparent"},ticks:{padding:20,fontColor:"#9e9e9e"}}]}}),f(f({},v),{},{cutoutPercentage:70,tooltips:{backgroundColor:"#f5f5f5",titleFontColor:"#333",bodyFontColor:"#666",bodySpacing:4,xPadding:12,mode:"nearest",intersect:0,position:"nearest"},scales:{yAxes:[{display:0,ticks:{display:!1},gridLines:{drawBorder:!1,zeroLineColor:"transparent",color:"rgba(255,255,255,0.05)"}}],xAxes:[{display:0,barPercentage:1.6,gridLines:{drawBorder:!1,color:"rgba(255,255,255,0.1)",zeroLineColor:"transparent"},ticks:{display:!1}}]}}),f(f({},v),{},{tooltips:{backgroundColor:"#f5f5f5",titleFontColor:"#333",bodyFontColor:"#666",bodySpacing:4,xPadding:12,mode:"nearest",intersect:0,position:"nearest"},scales:{yAxes:[{barPercentage:1.6,gridLines:{drawBorder:!1,color:"rgba(29,140,248,0.0)",zeroLineColor:"transparent"},ticks:{suggestedMin:60,suggestedMax:125,padding:20,fontColor:"#9a9a9a"}}],xAxes:[{barPercentage:1.6,gridLines:{drawBorder:!1,color:"rgba(225,78,202,0.1)",zeroLineColor:"transparent"},ticks:{padding:20,fontColor:"#9a9a9a"}}]}}),f(f({},v),{},{tooltips:{backgroundColor:"#f5f5f5",titleFontColor:"#333",bodyFontColor:"#666",bodySpacing:4,xPadding:12,mode:"nearest",intersect:0,position:"nearest"},scales:{yAxes:[{barPercentage:1.6,gridLines:{drawBorder:!1,color:"rgba(29,140,248,0.0)",zeroLineColor:"transparent"},ticks:{suggestedMin:50,suggestedMax:110,padding:20,fontColor:"#ff8a76"}}],xAxes:[{barPercentage:1.6,gridLines:{drawBorder:!1,color:"rgba(220,53,69,0.1)",zeroLineColor:"transparent"},ticks:{padding:20,fontColor:"#ff8a76"}}]}}),f(f({},v),{},{tooltips:{backgroundColor:"#f5f5f5",titleFontColor:"#333",bodyFontColor:"#666",bodySpacing:4,xPadding:12,mode:"nearest",intersect:0,position:"nearest"},scales:{yAxes:[{barPercentage:1.6,gridLines:{drawBorder:!1,color:"rgba(29,140,248,0.0)",zeroLineColor:"transparent"},ticks:{suggestedMin:50,suggestedMax:125,padding:20,fontColor:"#9e9e9e"}}],xAxes:[{barPercentage:1.6,gridLines:{drawBorder:!1,color:"rgba(0,242,195,0.1)",zeroLineColor:"transparent"},ticks:{padding:20,fontColor:"#9e9e9e"}}]}}),f(f({},v),{},{tooltips:{backgroundColor:"#f5f5f5",titleFontColor:"#333",bodyFontColor:"#666",bodySpacing:4,xPadding:12,mode:"nearest",intersect:0,position:"nearest"},scales:{yAxes:[{gridLines:{drawBorder:!1,color:"rgba(29,140,248,0.1)",zeroLineColor:"transparent"},ticks:{suggestedMin:60,suggestedMax:120,padding:20,fontColor:"#9e9e9e"}}],xAxes:[{gridLines:{drawBorder:!1,color:"rgba(29,140,248,0.1)",zeroLineColor:"transparent"},ticks:{padding:20,fontColor:"#9e9e9e"}}]}})},606:function(t,e,r){"use strict";var o=r(465),n=r(454);e.a={name:"line-chart",extends:o.c,mixins:[o.e.reactiveProp,n.a],props:{extraOptions:{type:Object,default:function(){return{}}}},data:function(){return{ctx:null}},mounted:function(){var t=this;this.$watch("chartData",(function(e,r){r||t.renderChart(t.chartData,t.extraOptions)}),{immediate:!0})}}},607:function(t,e,r){"use strict";var o=r(465),n=r(454);e.a={name:"bar-chart",extends:o.a,mixins:[o.e.reactiveProp,n.a],props:{extraOptions:{type:Object,default:function(){return{}}}},data:function(){return{ctx:null}},mounted:function(){var t=this;this.$watch("chartData",(function(e,r){r||t.renderChart(t.chartData,t.extraOptions)}),{immediate:!0})}}},622:function(t,e,r){var map={"./af":470,"./af.js":470,"./ar":471,"./ar-dz":472,"./ar-dz.js":472,"./ar-kw":473,"./ar-kw.js":473,"./ar-ly":474,"./ar-ly.js":474,"./ar-ma":475,"./ar-ma.js":475,"./ar-sa":476,"./ar-sa.js":476,"./ar-tn":477,"./ar-tn.js":477,"./ar.js":471,"./az":478,"./az.js":478,"./be":479,"./be.js":479,"./bg":480,"./bg.js":480,"./bm":481,"./bm.js":481,"./bn":482,"./bn-bd":483,"./bn-bd.js":483,"./bn.js":482,"./bo":484,"./bo.js":484,"./br":485,"./br.js":485,"./bs":486,"./bs.js":486,"./ca":487,"./ca.js":487,"./cs":488,"./cs.js":488,"./cv":489,"./cv.js":489,"./cy":490,"./cy.js":490,"./da":491,"./da.js":491,"./de":492,"./de-at":493,"./de-at.js":493,"./de-ch":494,"./de-ch.js":494,"./de.js":492,"./dv":495,"./dv.js":495,"./el":496,"./el.js":496,"./en-au":497,"./en-au.js":497,"./en-ca":498,"./en-ca.js":498,"./en-gb":499,"./en-gb.js":499,"./en-ie":500,"./en-ie.js":500,"./en-il":501,"./en-il.js":501,"./en-in":502,"./en-in.js":502,"./en-nz":503,"./en-nz.js":503,"./en-sg":504,"./en-sg.js":504,"./eo":505,"./eo.js":505,"./es":506,"./es-do":507,"./es-do.js":507,"./es-mx":508,"./es-mx.js":508,"./es-us":509,"./es-us.js":509,"./es.js":506,"./et":510,"./et.js":510,"./eu":511,"./eu.js":511,"./fa":512,"./fa.js":512,"./fi":513,"./fi.js":513,"./fil":514,"./fil.js":514,"./fo":515,"./fo.js":515,"./fr":516,"./fr-ca":517,"./fr-ca.js":517,"./fr-ch":518,"./fr-ch.js":518,"./fr.js":516,"./fy":519,"./fy.js":519,"./ga":520,"./ga.js":520,"./gd":521,"./gd.js":521,"./gl":522,"./gl.js":522,"./gom-deva":523,"./gom-deva.js":523,"./gom-latn":524,"./gom-latn.js":524,"./gu":525,"./gu.js":525,"./he":526,"./he.js":526,"./hi":527,"./hi.js":527,"./hr":528,"./hr.js":528,"./hu":529,"./hu.js":529,"./hy-am":530,"./hy-am.js":530,"./id":531,"./id.js":531,"./is":532,"./is.js":532,"./it":533,"./it-ch":534,"./it-ch.js":534,"./it.js":533,"./ja":535,"./ja.js":535,"./jv":536,"./jv.js":536,"./ka":537,"./ka.js":537,"./kk":538,"./kk.js":538,"./km":539,"./km.js":539,"./kn":540,"./kn.js":540,"./ko":541,"./ko.js":541,"./ku":542,"./ku.js":542,"./ky":543,"./ky.js":543,"./lb":544,"./lb.js":544,"./lo":545,"./lo.js":545,"./lt":546,"./lt.js":546,"./lv":547,"./lv.js":547,"./me":548,"./me.js":548,"./mi":549,"./mi.js":549,"./mk":550,"./mk.js":550,"./ml":551,"./ml.js":551,"./mn":552,"./mn.js":552,"./mr":553,"./mr.js":553,"./ms":554,"./ms-my":555,"./ms-my.js":555,"./ms.js":554,"./mt":556,"./mt.js":556,"./my":557,"./my.js":557,"./nb":558,"./nb.js":558,"./ne":559,"./ne.js":559,"./nl":560,"./nl-be":561,"./nl-be.js":561,"./nl.js":560,"./nn":562,"./nn.js":562,"./oc-lnc":563,"./oc-lnc.js":563,"./pa-in":564,"./pa-in.js":564,"./pl":565,"./pl.js":565,"./pt":566,"./pt-br":567,"./pt-br.js":567,"./pt.js":566,"./ro":568,"./ro.js":568,"./ru":569,"./ru.js":569,"./sd":570,"./sd.js":570,"./se":571,"./se.js":571,"./si":572,"./si.js":572,"./sk":573,"./sk.js":573,"./sl":574,"./sl.js":574,"./sq":575,"./sq.js":575,"./sr":576,"./sr-cyrl":577,"./sr-cyrl.js":577,"./sr.js":576,"./ss":578,"./ss.js":578,"./sv":579,"./sv.js":579,"./sw":580,"./sw.js":580,"./ta":581,"./ta.js":581,"./te":582,"./te.js":582,"./tet":583,"./tet.js":583,"./tg":584,"./tg.js":584,"./th":585,"./th.js":585,"./tk":586,"./tk.js":586,"./tl-ph":587,"./tl-ph.js":587,"./tlh":588,"./tlh.js":588,"./tr":589,"./tr.js":589,"./tzl":590,"./tzl.js":590,"./tzm":591,"./tzm-latn":592,"./tzm-latn.js":592,"./tzm.js":591,"./ug-cn":593,"./ug-cn.js":593,"./uk":594,"./uk.js":594,"./ur":595,"./ur.js":595,"./uz":596,"./uz-latn":597,"./uz-latn.js":597,"./uz.js":596,"./vi":598,"./vi.js":598,"./x-pseudo":599,"./x-pseudo.js":599,"./yo":600,"./yo.js":600,"./zh-cn":601,"./zh-cn.js":601,"./zh-hk":602,"./zh-hk.js":602,"./zh-mo":603,"./zh-mo.js":603,"./zh-tw":604,"./zh-tw.js":604};function o(t){var e=n(t);return r(e)}function n(t){if(!r.o(map,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return map[t]}o.keys=function(){return Object.keys(map)},o.resolve=n,t.exports=o,o.id=622},737:function(t,e,r){"use strict";r.r(e);var o=r(465),n=r(454),c={name:"doughnut-chart",extends:o.b,mixins:[o.e.reactiveProp,n.a],props:{extraOptions:{type:Object,default:function(){return{}}}},data:function(){return{ctx:null}},mounted:function(){var t=this;this.$watch("chartData",(function(e,r){r||t.renderChart(t.chartData,t.extraOptions)}),{immediate:!0})}},l=r(606),d=r(607),h={name:"pie-chart",extends:o.d,mixins:[o.e.reactiveProp,n.a],props:{extraOptions:{type:Object,default:function(){return{}}}},data:function(){return{ctx:null}},mounted:function(){var t=this;this.$watch("chartData",(function(e,r){r||t.renderChart(t.chartData,t.extraOptions)}),{immediate:!0})}},f=r(466),m=r(116),j=r(129),C=r(117);function v(){return Math.round(100*Math.random())}var y={layout:"DashboardLayout",components:{DoughnutChart:c,LineChart:l.a,BarChart:d.a,PieChart:h,StatsCard:C.a,BaseHeader:j.a,RouteBreadCrumb:m.a},data:function(){return{salesChart:{chartData:{labels:["May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],datasets:[{label:"Performance",data:[0,20,10,30,15,40,20,60,60]}]},extraOptions:f.b},ordersChart:{chartData:{labels:["Jul","Aug","Sep","Oct","Nov","Dec"],datasets:[{label:"Sales",data:[25,20,30,22,17,29]}]}},dotsChart:{chartData:{labels:["May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],datasets:[{label:"Performance",data:[10,18,28,23,28,40,36,46,52],pointRadius:10,pointHoverRadius:15,showLine:!1}]},extraOptions:{scales:{yAxes:[{gridLines:{color:f.a.colors.gray[200],zeroLineColor:f.a.colors.gray[200]}}]}}},doughnutChart:{chartData:{labels:["Danger","Warning","Success","Primary","Info"],datasets:[{data:[v(),v(),v(),v(),v()],backgroundColor:[f.a.colors.theme.danger,f.a.colors.theme.warning,f.a.colors.theme.success,f.a.colors.theme.primary,f.a.colors.theme.info],label:"Dataset 1"}]},extraOptions:{responsive:!0,legend:{position:"top"},animation:{animateScale:!0,animateRotate:!0}}},pieChart:{chartData:{labels:["Danger","Warning","Success","Primary","Info"],datasets:[{data:[v(),v(),v(),v(),v()],backgroundColor:[f.a.colors.theme.danger,f.a.colors.theme.warning,f.a.colors.theme.success,f.a.colors.theme.primary,f.a.colors.theme.info],label:"Dataset 1"}]},extraOptions:{responsive:!0,legend:{position:"top"},animation:{animateScale:!0,animateRotate:!0}}},barChartStacked:{chartData:{labels:["January","February","March","April","May","June","July"],datasets:[{label:"Dataset 1",backgroundColor:f.a.colors.theme.danger,data:[v(),v(),v(),v(),v(),v(),v()]},{label:"Dataset 2",backgroundColor:f.a.colors.theme.primary,data:[v(),v(),v(),v(),v(),v(),v()]},{label:"Dataset 3",backgroundColor:f.a.colors.theme.success,data:[v(),v(),v(),v(),v(),v(),v()]}]},extraOptions:{tooltips:{mode:"index",intersect:!1},responsive:!0,scales:{xAxes:[{stacked:!0}],yAxes:[{stacked:!0}]}}}}}},x=r(7),component=Object(x.a)(y,(function(){var t=this,e=t._self._c;return e("div",[e("base-header",{staticClass:"pb-6"},[e("div",{staticClass:"row align-items-center py-4"},[e("div",{staticClass:"col-lg-6 col-7"},[e("h6",{staticClass:"h2 text-white d-inline-block mb-0"},[t._v("Charts")]),t._v(" "),e("nav",{staticClass:"d-none d-md-inline-block ml-md-4",attrs:{"aria-label":"breadcrumb"}},[e("route-bread-crumb")],1)]),t._v(" "),e("div",{staticClass:"col-lg-6 col-5 text-right"},[e("base-button",{attrs:{size:"sm",type:"neutral"}},[t._v("New")]),t._v(" "),e("base-button",{attrs:{size:"sm",type:"neutral"}},[t._v("Filters")])],1)]),t._v(" "),e("div",{staticClass:"row"},[e("div",{staticClass:"col-xl-3 col-md-6"},[e("stats-card",{attrs:{title:"Total traffic",type:"gradient-red","sub-title":"350,897",icon:"ni ni-active-40"}},[e("template",{slot:"footer"},[e("span",{staticClass:"text-success mr-2"},[e("i",{staticClass:"fa fa-arrow-up"}),t._v(" 3.48%")]),t._v(" "),e("span",{staticClass:"text-nowrap"},[t._v("Since last month")])])],2)],1),t._v(" "),e("div",{staticClass:"col-xl-3 col-md-6"},[e("stats-card",{attrs:{title:"Total traffic",type:"gradient-orange","sub-title":"2,356",icon:"ni ni-chart-pie-35"}},[e("template",{slot:"footer"},[e("span",{staticClass:"text-success mr-2"},[e("i",{staticClass:"fa fa-arrow-up"}),t._v(" 12.18%")]),t._v(" "),e("span",{staticClass:"text-nowrap"},[t._v("Since last month")])])],2)],1),t._v(" "),e("div",{staticClass:"col-xl-3 col-md-6"},[e("stats-card",{attrs:{title:"Sales",type:"gradient-green","sub-title":"924",icon:"ni ni-money-coins"}},[e("template",{slot:"footer"},[e("span",{staticClass:"text-danger mr-2"},[e("i",{staticClass:"fa fa-arrow-down"}),t._v(" 5.72%")]),t._v(" "),e("span",{staticClass:"text-nowrap"},[t._v("Since last month")])])],2)],1),t._v(" "),e("div",{staticClass:"col-xl-3 col-md-6"},[e("stats-card",{attrs:{title:"Performance",type:"gradient-info","sub-title":"49,65%",icon:"ni ni-chart-bar-32"}},[e("template",{slot:"footer"},[e("span",{staticClass:"text-success mr-2"},[e("i",{staticClass:"fa fa-arrow-up"}),t._v(" 54.8%")]),t._v(" "),e("span",{staticClass:"text-nowrap"},[t._v("Since last month")])])],2)],1)])]),t._v(" "),e("div",{staticClass:"container-fluid mt--6"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-xl-6"},[e("card",[e("template",{slot:"header"},[e("h6",{staticClass:"surtitle"},[t._v("Overview")]),t._v(" "),e("h5",{staticClass:"h3 mb-0"},[t._v("Total sales")])]),t._v(" "),e("div",{staticClass:"chart"},[e("line-chart",{attrs:{height:350,"chart-data":t.salesChart.chartData}})],1)],2)],1),t._v(" "),e("div",{staticClass:"col-xl-6"},[e("card",[e("template",{slot:"header"},[e("h6",{staticClass:"surtitle"},[t._v("Performance")]),t._v(" "),e("h5",{staticClass:"h3 mb-0"},[t._v("Total orders")])]),t._v(" "),e("div",{staticClass:"chart"},[e("bar-chart",{attrs:{"chart-data":t.ordersChart.chartData,height:350}})],1)],2)],1)]),t._v(" "),e("div",{staticClass:"row"},[e("div",{staticClass:"col-xl-6"},[e("card",[e("template",{slot:"header"},[e("h6",{staticClass:"surtitle"},[t._v("Growth")]),t._v(" "),e("h5",{staticClass:"h3 mb-0"},[t._v("Sales value")])]),t._v(" "),e("div",{staticClass:"chart"},[e("line-chart",{attrs:{height:350,"chart-data":t.dotsChart.chartData,"extra-options":t.dotsChart.extraOptions}})],1)],2)],1),t._v(" "),e("div",{staticClass:"col-xl-6"},[e("card",[e("template",{slot:"header"},[e("h6",{staticClass:"surtitle"},[t._v("Users")]),t._v(" "),e("h5",{staticClass:"h3 mb-0"},[t._v("Audience overview")])]),t._v(" "),e("div",{staticClass:"chart-area"},[e("doughnut-chart",{attrs:{height:350,"chart-data":t.doughnutChart.chartData,"extra-options":t.doughnutChart.extraOptions}})],1)],2)],1)]),t._v(" "),e("div",{staticClass:"row"},[e("div",{staticClass:"col-xl-6"},[e("card",[e("template",{slot:"header"},[e("h6",{staticClass:"surtitle"},[t._v("Partners")]),t._v(" "),e("h5",{staticClass:"h3 mb-0"},[t._v("Affiliate traffic")])]),t._v(" "),e("div",{staticClass:"chart"},[e("pie-chart",{attrs:{height:350,"chart-data":t.pieChart.chartData,"extra-options":t.pieChart.extraOptions}})],1)],2)],1),t._v(" "),e("div",{staticClass:"col-xl-6"},[e("card",[e("template",{slot:"header"},[e("h6",{staticClass:"surtitle"},[t._v("Overview")]),t._v(" "),e("h5",{staticClass:"h3 mb-0"},[t._v("Product comparison")])]),t._v(" "),e("div",{staticClass:"chart-area"},[e("bar-chart",{attrs:{height:350,"chart-data":t.barChartStacked.chartData,"extra-options":t.barChartStacked.extraOptions}})],1)],2)],1)])])],1)}),[],!1,null,null,null);e.default=component.exports}}]);