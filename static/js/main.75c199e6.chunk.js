(this["webpackJsonpyoutube-comments-phoenix"]=this["webpackJsonpyoutube-comments-phoenix"]||[]).push([[0],{15:function(n,e,t){},20:function(n,e,t){"use strict";t.r(e);var r=t(0),i=t.n(r),o=t(8),a=t.n(o),c=(t(15),t(5)),l=t(2),s=t(3),u=t(6),b=t(4);function p(){return(p=Object.assign||function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n}).apply(this,arguments)}function d(n,e){if(null==n)return{};var t,r,i=function(n,e){if(null==n)return{};var t,r,i={},o=Object.keys(n);for(r=0;r<o.length;r++)t=o[r],e.indexOf(t)>=0||(i[t]=n[t]);return i}(n,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(n);for(r=0;r<o.length;r++)t=o[r],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(i[t]=n[t])}return i}var h=r.createElement("g",null,r.createElement("path",{d:"M3 18h6v-2H3v2zM3 6v2h18V6H3zm0 7h12v-2H3v2z"}),r.createElement("path",{d:"M0 0h24v24H0z",fill:"none"}));function j(n,e){var t=n.title,i=n.titleId,o=d(n,["title","titleId"]);return r.createElement("svg",p({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor",ref:e,"aria-labelledby":i},o),t?r.createElement("title",{id:i},t):null,h)}var m=r.forwardRef(j),f=(t.p,t(1)),x=new Map;x.set(0,{id:0,avatar:"https://i.pravatar.cc/48",username:"string",publishedTime:"1\uc8fc \uc804",content:"hello world!",likeCount:999,dislikeCount:0});var g,v=Object(r.createContext)(x),O=Object(r.createContext)((function(){return null})),y=0;function w(n,e){switch(e.type){case"ADD_COMMENT":var t=e.comment;return y+=1,new Map(n).set(y,Object(b.a)(Object(b.a)({},t),{},{id:y}));default:throw new Error("Unhandled action")}}function C(n){var e=n.children,t=Object(r.useReducer)(w,x),i=Object(c.a)(t,2),o=i[0],a=i[1];return Object(f.jsx)(v.Provider,{value:o,children:Object(f.jsx)(O.Provider,{value:a,children:e})})}var k=s.a.div(g||(g=Object(l.a)(["\n  .title {\n    display: flex;\n    align-items: center;\n    margin-bottom: 24px;\n\n    h2 {\n      color: #030303;\n      font-size: 16px;\n      font-weight: 400;\n      letter-spacing: 0.1px;\n      margin-right: 32px;\n    }\n\n    .subMenu {\n      display: flex;\n      align-items: center;\n      gap: 8px;\n      color: #606060;\n\n      svg {\n        width: 24px;\n      }\n\n      span {\n        font-size: 14px;\n        font-weight: 500;\n      }\n    }\n  }\n\n  .commentBox {\n    display: flex;\n    margin-bottom: 24px;\n\n    .authorThumbnail {\n      height: 40px;\n      margin-right: 16px;\n\n      img {\n        height: 100%;\n        border-radius: 50%;\n      }\n    }\n\n    .main {\n      width: 100%;\n\n      .creationBox {\n        position: relative;\n        height: 24.5px;\n        margin-bottom: 8px;\n\n        input {\n          width: 100%;\n          position: relative;\n          font-size: 14px;\n          background-color: transparent;\n          border: none;\n          margin-bottom: 8px;\n\n          :focus {\n            outline: none;\n          }\n        }\n\n        label {\n          position: absolute;\n          bottom: 0;\n          left: 0;\n          width: 100%;\n          height: 100%;\n          pointer-events: none;\n          border-bottom: 1px solid #909090;\n\n          ::after {\n            content: '';\n            position: absolute;\n            left: 0;\n            bottom: -1px;\n            width: 100%;\n            height: 100%;\n            border-bottom: 2px solid #000000;\n            transform-origin: center;\n            transform: scaleX(0);\n          }\n        }\n\n        input:focus + label::after {\n          transition: all 0.3s ease;\n          transform: scaleX(1);\n        }\n      }\n\n      .footer {\n        display: flex;\n        justify-content: flex-end;\n        gap: 16px;\n\n        button {\n          cursor: pointer;\n          font-size: 14px;\n          font-weight: 500;\n          letter-spacing: 0.5px;\n          height: 39px;\n          min-width: 71.96px;\n          padding: 10px 16px;\n          border: none;\n          border-radius: 2px;\n          background-color: #065fd4;\n          color: #fff;\n\n          &.cancel {\n            background-color: transparent;\n            color: #060606;\n          }\n\n          :disabled {\n            cursor: auto;\n            background-color: #cccccc;\n            color: #606060;\n          }\n        }\n      }\n    }\n  }\n"])));var E=function(){var n=Object(r.useContext)(O),e=Object(r.useState)(!1),t=Object(c.a)(e,2),i=t[0],o=t[1],a=Object(r.useState)({id:-1,avatar:"https://i.pravatar.cc/48",username:"string",publishedTime:"1\uc8fc \uc804",content:"",likeCount:999,dislikeCount:0}),l=Object(c.a)(a,2),s=l[0],p=l[1];return Object(f.jsxs)(k,{children:[Object(f.jsxs)("div",{className:"title",children:[Object(f.jsxs)("h2",{children:["\ub313\uae00 ",140,"\uac1c"]}),Object(f.jsxs)("div",{className:"subMenu",children:[Object(f.jsx)(m,{}),Object(f.jsx)("span",{children:"\uc815\ub82c \uae30\uc900"})]})]}),Object(f.jsxs)("div",{className:"commentBox",children:[Object(f.jsx)("div",{className:"authorThumbnail",children:Object(f.jsx)("img",{src:"https://i.pravatar.cc/48",alt:"authorThumbnail"})}),Object(f.jsxs)("div",{className:"main",children:[Object(f.jsxs)("div",{className:"creationBox",children:[Object(f.jsx)("input",{type:"text",name:"content",placeholder:"\uacf5\uac1c \ub313\uae00 \ucd94\uac00 ...",spellCheck:"false",value:s.content,onFocus:function(){o(!0)},onChange:function(n){var e=n.target,t=e.name,r=e.value;p((function(n){return Object(b.a)(Object(b.a)({},n),{},Object(u.a)({},t,r))}))}}),Object(f.jsx)("label",{htmlFor:"comment"})]}),i?Object(f.jsxs)("div",{className:"footer",children:[Object(f.jsx)("button",{type:"button",className:"cancel",onClick:function(){o(!1),p((function(n){return Object(b.a)(Object(b.a)({},n),{},{content:""})}))},children:"\ucde8\uc18c"}),Object(f.jsx)("button",{type:"button",disabled:0===s.content.length,onClick:function(){n({type:"ADD_COMMENT",comment:s})},children:"\ub313\uae00"})]}):null]})]})]})};function N(){return(N=Object.assign||function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n}).apply(this,arguments)}function z(n,e){if(null==n)return{};var t,r,i=function(n,e){if(null==n)return{};var t,r,i={},o=Object.keys(n);for(r=0;r<o.length;r++)t=o[r],e.indexOf(t)>=0||(i[t]=n[t]);return i}(n,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(n);for(r=0;r<o.length;r++)t=o[r],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(i[t]=n[t])}return i}var T=r.createElement("g",null,r.createElement("path",{d:"M1 21h4V9H1v12zm22-11c0-1.1-.9-2-2-2h-6.31l.95-4.57.03-.32c0-.41-.17-.79-.44-1.06L14.17 1 7.59 7.59C7.22 7.95 7 8.45 7 9v10c0 1.1.9 2 2 2h9c.83 0 1.54-.5 1.84-1.22l3.02-7.05c.09-.23.14-.47.14-.73v-1.91l-.01-.01L23 10z"}));function M(n,e){var t=n.title,i=n.titleId,o=z(n,["title","titleId"]);return r.createElement("svg",N({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor",ref:e,"aria-labelledby":i},o),t?r.createElement("title",{id:i},t):null,T)}var P=r.forwardRef(M);t.p;function B(){return(B=Object.assign||function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n}).apply(this,arguments)}function I(n,e){if(null==n)return{};var t,r,i=function(n,e){if(null==n)return{};var t,r,i={},o=Object.keys(n);for(r=0;r<o.length;r++)t=o[r],e.indexOf(t)>=0||(i[t]=n[t]);return i}(n,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(n);for(r=0;r<o.length;r++)t=o[r],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(i[t]=n[t])}return i}var S=r.createElement("g",null,r.createElement("path",{d:"M15 3H6c-.83 0-1.54.5-1.84 1.22l-3.02 7.05c-.09.23-.14.47-.14.73v1.91l.01.01L1 14c0 1.1.9 2 2 2h6.31l-.95 4.57-.03.32c0 .41.17.79.44 1.06L9.83 23l6.59-6.59c.36-.36.58-.86.58-1.41V5c0-1.1-.9-2-2-2zm4 0v12h4V3h-4z"}));function F(n,e){var t=n.title,i=n.titleId,o=I(n,["title","titleId"]);return r.createElement("svg",B({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor",ref:e,"aria-labelledby":i},o),t?r.createElement("title",{id:i},t):null,S)}var H,L,D=r.forwardRef(F),R=(t.p,s.a.button(H||(H=Object(l.a)(["\n  cursor: pointer;\n  border: none;\n  color: #909090;\n  background-color: transparent;\n  transition: all 0.2s ease;\n\n  svg {\n    height: 16px;\n    width: 16px;\n  }\n\n  :hover {\n    color: #606060;\n  }\n"])))),V=s.a.div(L||(L=Object(l.a)(["\n  display: flex;\n\n  .authorThumbnail {\n    height: 40px;\n    margin-right: 16px;\n\n    img {\n      height: 100%;\n      border-radius: 50%;\n    }\n  }\n\n  .main {\n    .header {\n      color: #030303;\n      display: flex;\n      align-items: center;\n\n      h3 {\n        font-size: 13px;\n        font-weight: 700;\n        line-height: 18px;\n      }\n\n      .publishedTime {\n        font-size: 12px;\n        letter-spacing: 0.3px;\n      }\n    }\n\n    .content {\n      font-size: 14px;\n      letter-spacing: 0.2px;\n      line-height: 20px;\n      white-space: pre-wrap;\n    }\n\n    .toolbar {\n      display: flex;\n      align-items: center;\n      color: #606060;\n\n      > * {\n        margin: 8px;\n      }\n\n      span {\n        font-size: 12px;\n        letter-spacing: 0.3px;\n        margin-left: 0px;\n      }\n\n      button.replyButton {\n        cursor: pointer;\n        font-size: 13px;\n        background-color: transparent;\n        border: none;\n        font-weight: 500;\n      }\n    }\n  }\n"])));var A,J=function(n){var e=n.data,t=e.avatar,r=e.content,i=e.dislikeCount,o=e.id,a=e.likeCount,c=e.publishedTime,l=e.username,s=function(){console.log("like",o)};return Object(f.jsxs)(V,{children:[Object(f.jsx)("div",{className:"authorThumbnail",children:Object(f.jsx)("img",{src:t,alt:"authorThumbnail"})}),Object(f.jsxs)("div",{className:"main",children:[Object(f.jsxs)("div",{className:"header",children:[Object(f.jsx)("h3",{children:l}),"\xa0",Object(f.jsx)("div",{className:"publishedTime",children:c})]}),Object(f.jsx)("div",{className:"content",children:r}),Object(f.jsxs)("div",{className:"toolbar",children:[Object(f.jsx)(R,{onClick:s,children:Object(f.jsx)(P,{})}),a>=i?Object(f.jsx)("span",{children:a}):null,Object(f.jsx)(R,{onClick:s,children:Object(f.jsx)(D,{})}),Object(f.jsx)("button",{type:"button",className:"replyButton",children:"\ub2f5\uae00"})]})]})]})},X=s.a.div(A||(A=Object(l.a)(["\n  min-height: 100vh;\n  background-color: #f9f9f9;\n  padding: 2rem;\n\n  > div {\n    max-width: 900px;\n    margin: auto;\n  }\n\n  .contents {\n    .commentThread {\n      margin-bottom: 16px;\n    }\n  }\n"])));var _=function(){var n=Object(r.useContext)(v);return Object(f.jsxs)(X,{children:[Object(f.jsx)(E,{}),Object(f.jsx)("div",{className:"contents",children:Array.from(n).map((function(n){var e=Object(c.a)(n,2),t=e[0],r=e[1];return Object(f.jsx)("div",{className:"commentThread",children:Object(f.jsx)(J,{data:r})},t)}))})]})},U=function(n){n&&n instanceof Function&&t.e(3).then(t.bind(null,21)).then((function(e){var t=e.getCLS,r=e.getFID,i=e.getFCP,o=e.getLCP,a=e.getTTFB;t(n),r(n),i(n),o(n),a(n)}))};a.a.render(Object(f.jsx)(i.a.StrictMode,{children:Object(f.jsx)(C,{children:Object(f.jsx)(_,{})})}),document.getElementById("root")),U()}},[[20,1,2]]]);
//# sourceMappingURL=main.75c199e6.chunk.js.map