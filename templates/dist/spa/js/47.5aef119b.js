(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[47],{"0972":function(t,e){},"0999":function(t,e,a){"use strict";a.r(e);var o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("transition",{attrs:{appear:"","enter-active-class":"animated fadeIn"}},[a("q-table",{staticClass:"my-sticky-header-table shadow-24",attrs:{data:t.table_list,"row-key":"id",separator:t.separator,loading:t.loading,filter:t.filter,columns:t.columns,"hide-bottom":"",pagination:t.pagination,"no-data-label":"No data","no-results-label":"No data you want","table-style":{height:t.height},flat:"",bordered:""},on:{"update:pagination":function(e){t.pagination=e}},scopedSlots:t._u([{key:"top",fn:function(){return[a("q-btn-group",{attrs:{push:""}},[a("q-btn",{attrs:{label:t.$t("refresh")},on:{click:function(e){return t.reFresh()}}},[a("q-tooltip",{attrs:{"content-class":"bg-amber text-black shadow-4",offset:[10,10],"content-style":"font-size: 12px"}},[t._v(t._s(t.$t("refreshtip")))])],1)],1),a("q-space"),a("q-input",{attrs:{outlined:"",rounded:"",dense:"",debounce:"300",color:"primary",placeholder:t.$t("search")},on:{blur:function(e){return t.getSearchList()},keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.getSearchList()}},model:{value:t.filter,callback:function(e){t.filter=e},expression:"filter"}})]},proxy:!0},{key:"body",fn:function(e){return[a("q-tr",{attrs:{props:e}},[a("q-td",{key:"dn_code",attrs:{props:e}},[t._v(t._s(e.row.dn_code))]),a("q-td",{key:"dn_status",attrs:{props:e}},[t._v(t._s(e.row.dn_status))]),a("q-td",{key:"total_weight",attrs:{props:e}},[t._v(t._s(e.row.total_weight.toFixed(4)))]),a("q-td",{key:"total_volume",attrs:{props:e}},[t._v(t._s(e.row.total_volume.toFixed(4)))]),a("q-td",{key:"customer",attrs:{props:e}},[t._v(t._s(e.row.customer))]),a("q-td",{key:"creater",attrs:{props:e}},[t._v(t._s(e.row.creater))]),a("q-td",{key:"create_time",attrs:{props:e}},[t._v(t._s(e.row.create_time))]),a("q-td",{key:"update_time",attrs:{props:e}},[t._v(t._s(e.row.update_time))]),e.row.transportation_fee.detail!==[]?[a("q-tooltip",{attrs:{"content-class":"bg-amber text-black shadow-4",offset:[10,10],"content-style":"font-size: 12px"}},[a("q-list",t._l(e.row.transportation_fee.detail,(function(e,o){return a("div",{key:o},[a("q-item",{directives:[{name:"ripple",rawName:"v-ripple"}]},[a("q-item-section",[a("q-item-label",[t._v(t._s(e.transportation_supplier))]),a("q-item-label",[t._v(t._s(t.$t("estimate"))+": "+t._s(e.transportation_cost))])],1)],1)],1)})),0)],1)]:t._e()],2)]}}])})],1),[a("div",{staticClass:"q-pa-lg flex flex-center"},[a("q-btn",{directives:[{name:"show",rawName:"v-show",value:t.pathname_previous,expression:"pathname_previous"}],attrs:{flat:"",push:"",color:"purple",label:t.$t("previous"),icon:"navigate_before"},on:{click:function(e){return t.getListPrevious()}}},[a("q-tooltip",{attrs:{"content-class":"bg-amber text-black shadow-4",offset:[10,10],"content-style":"font-size: 12px"}},[t._v(t._s(t.$t("previous")))])],1),a("q-btn",{directives:[{name:"show",rawName:"v-show",value:t.pathname_next,expression:"pathname_next"}],attrs:{flat:"",push:"",color:"purple",label:t.$t("next"),"icon-right":"navigate_next"},on:{click:function(e){return t.getListNext()}}},[a("q-tooltip",{attrs:{"content-class":"bg-amber text-black shadow-4",offset:[10,10],"content-style":"font-size: 12px"}},[t._v(t._s(t.$t("next")))])],1),a("q-btn",{directives:[{name:"show",rawName:"v-show",value:!t.pathname_previous&&!t.pathname_next,expression:"!pathname_previous && !pathname_next"}],attrs:{flat:"",push:"",color:"dark",label:t.$t("no_data")}})],1)]],2)},s=[],i=a("3004"),n=a("18d6"),r={name:"Pagednlist",data(){return{openid:"",login_name:"",authin:"0",pathname:"dn/",pathname_previous:"",pathname_next:"",separator:"cell",loading:!1,height:"",table_list:[],viewprint_table:[],bar_code:"",pickinglist_print_table:[],pickinglist_check:0,warehouse_detail:{},customer_list:[],driver_list:[],customer_detail:{},columns:[{name:"dn_code",required:!0,label:this.$t("outbound.view_dn.dn_code"),align:"left",field:"dn_code"},{name:"dn_status",label:this.$t("outbound.view_dn.dn_status"),field:"dn_status",align:"center"},{name:"total_weight",label:this.$t("outbound.view_dn.total_weight"),field:"total_weight",align:"center"},{name:"total_volume",label:this.$t("outbound.view_dn.total_volume"),field:"total_volume",align:"center"},{name:"customer",label:this.$t("outbound.view_dn.customer"),field:"customer",align:"center"},{name:"creater",label:this.$t("creater"),field:"creater",align:"center"},{name:"create_time",label:this.$t("createtime"),field:"create_time",align:"center"},{name:"update_time",label:this.$t("updatetime"),field:"update_time",align:"center"}],filter:"",pagination:{page:1,rowsPerPage:"30"},newForm:!1,options1:[],isEdit:!1,listNumber:"",options:n["a"].getItem("goods_code_list"),driver_options:n["a"].getItem("driver_name_list"),newdn:{creater:""},newFormData:{dn_code:"",customer:"",goods_code:[],goods_qty:[],creater:""},pickFormData:{dn_code:"",customer:"",goodsData:[],creater:""},goodsData1:{bin:"",code:"",qty:""},goodsData2:{bin:"",code:"",qty:""},goodsData3:{bin:"",code:"",qty:""},goodsData4:{bin:"",code:"",qty:""},goodsData5:{bin:"",code:"",qty:""},goodsData6:{bin:"",code:"",qty:""},goodsData7:{bin:"",code:"",qty:""},goodsData8:{bin:"",code:"",qty:""},goodsData9:{bin:"",code:"",qty:""},goodsData10:{bin:"",code:"",qty:""},editid:0,editFormData:{},pickedForm:!1,pickedid:0,deleteForm:!1,deleteid:0,neworderForm:!1,neworderid:0,orderreleaseForm:!1,orderreleaseid:0,viewForm:!1,viewPLForm:!1,viewdn:"",viewid:0,dispatchid:0,dispatchForm:!1,dispatchFormData:{dn_code:"",driver:""},podid:0,podForm:!1,podFormData:{dn_code:"",customer:"",goodsData:[]},printObj:{id:"printMe",popTitle:"Advance Shipment Notice"},printPL:{id:"printPL",popTitle:"Picking List"},error1:this.$t("baseinfo.view_customer.error1"),error2:this.$t("notice.valerror"),isError1:!1,isError2:!1}},methods:{validate1(t){const e=/^[1-9]\d*$/g,a=e.test(t);this.isError1=!a},validate2(t,e){const a=/^[0-9]\d*$/g,o=a.test(t);this.isError2=!(o&&t<=e)},getList(){var t=this;n["a"].has("auth")&&Object(i["e"])(t.pathname+"list/",{}).then((e=>{t.table_list=[],e.results.forEach((e=>{1===e.dn_status?e.dn_status=t.$t("outbound.freshorder"):2===e.dn_status?e.dn_status=t.$t("outbound.neworder"):3===e.dn_status?e.dn_status=t.$t("outbound.pickstock"):4===e.dn_status?e.dn_status=t.$t("outbound.pickedstock"):5===e.dn_status?e.dn_status=t.$t("outbound.shippedstock"):6===e.dn_status?e.dn_status=t.$t("outbound.received"):e.dn_status="N/A",t.table_list.push(e)})),e.results.forEach((e=>{1===e.asn_status&&(e.asn_status=t.$t())})),t.customer_list=e.customer_list,t.pathname_previous=e.previous,t.pathname_next=e.next})).catch((e=>{t.$q.notify({message:e.detail,icon:"close",color:"negative"})}))},getSearchList(){var t=this;n["a"].has("auth")&&Object(i["e"])(t.pathname+"list/?dn_code__icontains="+t.filter,{}).then((e=>{t.table_list=[],e.results.forEach((e=>{1===e.dn_status?e.dn_status=t.$t("outbound.freshorder"):2===e.dn_status?e.dn_status=t.$t("outbound.neworder"):3===e.dn_status?e.dn_status=t.$t("outbound.pickstock"):4===e.dn_status?e.dn_status=t.$t("outbound.pickedstock"):5===e.dn_status?e.dn_status=t.$t("outbound.shippedstock"):6===e.dn_status?e.dn_status=t.$t("outbound.received"):e.dn_status="N/A",t.table_list.push(e)})),t.customer_list=e.customer_list,t.pathname_previous=e.previous,t.pathname_next=e.next})).catch((e=>{t.$q.notify({message:e.detail,icon:"close",color:"negative"})}))},getListPrevious(){var t=this;n["a"].has("auth")&&Object(i["e"])(t.pathname_previous,{}).then((e=>{t.table_list=[],e.results.forEach((e=>{1===e.dn_status?e.dn_status=t.$t("outbound.freshorder"):2===e.dn_status?e.dn_status=t.$t("outbound.neworder"):3===e.dn_status?e.dn_status=t.$t("outbound.pickstock"):4===e.dn_status?e.dn_status=t.$t("outbound.pickedstock"):5===e.dn_status?e.dn_status=t.$t("outbound.shippedstock"):6===e.dn_status?e.dn_status=t.$t("outbound.received"):e.dn_status="N/A",t.table_list.push(e)})),t.customer_list=e.customer_list,t.pathname_previous=e.previous,t.pathname_next=e.next})).catch((e=>{t.$q.notify({message:e.detail,icon:"close",color:"negative"})}))},getListNext(){var t=this;n["a"].has("auth")&&Object(i["e"])(t.pathname_next,{}).then((e=>{t.table_list=[],e.results.forEach((e=>{1===e.dn_status?e.dn_status=t.$t("outbound.freshorder"):2===e.dn_status?e.dn_status=t.$t("outbound.neworder"):3===e.dn_status?e.dn_status=t.$t("outbound.pickstock"):4===e.dn_status?e.dn_status=t.$t("outbound.pickedstock"):5===e.dn_status?e.dn_status=t.$t("outbound.shippedstock"):6===e.dn_status?e.dn_status=t.$t("outbound.received"):e.dn_status="N/A",t.table_list.push(e)})),t.customer_list=e.customer_list,t.pathname_previous=e.previous,t.pathname_next=e.next})).catch((e=>{t.$q.notify({message:e.detail,icon:"close",color:"negative"})}))},reFresh(){var t=this;t.table_list=[],t.getList()},newFormOpen(){var t=this;t.isEdit=!1,t.goodsDataClear(),t.newForm=!0,t.newdn.creater=t.login_name,Object(i["h"])(t.pathname+"list/",t.newdn).then((e=>{e.detail||(t.newFormData.dn_code=e.dn_code)})).catch((e=>{t.$q.notify({message:e.detail,icon:"close",color:"negative"})}))},newDataSubmit(){var t=this;t.newFormData.creater=t.login_name;let e=!1;for(let a=0;a<10;a++){const o=`goodsData${a+1}`;if(""!==t[o].code&&""!==t[o].qty){if(t[o].qty<1){t.$q.notify({message:"Total Quantity Must Be Positive Integer",icon:"close",color:"negative"}),e=!0;break}t.newFormData.goods_code[a]=t[o].code,t.newFormData.goods_qty[a]=t[o].qty}}t.newFormData.customer||(e=!0,t.$q.notify({message:"Supplier Does Not Exists",icon:"close",color:"negative"})),e||Object(i["h"])(t.pathname+"detail/",t.newFormData).then((e=>{t.table_list=[],t.getList(),t.newDataCancel(),"success"===e.detail&&t.$q.notify({message:"Success Create",icon:"check",color:"green"})})).catch((e=>{t.$q.notify({message:e.detail,icon:"close",color:"negative"})}))},newDataCancel(){var t=this;t.newForm=!1,t.newFormData={dn_code:"",customer:"",goods_code:[],goods_qty:[],creater:""},t.goodsDataClear()},goodsDataClear(){var t=this;for(let e=1;e<=10;e++)t[`goodsData${e}`]={code:"",qty:""}},editData(t){var e=this;e.isEdit=!0,e.goodsDataClear(),t.dn_status!==e.$t("outbound.freshorder")?e.$q.notify({message:t.dn_code+" DN Status Not "+e.$t("outbound.freshorder"),icon:"close",color:"negative"}):(e.newFormData.dn_code=t.dn_code,e.newFormData.customer=t.customer,Object(i["e"])(e.pathname+"detail/?dn_code="+t.dn_code).then((a=>{e.newForm=!0,e.editid=t.id,a.results.forEach(((t,a)=>{e[`goodsData${a+1}`]={code:t.goods_code,qty:t.goods_qty}}))})))},editDataSubmit(){var t=this;t.newFormData.creater=t.login_name;let e=!1;for(let a=0;a<10;a++){const o=`goodsData${a+1}`;if(""!==t[o].code&&""!==t[o].qty){if(t[o].qty<=0){t.$q.notify({message:"Total Quantity Must Be Positive",icon:"close",color:"negative"}),e=!0;break}t.newFormData.goods_code[a]=t[o].code,t.newFormData.goods_qty[a]=t[o].qty}}e||Object(i["i"])(t.pathname+"detail/",t.newFormData).then((e=>{t.table_list=[],t.editDataCancel(),t.getList(),e.detail||t.$q.notify({message:"Success Edit DN",icon:"check",color:"green"})})).catch((e=>{t.$q.notify({message:e.detail,icon:"close",color:"negative"})}))},editDataCancel(){var t=this;t.newForm=!1,t.editid=0,t.newFormData={dn_code:"",customer:"",goods_code:[],goods_qty:[],creater:""},t.goodsDataClear()},deleteData(t){var e=this;t.dn_status!==e.$t("outbound.freshorder")?e.$q.notify({message:t.dn_code+" DN Status Is Not "+e.$t("outbound.freshorder"),icon:"close",color:"negative"}):(e.deleteForm=!0,e.deleteid=t.id)},deleteDataSubmit(){var t=this;Object(i["d"])(t.pathname+"list/"+t.deleteid+"/").then((e=>{t.table_list=[],t.deleteDataCancel(),t.getList(),e.detail||t.$q.notify({message:"Success Delete DN",icon:"check",color:"green"})})).catch((e=>{t.$q.notify({message:e.detail,icon:"close",color:"negative"})}))},deleteDataCancel(){var t=this;t.deleteForm=!1,t.deleteid=0},neworderData(t){var e=this;t.dn_status!==e.$t("outbound.freshorder")?e.$q.notify({message:t.dn_code+" DN Status Is Not "+e.$t("outbound.freshorder"),icon:"close",color:"negative"}):(e.neworderForm=!0,e.neworderid=t.id)},neworderDataSubmit(){var t=this;Object(i["h"])(t.pathname+"neworder/"+t.neworderid+"/",{}).then((e=>{t.table_list=[],t.neworderDataCancel(),t.getList(),e.detail||t.$q.notify({message:"Success Confirm DN Delivery",icon:"check",color:"green"})})).catch((e=>{t.$q.notify({message:e.detail,icon:"close",color:"negative"})}))},neworderDataCancel(){var t=this;t.neworderForm=!1,t.neworderid=0},orderreleaseData(t){var e=this;t.dn_status!==e.$t("outbound.neworder")?e.$q.notify({message:t.dn_code+" DN Status Is Not "+e.$t("outbound.neworder"),icon:"close",color:"negative"}):(e.orderreleaseForm=!0,e.orderreleaseid=t.id)},orderreleaseAllData(){var t=this;Object(i["h"])(t.pathname+"orderrelease/",{}).then((e=>{t.table_list=[],t.getList(),e.detail||t.$q.notify({message:"Success Release All Order",icon:"check",color:"green"})})).catch((e=>{t.$q.notify({message:e.detail,icon:"close",color:"negative"})}))},orderreleaseDataSubmit(){var t=this;Object(i["i"])(t.pathname+"orderrelease/"+t.orderreleaseid+"/",{}).then((e=>{t.table_list=[],t.orderreleaseDataCancel(),t.getList(),e.detail||t.$q.notify({message:"Success Release DN Code",icon:"check",color:"green"})})).catch((e=>{t.$q.notify({message:e.detail,icon:"close",color:"negative"})}))},orderreleaseDataCancel(){var t=this;t.orderreleaseForm=!1,t.orderreleaseid=0},getFocus(t){this.listNumber=t},setOptions(t){const e=this;t||(e[`goodsData${e.listNumber}`].code="");const a=t.toLowerCase();Object(i["e"])("goods/?goods_code__icontains="+a).then((a=>{const o=[];for(let s=0;s<a.results.length;s++)o.push(a.results[s].goods_code),e.listNumber&&a.results[s].goods_code===t&&(e[`goodsData${e.listNumber}`].code=t);e.options1=o}))},filterFn(t,e,a){t.length<1?a():e((()=>{this.options=this.options1}))},PrintPickingList(t){var e=this,o=a("d055");o.toDataURL(t.bar_code,[{errorCorrectionLevel:"H",mode:"byte",version:"2",type:"image/jpeg"}]).then((t=>{e.bar_code=t})).catch((t=>{console.error(t)})),e.viewPLForm=!0,Object(i["e"])(e.pathname+"pickinglist/"+t.id+"/").then((t=>{e.pickinglist_print_table=[],e.picklist_check=0,t.forEach((t=>{t.picked_qty>0&&(e.picklist_check+=1)})),e.pickinglist_print_table=t,e.viewPLForm=!0})).catch((t=>{e.$q.notify({message:t.detail,icon:"close",color:"negative"})}))},pickedData(t){var e=this;t.dn_status!==e.$t("outbound.pickstock")?e.$q.notify({message:t.dn_code+" DN Status Is Not "+e.$t("outbound.pickstock"),icon:"close",color:"negative"}):(e.pickFormData.dn_code=t.dn_code,e.pickFormData.customer=t.customer,Object(i["e"])(e.pathname+"pickinglist/"+t.id+"/").then((a=>{e.pickedForm=!0,e.pickedid=t.id,e.pickFormData.goodsData=a})))},pickedDataSubmit(){var t=this;t.pickFormData.creater=t.login_name,Object(i["h"])(t.pathname+"picked/"+t.pickedid+"/",t.pickFormData).then((e=>{t.table_list=[],t.pickedDataCancel(),t.getList(),e.detail||t.$q.notify({message:"Success Confirm Picking List",icon:"check",color:"green"})})).catch((e=>{t.$q.notify({message:e.detail,icon:"close",color:"negative"})}))},pickedDataCancel(){var t=this;t.pickedForm=!1,t.pickedid=0,t.pickFormData={dn_code:"",customer:"",goodsData:[],creater:""},t.goodsDataClear()},viewData(t){var e=this;Object(i["a"])(e.pathname+"viewprint/"+t.id+"/").then((o=>{e.viewprint_table=o.dn_detail,e.warehouse_detail=o.warehouse_detail,e.customer_detail=o.customer_detail,e.viewdn=t.dn_code;var s=a("d055");s.toDataURL(t.bar_code,[{errorCorrectionLevel:"H",mode:"byte",version:"2",type:"image/jpeg"}]).then((t=>{e.bar_code=t})).catch((t=>{console.error(t)})),e.viewForm=!0}))},filterFnDispatch(t,e,a){var o=this;t.length<1?a():e((()=>{const e=t.toLowerCase();Object(i["e"])("driver/?driver_name__icontains="+e).then((t=>{const e=[];for(let a=0;a<t.results.length;a++)e.push(t.results[a].driver_name);n["a"].set("driver_name_list",e),o.driver_options=n["a"].getItem("driver_name_list"),o.$forceUpdate()})).catch((t=>{o.$q.notify({message:t.detail,icon:"close",color:"negative"})}))}))},DispatchDN(t){var e=this;t.dn_status!==e.$t("outbound.pickedstock")?e.$q.notify({message:t.dn_code+" DN Status Is Not "+e.$t("outbound.pickedstock"),icon:"close",color:"negative"}):(e.dispatchFormData.dn_code=t.dn_code,e.dispatchid=t.id,e.dispatchForm=!0)},dispatchDataCancel(){var t=this;t.dispatchFormData={dn_code:"",driver:""},t.dispatchForm=!1},dispatchDataSubmit(){var t=this;Object(i["h"])(t.pathname+"dispatch/"+t.dispatchid+"/",t.dispatchFormData).then((e=>{t.table_list=[],t.dispatchDataCancel(),t.getList(),e.detail||t.$q.notify({message:"Success Dispatch",icon:"check",color:"green"})})).catch((e=>{t.$q.notify({message:e.detail,icon:"close",color:"negative"})}))},PODData(t){var e=this;t.dn_status!==e.$t("outbound.shippedstock")?e.$q.notify({message:t.dn_code+" DN Status Is Not "+e.$t("outbound.shippedstock"),icon:"close",color:"negative"}):(e.podFormData.dn_code=t.dn_code,e.podFormData.customer=t.customer,Object(i["e"])(e.pathname+"detail/?dn_code="+t.dn_code).then((a=>{e.podForm=!0,e.podid=t.id,e.podFormData.goodsData=a.results})))},PODDataCancel(){var t=this;t.podForm=!1,t.podid=0,t.podFormData={dn_code:"",customer:"",goodsData:[]}},PODDataSubmit(){var t=this;t.isError1||t.isError2||Object(i["h"])(t.pathname+"pod/"+t.podid+"/",t.podFormData).then((e=>{t.table_list=[],t.PODDataCancel(),t.getList(),e.detail||t.$q.notify({message:"Success Dispatch",icon:"check",color:"green"})})).catch((e=>{t.$q.notify({message:e.detail,icon:"close",color:"negative"})}))}},created(){var t=this;n["a"].has("openid")?t.openid=n["a"].getItem("openid"):(t.openid="",n["a"].set("openid","")),n["a"].has("login_name")?t.login_name=n["a"].getItem("login_name"):(t.login_name="",n["a"].set("login_name","")),n["a"].has("auth")?(t.authin="1",t.table_list=[],t.getList()):t.authin="0",n["a"].has("goods_code_list")||n["a"].set("goods_code_list",[])},mounted(){var t=this;t.$q.platform.is.electron?t.height=String(t.$q.screen.height-290)+"px":t.height=t.$q.screen.height-290+"px"},updated(){},destroyed(){}},d=r,c=a("42e1"),l=a("69b2"),u=a("eaac"),_=a("e7a9"),p=a("9c40"),h=a("05c0"),m=a("2c91"),g=a("27f9"),b=a("bd08"),v=a("db86"),f=a("1c1c"),D=a("66e5"),w=a("4074"),$=a("0170"),k=a("714f"),y=a("eebe"),q=a.n(y),F=Object(c["a"])(d,o,s,!1,null,null,null);"function"===typeof l["default"]&&Object(l["default"])(F);e["default"]=F.exports;q()(F,"components",{QTable:u["a"],QBtnGroup:_["a"],QBtn:p["a"],QTooltip:h["a"],QSpace:m["a"],QInput:g["a"],QTr:b["a"],QTd:v["a"],QList:f["a"],QItem:D["a"],QItemSection:w["a"],QItemLabel:$["a"]}),q()(F,"directives",{Ripple:k["a"]})},"69b2":function(t,e,a){"use strict";var o=a("0972"),s=a.n(o);e["default"]=s.a}}]);