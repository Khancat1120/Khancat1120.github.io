(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{386:function(e,t,n){"use strict";n.r(t),n.d(t,"getblog",(function(){return s})),n.d(t,"addMsg",(function(){return c})),n.d(t,"getPv",(function(){return d}));var o=n(364);const r=n.n(o).a.create({baseURL:"http://127.0.0.1:3000",withCredentials:!1});r.interceptors.request.use(e=>e,e=>{console.log(e),Promise.reject(e)}),r.interceptors.response.use(e=>e,e=>Promise.reject(e));const s=e=>r.get("/getblog?theme="+e),c=e=>r({method:"post",url:"/addblog",data:e}),d=e=>r.get("/addpv?theme="+e)}}]);