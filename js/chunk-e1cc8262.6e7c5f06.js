(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-e1cc8262"],{"210b":function(t,e,s){t.exports=s.p+"img/paypal-mini.4a147115.png"},3220:function(t,e,s){"use strict";s("d3db")},"8f8a":function(t){t.exports=JSON.parse('{"BASE_URL":"https://fadovn.com/","BASE_URL_SOCKET":"wss:/fadovn.com:2096","BASE_URL_SOCKET_SYS":"wss://fadovn.com:2087","BASE_URL_SOCKET_NAP":"wss://fadovn.com:2083"}')},9416:function(t,e,s){"use strict";s.r(e);var r=function(){var t=this,e=t._self._c;return e("div",{staticClass:"data-list-container",attrs:{id:"list-history-exchange"}},[e("vs-prompt",{staticClass:"export-options",attrs:{title:"Export To Excel","accept-text":"Export",active:t.activePrompt},on:{cancle:t.clearFields,accept:t.exportToExcel,close:t.clearFields,"update:active":function(e){t.activePrompt=e}}},[e("vs-input",{staticClass:"w-full",attrs:{placeholder:"Enter File Name.."},model:{value:t.fileName,callback:function(e){t.fileName=e},expression:"fileName"}}),e("v-select",{staticClass:"my-4",attrs:{options:t.formats},model:{value:t.selectedFormat,callback:function(e){t.selectedFormat=e},expression:"selectedFormat"}}),e("div",{staticClass:"flex"},[e("span",{staticClass:"mr-4"},[t._v("Cell Auto Width:")]),e("vs-switch",{model:{value:t.cellAutoWidth,callback:function(e){t.cellAutoWidth=e},expression:"cellAutoWidth"}},[t._v("Cell Auto Width")])],1)],1),e("div",{staticClass:"vs-con-loading__container",attrs:{id:"loading-corners"}},[e("vs-table",{ref:"table",attrs:{multiple:"",pagination:"","max-items":t.itemsPerPage,search:"",data:t.products},scopedSlots:t._u([{key:"default",fn:function(r){var a=r.data;return[e("tbody",t._l(a,(function(r,a){return e("vs-tr",{key:a,attrs:{data:r}},[e("vs-td",[e("p",{staticClass:"de-email font-medium truncate"},[t._v(t._s(r.email)),e("br"),t._v("Biệt danh: "+t._s(r.nick_name))])]),e("vs-td",["paypal"==r.from_e&&"paypal"!=r.to_e?e("p",{staticClass:"de-describe font-medium truncate"},[t._v("\n                    Từ: "),e("img",{attrs:{width:"20",src:s("210b")}}),t._v("\n                    "+t._s(r.from_e.toUpperCase())+"\n                    "),e("br"),t._v("\n                    Đến: "),e("IconCrypto",{staticStyle:{width:"20px"},attrs:{coinname:t.getIconType(r.to_e),color:"color",format:"svg"}}),t._v("\n                    "+t._s(r.to_e.toUpperCase())+"\n                ")],1):"paypal"==r.to_e&&"paypal"!=r.from_e?e("p",{staticClass:"de-describe font-medium truncate"},[t._v("\n                    Từ: "),e("IconCrypto",{staticStyle:{width:"20px"},attrs:{coinname:t.getIconType(r.from_e),color:"color",format:"svg"}}),t._v("\n                    "+t._s(r.from_e.toUpperCase())+"\n                    "),e("br"),t._v("\n                    Đến: "),e("img",{attrs:{width:"20",src:s("210b")}}),t._v("\n                    "+t._s(r.to_e.toUpperCase())+"\n                ")],1):e("p",{staticClass:"de-describe font-medium truncate"},[t._v("\n                  Từ: "),e("IconCrypto",{staticStyle:{width:"20px"},attrs:{coinname:t.getIconType(r.from_e),color:"color",format:"svg"}}),t._v("\n                  "+t._s(r.from_e.toUpperCase())+"\n                  "),e("br"),t._v("\n                  Đến: "),e("IconCrypto",{staticStyle:{width:"20px"},attrs:{coinname:t.getIconType(r.to_e),color:"color",format:"svg"}}),t._v("\n                  "+t._s(r.to_e.toUpperCase())+"\n                ")],1)]),e("vs-td",[e("p",{staticClass:"de-send"},[t._v(t._s(t.getAmountDecimal(r.from_e,r.send))+"\n                ")])]),e("vs-td",[r.status?e("p",{staticClass:"de-receive"},[t._v(t._s(t.getAmountDecimal(r.to_e,r.receive)))]):e("p",{staticClass:"de-receive"},[t._v("0")])]),e("vs-td",[e("vs-chip",{staticClass:"de-status",attrs:{color:t.getOrderStatusColor(r.status)}},[t._v(t._s(t._f("title")(t.getOrderStatusColorText(r.status))))])],1),e("vs-td",[e("p",{staticClass:"de-create"},[t._v(t._s(t.formatDate(r.created_at)))])]),e("vs-td",{staticClass:"whitespace-no-wrap text-center"},[0==r.delete_status?e("vx-tooltip",{staticStyle:{float:"left"},attrs:{color:"danger",text:"Xóa"}},[e("vs-button",{attrs:{color:"dark",type:"line","icon-pack":"feather",icon:"icon-trash"},on:{click:function(e){return e.stopPropagation(),t.deleteEx(r.id,a,1)}}})],1):e("vx-tooltip",{staticStyle:{float:"left"},attrs:{color:"warning",text:"Thu hồi"}},[e("vs-button",{attrs:{color:"dark",type:"line","icon-pack":"feather",icon:"icon-arrow-up-left"},on:{click:function(e){return e.stopPropagation(),t.deleteEx(r.id,a,0)}}})],1)],1)],1)})),1)]}}]),model:{value:t.selectedUser,callback:function(e){t.selectedUser=e},expression:"selectedUser"}},[e("div",{staticClass:"flex flex-wrap-reverse items-center flex-grow justify-between",attrs:{slot:"header"},slot:"header"},[e("div",{staticClass:"flex flex-wrap-reverse items-center data-list-btn-container"},[e("vs-dropdown",{staticClass:"dd-actions cursor-pointer mr-4 mb-4",attrs:{"vs-trigger-click":""}},[e("div",{staticClass:"p-4 shadow-drop rounded-lg d-theme-dark-bg cursor-pointer flex items-center justify-center text-lg font-medium w-32 w-full"},[e("span",{staticClass:"mr-2"},[t._v("Tác vụ")]),e("feather-icon",{attrs:{icon:"ChevronDownIcon",svgClasses:"h-4 w-4"}})],1),e("vs-dropdown-menu",[e("vs-dropdown-item",[t.showDeleteMultiBt?e("span",{staticClass:"flex items-center",on:{click:t.deleteMultiple}},[e("feather-icon",{staticClass:"mr-2",attrs:{icon:"TrashIcon",svgClasses:"h-4 w-4"}}),e("span",[t._v("Xóa")])],1):t._e()]),e("vs-dropdown-item",[e("span",{staticClass:"flex items-center",on:{click:function(e){t.activePrompt=!0}}},[e("feather-icon",{staticClass:"mr-2",attrs:{icon:"FileIcon",svgClasses:"h-4 w-4"}}),e("span",[t._v("In")])],1)])],1)],1),e("div",{staticClass:"btn-add-new p-3 mb-4 mr-4 rounded-lg cursor-pointer flex items-center justify-center text-lg font-medium text-base text-danger border border-solid border-danger",on:{click:t.trashDataEx}},[e("feather-icon",{attrs:{icon:"TrashIcon",svgClasses:"h-4 w-4"}}),e("span",{staticClass:"ml-2 text-base text-danger"},[t._v("Thùng rác")])],1),e("div",{staticClass:"btn-add-new p-3 mb-4 mr-4 rounded-lg cursor-pointer flex items-center justify-center text-lg font-medium text-base text-success border border-solid border-success",on:{click:t.reloadList}},[e("feather-icon",{attrs:{icon:"ArrowLeftIcon",svgClasses:"h-4 w-4"}}),e("span",{staticClass:"ml-2 text-base text-sucess"},[t._v("Trở về")])],1)],1),e("vs-dropdown",{staticClass:"cursor-pointer mb-4 mr-4 items-per-page-handler",attrs:{"vs-trigger-click":""}},[e("div",{staticClass:"p-4 border border-solid d-theme-border-grey-light rounded-full d-theme-dark-bg cursor-pointer flex items-center justify-between font-medium"},[e("span",{staticClass:"mr-2"},[t._v(t._s(t.currentPage*t.itemsPerPage-(t.itemsPerPage-1))+" - "+t._s(t.products.length-t.currentPage*t.itemsPerPage>0?t.currentPage*t.itemsPerPage:t.products.length)+" of "+t._s(t.queriedItems))]),e("feather-icon",{attrs:{icon:"ChevronDownIcon",svgClasses:"h-4 w-4"}})],1),e("vs-dropdown-menu",[e("vs-dropdown-item",{on:{click:function(e){t.itemsPerPage=4}}},[e("span",[t._v("4")])]),e("vs-dropdown-item",{on:{click:function(e){t.itemsPerPage=10}}},[e("span",[t._v("10")])]),e("vs-dropdown-item",{on:{click:function(e){t.itemsPerPage=15}}},[e("span",[t._v("15")])]),e("vs-dropdown-item",{on:{click:function(e){t.itemsPerPage=20}}},[e("span",[t._v("20")])])],1)],1)],1),e("template",{slot:"thead"},[e("vs-th",{attrs:{"sort-key":"email"}},[t._v("Tài khoản")]),e("vs-th",{attrs:{"sort-key":"describe"}},[t._v("Mô tả")]),e("vs-th",{attrs:{"sort-key":"send"}},[t._v("Đã gửi")]),e("vs-th",{attrs:{"sort-key":"receive"}},[t._v("Đã nhận")]),e("vs-th",{attrs:{"sort-key":"status"}},[t._v("Trạng thái")]),e("vs-th",{attrs:{"sort-key":"datecreate"}},[t._v("Thời gian")]),e("vs-th",[t._v("Tác vụ")])],1)],2)],1)],1)},a=[],n=s("4a7a"),i=s.n(n),o=s("c5b9"),c=s("c1df"),u=s.n(c),l=s("2b0e"),d={components:{vSelect:i.a},data:function(){return{showDeleteMultiBt:!0,activePrompt:!1,selectedUser:[],fileName:"",formats:["xlsx","csv","txt"],cellAutoWidth:!0,selectedFormat:"xlsx",headerTitle:["Tài khoản","Loại","Số Tiền","Trạng Thái","Ngày Nạp"],headerVal:["account","type","amount","status","datecreate"],productsFake:[{id:1,email:"ares@gmail.com",nick_name:"sky",from_e:"SYS",to_e:"USDT",send:1e3,receive:1e3,status:1,created_at:"00:00:00 02-04-2021"},{id:2,email:"ares@gmail.com",nick_name:"sky",from_e:"USDT",to_e:"SYS",send:1e3,receive:1e3,status:1,created_at:"00:00:00 02-04-2021"},{id:3,email:"ares@gmail.com",nick_name:"sky",from_e:"BTC",to_e:"SYS",send:.001,receive:300,status:0,created_at:"00:00:00 02-04-2021"},{id:4,email:"ares@gmail.com",nick_name:"sky",from_e:"ETH",to_e:"SYS",send:.1,receive:100,status:1,created_at:"00:00:00 02-04-2021"},{id:5,email:"ares@gmail.com",nick_name:"sky",from_e:"SYS",to_e:"BTC",send:1e3,receive:.001,status:1,created_at:"00:00:00 02-04-2021"}],itemsPerPage:10,isMounted:!1}},computed:{currentPage:function(){return this.isMounted?this.$refs.table.currentx:0},products:function(){return this.productsFake},queriedItems:function(){return this.$refs.table?this.$refs.table.queriedResults.length:this.productsFake.length}},methods:{deleteMultiple:function(){var t=this,e=localStorage.getItem("token");if(this.$store.dispatch("setToken",e),0==this.selectedUser.length)return this.$vs.notify({text:"Hãy chọn đối tượng cần xóa",color:"warning",iconPack:"feather",icon:"icon-check"});for(var s=this.selectedUser.length-1;s>=0;s--){var r=this.selectedUser[s]["id"],a={id:r,val:1};o["a"].deleteExTrash(a).then((function(e){e.data.success||(localStorage.removeItem("token"),t.$router.push("/pages/login").catch((function(){})))})),l["default"].delete(this.productsFake,s)}return this.selectedUser=[],this.$vs.notify({text:"Đã xóa thành công",color:"success",iconPack:"feather",icon:"icon-check"})},deleteEx:function(t,e,s){var r=this,a=localStorage.getItem("token");this.$store.dispatch("setToken",a);var n={id:t,val:s};o["a"].deleteExTrash(n).then((function(t){if(t.data.success)return l["default"].delete(r.productsFake,e),r.popupDeleteActive=!1,r.$vs.notify({text:"Đã xóa thành công",color:"success",iconPack:"feather",icon:"icon-check"});localStorage.removeItem("token"),r.$router.push("/pages/login").catch((function(){}))}))},trashDataEx:function(){var t=this;this.showDeleteMultiBt=!1;var e=localStorage.getItem("token");this.$store.dispatch("setToken",e),o["a"].getExListHisTrash().then((function(e){e.data.success?t.productsFake=e.data.data:(localStorage.removeItem("token"),t.$router.push("/pages/login").catch((function(){})))}))},getOrderStatusColor:function(t){return 0==t?"warning":1==t?"success":"warning"},getOrderStatusColorText:function(t){return 0==t?"Đang xử lý":1==t?"Hoàn thành":"Đang xử lý"},getIconType:function(t){var e=t.toUpperCase();return e},formatDate:function(t){if(t)return u()(String(t)).format("MM/DD/YYYY hh:mm:ss")},getAmountDecimal:function(t,e){var s="$",r=t.toUpperCase(),a=2;"BTC"==r&&(a=6),"ETH"==r&&(a=4),"USDT"==r&&(a=2),"VN"==r&&(a=0);var n=new Intl.NumberFormat("en-US",{minimumFractionDigits:a});return s+n.format(e)},reloadList:function(){var t=this;this.showDeleteMultiBt=!0;var e=localStorage.getItem("token");this.$store.dispatch("setToken",e),o["a"].getExListHistory().then((function(e){t.$vs.loading.close("#loading-corners > .con-vs-loading"),e.data.success?t.productsFake=e.data.data:(localStorage.removeItem("token"),t.$router.push("/pages/login").catch((function(){})))}))},toggleDataSidebar:function(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0];this.addNewDataSidebar=t},exportToExcel:function(){var t=this;if(0==this.selectedUser.length)return this.$vs.notify({title:"Xuất dữ liệu",text:"Vui lòng chọn nội dung để hoàn thành",color:"danger",iconPack:"feather",icon:"icon-heart"});Promise.all([s.e("chunk-fe0d63b4"),s.e("chunk-14cd345e")]).then(s.bind(null,"4bf8d")).then((function(e){var s=t.selectedUser,r=t.formatJson(t.headerVal,s);e.export_json_to_excel({header:t.headerTitle,data:r,filename:t.fileName,autoWidth:t.cellAutoWidth,bookType:t.selectedFormat}),t.clearFields()}))},formatJson:function(t,e){return e.map((function(e){return t.map((function(t){return e[t]}))}))},clearFields:function(){this.fileName="",this.cellAutoWidth=!0,this.selectedFormat="xlsx"},openLoadingInDiv:function(){this.$vs.loading({container:"#loading-corners",type:"corners",scale:.6})}},created:function(){this.reloadList()},mounted:function(){this.isMounted=!0,this.openLoadingInDiv()}},p=d,f=(s("3220"),s("2877")),g=Object(f["a"])(p,r,a,!1,null,null,null);e["default"]=g.exports},c5b9:function(t,e,s){"use strict";var r,a=s("ade3"),n=s("bc3a"),i=s.n(n),o=s("8f8a"),c=function(){return i.a.create({baseURL:"".concat(o.BASE_URL),headers:{Authorization:"Sky ".concat(localStorage.getItem("tokenUser"))}})},u=function(){return i.a.create({baseURL:"".concat(o.BASE_URL),headers:{Authorization:"Sky ".concat(localStorage.getItem("token"))}})};e["a"]=(r={loginUser:function(t){return c().post("api/users/login",t)},getTokenActive:function(t){return c().post("api/users/activeUser",t)},registerUser:function(t){return c().post("api/users/createAccount",t)},forgotPassUser:function(t){return c().post("api/users/forgot-password",t)},resendConfirUser:function(t){return c().post("api/users/resend-confirmation-email",t)},changePassword:function(t){return c().patch("api/users/change-password",t)},changePassword2:function(t){return c().patch("api/users/change-password-is",t)},getInfoUser:function(){return c().get("api/users/info")},updateXacMinhTK:function(t){return c().post("api/users/update-info",t)},activeGG2FA:function(t){return c().post("api/users/update-gg2fa",t)},unActiveGG2FA:function(t){return c().post("api/users/disable-gg2fa",t)},sendGG2FA:function(){return c().get("api/users/code-2fa")},createGG2FA:function(){return c().get("api/users/create-gg2fa")},loginGG2FA:function(t){return c().post("api/users/login-2fa",t)},reloadMoneyDemo:function(){return c().put("api/users/demo")},getListHitoryOrder:function(){return c().get("api/users/listbo")},sendMoneyLiveToUsdt:function(t){return c().post("api/users/live-to-usdt",t)},sendMoneyUsdtToLive:function(t){return c().post("api/users/usdt-to-live",t)},withdrawalUserNoiBo:function(t){return c().post("api/users/withdrawal",t)},withdrawalUsdtERC:function(t){return c().post("api/users/withdrawal-erc",t)},withdrawalUsdtBSC:function(t){return c().post("api/users/withdrawal-bsc",t)},withdrawalPaypalNoiBo:function(t){return c().post("api/users/paypal/withdrawal",t)},withdrawalPaypalAccount:function(t){return c().post("api/users/paypal/withdrawal-acc",t)},getBalanceWallet:function(){return c().get("api/users/balance-wallet")},depositWallet:function(t){return c().post("api/users/usdt-wallet",t)},depositRequest:function(t){return c().post("api/users/deposit",t)},UserBuyVip:function(){return c().post("api/users/buy-vip")},getNguoiGioiThieu:function(){return c().get("api/users/presenter")},getThongTinLoiNhuan:function(){return c().get("api/users/bo-statistics")},getListHisOrder:function(){return c().get("api/users/history-order")},getSeachListOrder:function(t){return c().post("api/users/history-order-date",t)},getListHisTradeWallet:function(){return c().get("api/users/history-wallet")},getListHisTradeWalletNumber:function(t){return c().get("api/users/history-wallet/"+t)},getListHisTradeWalletHH:function(){return c().get("api/users/history-wallet-co")},getListHisTradeWalletHHNumber:function(t){return c().get("api/users/history-wallet-co/"+t)},getListHisTradeWalletWGD:function(){return c().get("api/users/history-wallet-trade")},getListHisTradeWalletWGDNumber:function(t){return c().get("api/users/history-wallet-trade/"+t)},chiTietLoiNhuanHoaHong:function(){return c().get("api/users/commission-details")},chiTietLoiNhuanHoaHongPage:function(t){return c().get("api/users/commission-details/"+t)},getSeachListChiTietHH:function(t){return c().post("api/users/commission-details-date",t)},getSeachListLvAgency:function(t){return c().post("api/users/agency-search-lv",t)},getSeachListNameAgency:function(t){return c().post("api/users/agency-search-name",t)},depositPaypal:function(t){return c().get("api/paypal/pay?a="+t.a+"&n="+t.n)},getAddressCoin:function(t){return c().get("api/wallet/"+t+"/address")},transWallet:function(t){return c().post("api/exs/trans",t)},getSetupWallet:function(){return c().get("api/setup/wallet")},getExChangeUser:function(){return c().get("api/exs/hisUser")},getStatusServer:function(){return c().get("status")},checkGiaoDich:function(t){return c().post("api/user/balance/trans/check",t)},getListNotifi:function(t){return c().post("api/users/getListNotifi",t)},updateListNotifi:function(t){return c().post("api/users/updateListNotifi",t)},getRevenueNap:function(){return u().get("api/trades/getRevenueNap")},getRevenueRut:function(){return u().get("api/trades/getRevenueRut")},getRevenueTrans:function(){return u().get("api/trades/getRevenueTrans")},getShowDT:function(t){return u().post("api/trades/getShowDT",t)},changeAccMarketing:function(t){return u().post("api/users/changeAcc",t)},changePassAdmin:function(t){return u().post("api/users/changPassAd",t)},createUser:function(t){return u().post("api/users/create",t)},register:function(t){return u().post("api/users/register",t)},loginAdmin:function(t){return u().post("api/users/AdminSingIn",t)},checkEmail:function(t){return u().get("api/users/checkEmail/"+t)},getAllMember:function(){return u().get("api/users/getAllUser")},updateMember:function(t){return u().patch("api/users/updateUser",t)},updatePriceMember:function(t){return u().patch("api/users/updateMoney",t)},deleteMember:function(t){return u().delete("api/users/deleteUserById/"+t)},verifiedUser:function(t){return u().post("api/users/verifiedUser",t)},getListAgency:function(){return u().get("api/users/getAgency")},viewMemberAgency:function(t){return u().get("api/users/viewTotalMAgency/"+t)},addMoneyMember:function(t){return u().post("api/users/addMoneyMember",t)},getRateCommission:function(){return u().get("api/setup/getRateCommission")},saveRateCommission:function(t){return u().post("api/setup/saveRateCommission",t)}},Object(a["a"])(r,"saveRateCommission",(function(t){return u().post("api/setup/saveRateCommission",t)})),Object(a["a"])(r,"getAddMoneyListHistory",(function(){return u().get("api/trades/historyAllAddMoney")})),Object(a["a"])(r,"getTotalAddMoney",(function(){return u().get("api/trades/totalAddMoney")})),Object(a["a"])(r,"getTradeListHistory",(function(){return u().get("api/trades/historyAll")})),Object(a["a"])(r,"gethistoryAllTrash",(function(){return u().get("api/trades/historyAllTrash")})),Object(a["a"])(r,"deleteTrashByID",(function(t){return u().patch("api/trades/deleteTradeHisById",t)})),Object(a["a"])(r,"acceptDepositById",(function(t){return u().post("api/trades/accept-deposit",t)})),Object(a["a"])(r,"getDepositListHistory",(function(){return u().get("api/trades/hisDepositAll")})),Object(a["a"])(r,"getDepositAllTrash",(function(){return u().get("api/trades/hisDepositAllTrash")})),Object(a["a"])(r,"getWithdrawalListHistory",(function(){return u().get("api/trades/hisWithDrawalAll")})),Object(a["a"])(r,"doneWithDrawalByID",(function(t){return u().post("api/trades/doneWithdrawal",t)})),Object(a["a"])(r,"doneRefuseWithDrawalByID",(function(t){return u().post("api/trades/doneRefuseWithdrawal",t)})),Object(a["a"])(r,"getListF1F7",(function(t){return u().post("api/users/getListF1F7",t)})),Object(a["a"])(r,"getLisCommissionSearch",(function(t){return u().post("api/users/getListCmsHis",t)})),Object(a["a"])(r,"getAnalytics",(function(){return u().get("api/users/analytics")})),Object(a["a"])(r,"getBetsListHistory",(function(){return u().get("api/bets/historyBet")})),Object(a["a"])(r,"getBetsListHisTrash",(function(){return u().get("api/bets/hisBetTrash")})),Object(a["a"])(r,"deleteBetsTrash",(function(t){return u().patch("api/bets/deleteBet",t)})),Object(a["a"])(r,"getExListHistory",(function(){return u().get("api/exs/historyEx")})),Object(a["a"])(r,"getExListHisTrash",(function(){return u().get("api/exs/historyExTrash")})),Object(a["a"])(r,"deleteExTrash",(function(t){return u().patch("api/exs/deleteEx",t)})),Object(a["a"])(r,"uploadAvatar",(function(t){return c().post("api/auth/avatar",t)})),Object(a["a"])(r,"uploadPassportFront",(function(t){return c().post("api/auth/passport/front",t)})),Object(a["a"])(r,"uploadPassportBack",(function(t){return c().post("api/auth/passport/back",t)})),r)},d3db:function(t,e,s){}}]);