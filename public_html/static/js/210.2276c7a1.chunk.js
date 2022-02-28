"use strict";(self.webpackChunksvreact=self.webpackChunksvreact||[]).push([[210],{210:function(e,s,n){n.r(s),n.d(s,{default:function(){return i}});var a=n(466),t=n(954),l=n(184),i=function(){var e=(0,t.Z)(),s=e.changeLightUp,n=e.changeLightDown,i=e.changeLightMax,c=e.changeVis,r=e.visBorChange,_=e.visLabChange,d=e.fullScreenMode,o=(0,a.v9)((function(e){return e})).channels,p=(0,a.v9)((function(e){return e.opacityUp})),h=(0,a.v9)((function(e){return e.opacityDown})),v=(0,a.v9)((function(e){return e.opacityMax})),u=(0,a.v9)((function(e){return e.visSet})),x=(0,a.v9)((function(e){return e.visLab})),g=(0,a.v9)((function(e){return e.visBor})),m=o.map((function(e,s){var n="view".concat(s);return(0,l.jsxs)("div",{className:"ledsettings__item",children:[x?(0,l.jsxs)("div",{className:"app__navtext",children:[o.length<8?"\u041a\u0430\u043d\u0430\u043b:":"\u041a\u043b:"," ",e.mark]}):null,(0,l.jsx)("div",{className:g?"app__bkg":"",children:(0,l.jsx)("div",{className:x?"ledsettings__view":"ledsettings__viewlarge",id:n})})]},s)})),j=function(e){for(var s=[],n=5;n<=e;n+=5)s.push((0,l.jsx)("option",{value:n,children:n},n));return s};return(0,l.jsxs)("div",{id:"ledsheet",className:"ledsettings app__sheet",children:[(0,l.jsxs)("div",{className:"app__flex__between",children:[(0,l.jsx)("div",{className:"app__title",children:"\u0412\u0438\u0437\u0443\u0430\u043b\u044c\u043d\u044b\u0435 \u043d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0438"}),(0,l.jsxs)("div",{className:"app__title",children:["\u0412\u0441\u0435\u0433\u043e \u043a\u0430\u043d\u0430\u043b\u043e\u0432: ",o.length]})]}),(0,l.jsx)("div",{className:"app__line"}),(0,l.jsx)("div",{className:"app__bkg ledsettings__sheet app__flex__between",children:m}),(0,l.jsxs)("div",{className:"app__flex__between",children:[(0,l.jsxs)("div",{className:"app__center",children:[(0,l.jsx)("div",{className:"app__navtext",children:"\u0421\u043a\u043e\u0440\u043e\u0441\u0442\u044c \u0437\u0430\u0436\u0438\u0433\u0430\u043d\u0438\u044f"}),(0,l.jsxs)("div",{className:"app__bkg ledsettings__text",children:[Math.floor(1e3*p),"%"]}),(0,l.jsx)("select",{className:"ledsettings__select",size:8,value:1e3*p,onChange:function(e){return s(e.target)},children:j(100)})]}),(0,l.jsxs)("div",{className:"app__center",children:[(0,l.jsx)("div",{className:"app__navtext",children:"\u0421\u043a\u043e\u0440\u043e\u0441\u0442\u044c \u0437\u0430\u0442\u0443\u0445\u0430\u043d\u0438\u044f"}),(0,l.jsxs)("div",{className:"app__bkg ledsettings__text",children:[Math.floor(1e3*h),"%"]}),(0,l.jsx)("select",{className:"ledsettings__select",size:8,value:1e3*h,onChange:function(e){return n(e.target)},children:j(100)})]}),(0,l.jsxs)("div",{className:"app__center",children:[(0,l.jsx)("div",{className:"app__navtext",children:"\u041c\u0430\u043a\u0441\u0438\u043c\u0430\u043b\u044c\u043d\u0430\u044f \u044f\u0440\u043a\u043e\u0441\u0442\u044c"}),(0,l.jsxs)("div",{className:"app__bkg ledsettings__text",children:[Math.floor(100*v),"%"]}),(0,l.jsx)("select",{className:"ledsettings__select",size:8,value:100*v,onChange:function(e){return i(e.target)},children:j(100)})]})]}),(0,l.jsx)("div",{className:"app__line"}),(0,l.jsx)("div",{className:"app__title",children:"\u0412\u0430\u0440\u0438\u0430\u043d\u0442\u044b \u043e\u0442\u0440\u0438\u0441\u043e\u0432\u043a\u0438"}),(0,l.jsx)("div",{className:"app__line"}),(0,l.jsxs)("select",{className:"ledsettings__selectS",size:8,value:u,onChange:function(e){return c(e.target)},children:[(0,l.jsx)("option",{value:"none",children:"\u041d\u0435\u0442"}),(0,l.jsx)("option",{value:"radialfromcenter",children:"\u0420\u0430\u0434\u0438\u0430\u043b\u044c\u043d\u044b\u0439 \u0433\u0440\u0430\u0434\u0438\u0435\u043d\u0442 \u043e\u0442 \u0446\u0435\u043d\u0442\u0440\u0430"}),(0,l.jsx)("option",{value:"radialtocenter",children:"\u0420\u0430\u0434\u0438\u0430\u043b\u044c\u043d\u044b\u0439 \u0433\u0440\u0430\u0434\u0438\u0435\u043d\u0442 \u043a \u0446\u0435\u043d\u0442\u0440\u0443"}),(0,l.jsx)("option",{value:"linearfromcentervertically",children:"\u0412\u0435\u0440\u0442\u0438\u043a\u0430\u043b\u044c\u043d\u044b\u0439 \u0433\u0440\u0430\u0434\u0438\u0435\u043d\u0442 \u043e\u0442 \u0446\u0435\u043d\u0442\u0440\u0430"}),(0,l.jsx)("option",{value:"lineartocentervertically",children:"\u0412\u0435\u0440\u0442\u0438\u043a\u0430\u043b\u044c\u043d\u044b\u0439 \u0433\u0440\u0430\u0434\u0438\u0435\u043d\u0442 \u043a \u0446\u0435\u043d\u0442\u0440\u0443"}),(0,l.jsx)("option",{value:"linearfromcenterhorizontally",children:"\u0413\u043e\u0440\u0438\u0437\u043e\u043d\u0442\u0430\u043b\u044c\u043d\u044b\u0439 \u0433\u0440\u0430\u0434\u0438\u0435\u043d\u0442 \u043e\u0442 \u0446\u0435\u043d\u0442\u0440\u0430"}),(0,l.jsx)("option",{value:"lineartocenterhorizontally",children:"\u0413\u043e\u0440\u0438\u0437\u043e\u043d\u0442\u0430\u043b\u044c\u043d\u044b\u0439 \u0433\u0440\u0430\u0434\u0438\u0435\u043d\u0442 \u043a \u0446\u0435\u043d\u0442\u0440\u0443"})]}),(0,l.jsx)("div",{className:"app__line"}),(0,l.jsx)("label",{htmlFor:"visLab",className:"app__title",children:" \u041b\u0435\u0439\u0431\u043b\u044b \u043a\u0430\u043d\u0430\u043b\u043e\u0432: "}),(0,l.jsx)("input",{className:"ledsettings__checkbox",name:"visLab",checked:x,onChange:function(e){return _(e.target)},type:"checkbox"})," ",(0,l.jsx)("br",{}),(0,l.jsx)("label",{htmlFor:"visBor",className:"app__title",children:" \u0420\u0430\u043c\u043a\u0438 \u043a\u0430\u043d\u0430\u043b\u043e\u0432: "}),(0,l.jsx)("input",{className:"ledsettings__checkbox",name:"visBor",checked:g,onChange:function(e){return r(e.target)},type:"checkbox"}),(0,l.jsx)("div",{className:"app__line"}),(0,l.jsx)("button",{className:"ledsettings__button",onClick:function(){return d(1)},children:"\u041f\u041e\u041b\u041d\u041e\u042d\u041a\u0420\u0410\u041d\u041d\u042b\u0419 \u0420\u0415\u0416\u0418\u041c"})]})}}}]);
//# sourceMappingURL=210.2276c7a1.chunk.js.map