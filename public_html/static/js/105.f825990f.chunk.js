"use strict";(self.webpackChunksvreact=self.webpackChunksvreact||[]).push([[105],{105:function(e,n,a){a.r(n),a.d(n,{default:function(){return v}});var s=a(184),t=function(){return(0,s.jsx)("div",{className:"app__sheet appheadersheet",children:(0,s.jsxs)("div",{children:[(0,s.jsx)("p",{className:"appheadersheet__title",children:"SoundVisualMachine"}),(0,s.jsx)("marquee",{className:"appheadersheet__info",direction:"left",scrollamount:"4",children:"Real-time sound analyzer Sound Machine... Parses the sound stream by frequency and visually plays it. It has settings for the number of channels and their frequency. Setting up visual accompaniment. The possibility of using a computer monitor as a color music installation. Adjust the sound frequencies and their number for clearer visualization.. \u0415he author of the application ArtPRO Studio. 2022 Suggestions can be sent to enginpro@yandex.ru"})]})})},i=a(791),l=a(466),r=a(490),c=a(712),o=a(954),d=function(){var e=(0,o.Z)(),n=e.changeFillStatus,a=e.onChangeRate,t=e.changeColor,d=e.changePeaksStatus,u=e.addNewChannel,h=(0,l.v9)((function(e){return e.rate})),p=(0,l.v9)((function(e){return e.fillStatus})),v=(0,l.v9)((function(e){return e.renderColor})),_=(0,l.v9)((function(e){return e.peaksStatus})),x=(0,l.v9)((function(e){return e.channels}));(0,i.useEffect)((function(){(0,c.Hi)()}));return(0,s.jsxs)("div",{id:"visualDisplay",className:"app__sheet visualdisplaysheet",children:[(0,s.jsxs)("div",{className:"app__flex__between",children:[(0,s.jsx)("div",{className:"app__title",children:"VisualDisplay"}),(0,s.jsxs)("div",{children:[(0,s.jsxs)("select",{defaultValue:h,onChange:function(e){return a(e.target)},children:[(0,s.jsx)("option",{value:"255",children:"Mode: 255 samples"}),(0,s.jsx)("option",{value:"204",children:"Mode: 204 samples"}),(0,s.jsx)("option",{value:"92",children:"Mode: 92 samples"})]}),(0,s.jsxs)("select",{defaultValue:p,onChange:function(e){return n(e.target)},children:[(0,s.jsx)("option",{value:"1",children:"Render: Fill"}),(0,s.jsx)("option",{value:"0",children:"Render: Stroke"})]}),(0,s.jsxs)("select",{defaultValue:v,onChange:function(e){return t(e.target)},children:[(0,s.jsx)("option",{value:"0,0,255",children:"Color: Blue"}),(0,s.jsx)("option",{value:"255,0,0",children:"Color: Red"}),(0,s.jsx)("option",{value:"0,255,0",children:"Color: Green"}),(0,s.jsx)("option",{value:"0,255,255",children:"Color: Aqua"}),(0,s.jsx)("option",{value:"255,255,0",children:"Color: Yellow"}),(0,s.jsx)("option",{value:"0, 100, 0",children:"Color: DarkGreen"}),(0,s.jsx)("option",{value:"128, 128, 0",children:"Color: Olive"}),(0,s.jsx)("option",{value:"255, 165, 0",children:"Color: Orange"}),(0,s.jsx)("option",{value:"95, 158, 160",children:"Color: CadetBlue"}),(0,s.jsx)("option",{value:"128, 0, 128",children:"Color: Purple"}),(0,s.jsx)("option",{value:"154, 205, 50",children:"Color: YellowGreen"}),(0,s.jsx)("option",{value:"189, 183, 107",children:"Color: DarkKhaki"})]}),(0,s.jsxs)("select",{defaultValue:_,onChange:function(e){return d(e.target)},children:[(0,s.jsx)("option",{value:"1",children:"Peaks: Yes"}),(0,s.jsx)("option",{value:"0",children:"Peaks: No"})]})]})]}),(0,s.jsx)("canvas",{id:"canvasDisplay"}),(0,s.jsx)("div",{className:"visualdisplaysheet__center",children:(0,s.jsx)("div",{className:"visualdisplaysheet__freq",children:function(){var e,n=[257,8,"........","..",206,6,".......",".....",93,2,"....","..",46,2,"..................",".."],a=0;switch(h){case 204:a=1;break;case 92:a=2}return function(n,a,s,t){e=t+" 0 ";for(var i=0+a;i<n;i+=a)e+="".concat(s," ").concat(i," ");e+=t}(n[4*a],n[4*a+1],n[4*a+2],n[4*a+3]),e}()})}),(0,s.jsx)("div",{className:"app__line"}),(0,s.jsxs)("div",{children:[(0,s.jsx)("span",{className:"app__title",children:"Controls:"}),(0,s.jsx)("button",{onClick:function(){var e="ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("").find((function(e){return!x.map((function(e){return e.mark})).includes(e)}));if(x.length<10){var n=x;n.push({mark:e,min:0,max:0,color:"0,255,0",assemble:"maximum",rear:28,front:10,reaction:2}),n.sort((function(e,n){return e.mark<n.mark?-1:e.mark>n.mark?1:void 0})),u(n),(0,r.V2)()}},children:"ADDNEWCHANNEL"})]})]})},u=function(e){var n=e.id,a=(0,o.Z)(),t=a.changeSampleColor,i=a.assembleChange,r=a.rearChange,c=a.frontChange,d=a.reactionChange,u=a.deleteChannel,h=a.changeMinChannel,p=a.changeMaxChannel,v=(0,l.v9)((function(e){return e.rate})),_=(0,l.v9)((function(e){return e})).channels,x="div".concat(n),m="in".concat(n),j="tr".concat(n),N="uf".concat(n),f="ur".concat(n),g="df".concat(n),C="dr".concat(n),E=function(e){for(var n=[],a=0;a<=e;a++)n.push((0,s.jsx)("option",{value:a,children:a},a));return n};return(0,s.jsxs)("div",{className:"app__sheet channellist",children:[(0,s.jsxs)("div",{className:"app__flex__between",children:[(0,s.jsxs)("div",{className:"app__title",children:["Channel : ",_[n].mark]}),(0,s.jsxs)("div",{children:[(0,s.jsxs)("select",{value:_[n].color,id:n,onChange:function(e){return t(e.target)},children:[(0,s.jsx)("option",{value:"0,0,255",children:"Color: Blue"}),(0,s.jsx)("option",{value:"255,0,0",children:"Color: Red"}),(0,s.jsx)("option",{value:"0,255,0",children:"Color: Green"}),(0,s.jsx)("option",{value:"0,255,255",children:"Color: Aqua"}),(0,s.jsx)("option",{value:"255,255,0",children:"Color: Yellow"}),(0,s.jsx)("option",{value:"0, 100, 0",children:"Color: DarkGreen"}),(0,s.jsx)("option",{value:"128, 128, 0",children:"Color: Olive"}),(0,s.jsx)("option",{value:"255, 165, 0",children:"Color: Orange"}),(0,s.jsx)("option",{value:"95, 158, 160",children:"Color: CadetBlue"}),(0,s.jsx)("option",{value:"128, 0, 128",children:"Color: Purple"}),(0,s.jsx)("option",{value:"154, 205, 50",children:"Color: YellowGreen"}),(0,s.jsx)("option",{value:"189, 183, 107",children:"Color: DarkKhaki"})]}),n>0?(0,s.jsx)("button",{className:"closebutton",id:n,onClick:function(e){return u(e.target)},children:"DELETE CHANNEL"}):null]})]}),(0,s.jsx)("div",{className:"app__line"}),(0,s.jsxs)("div",{className:"app__flex__between",children:[(0,s.jsxs)("div",{className:"app__center",children:[(0,s.jsx)("div",{className:"app__navtext",children:"Start"}),(0,s.jsx)("select",{className:"channellist__select",size:4,value:_[n].min,id:n,onChange:function(e){return h(e.target,n)},children:E(v)})]}),(0,s.jsxs)("div",{className:"app__center",children:[(0,s.jsx)("div",{className:"app__navtext",children:"End"}),(0,s.jsx)("select",{className:"channellist__select",size:4,value:_[n].max,id:n,onChange:function(e){return p(e.target,n)},children:E(v)})]}),(0,s.jsxs)("div",{className:"app__center ml",children:[(0,s.jsx)("div",{className:"app__navtext",children:"startpoint"}),(0,s.jsx)("div",{className:"app__bkg channellist__text",children:_[n].min}),(0,s.jsx)("div",{className:"app__navtext",children:"endpoint"}),(0,s.jsx)("div",{className:"app__bkg channellist__text",children:_[n].max})]}),(0,s.jsxs)("div",{className:"app__center ml",children:[(0,s.jsx)("div",{className:"app__navtext",children:"channelAssemble"}),(0,s.jsxs)("select",{className:"channellist__select",id:n,size:4,value:_[n].assemble,onChange:function(e){return i(e.target)},children:[(0,s.jsx)("option",{value:"average",children:"Average of a samples"}),(0,s.jsx)("option",{value:"maximum",children:"Maximum of a samples"})]})]}),(0,s.jsxs)("div",{className:"app__center ml",children:[(0,s.jsx)("div",{className:"app__navtext",children:"visualrendering"}),(0,s.jsxs)("div",{className:"channellist__renderarea app__bkg",children:[(0,s.jsx)("div",{className:"div",id:x}),(0,s.jsx)("div",{className:"indicator",id:m}),(0,s.jsx)("div",{className:"markers up",id:N}),(0,s.jsx)("div",{className:"markers up",id:f}),(0,s.jsx)("div",{className:"markers down",id:g}),(0,s.jsx)("div",{className:"markers down",id:C})]})]}),(0,s.jsxs)("div",{className:"app__center ml",children:[(0,s.jsx)("div",{className:"app__navtext",children:"triggering"}),(0,s.jsx)("div",{className:"channellist__triggeringarea app__bkg",id:j})]}),(0,s.jsxs)("div",{className:"app__center ml",children:[(0,s.jsx)("div",{className:"app__navtext",children:"rearbuf"}),(0,s.jsx)("select",{className:"channellist__select",size:4,value:_[n].rear,id:n,onChange:function(e){return r(e.target)},children:E(50)})]}),(0,s.jsxs)("div",{className:"app__center",children:[(0,s.jsx)("div",{className:"app__navtext",children:"frontbuf"}),(0,s.jsx)("select",{className:"channellist__select",size:4,value:_[n].front,id:n,onChange:function(e){return c(e.target)},children:E(50)})]}),(0,s.jsxs)("div",{className:"app__center ml",children:[(0,s.jsx)("div",{className:"app__navtext",children:"frontbuffer"}),(0,s.jsx)("div",{className:"app__bkg channellist__text",children:_[n].front}),(0,s.jsx)("div",{className:"app__navtext",children:"rearbuffer"}),(0,s.jsx)("div",{className:"app__bkg channellist__text",children:_[n].rear})]}),(0,s.jsxs)("div",{className:"app__center ml",children:[(0,s.jsx)("div",{className:"app__navtext",children:"reaction"}),(0,s.jsxs)("select",{className:"channellist__select",id:n,value:_[n].reaction,size:4,onChange:function(e){return d(e.target)},children:[(0,s.jsx)("option",{value:"1",children:"1"}),(0,s.jsx)("option",{value:"2",children:"2"}),(0,s.jsx)("option",{value:"3",children:"3"}),(0,s.jsx)("option",{value:"4",children:"4"}),(0,s.jsx)("option",{value:"5",children:"5"})]})]})]})]})},h=function(){var e=(0,l.v9)((function(e){return e})).channels.map((function(e,n){return(0,s.jsx)(u,{id:n},n)}));return(0,s.jsx)(s.Fragment,{children:e})},p=function(){var e=(0,o.Z)(),n=e.changeLightUp,a=e.changeLightDown,t=e.changeLightMax,i=e.changeVis,r=e.visBorChange,c=e.visLabChange,d=e.fullScreenMode,u=(0,l.v9)((function(e){return e})).channels,h=(0,l.v9)((function(e){return e.opacityUp})),p=(0,l.v9)((function(e){return e.opacityDown})),v=(0,l.v9)((function(e){return e.opacityMax})),_=(0,l.v9)((function(e){return e.visSet})),x=(0,l.v9)((function(e){return e.visLab})),m=(0,l.v9)((function(e){return e.visBor})),j=u.map((function(e,n){var a="view".concat(n);return(0,s.jsxs)("div",{className:"ledsettings__item",children:[x?(0,s.jsxs)("div",{className:"app__navtext",children:["Ch: ",e.mark]}):null,(0,s.jsx)("div",{className:m?"app__bkg ledsettings__view":"ledsettings__view",id:a})]},n)})),N=function(e){for(var n=[],a=5;a<=e;a+=5)n.push((0,s.jsx)("option",{value:a,children:a},a));return n};return(0,s.jsxs)("div",{id:"ledsheet",className:"ledsettings app__sheet",children:[(0,s.jsxs)("div",{className:"app__flex__between",children:[(0,s.jsx)("div",{className:"app__title",children:"LightSettings"}),(0,s.jsxs)("div",{className:"app__title",children:["channels: ",u.length]})]}),(0,s.jsx)("div",{className:"app__line"}),(0,s.jsx)("div",{className:"app__bkg ledsettings__sheet app__flex__between",children:j}),(0,s.jsxs)("div",{className:"app__flex__between",children:[(0,s.jsxs)("div",{className:"app__center",children:[(0,s.jsx)("div",{className:"app__navtext",children:"Light Up opacity"}),(0,s.jsxs)("div",{className:"app__bkg ledsettings__text",children:[Math.floor(1e3*h),"%"]}),(0,s.jsx)("select",{className:"ledsettings__select",size:8,value:1e3*h,onChange:function(e){return n(e.target)},children:N(100)})]}),(0,s.jsxs)("div",{className:"app__center",children:[(0,s.jsx)("div",{className:"app__navtext",children:"Light Down opacity"}),(0,s.jsxs)("div",{className:"app__bkg ledsettings__text",children:[Math.floor(1e3*p),"%"]}),(0,s.jsx)("select",{className:"ledsettings__select",size:8,value:1e3*p,onChange:function(e){return a(e.target)},children:N(100)})]}),(0,s.jsxs)("div",{className:"app__center",children:[(0,s.jsx)("div",{className:"app__navtext",children:"Max opacity"}),(0,s.jsxs)("div",{className:"app__bkg ledsettings__text",children:[Math.floor(100*v),"%"]}),(0,s.jsx)("select",{className:"ledsettings__select",size:8,value:100*v,onChange:function(e){return t(e.target)},children:N(100)})]})]}),(0,s.jsx)("div",{className:"app__line"}),(0,s.jsx)("div",{className:"app__title",children:"ViewSettings"}),(0,s.jsx)("div",{className:"app__line"}),(0,s.jsxs)("select",{className:"ledsettings__selectS",size:8,value:_,onChange:function(e){return i(e.target)},children:[(0,s.jsx)("option",{value:"none",children:"None"}),(0,s.jsx)("option",{value:"radialfromcenter",children:"Radial gradient from the center"}),(0,s.jsx)("option",{value:"radialtocenter",children:"Radial gradient to the center"}),(0,s.jsx)("option",{value:"linearfromcentervertically",children:"Linear gradient from the center vertically"}),(0,s.jsx)("option",{value:"lineartocentervertically",children:"Linear gradient to the center vertically"}),(0,s.jsx)("option",{value:"linearfromcenterhorizontally",children:"Linear gradient from the center horizontally"}),(0,s.jsx)("option",{value:"lineartocenterhorizontally",children:"Linear gradient to the center horizontally"})]}),(0,s.jsx)("div",{className:"app__line"}),(0,s.jsx)("label",{htmlFor:"visLab",className:"app__title",children:" Labels_: "}),(0,s.jsx)("input",{className:"ledsettings__checkbox",name:"visLab",checked:x,onChange:function(e){return c(e.target)},type:"checkbox"})," ",(0,s.jsx)("br",{}),(0,s.jsx)("label",{htmlFor:"visBor",className:"app__title",children:" Borders: "}),(0,s.jsx)("input",{className:"ledsettings__checkbox",name:"visBor",checked:m,onChange:function(e){return r(e.target)},type:"checkbox"}),(0,s.jsx)("div",{className:"app__line"}),(0,s.jsx)("button",{className:"ledsettings__button",onClick:function(){return d(1)},children:"GO FULLSCREEN"})]})},v=function(){return window.addEventListener("scroll",(function(e){var n=document.getElementById("Header"),a=document.getElementById("compensating"),s=document.getElementById("ledsheet"),t=document.getElementById("visualDisplay");Math.floor(n.getBoundingClientRect().top)<=0?(s.className="ledsettings app__sheet sticky",t.className="app__sheet visualdisplaysheet sticky",a.style.height="240px",a.style.width="0"):(s.className="ledsettings app__sheet",t.className="app__sheet visualdisplaysheet",a.style.height="0",a.style.width="0")})),(0,s.jsxs)("div",{children:[(0,s.jsx)(t,{}),(0,s.jsx)("div",{id:"Header"}),(0,s.jsx)("div",{id:"compensating"}),(0,s.jsxs)("div",{className:"app__flex",children:[(0,s.jsxs)("div",{children:[(0,s.jsx)(d,{}),(0,s.jsx)(h,{})]}),(0,s.jsx)("div",{children:(0,s.jsx)(p,{})})]})]})}},954:function(e,n,a){var s=a(466),t=a(490),i=a(712);n.Z=function(){var e=(0,s.I0)(),n=(0,s.v9)((function(e){return e.channels})),a=function(n,a){e({type:"CHANGE_MAX_CHANNEL",max:n.value,id:a}),e({type:"CHANGE_MIN_CHANNEL",min:n.value,id:a})},l=function(s,i){e({type:"CHANGE_MAX_CHANNEL",max:s.value,id:i}),s.value<n[i].min?a(s,i):e({type:"CHANGE_MAX_CHANNEL",max:s.value,id:i}),(0,t.V2)()},r=function(s,i){s.value>n[i].max?a(s,i):e({type:"CHANGE_MIN_CHANNEL",min:s.value,id:i}),(0,t.V2)()};return localStorage.setItem("channels",JSON.stringify(n)),{changeFillStatus:function(n){e({type:"CHANGE_FILL_STATUS",fill:n.value})},onChangeRate:function(a){!function(n){e({type:"CHANGE_VISMODE",rate:n.value})}(a),n.forEach((function(e,n){e.max>+a.value&&l(a,n),e.min>+a.value&&r(a,n)}))},changeColor:function(n){e({type:"CHANGE_COLOR",color:n.value})},changePeaksStatus:function(n){e({type:"CHANGE_PEAKS_STATUS",peaks:n.value})},addNewChannel:function(n){e({type:"ADD_NEW_CHANNEL",newArr:n})},changeSampleColor:function(n){e({type:"CHANGE_SAMPLE_COLOR",color:n.value,id:n.id}),(0,t.V2)()},assembleChange:function(n){e({type:"CHANGE_SAMPLE_ASSEMBLE",assemble:n.value,id:n.id})},rearChange:function(n){e({type:"CHANGE_REARBUFFER",rear:n.value,id:n.id})},frontChange:function(n){e({type:"CHANGE_FRONTBUFFER",front:n.value,id:n.id})},reactionChange:function(n){e({type:"CHANGE_REACTION",reaction:n.value,id:n.id})},deleteChannel:function(n){e({type:"DELETE_SELECTED_CHANNEL",id:n.id}),(0,t.V2)()},changeMinChannel:r,changeMaxChannel:l,changeLightUp:function(n){e({type:"CHANGE_LIGHT_UP",value:n.value}),(0,i.Hi)()},changeLightDown:function(n){e({type:"CHANGE_LIGHT_DOWN",value:n.value}),(0,i.Hi)()},changeVis:function(n){e({type:"CHANGE_VISUAL_SETTINGS",value:n.value}),(0,i.Hi)()},visBorChange:function(n){e({type:"CHANGE_BORDER_STATUS",value:n.checked})},visLabChange:function(n){e({type:"CHANGE_LABELS_STATUS",value:n.checked})},changeLightMax:function(n){e({type:"CHANGE_LIGHT_MAX",value:n.value}),(0,i.Hi)()},fullScreenMode:function(n){e({type:"CHANGE_FULLSCREEN_MODE",value:n})}}}}}]);
//# sourceMappingURL=105.f825990f.chunk.js.map