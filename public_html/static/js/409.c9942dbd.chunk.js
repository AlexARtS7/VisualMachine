"use strict";(self.webpackChunksvreact=self.webpackChunksvreact||[]).push([[409],{409:function(e,n,s){s.r(n),s.d(n,{default:function(){return l}});var i=s(466),t=s(954),a=s(184),l=function(){var e=(0,t.Z)(),n=e.changeLightUp,s=e.changeLightDown,l=e.changeLightMax,c=e.changeVis,r=e.visBorChange,_=e.visLabChange,d=e.fullScreenMode,o=(0,i.v9)((function(e){return e})).channels,h=(0,i.v9)((function(e){return e.opacityUp})),p=(0,i.v9)((function(e){return e.opacityDown})),v=(0,i.v9)((function(e){return e.opacityMax})),u=(0,i.v9)((function(e){return e.visSet})),x=(0,i.v9)((function(e){return e.visLab})),m=(0,i.v9)((function(e){return e.visBor})),g=o.map((function(e,n){var s="view".concat(n);return(0,a.jsxs)("div",{className:"ledsettingsmini__item",children:[x?(0,a.jsxs)("div",{className:"app__navtext",children:[o.length<8?"\u041a\u0430\u043d\u0430\u043b:":"\u041a\u043b:",(0,a.jsx)("br",{}),e.mark]}):null,(0,a.jsx)("div",{className:m?"app__bkg ledsettingsmini__view":"ledsettingsmini__view",id:s})]},n)})),j=function(e){for(var n=[],s=5;s<=e;s+=5)n.push((0,a.jsx)("option",{value:s,children:s},s));return n};return(0,a.jsxs)("div",{id:"ledsheetmini",className:"ledsettingsmini app__sheet",children:[(0,a.jsxs)("div",{className:"app__flex__between",children:[(0,a.jsx)("div",{className:"app__title",children:"\u0412\u0438\u0437\u0443\u0430\u043b\u044c\u043d\u044b\u0435 \u043d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0438"}),(0,a.jsxs)("div",{className:"app__title",children:["\u0412\u0441\u0435\u0433\u043e \u043a\u0430\u043d\u0430\u043b\u043e\u0432: ",o.length]})]}),(0,a.jsx)("div",{className:"app__line"}),(0,a.jsxs)("div",{className:"app__flex__between",children:[(0,a.jsx)("div",{className:"app__bkg ledsettingsmini__sheet__elements app__flex__between",children:g}),(0,a.jsxs)("div",{children:[(0,a.jsxs)("div",{className:"app__flex__between",children:[(0,a.jsxs)("div",{className:"app__center",children:[(0,a.jsx)("div",{className:"app__navtext",children:"\u0421\u043a\u043e\u0440\u043e\u0441\u0442\u044c \u0437\u0430\u0436\u0438\u0433\u0430\u043d\u0438\u044f"}),(0,a.jsxs)("div",{className:"app__bkg ledsettingsmini__text",children:[Math.floor(1e3*h),"%"]}),(0,a.jsx)("select",{className:"ledsettingsmini__select",value:1e3*h,onChange:function(e){return n(e.target)},children:j(100)})]}),(0,a.jsxs)("div",{className:"app__center",children:[(0,a.jsx)("div",{className:"app__navtext",children:"\u0421\u043a\u043e\u0440\u043e\u0441\u0442\u044c \u0437\u0430\u0442\u0443\u0445\u0430\u043d\u0438\u044f"}),(0,a.jsxs)("div",{className:"app__bkg ledsettingsmini__text",children:[Math.floor(1e3*p),"%"]}),(0,a.jsx)("select",{className:"ledsettingsmini__select",value:1e3*p,onChange:function(e){return s(e.target)},children:j(100)})]}),(0,a.jsxs)("div",{className:"app__center",children:[(0,a.jsx)("div",{className:"app__navtext",children:"\u041c\u0430\u043a\u0441\u0438\u043c\u0430\u043b\u044c\u043d\u0430\u044f \u044f\u0440\u043a\u043e\u0441\u0442\u044c"}),(0,a.jsxs)("div",{className:"app__bkg ledsettingsmini__text",children:[Math.floor(100*v),"%"]}),(0,a.jsx)("select",{className:"ledsettingsmini__select",value:100*v,onChange:function(e){return l(e.target)},children:j(100)})]})]}),(0,a.jsx)("div",{className:"app__title",children:"\u0412\u0430\u0440\u0438\u0430\u043d\u0442\u044b \u043e\u0442\u0440\u0438\u0441\u043e\u0432\u043a\u0438"}),(0,a.jsxs)("select",{className:"ledsettingsmini__selectS",value:u,onChange:function(e){return c(e.target)},children:[(0,a.jsx)("option",{value:"none",children:"\u041d\u0435\u0442"}),(0,a.jsx)("option",{value:"radialfromcenter",children:"\u0420\u0430\u0434\u0438\u0430\u043b\u044c\u043d\u044b\u0439 \u0433\u0440\u0430\u0434\u0438\u0435\u043d\u0442 \u043e\u0442 \u0446\u0435\u043d\u0442\u0440\u0430"}),(0,a.jsx)("option",{value:"radialtocenter",children:"\u0420\u0430\u0434\u0438\u0430\u043b\u044c\u043d\u044b\u0439 \u0433\u0440\u0430\u0434\u0438\u0435\u043d\u0442 \u043a \u0446\u0435\u043d\u0442\u0440\u0443"}),(0,a.jsx)("option",{value:"linearfromcentervertically",children:"\u0412\u0435\u0440\u0442\u0438\u043a\u0430\u043b\u044c\u043d\u044b\u0439 \u0433\u0440\u0430\u0434\u0438\u0435\u043d\u0442 \u043e\u0442 \u0446\u0435\u043d\u0442\u0440\u0430"}),(0,a.jsx)("option",{value:"lineartocentervertically",children:"\u0412\u0435\u0440\u0442\u0438\u043a\u0430\u043b\u044c\u043d\u044b\u0439 \u0433\u0440\u0430\u0434\u0438\u0435\u043d\u0442 \u043a \u0446\u0435\u043d\u0442\u0440\u0443"}),(0,a.jsx)("option",{value:"linearfromcenterhorizontally",children:"\u0413\u043e\u0440\u0438\u0437\u043e\u043d\u0442\u0430\u043b\u044c\u043d\u044b\u0439 \u0433\u0440\u0430\u0434\u0438\u0435\u043d\u0442 \u043e\u0442 \u0446\u0435\u043d\u0442\u0440\u0430"}),(0,a.jsx)("option",{value:"lineartocenterhorizontally",children:"\u0413\u043e\u0440\u0438\u0437\u043e\u043d\u0442\u0430\u043b\u044c\u043d\u044b\u0439 \u0433\u0440\u0430\u0434\u0438\u0435\u043d\u0442 \u043a \u0446\u0435\u043d\u0442\u0440\u0443"})]})]}),(0,a.jsxs)("div",{children:[(0,a.jsx)("label",{htmlFor:"visLab",className:"app__title",children:" \u041b\u0435\u0439\u0431\u043b\u044b....: "}),(0,a.jsx)("input",{className:"ledsettingsmini__checkbox",name:"visLab",checked:x,onChange:function(e){return _(e.target)},type:"checkbox"})," ",(0,a.jsx)("br",{}),(0,a.jsx)("label",{htmlFor:"visBor",className:"app__title",children:" \u0420\u0430\u043c\u043a\u0438.......: "}),(0,a.jsx)("input",{className:"ledsettingsmini__checkbox",name:"visBor",checked:m,onChange:function(e){return r(e.target)},type:"checkbox"}),(0,a.jsx)("div",{className:"app__line"}),(0,a.jsx)("button",{className:"ledsettingsmini__button",onClick:function(){return d(1)},children:"\u041f\u041e\u041b\u041d\u041e\u042d\u041a\u0420\u0410\u041d\u041d\u042b\u0419 \u0420\u0415\u0416\u0418\u041c"})]})]})]})}}}]);
//# sourceMappingURL=409.c9942dbd.chunk.js.map