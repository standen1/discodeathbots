(window.__LOADABLE_LOADED_CHUNKS__=window.__LOADABLE_LOADED_CHUNKS__||[]).push([[1],{232:function(e,t,n){"use strict";n.r(t);n(14);var r=n(1),s=n(70),i=n(220),c=n(0);var a=Object(r.connect)((function(e){var t=e.state,n=e.item,r=t.source.author[n.author],a=new Date(n.date);return Object(c.jsxs)("article",{children:[Object(c.jsx)(s.a,{link:n.link,children:Object(c.jsx)(l,{dangerouslySetInnerHTML:{__html:n.title.rendered}})}),Object(c.jsxs)("div",{children:[r&&Object(c.jsx)(d,{link:r.link,children:Object(c.jsxs)(o,{children:["By ",Object(c.jsx)("b",{children:r.name})]})}),Object(c.jsxs)(b,{children:[" ","on ",Object(c.jsx)("b",{children:a.toDateString()})]})]}),t.theme.featured.showOnList&&Object(c.jsx)(i.a,{id:n.featured_media}),n.excerpt&&Object(c.jsx)(j,{dangerouslySetInnerHTML:{__html:n.excerpt.rendered}})]})})),l=Object(r.styled)("h1",{target:"e1p5zhim4",label:"Title"})({name:"1vwysmt",styles:"font-size:2rem;color:rgba(12, 17, 43);margin:0;padding-top:24px;padding-bottom:8px;box-sizing:border-box"}),o=Object(r.styled)("span",{target:"e1p5zhim3",label:"AuthorName"})({name:"miykg1",styles:"color:rgba(12, 17, 43, 0.9);font-size:0.9em"}),d=Object(r.styled)(s.a,{target:"e1p5zhim2",label:"StyledLink"})({name:"1k93czn",styles:"padding:15px 0"}),b=Object(r.styled)("span",{target:"e1p5zhim1",label:"PublishDate"})({name:"miykg1",styles:"color:rgba(12, 17, 43, 0.9);font-size:0.9em"}),j=Object(r.styled)("div",{target:"e1p5zhim0",label:"Excerpt"})({name:"1xhvlt7",styles:"line-height:1.6em;color:rgba(12, 17, 43, 0.8)"}),x=n(2);var h=Object(r.connect)((function(e){var t=e.state,n=e.actions,r=t.source.get(t.router.link),i=r.next,a=r.previous;return Object(x.useEffect)((function(){i&&n.source.fetch(i)}),[]),Object(c.jsxs)("div",{children:[i&&Object(c.jsx)(s.a,{link:i,children:Object(c.jsx)(O,{children:"← Older posts"})}),a&&i&&" - ",a&&Object(c.jsx)(s.a,{link:a,children:Object(c.jsx)(O,{children:"Newer posts →"})})]})})),O=Object(r.styled)("em",{target:"esft81u0",label:"Text"})({name:"vxgo1h",styles:"display:inline-block;margin-top:16px"});t.default=Object(r.connect)((function(e){var t=e.state,n=t.source.get(t.router.link);return Object(c.jsxs)(m,{children:[n.isTaxonomy&&Object(c.jsxs)(u,{children:[n.taxonomy,":"," ",Object(c.jsx)("b",{children:Object(r.decode)(t.source[n.taxonomy][n.id].name)})]}),n.isAuthor&&Object(c.jsxs)(u,{children:["Author: ",Object(c.jsx)("b",{children:Object(r.decode)(t.source.author[n.id].name)})]}),n.items.map((function(e){var n=e.type,r=e.id,s=t.source[n][r];return Object(c.jsx)(a,{item:s},s.id)})),Object(c.jsx)(h,{})]})}));var m=Object(r.styled)("section",{target:"exiu6z11",label:"Container"})({name:"2gupld",styles:"max-width:800px;height:500px;margin:50px 0 25px;padding:25px 0;list-style:none;overflow:auto;box-sizing:border-box"}),u=Object(r.styled)("h3",{target:"exiu6z10",label:"Header"})({name:"eigqg2",styles:"font-weight:300;text-transform:capitalize;color:rgba(12, 17, 43, 0.9)"})}}]);