(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2da4911c"],{"450d":function(e,t,c){"use strict";c("14d9");var a=c("7a23");const s=["onClick"],o=["src","alt"],r={key:0,class:"badge bg-highlight position-absolute top-0 end-0 p-2",style:{"z-index":"10"}},n=Object(a["createElementVNode"])("i",{class:"fad fa-crown me-1"},null,-1),i={class:"bg-white shadow-sm",style:{padding:"10px"}},l={class:"d-flex flex-xs-column justify-content-between align-items-center align-items-xs-start mb-3 mb-xs-0"},d={class:"fs-5 pt-1 mb-0 mb-xs-2"},b=["onClick"],m={class:"badge bg-secondary rounded-pill mb-xs-3"},u={class:"d-flex"},f={class:"d-flex align-items-center me-auto"},p={class:"mb-0"},j={key:0,class:"small text-muted ms-2"},O=["onClick"],v=Object(a["createElementVNode"])("i",{class:"fas fa-heart fa-lg fa-fw"},null,-1),h=[v];function g(e,t,c,v,g,x){return Object(a["openBlock"])(!0),Object(a["createElementBlock"])(a["Fragment"],null,Object(a["renderList"])(c.filterProducts,(t,c)=>(Object(a["openBlock"])(),Object(a["createElementBlock"])("li",{"data-aos":"fade-up","data-aos-offset":"0",class:"product-card col overflow-hidden position-relative pb-1 mb-4",key:t.id},[Object(a["createElementVNode"])("div",{class:"image shadow-sm stretched-link position-relative d-flex align-item-end",onClick:Object(a["withModifiers"])(c=>e.$router.push("/product/"+t.id),["prevent"])},[Object(a["createElementVNode"])("img",{src:t.image,alt:`${t.title}_${c}`,class:"w-100 img-cover"},null,8,o),5==t.options.rate?(Object(a["openBlock"])(),Object(a["createElementBlock"])("span",r,[n,Object(a["createTextVNode"])("推薦 ")])):Object(a["createCommentVNode"])("",!0)],8,s),Object(a["createElementVNode"])("div",i,[Object(a["createElementVNode"])("div",l,[Object(a["createElementVNode"])("h3",d,[Object(a["createElementVNode"])("a",{href:"#",class:"stretched-link",onClick:Object(a["withModifiers"])(c=>e.$router.push("/product/"+t.id),["prevent"])},Object(a["toDisplayString"])(t.title),9,b)]),Object(a["createElementVNode"])("span",m,Object(a["toDisplayString"])(t.category),1)]),Object(a["createElementVNode"])("div",u,[Object(a["createElementVNode"])("div",f,[Object(a["createElementVNode"])("p",p,"NT$"+Object(a["toDisplayString"])(e.$toCurrency(t.price)),1),t.price!==t.origin_price?(Object(a["openBlock"])(),Object(a["createElementBlock"])("del",j," $"+Object(a["toDisplayString"])(e.$toCurrency(t.origin_price)),1)):Object(a["createCommentVNode"])("",!0)]),Object(a["createElementVNode"])("button",{type:"button",class:Object(a["normalizeClass"])(["add-to-favorite link-priLight px-0",{"text-highlight":e.favorites.includes(t.id)}]),style:{"z-index":"10"},onClick:c=>e.updateFav(t.id,e.$swal)},h,10,O)])])]))),128)}var x=c("be92"),w=c("a00f"),V={data(){return{products:[],loadingState:""}},props:{filterProducts:Object},computed:{...Object(x["d"])(w["a"],["favorites"])},methods:{...Object(x["c"])(w["a"],["updateFav","getFavId"])},created(){this.getFavId()}},N=c("d959"),y=c.n(N);const E=y()(V,[["render",g]]);t["a"]=E},"603c":function(e,t,c){"use strict";var a=c("7a23");const s={class:"container d-flex flex-column"},o={"aria-label":"breadcrumb",class:"mt-auto"},r={class:"breadcrumb"},n={class:"breadcrumb-item"},i={class:"fs-1 text-white text-spacing-m d-flex align-items-center pb-2"},l={class:"fs-3 ms-2 ms-md-3"};function d(e,t,c,d,b,m){const u=Object(a["resolveComponent"])("router-link");return Object(a["openBlock"])(),Object(a["createElementBlock"])("div",{class:"banner bg-cover d-flex position-relative",style:Object(a["normalizeStyle"])(`background-image: url(${c.imageUrl})`)},[Object(a["createElementVNode"])("div",s,[Object(a["createElementVNode"])("nav",o,[Object(a["createElementVNode"])("ol",r,[Object(a["createElementVNode"])("li",n,[Object(a["createVNode"])(u,{to:"/",class:"link-white d-inline-block"},{default:Object(a["withCtx"])(()=>[Object(a["createTextVNode"])("首頁")]),_:1})]),Object(a["renderSlot"])(e.$slots,"default")])]),Object(a["createElementVNode"])("h2",i,[Object(a["createTextVNode"])(Object(a["toDisplayString"])(c.title)+" ",1),Object(a["createElementVNode"])("span",l,Object(a["toDisplayString"])(c.engTitle),1)])])],4)}var b={name:"Banner Component",props:{title:String,engTitle:String,imageUrl:String}},m=c("d959"),u=c.n(m);const f=u()(b,[["render",d]]);t["a"]=f},7168:function(e,t,c){"use strict";c.r(t),c.d(t,"$get",(function(){return o})),c.d(t,"$post",(function(){return r})),c.d(t,"$put",(function(){return n})),c.d(t,"$delete",(function(){return i}));var a=c("bc3a"),s=c.n(a);function o(e){return new Promise((t,c)=>{s.a.get(e).then(e=>{t(e)}).catch(e=>{c(e.message)})})}function r(e,t={}){return new Promise((c,a)=>{s.a.post(e,t).then(e=>{c(e)}).catch(e=>{a(e.message)})})}function n(e,t={}){return new Promise((c,a)=>{s.a.put(e,t).then(e=>{c(e)}).catch(e=>{a(e.message)})})}function i(e){return new Promise((t,c)=>{s.a.delete(e).then(e=>{t(e)}).catch(e=>{c(e.message)})})}},8619:function(e,t,c){"use strict";c.r(t);var a=c("7a23");const s=Object(a["createElementVNode"])("li",{class:"breadcrumb-item active","aria-current":"page"}," 願望清單 ",-1),o={class:"bg-light"},r={class:"container py-7 py-md-9"},n={key:0,class:"text-priLight d-flex flex-column justify-content-center align-items-center vh-50"},i=Object(a["createElementVNode"])("i",{class:"far fa-frown fa-4x mb-3"},null,-1),l=Object(a["createElementVNode"])("h3",{class:"h5 mb-4"},"目前沒有收藏任何商品...",-1),d={class:"text-end"},b=Object(a["createElementVNode"])("i",{class:"far fa-trash-alt"},null,-1),m={class:"row row-cols-1 row-cols-xs-2 row-cols-md-3 row-cols-lg-4 list-unstyled"};function u(e,t,c,u,f,p){const j=Object(a["resolveComponent"])("CustomLoading"),O=Object(a["resolveComponent"])("Banner"),v=Object(a["resolveComponent"])("router-link"),h=Object(a["resolveComponent"])("Card"),g=Object(a["resolveComponent"])("Subscribe");return Object(a["openBlock"])(),Object(a["createElementBlock"])(a["Fragment"],null,[Object(a["createVNode"])(j,{active:f.isLoading},null,8,["active"]),Object(a["createVNode"])(O,{title:"願望清單",engTitle:"Wishlist",imageUrl:"https://images.unsplash.com/photo-1507138262977-663e8efcde9d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80"},{default:Object(a["withCtx"])(()=>[s]),_:1}),Object(a["createElementVNode"])("div",o,[Object(a["createElementVNode"])("div",r,[0===e.favorites.length?(Object(a["openBlock"])(),Object(a["createElementBlock"])("div",n,[i,l,Object(a["createVNode"])(v,{to:"/products",class:"btn btn-primary opacity-50"},{default:Object(a["withCtx"])(()=>[Object(a["createTextVNode"])(" 來去選購 ")]),_:1})])):(Object(a["openBlock"])(),Object(a["createElementBlock"])(a["Fragment"],{key:1},[Object(a["createElementVNode"])("div",d,[Object(a["createElementVNode"])("button",{type:"button",class:"btn btn-sm btn-outline-gray mb-5",onClick:t[0]||(t[0]=(...e)=>p.checkIfRemoveAll&&p.checkIfRemoveAll(...e))},[b,Object(a["createTextVNode"])(" 清空全部 ")])]),Object(a["createElementVNode"])("ul",m,[Object(a["createVNode"])(h,{"filter-products":p.favProducts},null,8,["filter-products"])])],64))])]),Object(a["createVNode"])(g)],64)}var f=c("be92"),p=c("a00f"),j=c("603c"),O=c("450d"),v=c("a200"),h=c("7168"),g={name:"Favorite",data(){return{products:[],isLoading:!1}},components:{Banner:j["a"],Card:O["a"],Subscribe:v["a"]},methods:{...Object(f["c"])(p["a"],["getFavId","removeAllFav"]),async getProducts(){try{const e="https://vue3-course-api.hexschool.io/api/peihan/products/all",t=await Object(h["$get"])(e),{success:c,products:a}=t.data;c&&(this.products=a)}catch(e){this.$swal.fire({icon:"error",title:e})}},checkIfRemoveAll(){this.$swal.fire({toast:!1,icon:"warning",title:"確定要清空願望清單嗎？",showConfirmButton:!0,showCancelButton:!0,confirmButtonText:"確定",customClass:{title:"fs-5",confirmButton:"py-2",cancelButton:"py-2"},timer:!1}).then(e=>{e.isConfirmed&&this.removeAllFav()})}},computed:{...Object(f["d"])(p["a"],["favorites","favQty"]),favProducts(){return this.products.filter(e=>this.favorites.includes(e.id))}},async created(){try{this.isLoading=!0,this.getFavId(),await this.getProducts(),this.isLoading=!1}catch(e){this.$swal.fire({icon:"error",title:e.message})}}},x=c("d959"),w=c.n(x);const V=w()(g,[["render",u]]);t["default"]=V},a00f:function(e,t,c){"use strict";c("14d9");var a=c("be92");t["a"]=Object(a["b"])("favStore",{state:()=>({favorites:[]}),getters:{favQty(){return this.favorites.length}},actions:{getFavId(){this.favorites=JSON.parse(localStorage.getItem("myFav"))||[]},addFav(e,t){this.favorites.push(e),t.fire({icon:"success",title:"已加入到願望清單❤"})},removeFav(e,t){this.favorites=this.favorites.filter(t=>t!==e),t.fire({icon:"success",title:"已從願望清單中移除"})},removeAllFav(e){this.favorites=[],localStorage.setItem("myFav",JSON.stringify([])),e.fire({icon:"success",title:"已全數刪除"})},updateFav(e,t){0!==this.favorites.length&&this.favorites.includes(e)?this.removeFav(e,t):this.addFav(e,t),localStorage.setItem("myFav",JSON.stringify(this.favorites))}}})},a200:function(e,t,c){"use strict";var a=c("7a23");const s={class:"bg-cover bg-md-fixed position-relative",style:{"background-image":"url('https://images.unsplash.com/photo-1570610183363-c7531f3eaa68?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1800&q=80')",height:"300px"}},o={class:"index-mask text-white d-flex flex-column justify-content-center"},r={class:"container","data-aos":"fade-up"},n=Object(a["createElementVNode"])("label",{for:"subscribe",class:"fs-2 fw-bolder mb-2"},"訂閱我們",-1),i=Object(a["createElementVNode"])("p",{class:"fs-5"},"好康情報不錯過！",-1),l=["disabled"];function d(e,t,c,d,b,m){const u=Object(a["resolveComponent"])("Field"),f=Object(a["resolveComponent"])("ErrorMessage"),p=Object(a["resolveComponent"])("Form");return Object(a["openBlock"])(),Object(a["createElementBlock"])("div",s,[Object(a["createElementVNode"])("div",o,[Object(a["createElementVNode"])("div",r,[n,i,Object(a["createVNode"])(p,{ref:"subscribeForm",onSubmit:m.subscribe,class:"input-group w-md-50 w-lg-40"},{default:Object(a["withCtx"])(({errors:e})=>[Object(a["createVNode"])(u,{type:"email",class:Object(a["normalizeClass"])(["form-control py-2",{"is-invalid":e["E-mail"]}]),id:"subscribe",rules:"email",name:"E-mail",placeholder:"請輸入您的 E-mail",modelValue:b.subscribeMail,"onUpdate:modelValue":t[0]||(t[0]=e=>b.subscribeMail=e)},null,8,["class","modelValue"]),Object(a["createElementVNode"])("button",{type:"submit",class:"btn btn-primary",disabled:""===b.subscribeMail||e["E-mail"]}," 訂閱 ",8,l),Object(a["createVNode"])(f,{class:"invalid-feedback",name:"E-mail"})]),_:1},8,["onSubmit"])])])])}var b={data(){return{subscribeMail:""}},methods:{subscribe(){this.subscribeMail="",this.$swal.fire({icon:"success",title:"訂閱成功！\n已發送一組折扣代碼至您的信箱\n可前往信箱查看唷～"})}}},m=c("d959"),u=c.n(m);const f=u()(b,[["render",d]]);t["a"]=f}}]);
//# sourceMappingURL=chunk-2da4911c.ef3da600.js.map