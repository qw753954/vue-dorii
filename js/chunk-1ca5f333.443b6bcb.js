(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1ca5f333"],{"450d":function(e,t,c){"use strict";c("14d9");var a=c("7a23");const s=["onClick"],l=["src","alt"],o={key:0,class:"badge bg-highlight position-absolute top-0 end-0 p-2",style:{"z-index":"10"}},r=Object(a["createElementVNode"])("i",{class:"fad fa-crown me-1"},null,-1),i={class:"bg-white shadow-sm",style:{padding:"10px"}},n={class:"d-flex flex-xs-column justify-content-between align-items-center align-items-xs-start mb-3 mb-xs-0"},d={class:"fs-5 pt-1 mb-0 mb-xs-2"},m=["onClick"],b={class:"badge bg-secondary rounded-pill mb-xs-3"},u={class:"d-flex"},p={class:"d-flex align-items-center me-auto"},f={class:"mb-0"},g={key:0,class:"small text-muted ms-2"},h=["onClick"],j=Object(a["createElementVNode"])("i",{class:"fas fa-heart fa-lg fa-fw"},null,-1),O=[j];function v(e,t,c,j,v,y){return Object(a["openBlock"])(!0),Object(a["createElementBlock"])(a["Fragment"],null,Object(a["renderList"])(c.filterProducts,(t,c)=>(Object(a["openBlock"])(),Object(a["createElementBlock"])("li",{"data-aos":"fade-up","data-aos-offset":"0",class:"product-card col overflow-hidden position-relative pb-1 mb-4",key:t.id},[Object(a["createElementVNode"])("div",{class:"image shadow-sm stretched-link position-relative d-flex align-item-end",onClick:Object(a["withModifiers"])(c=>e.$router.push("/product/"+t.id),["prevent"])},[Object(a["createElementVNode"])("img",{src:t.image,alt:`${t.title}_${c}`,class:"w-100 img-cover"},null,8,l),5==t.options.rate?(Object(a["openBlock"])(),Object(a["createElementBlock"])("span",o,[r,Object(a["createTextVNode"])("推薦 ")])):Object(a["createCommentVNode"])("",!0)],8,s),Object(a["createElementVNode"])("div",i,[Object(a["createElementVNode"])("div",n,[Object(a["createElementVNode"])("h3",d,[Object(a["createElementVNode"])("a",{href:"#",class:"stretched-link",onClick:Object(a["withModifiers"])(c=>e.$router.push("/product/"+t.id),["prevent"])},Object(a["toDisplayString"])(t.title),9,m)]),Object(a["createElementVNode"])("span",b,Object(a["toDisplayString"])(t.category),1)]),Object(a["createElementVNode"])("div",u,[Object(a["createElementVNode"])("div",p,[Object(a["createElementVNode"])("p",f,"NT$"+Object(a["toDisplayString"])(e.$toCurrency(t.price)),1),t.price!==t.origin_price?(Object(a["openBlock"])(),Object(a["createElementBlock"])("del",g," $"+Object(a["toDisplayString"])(e.$toCurrency(t.origin_price)),1)):Object(a["createCommentVNode"])("",!0)]),Object(a["createElementVNode"])("button",{type:"button",class:Object(a["normalizeClass"])(["add-to-favorite link-priLight px-0",{"text-highlight":e.favorites.includes(t.id)}]),style:{"z-index":"10"},onClick:c=>e.updateFav(t.id,e.$swal)},O,10,h)])])]))),128)}var y=c("be92"),x=c("a00f"),N={data(){return{products:[],loadingState:""}},props:{filterProducts:Object},computed:{...Object(y["d"])(x["a"],["favorites"])},methods:{...Object(y["c"])(x["a"],["updateFav","getFavId"])},created(){this.getFavId()}},w=c("d959"),E=c.n(w);const k=E()(N,[["render",v]]);t["a"]=k},"603c":function(e,t,c){"use strict";var a=c("7a23");const s={class:"container d-flex flex-column"},l={"aria-label":"breadcrumb",class:"mt-auto"},o={class:"breadcrumb"},r={class:"breadcrumb-item"},i={class:"fs-1 text-white text-spacing-m d-flex align-items-center pb-2"},n={class:"fs-3 ms-2 ms-md-3"};function d(e,t,c,d,m,b){const u=Object(a["resolveComponent"])("router-link");return Object(a["openBlock"])(),Object(a["createElementBlock"])("div",{class:"banner bg-cover d-flex position-relative",style:Object(a["normalizeStyle"])(`background-image: url(${c.imageUrl})`)},[Object(a["createElementVNode"])("div",s,[Object(a["createElementVNode"])("nav",l,[Object(a["createElementVNode"])("ol",o,[Object(a["createElementVNode"])("li",r,[Object(a["createVNode"])(u,{to:"/",class:"link-white d-inline-block"},{default:Object(a["withCtx"])(()=>[Object(a["createTextVNode"])("首頁")]),_:1})]),Object(a["renderSlot"])(e.$slots,"default")])]),Object(a["createElementVNode"])("h2",i,[Object(a["createTextVNode"])(Object(a["toDisplayString"])(c.title)+" ",1),Object(a["createElementVNode"])("span",n,Object(a["toDisplayString"])(c.engTitle),1)])])],4)}var m={name:"Banner Component",props:{title:String,engTitle:String,imageUrl:String}},b=c("d959"),u=c.n(b);const p=u()(m,[["render",d]]);t["a"]=p},7168:function(e,t,c){"use strict";c.r(t),c.d(t,"$get",(function(){return l})),c.d(t,"$post",(function(){return o})),c.d(t,"$put",(function(){return r})),c.d(t,"$delete",(function(){return i}));var a=c("bc3a"),s=c.n(a);function l(e){return new Promise((t,c)=>{s.a.get(e).then(e=>{t(e)}).catch(e=>{c(e.message)})})}function o(e,t={}){return new Promise((c,a)=>{s.a.post(e,t).then(e=>{c(e)}).catch(e=>{a(e.message)})})}function r(e,t={}){return new Promise((c,a)=>{s.a.put(e,t).then(e=>{c(e)}).catch(e=>{a(e.message)})})}function i(e){return new Promise((t,c)=>{s.a.delete(e).then(e=>{t(e)}).catch(e=>{c(e.message)})})}},"81b1":function(e,t,c){"use strict";c.r(t);var a=c("7a23");const s={class:"products bg-light"},l=Object(a["createElementVNode"])("li",{class:"breadcrumb-item active","aria-current":"page"}," 商店 ",-1),o={class:"breadcrumb-item active","aria-current":"page"},r={class:"container py-7 px-4"},i={class:"d-flex justify-content-end align-items-center mb-5 mb-md-3"},n={class:"search w-100 w-md-50 w-lg-25"},d=Object(a["createElementVNode"])("span",null,null,-1),m=Object(a["createElementVNode"])("i",{class:"far fa-search"},null,-1),b=[m],u={class:"row gx-5"},p=Object(a["createElementVNode"])("div",{class:"col-12 d-flex justify-content-between mb-4"},[Object(a["createElementVNode"])("h3",{class:"fs-5 text-spacing-m border-start border-priLight border-5 ps-3"},"類別")],-1),f={class:"col-md-4 col-lg-3"},g={class:"sidebar list-unstyled d-flex flex-md-column flex-wrap border border-2 sticky-md-top mb-5",style:{top:"80px"}},h=["onClick"],j={class:"opacity-75 ps-2"},O={class:"col-md-8 col-lg-9"},v={key:0,class:"mx-auto text-center text-gray py-6"},y=Object(a["createElementVNode"])("i",{class:"fas fa-comment-alt-smile fa-3x d-block mb-3"},null,-1),x=Object(a["createElementVNode"])("br",null,null,-1),N={key:1,class:"row row-cols-1 row-cols-xs-2 row-cols-lg-3 list-unstyled"};function w(e,t,c,m,w,E){const k=Object(a["resolveComponent"])("CustomLoading"),V=Object(a["resolveComponent"])("Banner"),C=Object(a["resolveComponent"])("Card"),B=Object(a["resolveComponent"])("Notice");return Object(a["openBlock"])(),Object(a["createElementBlock"])(a["Fragment"],null,[Object(a["createVNode"])(k,{active:w.isLoading},null,8,["active"]),Object(a["createElementVNode"])("div",s,[Object(a["createVNode"])(V,{title:"商店",engTitle:"STORE",imageUrl:"https://storage.googleapis.com/vue-course-api.appspot.com/peihan/1626791407958.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=Odrrt0tnOyl2GCrRjBh58SAICeMPn2POo5M%2BHH9NjNVMY5oMKoiLQFReAQspP%2BLtSL0YvMPCkxX%2BlMbnc9X3q2cQCWxcvXpOrXc9uGUcOMHDWsrtlFO8BjEjYWIDDKlmqxFzisKadez%2BR06j1ZM5%2FiQ4L5RvON2ky3hkQzIrbN4p1WHP%2Bye3xCiOcGuy8l52DYk1Ryx%2F19H3yRiAku8wNHskqgjIR3coh9t%2FJGx74ctJSKtSVc53jaLBbNbFPuHhIGcRzaiLsa3X53%2Bl%2FEtiISi18oFnqcaVW0lFoIDWqp4asTYoCGdAZE570yJ8749bT%2F5t4frsizvaKawV%2BikQ4Q%3D%3D"},{default:Object(a["withCtx"])(()=>[l,Object(a["createElementVNode"])("li",o,Object(a["toDisplayString"])(w.nowCategory),1)]),_:1}),Object(a["createElementVNode"])("div",r,[Object(a["createElementVNode"])("div",i,[Object(a["createElementVNode"])("div",n,[Object(a["withDirectives"])(Object(a["createElementVNode"])("input",{type:"search",class:"form-control w-100 border-0 border-bottom bg-transparent p-1",placeholder:"搜尋飾品","onUpdate:modelValue":t[0]||(t[0]=e=>w.search=e),onKeyup:t[1]||(t[1]=Object(a["withKeys"])((...e)=>E.searchProducts&&E.searchProducts(...e),["enter"]))},null,544),[[a["vModelText"],w.search]]),d]),Object(a["createElementVNode"])("button",{type:"button",onClick:t[2]||(t[2]=(...e)=>E.searchProducts&&E.searchProducts(...e))},b)]),Object(a["createElementVNode"])("div",u,[p,Object(a["createElementVNode"])("div",f,[Object(a["createElementVNode"])("ul",g,[(Object(a["openBlock"])(!0),Object(a["createElementBlock"])(a["Fragment"],null,Object(a["renderList"])(w.categories,e=>(Object(a["openBlock"])(),Object(a["createElementBlock"])("li",{class:"border-bottom",key:e.title},[Object(a["createElementVNode"])("button",{type:"button",class:Object(a["normalizeClass"])(["d-flex align-items-center w-100 py-3 px-4",{active:w.nowCategory===e.title}]),onClick:t=>E.scrollMiddle(e.title)},[Object(a["createTextVNode"])(Object(a["toDisplayString"])(e.title)+" ",1),Object(a["createElementVNode"])("small",j,Object(a["toDisplayString"])(e.engTitle),1)],10,h)]))),128))])]),Object(a["createElementVNode"])("div",O,[0===w.filterProducts.length?(Object(a["openBlock"])(),Object(a["createElementBlock"])("p",v,[y,Object(a["createTextVNode"])(" 找不到相關的飾品"),x,Object(a["createTextVNode"])(" 請嘗試輸入其他關鍵字 ")])):(Object(a["openBlock"])(),Object(a["createElementBlock"])("ul",N,[Object(a["createVNode"])(C,{"filter-products":w.filterProducts},null,8,["filter-products"])]))])])])]),Object(a["createVNode"])(B)],64)}var E=c("603c"),k=c("450d"),V=c("abf7"),C=c("7168"),B={name:"Store",data(){return{products:[],filterProducts:[],categories:[{title:"全部",engTitle:"ALL"},{title:"戒指",engTitle:"RING"},{title:"耳環",engTitle:"EARRING"},{title:"項鍊",engTitle:"NECKLACE"},{title:"手鍊",engTitle:"BRACELET"},{title:"組合包",engTitle:"BUNDLE"}],nowCategory:"",search:"",isLoading:!1}},components:{Banner:E["a"],Card:k["a"],Notice:V["a"]},methods:{async getProductAll(){this.isLoading=!0;try{const e="https://vue3-course-api.hexschool.io/api/peihan/products/all",t=await Object(C["$get"])(e),{success:c,products:a,message:s}=t.data;c?(this.products=a,this.$route.params.categoryTitle?this.scrollMiddle(this.$route.params.categoryTitle):this.scrollTop()):this.$swal.fire({icon:"error",title:s}),this.isLoading=!1}catch(e){this.$swal.fire({icon:"error",title:e.message})}this.isLoading=!1},scrollTop(){window.scrollTo({top:0,behavior:"smooth"}),this.filterNav()},scrollMiddle(e){window.scrollTo({top:335,behavior:"smooth"}),this.filterNav(e)},filterNav(e="全部"){this.filterProducts="全部"===e?this.products:this.products.filter(t=>t.category===e),this.nowCategory=e},searchProducts(){this.filterProducts=this.products.filter(e=>e.title.match(this.search.trim())),this.nowCategory=this.search.trim()}},async created(){await this.getProductAll()}},S=c("d959"),F=c.n(S);const T=F()(B,[["render",w]]);t["default"]=T},a00f:function(e,t,c){"use strict";c("14d9");var a=c("be92");t["a"]=Object(a["b"])("favStore",{state:()=>({favorites:[]}),getters:{favQty(){return this.favorites.length}},actions:{getFavId(){this.favorites=JSON.parse(localStorage.getItem("myFav"))||[]},addFav(e,t){this.favorites.push(e),t.fire({icon:"success",title:"已加入到願望清單❤"})},removeFav(e,t){this.favorites=this.favorites.filter(t=>t!==e),t.fire({icon:"success",title:"已從願望清單中移除"})},removeAllFav(e){this.favorites=[],localStorage.setItem("myFav",JSON.stringify([])),e.fire({icon:"success",title:"已全數刪除"})},updateFav(e,t){0!==this.favorites.length&&this.favorites.includes(e)?this.removeFav(e,t):this.addFav(e,t),localStorage.setItem("myFav",JSON.stringify(this.favorites))}}})},abf7:function(e,t,c){"use strict";var a=c("7a23");const s={class:"bg-secondary text-white py-7 py-md-9"},l=Object(a["createStaticVNode"])('<div class="container px-6 px-md-9"><ul class="row list-unstyled gx-md-9"><li class="col-md-4 border-end-md mb-5 mb-md-0 py-2"><div class="d-flex d-md-column flex-md-column flex-lg-row align-items-center justify-content-lg-center" data-aos="fade-up" data-aos-offset="0"><i class="fal fa-shipping-fast fa-fw fa-3x mb-md-3 mb-lg-0"></i><div class="ms-4 ms-md-0 ms-lg-4 text-md-center text-lg-start"><h3 class="h5">Free Shipping</h3><p class="mb-0">滿 $1000 免運費</p></div></div></li><li class="col-md-4 border-end-md mb-5 mb-md-0 py-2"><div class="d-flex d-md-column flex-md-column flex-lg-row align-items-center justify-content-lg-center" data-aos="fade-up" data-aos-offset="0"><i class="fal fa-gift fa-fw fa-3x mb-md-3 mb-lg-0"></i><div class="ms-4 ms-md-0 ms-lg-4 text-md-center text-lg-start"><h3 class="h5">Bonus</h3><p class="mb-0">凡購買皆附贈酒精棉片</p></div></div></li><li class="col-md-4 py-2"><div class="d-flex d-md-column flex-md-column flex-lg-row align-items-center justify-content-lg-center" data-aos="fade-up" data-aos-offset="0"><i class="fal fa-sack-dollar fa-fw fa-3x mb-md-3 mb-lg-0"></i><div class="ms-4 ms-md-0 ms-lg-4 text-md-center text-lg-start"><h3 class="h5 text-nowrap">Payment Method</h3><ul class="list-unstyled d-flex justify-content-md-center justify-content-lg-start"><li class="me-2"><i class="fab fa-cc-visa fa-2x"></i></li><li class="me-2"><i class="fab fa-cc-apple-pay fa-2x"></i></li></ul></div></div></li></ul></div>',1),o=[l];function r(e,t){return Object(a["openBlock"])(),Object(a["createElementBlock"])("div",s,o)}var i=c("d959"),n=c.n(i);const d={},m=n()(d,[["render",r]]);t["a"]=m}}]);
//# sourceMappingURL=chunk-1ca5f333.443b6bcb.js.map