(this["webpackJsonpalan-news-app"]=this["webpackJsonpalan-news-app"]||[]).push([[0],{110:function(e,t,a){"use strict";a.r(t);var i=a(1),l=a.n(i),n=a(48),r=a.n(n),s=(a(54),a(18)),c=a(19),o=a.n(c),d=(a(55),a.p+"static/media/img.8c4bb699.png"),b=a(0);var u=function(e){var t=e.article,a=t.urlToImage,l=t.url,n=t.description,r=t.publishedAt,c=t.source,o=t.title,u=e.i,m=e.activeArticle,j=Object(i.useState)([]),p=Object(s.a)(j,2),g=p[0],x=p[1];return Object(i.useEffect)((function(){window.scroll(0,0),x((function(e){return Array(20).fill().map((function(t,a){return e[a]||Object(i.createRef)()}))}))}),[]),Object(i.useEffect)((function(){var e;u===m&&g[m]&&(e=g[m],window.scroll(0,e.current.offsetTop-50))}),[u,m,g]),Object(b.jsxs)("div",{ref:g[u],className:"relative group h-full ",children:[Object(b.jsx)("div",{className:"absolute inset-0 bg-gradient-to-r from-pink-600 to-purple-600 rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt "}),Object(b.jsxs)("div",{className:m===u?" relative rounded-b-lg border-b-[20px] border-blue-700 bg-black flex flex-col h-full justify-between p-2 items-center  leading-none":" relative  bg-black flex flex-col h-full justify-between p-2 items-center border-b-[20px] border-black rounded-b-lg leading-none",children:[Object(b.jsxs)("a",{href:l,target:"_blank",rel:"noreferrer",children:[Object(b.jsx)("img",{loading:"lazy",src:a||d,className:"h-60 w-full object-cover",alt:"articleImage"}),Object(b.jsxs)("div",{className:" flex justify-between items-center my-2",children:[Object(b.jsx)("p",{className:"text-gray-400",children:new Date(r).toDateString()}),Object(b.jsx)("p",{className:"text-gray-400",children:c.name})]}),Object(b.jsx)("h2",{className:"font-semibold text-lg",children:o}),Object(b.jsx)("p",{className:"my-2",children:n})]}),Object(b.jsxs)("div",{className:"flex justify-between items-center w-full",children:[Object(b.jsx)("a",{className:"bg-blue-700 p-2 text-white rounded-md",href:l,target:"_blank",rel:"noreferrer",children:"Learn More"}),Object(b.jsx)("p",{children:u+1})]})]})]})},m=[{id:"100",title:"Latest News",text:"Give me the latest news"},{id:"101",title:"News by Categories",info:"Business, Entertainment, General, Health, Science, Sports, Technology",text:"Give me the latest Technology news"},{id:"102",title:"News by Terms",info:"Bitcoin, PlayStation 5, Smartphones, Donald Trump...",text:"What's up with PlayStation 5"},{id:"103",title:"News by Sources",info:"The Times of India, NDTV News, India Today, The Indian Express, Republic World...",text:"Give me the news from CNN"}];var j=function(e){var t=e.articles,a=e.activeArticle;return t.length?Object(b.jsx)("div",{className:"w-full px-4 grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 gap-6 ",children:null===t||void 0===t?void 0:t.map((function(e,t){return Object(b.jsx)("div",{className:" p-2",children:Object(b.jsx)(u,{article:e,i:t,activeArticle:a},t)},t)}))}):Object(b.jsxs)("div",{className:" flex flex-col h-full justify-between items-center p-4 lg:h-screen",children:[Object(b.jsxs)("div",{className:" relative group ",children:[Object(b.jsx)("div",{className:"absolute -inset-1 bg-gradient-to-r from-pink-600 to-purple-600 rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt "}),Object(b.jsx)("div",{className:"relative px-8 py-4 rounded-lg shadow-lg leading-none bg-black",children:Object(b.jsx)("h1",{className:"text-3xl font-semibold animate-bounce cursor-pointer",children:"Alan AI"})})]}),Object(b.jsxs)("div",{className:" relative group",children:[Object(b.jsx)("div",{className:"absolute -inset-1 bg-gradient-to-r from-pink-600 to-purple-600 rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt "}),Object(b.jsxs)("div",{className:"relative p-4 rounded-lg shadow-lg leading-none bg-black text-center cursor-pointer",children:[Object(b.jsxs)("h2",{className:"text-base animate-bounce",children:[Object(b.jsx)("strong",{className:"font-medium text-lg",children:"Say : "})," Hi or Hello"]}),Object(b.jsx)("p",{className:"text-base mt-4 animate-bounce",children:"For to known this Application"})]})]}),Object(b.jsx)("div",{className:"grid grid-cols-1 lg:grid-cols-4 gap-4",children:m.map((function(e){return Object(b.jsxs)("div",{className:"relative group w-full",children:[Object(b.jsx)("div",{className:"absolute inset-0 bg-gradient-to-r from-pink-600 to-purple-600 rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt "}),Object(b.jsxs)("div",{className:" relative cursor-pointer flex flex-col justify-between items-center p-4 text-center w-full h-[50vh] bg-black rounded-lg leading-none",children:[Object(b.jsx)("h1",{className:"font-semibold text-xl",children:e.title}),e.info?Object(b.jsxs)("p",{className:"text-base",children:[Object(b.jsx)("strong",{className:"text-lg font-semibold",children:e.title.split(" ")[2]})," :  ",Object(b.jsx)("br",{}),e.info]}):null,Object(b.jsxs)("p",{className:"text-base",children:[Object(b.jsx)("strong",{className:"text-lg font-semibold",children:"Try Saying : "}),Object(b.jsx)("br",{}),e.text]})]})]},e.id)}))})]})},p=a(49),g=a.n(p);var x=function(){var e=Object(i.useState)([]),t=Object(s.a)(e,2),a=t[0],l=t[1],n=Object(i.useState)(-1),r=Object(s.a)(n,2),c=r[0],d=r[1],u="".concat("db7742f3d0e5c49960b0b102368e2dcf2e956eca572e1d8b807a3e2338fdd0dc/stage");return Object(i.useEffect)((function(){o()({key:u,onCommand:function(e){var t=e.command,a=e.articles,i=e.number;if("newHeadlines"===t)l(a),d(-1);else if("highlight"===t)d((function(e){return e+1}));else if("open"===t){var n=i.length>2?g()(i):i,r=a[n-1];n>a.length?o()().playText("Please try that again..."):r?(window.open(r.url,"_blank"),o()().playText("Opening...")):o()().playText("Please try that again...")}}})}),[]),Object(b.jsxs)("div",{className:" h-full w-full bg-black text-white",children:[a.length?Object(b.jsxs)("div",{className:" flex gap-6 p-6 items-center justify-center",children:[Object(b.jsxs)("div",{className:" relative group",children:[Object(b.jsx)("div",{className:"absolute -inset-1 bg-gradient-to-r from-pink-600 to-purple-600 rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt "}),Object(b.jsxs)("div",{className:"relative p-6 rounded-lg shadow-lg leading-none bg-black text-center cursor-pointer ",children:[Object(b.jsx)("h2",{className:" text-xs font-medium md:text-lg md:font-medium animate-pulse",children:"Try saying : "}),Object(b.jsx)("p",{className:" text-xs md:text-base md:mt-4 animate-pulse ",children:"Go Back"})]})]}),Object(b.jsxs)("div",{className:" relative group",children:[Object(b.jsx)("div",{className:"absolute -inset-1 bg-gradient-to-r from-pink-600 to-purple-600 rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt "}),Object(b.jsxs)("div",{className:"relative p-6 rounded-lg shadow-lg leading-none bg-black text-center cursor-pointer",children:[Object(b.jsx)("h2",{className:"text-xs font-medium md:text-lg md:font-medium animate-pulse ",children:"Try saying : "}),Object(b.jsx)("p",{className:" text-xs md:text-base md:mt-4 animate-pulse ",children:"Open Article Number [1]"})]})]})]}):null,Object(b.jsx)(j,{articles:a,activeArticle:c})]})};r.a.render(Object(b.jsx)(l.a.StrictMode,{children:Object(b.jsx)(x,{})}),document.getElementById("root"))},54:function(e,t,a){},55:function(e,t,a){}},[[110,1,2]]]);
//# sourceMappingURL=main.d5022541.chunk.js.map