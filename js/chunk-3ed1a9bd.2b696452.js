(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3ed1a9bd"],{3478:function(e,t,o){"use strict";o("3887")},3887:function(e,t,o){},7168:function(e,t,o){"use strict";o.r(t),o.d(t,"$get",(function(){return c})),o.d(t,"$post",(function(){return s})),o.d(t,"$put",(function(){return r})),o.d(t,"$delete",(function(){return i}));var a=o("bc3a"),n=o.n(a);function c(e){return new Promise((t,o)=>{n.a.get(e).then(e=>{t(e)}).catch(e=>{o(e.message)})})}function s(e,t={}){return new Promise((o,a)=>{n.a.post(e,t).then(e=>{o(e)}).catch(e=>{a(e.message)})})}function r(e,t={}){return new Promise((o,a)=>{n.a.put(e,t).then(e=>{o(e)}).catch(e=>{a(e.message)})})}function i(e){return new Promise((t,o)=>{n.a.delete(e).then(e=>{t(e)}).catch(e=>{o(e.message)})})}},a55b:function(e,t,o){"use strict";o.r(t);var a=o("7a23");const n={class:"login position-relative"},c=Object(a["createElementVNode"])("i",{class:"fas fa-home"},null,-1),s=Object(a["createElementVNode"])("span",{class:"ms-1"},"返回前台",-1),r={class:"container-fluid"},i={class:"row"},l=Object(a["createElementVNode"])("div",{class:"col-md-6 bg-cover vh-100 position-absolute",style:{background:"url('https://storage.googleapis.com/vue-course-api.appspot.com/peihan/1627088212151.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=cYCfQ3GUTd%2FUOb6nrFu0lC6NcwAyaSfKpKpJ3VF7HTg79AuuMWdSZr1IMn9IbiqoFeTnACkyXpPh2G3dD8vRmeBev%2FdbLfAQk%2BpdecB%2F%2BMyFRDQrhIk1x36fjeO9%2BCZMp6gU79RKVbM0lXAELsWsnESHlu5luof5CpAppd3VghWVgPqIZbcTF5pKMAaAP6B9IcC8dn0KG56SRvCp%2F67IYcqihy0uJqGslVieXwTBuy3EM%2BPPrhhYEPQAUxK4lCmCabnsXa%2FoehZqH4ldDHs7HnVuh6s1rBG2GS71ZfuM81CuFKYUr9U3eI2TmCPkvv9gmMV%2FFIcgTQVo9c0hDQixsw%3D%3D') no-repeat center 80%/ cover"}},null,-1),d={class:"col-10 col-md-6 align-items-center d-flex vh-100 py-5 me-auto me-md-0 ms-auto"},u={class:"mx-auto bg-whiteLightBlur w-100 p-5",style:{"max-width":"450px"}},m=Object(a["createElementVNode"])("h1",{class:"title display-4 text-center text-primary mb-5"},"LOG IN",-1),p={class:"form-floating mb-3"},b=Object(a["createElementVNode"])("label",{for:"floatingInput"},"Email address",-1),h={class:"form-floating position-relative mb-3"},f=["type"],g={key:0,class:"fas fa-eye-slash"},j={key:1,class:"fas fa-eye"},O=Object(a["createElementVNode"])("label",{for:"floatingPassword"},"Password",-1),w=["disabled"],v={key:0,class:"fas fa-spinner fa-pulse me-2"};function k(e,t,o,k,V,y){const E=Object(a["resolveComponent"])("router-link");return Object(a["openBlock"])(),Object(a["createElementBlock"])("div",n,[Object(a["createVNode"])(E,{to:"/",class:"btn link-white position-fixed top-0 start-0 opacity-75 p-4",style:{"z-index":"1"}},{default:Object(a["withCtx"])(()=>[c,s]),_:1}),Object(a["createElementVNode"])("div",r,[Object(a["createElementVNode"])("div",i,[l,Object(a["createElementVNode"])("div",d,[Object(a["createElementVNode"])("div",u,[m,Object(a["createElementVNode"])("form",{onSubmit:t[3]||(t[3]=Object(a["withModifiers"])((...e)=>y.login&&y.login(...e),["prevent"]))},[Object(a["createElementVNode"])("div",p,[Object(a["withDirectives"])(Object(a["createElementVNode"])("input",{type:"email",class:"form-control",id:"floatingInput",placeholder:"name@example.com",autocomplete:"username","onUpdate:modelValue":t[0]||(t[0]=e=>V.user.username=e)},null,512),[[a["vModelText"],V.user.username,void 0,{trim:!0}]]),b]),Object(a["createElementVNode"])("div",h,[Object(a["withDirectives"])(Object(a["createElementVNode"])("input",{class:"form-control",id:"floatingPassword",placeholder:"Password",autocomplete:"current-password",type:V.canSeePW?"text":"password","onUpdate:modelValue":t[1]||(t[1]=e=>V.user.password=e)},null,8,f),[[a["vModelDynamic"],V.user.password,void 0,{trim:!0}]]),Object(a["createElementVNode"])("button",{type:"button",class:"btn watch-pw position-absolute",onClick:t[2]||(t[2]=e=>V.canSeePW=!V.canSeePW)},[V.canSeePW?(Object(a["openBlock"])(),Object(a["createElementBlock"])("i",j)):(Object(a["openBlock"])(),Object(a["createElementBlock"])("i",g))]),O]),Object(a["createElementVNode"])("button",{type:"submit",class:"btn btn-primary w-100 py-3 mx-auto",disabled:"logING"===V.loadingState},["logING"===V.loadingState?(Object(a["openBlock"])(),Object(a["createElementBlock"])("i",v)):Object(a["createCommentVNode"])("",!0),"logING"===V.loadingState?(Object(a["openBlock"])(),Object(a["createElementBlock"])(a["Fragment"],{key:1},[Object(a["createTextVNode"])("登入中")],64)):(Object(a["openBlock"])(),Object(a["createElementBlock"])(a["Fragment"],{key:2},[Object(a["createTextVNode"])("登入")],64))],8,w)],32)])])])])])}o("14d9");var V=o("7168"),y={name:"Login",data(){return{user:{},canSeePW:!1,loadingState:""}},methods:{async login(){if(this.user.username&&this.user.password){this.loadingState="logING";try{const e="https://vue3-course-api.hexschool.io/admin/signin",t=await Object(V["$post"])(e,this.user),{success:o,message:a,token:n,expired:c}=t.data;if(o){document.cookie=`token=${n}; expires=${new Date(c)}; path=/`;const e=this.user.username.split("@",1).join();sessionStorage.setItem("userId",e),this.$router.push("/admin")}else this.user.password="",this.$swal.fire({icon:"error",title:a});this.loadingState=""}catch(e){this.$swal.fire({icon:"error",title:e})}}else this.$swal.fire({icon:"warning",title:"有欄位沒填寫到"})}}},E=(o("3478"),o("d959")),N=o.n(E);const x=N()(y,[["render",k]]);t["default"]=x}}]);
//# sourceMappingURL=chunk-3ed1a9bd.2b696452.js.map