import{h as m,i as g,c,a as e,F as y,r as x,j as p,o as i,n as F,t as r,d as b,q as v}from"./BuHKIe1N.js";const G={class:"leaderboard-container"},k={class:"leaderboard-table"},C=e("thead",null,[e("tr",null,[e("th",{class:"text-left"},"Profile"),e("th",{class:"text-right"},"Followers"),e("th",{class:"text-right"},"Avg Daily Growth")])],-1),D={class:"flex flex-nowrap content-center align-middle"},L={class:"mr-4 text-xl md:text-4xl content-center"},P={class:"content-center md:w-16 w-8 mr-4"},M=["src"],A=["href"],B={class:"md:inline hidden"},E={class:"text-right"},j={class:"text-right"},N={__name:"leaderboard",async setup(q){let a,d;const{data:h}=([a,d]=m(()=>p("people",()=>v("people").find())),a=await a,d(),a);h.value.forEach(t=>{if(t.profileMetricsLog&&t.profileMetricsLog.length>1){const l=t.profileMetricsLog,o=l[0],s=l[l.length-1],n=(new Date(s.date)-new Date(o.date))/(1e3*3600*24);if(n>0){const u=s.followersCount-o.followersCount;t.dailyFollowersGrowth=u/n,t.dailyFollowersGrowthPercentage=u/o.followersCount*100/n,t.dailyFollowersGrowthPercentage=t.dailyFollowersGrowthPercentage.toFixed()}}});const f=g(()=>[...h.value].sort((t,l)=>l.dailyFollowersGrowth-t.dailyFollowersGrowth));function _(t){return t===0?"gold":t===1?"silver":t===2?"bronze":""}function w(t){return t===0?"🥇":t===1?"🥈":t===2?"🥉":"🏅"}return(t,l)=>(i(),c("div",G,[e("table",k,[C,e("tbody",null,[(i(!0),c(y,null,x(f.value.slice(0,25),(o,s)=>(i(),c("tr",{key:o.username,class:F(_(s))},[e("td",D,[e("div",L,r(w(s)),1),e("div",P,[e("img",{src:o.profileImageUrl,class:"md:w-16 md:h-16 w-8 h-8 rounded-full inline-block"},null,8,M)]),e("a",{href:"https://x.com/"+o.username,class:"text-md font-semibold hover:underline block content-center align-middle",target:"_blank"},[b(r(o.name)+" ",1),e("span",B,"("+r(o.username)+")",1)],8,A)]),e("td",E,r(o.profileMetrics.followersCount),1),e("td",j," +"+r(o.dailyFollowersGrowth.toFixed(0)),1)],2))),128))])])]))}};export{N as default};
