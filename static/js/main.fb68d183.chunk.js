(this["webpackJsonpalan-news-app"]=this["webpackJsonpalan-news-app"]||[]).push([[0],{110:function(e,t,a){"use strict";a.r(t);var l=a(1),i=a.n(l),r=a(48),s=a.n(r),n=(a(54),a(18)),c=a(19),o=a.n(c),d=(a(55),a.p+"static/media/img.8c4bb699.png"),b=a(0);var u=function(e){var t=e.article,a=t.urlToImage,i=t.url,r=t.description,s=t.publishedAt,c=t.source,o=t.title,u=e.i,j=e.activeArticle,p=Object(l.useState)([]),g=Object(n.a)(p,2),m=g[0],x=g[1];return Object(l.useEffect)((function(){window.scroll(0,0),x((function(e){return Array(20).fill().map((function(t,a){return e[a]||Object(l.createRef)()}))}))}),[]),Object(l.useEffect)((function(){var e;u===j&&m[j]&&(e=m[j],window.scroll(0,e.current.offsetTop-50))}),[u,j,m]),Object(b.jsxs)("div",{ref:m[u],className:"relative group h-full ",children:[Object(b.jsx)("div",{className:"absolute inset-0 bg-gradient-to-r from-pink-600 to-purple-600 rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt "}),Object(b.jsxs)("div",{className:j===u?" relative rounded-b-lg border-b-[20px] border-blue-700 bg-black flex flex-col h-full justify-between p-2 items-center  leading-none":" relative  bg-black flex flex-col h-full justify-between p-2 items-center border-b-[20px] border-black rounded-b-lg leading-none",children:[Object(b.jsxs)("a",{href:i,target:"_blank",rel:"noreferrer",children:[Object(b.jsx)("img",{loading:"lazy",src:a||d,className:"h-60 w-full object-cover",alt:"articleImage"}),Object(b.jsxs)("div",{className:" flex justify-between items-center my-2",children:[Object(b.jsx)("p",{className:"text-gray-400",children:new Date(s).toDateString()}),Object(b.jsx)("p",{className:"text-gray-400",children:c.name})]}),Object(b.jsx)("h2",{className:"font-semibold text-lg",children:o}),Object(b.jsx)("p",{className:"my-2",children:r})]}),Object(b.jsxs)("div",{className:"flex justify-between items-center w-full",children:[Object(b.jsx)("a",{className:"bg-blue-700 p-2 text-white rounded-md",href:i,target:"_blank",rel:"noreferrer",children:"Learn More"}),Object(b.jsx)("p",{children:u+1})]})]})]})},j=[{id:"100",title:"Latest News",text:"Give me the latest news"},{id:"101",title:"News by Categories",info:"Business, Entertainment, General, Health, Science, Sports, Technology",text:"Give me the latest Technology news"},{id:"102",title:"News by Terms",info:"Bitcoin, PlayStation 5, Smartphones, Donald Trump...",text:"What's up with PlayStation 5"},{id:"103",title:"News by Sources",info:"CNN, Wired, BBC News, Time, IGN, Buzzfeed, ABC News...",text:"Give me the news from CNN"}];var p=function(e){var t=e.articles,a=e.activeArticle;return t.length?Object(b.jsx)("div",{className:"w-full px-4 grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 gap-6 ",children:null===t||void 0===t?void 0:t.map((function(e,t){return Object(b.jsx)("div",{className:" p-2",children:Object(b.jsx)(u,{article:e,i:t,activeArticle:a},t)})}))}):Object(b.jsxs)("div",{className:" flex flex-col h-full justify-between items-center p-4 lg:h-screen",children:[Object(b.jsxs)("div",{className:" relative group ",children:[Object(b.jsx)("div",{className:"absolute -inset-1 bg-gradient-to-r from-pink-600 to-purple-600 rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt "}),Object(b.jsx)("div",{className:"relative px-8 py-4 rounded-lg shadow-lg leading-none bg-black",children:Object(b.jsx)("h1",{className:"text-3xl font-semibold animate-bounce cursor-pointer",children:"Alan AI"})})]}),Object(b.jsxs)("div",{className:" relative group",children:[Object(b.jsx)("div",{className:"absolute -inset-1 bg-gradient-to-r from-pink-600 to-purple-600 rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt "}),Object(b.jsxs)("div",{className:"relative px-8 py-4 rounded-lg shadow-lg leading-none bg-black text-center cursor-pointer",children:[Object(b.jsxs)("h2",{className:"text-base animate-bounce",children:[Object(b.jsx)("strong",{className:"font-semibold text-lg",children:"Say : "})," Hi or Hello"]}),Object(b.jsx)("p",{className:"text-base mt-4 animate-bounce",children:"For to known this Application"})]})]}),Object(b.jsx)("div",{className:"grid grid-cols-1 lg:grid-cols-4 gap-4",children:j.map((function(e){return Object(b.jsxs)("div",{className:"relative group w-full",children:[Object(b.jsx)("div",{className:"absolute inset-0 bg-gradient-to-r from-pink-600 to-purple-600 rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt "}),Object(b.jsxs)("div",{className:" relative cursor-pointer flex flex-col justify-between items-center p-4 text-center w-full h-[50vh] bg-black rounded-lg leading-none",children:[Object(b.jsx)("h1",{className:"font-semibold text-xl",children:e.title}),e.info?Object(b.jsxs)("p",{className:"text-base",children:[Object(b.jsx)("strong",{className:"text-lg font-semibold",children:e.title.split(" ")[2]})," :  ",Object(b.jsx)("br",{}),e.info]}):null,Object(b.jsxs)("p",{className:"text-base",children:[Object(b.jsx)("strong",{className:"text-lg font-semibold",children:"Try Saying : "}),Object(b.jsx)("br",{}),e.text]})]})]},e.id)}))})]})},g=a(49),m=a.n(g);var x=function(){var e=Object(l.useState)([]),t=Object(n.a)(e,2),a=t[0],i=t[1],r=Object(l.useState)(-1),s=Object(n.a)(r,2),c=s[0],d=s[1],u="".concat("db7742f3d0e5c49960b0b102368e2dcf2e956eca572e1d8b807a3e2338fdd0dc/stage");return Object(l.useEffect)((function(){o()({key:u,onCommand:function(e){var t=e.command,a=e.articles,l=e.number;if("newHeadlines"===t)i(a),d(-1);else if("highlight"===t)d((function(e){return e+1}));else if("open"===t){var r=l.length>2?m()(l):l,s=a[r-1];r>a.length?o()().playText("Please try that again..."):s?(window.open(s.url,"_blank"),o()().playText("Opening...")):o()().playText("Please try that again...")}}})}),[]),Object(b.jsxs)("div",{className:" h-full w-full bg-black text-white",children:[a.length?Object(b.jsxs)("div",{className:" flex gap-6 p-6 items-center justify-center",children:[Object(b.jsxs)("div",{className:" relative group",children:[Object(b.jsx)("div",{className:"absolute -inset-1 bg-gradient-to-r from-pink-600 to-purple-600 rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt "}),Object(b.jsxs)("div",{className:"relative px-8 py-4 rounded-lg shadow-lg leading-none bg-black text-center cursor-pointer ",children:[Object(b.jsx)("h2",{className:"text-lg font-semibold animate-pulse",children:"Try saying : "}),Object(b.jsx)("p",{className:"text-base mt-4 animate-pulse",children:"Go Back"})]})]}),Object(b.jsxs)("div",{className:" relative group",children:[Object(b.jsx)("div",{className:"absolute -inset-1 bg-gradient-to-r from-pink-600 to-purple-600 rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt "}),Object(b.jsxs)("div",{className:"relative px-8 py-4 rounded-lg shadow-lg leading-none bg-black text-center cursor-pointer",children:[Object(b.jsx)("h2",{className:"text-lg font-semibold animate-pulse",children:"Try saying : "}),Object(b.jsx)("p",{className:"text-base mt-4 animate-pulse",children:"Open Article Number [1]"})]})]})]}):null,Object(b.jsx)(p,{articles:a,activeArticle:c})]})};s.a.render(Object(b.jsx)(i.a.StrictMode,{children:Object(b.jsx)(x,{})}),document.getElementById("root"))},54:function(e,t,a){},55:function(e,t,a){}},[[110,1,2]]]);
//# sourceMappingURL=main.fb68d183.chunk.js.map