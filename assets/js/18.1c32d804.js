(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{335:function(e,t,a){},362:function(e,t,a){"use strict";a(335)},387:function(e,t,a){"use strict";a.r(t);var i={name:"Pagination",props:{total:{required:!0,type:Number},page:{type:Number,default:1},limit:{type:Number,default:20},pageSizes:{type:Array,default:()=>[10,20,30,50]},layout:{type:String,default:"total, sizes, prev, pager, next, jumper"},background:{type:Boolean,default:!0},autoScroll:{type:Boolean,default:!0},hidden:{type:Boolean,default:!1}},computed:{currentPage:{get(){return this.page},set(e){this.$emit("update:page",e)}},pageSize:{get(){return this.limit},set(e){this.$emit("update:limit",e)}}},methods:{handleSizeChange(e){this.$emit("pagination",{page:this.currentPage,limit:e})},handleCurrentChange(e){this.$emit("pagination",{page:e,limit:this.pageSize})}}},n=(a(362),a(3)),p={components:{pagination:Object(n.a)(i,(function(){var e=this,t=e._self._c;return t("div",{staticClass:"pagination-container",class:{hidden:e.hidden}},[t("el-pagination",e._b({attrs:{background:e.background,"current-page":e.currentPage,"page-size":e.pageSize,layout:e.layout,"page-sizes":e.pageSizes,total:e.total},on:{"update:currentPage":function(t){e.currentPage=t},"update:current-page":function(t){e.currentPage=t},"update:pageSize":function(t){e.pageSize=t},"update:page-size":function(t){e.pageSize=t},"size-change":e.handleSizeChange,"current-change":e.handleCurrentChange}},"el-pagination",e.$attrs,!1))],1)}),[],!1,null,"082b894c",null).exports},data:()=>({page:{total:20,current:1,size:10}}),mounted(){},methods:{pagination(e){this.page.current=e.page,this.page.size=e.limit,this.getinterface({size:this.page.size,current:this.page.current})},updatelimit(e){},updatepage(e){},getinterface(){}}},u=Object(n.a)(p,(function(){return(0,this._self._c)("pagination",{attrs:{total:this.page.total,page:this.page.current,limit:this.page.size},on:{"update:limit":this.updatelimit,"update:page":this.updatepage,pagination:this.pagination}})}),[],!1,null,"a27bdf1e",null);t.default=u.exports}}]);