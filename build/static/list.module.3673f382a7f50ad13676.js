(window.__LOADABLE_LOADED_CHUNKS__=window.__LOADABLE_LOADED_CHUNKS__||[]).push([[1],{174:function(e,t,s){"use strict";s.r(t);var n=s(1),r=s(42),c=s(162),i=s(0);var l=Object(n.connect)(({state:e,item:t})=>{const s=e.source.author[t.author],n=new Date(t.date);return Object(i.jsxs)("article",{children:[Object(i.jsx)(r.a,{link:t.link,children:Object(i.jsx)(a,{dangerouslySetInnerHTML:{__html:t.title.rendered}})}),Object(i.jsxs)("div",{children:[s&&Object(i.jsx)(d,{link:s.link,children:Object(i.jsxs)(o,{children:["By ",Object(i.jsx)("b",{children:s.name})]})}),Object(i.jsxs)(b,{children:[" ","on ",Object(i.jsx)("b",{children:n.toDateString()})]})]}),e.theme.featured.showOnList&&Object(i.jsx)(c.a,{id:t.featured_media}),t.excerpt&&Object(i.jsx)(j,{dangerouslySetInnerHTML:{__html:t.excerpt.rendered}})]})});const a=Object(n.styled)("h1",{target:"e1p5zhim4",label:"Title"})({name:"1vwysmt",styles:"font-size:2rem;color:rgba(12, 17, 43);margin:0;padding-top:24px;padding-bottom:8px;box-sizing:border-box"}),o=Object(n.styled)("span",{target:"e1p5zhim3",label:"AuthorName"})({name:"miykg1",styles:"color:rgba(12, 17, 43, 0.9);font-size:0.9em"}),d=Object(n.styled)(r.a,{target:"e1p5zhim2",label:"StyledLink"})({name:"1k93czn",styles:"padding:15px 0"}),b=Object(n.styled)("span",{target:"e1p5zhim1",label:"PublishDate"})({name:"miykg1",styles:"color:rgba(12, 17, 43, 0.9);font-size:0.9em"}),j=Object(n.styled)("div",{target:"e1p5zhim0",label:"Excerpt"})({name:"1xhvlt7",styles:"line-height:1.6em;color:rgba(12, 17, 43, 0.8)"});var x=s(2);var h=Object(n.connect)(({state:e,actions:t})=>{const{next:s,previous:n}=e.source.get(e.router.link);return Object(x.useEffect)(()=>{s&&t.source.fetch(s)},[]),Object(i.jsxs)("div",{children:[s&&Object(i.jsx)(r.a,{link:s,children:Object(i.jsx)(O,{children:"← Older posts"})}),n&&s&&" - ",n&&Object(i.jsx)(r.a,{link:n,children:Object(i.jsx)(O,{children:"Newer posts →"})})]})});const O=Object(n.styled)("em",{target:"esft81u0",label:"Text"})({name:"vxgo1h",styles:"display:inline-block;margin-top:16px"});t.default=Object(n.connect)(({state:e})=>{const t=e.source.get(e.router.link);return Object(i.jsxs)(m,{children:[t.isTaxonomy&&Object(i.jsxs)(g,{children:[t.taxonomy,":"," ",Object(i.jsx)("b",{children:Object(n.decode)(e.source[t.taxonomy][t.id].name)})]}),t.isAuthor&&Object(i.jsxs)(g,{children:["Author: ",Object(i.jsx)("b",{children:Object(n.decode)(e.source.author[t.id].name)})]}),t.items.map(({type:t,id:s})=>{const n=e.source[t][s];return Object(i.jsx)(l,{item:n},n.id)}),Object(i.jsx)(h,{})]})});const m=Object(n.styled)("section",{target:"exiu6z11",label:"Container"})({name:"2gupld",styles:"max-width:800px;height:500px;margin:50px 0 25px;padding:25px 0;list-style:none;overflow:auto;box-sizing:border-box"}),g=Object(n.styled)("h3",{target:"exiu6z10",label:"Header"})({name:"eigqg2",styles:"font-weight:300;text-transform:capitalize;color:rgba(12, 17, 43, 0.9)"})}}]);