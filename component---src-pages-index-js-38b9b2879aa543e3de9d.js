(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{194:function(e,t,A){"use strict";A.r(t);var a=A(0),n=A.n(a),l=A(197),r=A(204);function o(){var e=function(e,t){t||(t=e.slice(0));return e.raw=t,e}(["\n  h1 {\n    text-transform: capitalize;\n  }\n\n  p {\n    text-transform: none !important;\n    font-weight: 700;\n    font-size: 1.1rem !important;\n  }\n\n  a {\n    font-weight: 700;\n  }\n"]);return o=function(){return e},e}var i=r.a.div(o()),c=function(e){return n.a.createElement(i,null,n.a.createElement("header",{id:"header",style:e.timeout?{display:"none"}:{}},n.a.createElement("div",{className:"logo"},n.a.createElement("span",{className:"icon fa-code"})),n.a.createElement("div",{className:"content"},n.a.createElement("div",{className:"inner"},n.a.createElement("h1",null,"Software Engineer"),n.a.createElement("p",null,"Hi I'm Nam. Nice to meet you!"),n.a.createElement("ul",{className:"icons"},n.a.createElement("li",null,n.a.createElement("a",{href:"https://github.com/bntnam",target:"_blank",rel:"noopener noreferrer",className:"icon fa-github"},n.a.createElement("span",{className:"label"},"GitHub"))),n.a.createElement("li",null,n.a.createElement("a",{href:"https://www.linkedin.com/in/bntnam",target:"_blank",rel:"noopener noreferrer",className:"icon fa-linkedin"},n.a.createElement("span",{className:"label"},"Linkedin"))),n.a.createElement("li",null,n.a.createElement("a",{href:"https://www.facebook.com/bntnam",target:"_blank",rel:"noopener noreferrer",className:"icon fa-facebook"},n.a.createElement("span",{className:"label"},"Facebook")))))),n.a.createElement("nav",null,n.a.createElement("ul",null,n.a.createElement("li",null,n.a.createElement("a",{href:"javascript:;",onClick:function(){e.onOpenArticle("intro")}},"Intro")),n.a.createElement("li",null,n.a.createElement("a",{href:"javascript:;",onClick:function(){e.onOpenArticle("work")}},"Work")),n.a.createElement("li",null,n.a.createElement("a",{href:"javascript:;",onClick:function(){e.onOpenArticle("about")}},"Contrib")),n.a.createElement("li",null,n.a.createElement("a",{href:"javascript:;",onClick:function(){e.onOpenArticle("contact")}},"Contact"))))))},s=A(220),m=A.n(s),p=A(221),u=A.n(p),d=A(222),h=A.n(d),f=A(223),b=A.n(f),g=A(224),E=A.n(g),y=A(225),k=A.n(y);function S(){var e=function(e,t){t||(t=e.slice(0));return e.raw=t,e}(["\n  color: #222f3e;\n  font-family: 'Lato';\n  font-weight: 400;\n\n  h2 {\n    color: #222f3e;\n    border-bottom: solid 1px #222f3e;\n  }\n\n  h3,\n  h4,\n  h5 {\n    color: #222f3e;\n    text-transform: none;\n    letter-spacing: 0.1rem;\n  }\n\n  h3 {\n    font-size: 1.5rem;\n  }\n\n  h4 {\n    font-size: 1rem;\n  }\n\n  h5 {\n    font-size: 0.8rem;\n  }\n\n  .profile-img {\n    width: 12rem;\n    display: block;\n    margin: 0 auto;\n  }\n\n  .button-wrapper {\n    text-align: center;\n    margin-bottom: 1rem;\n  }\n\n  .download-button {\n    padding: 1rem 1.5rem;\n    border-radius: 2rem;\n  }\n\n  .polidea-img,\n  .side-project-img {\n    width: 6.5rem;\n    margin-right: 1rem;\n    margin-top: 0.4rem;\n  }\n\n  .open-source-img {\n    width: 6.5rem;\n    margin-right: 1rem;\n  }\n\n  .kms-img,\n  .talk-img {\n    width: 6.5rem;\n    margin-top: 0.4rem;\n  }\n\n  .exp-polidea,\n  .open-source,\n  .side-project {\n    display: flex;\n    flex-direction: row;\n  }\n\n  .exp-kms,\n  .talk {\n    display: flex;\n    flex-direction: row-reverse;\n  }\n\n  #contact {\n    text-align: center;\n  }\n\n  .icon {\n    box-shadow: inset 0 0 0 2px #222f3e;\n  }\n\n  .icon:hover {\n    color: #fff;\n    background-color: #222f3e;\n  }\n\n  .email {\n    color: #f19066;\n    border-bottom: none;\n  }\n\n  .email:hover {\n    color: #e15f41;\n    text-decoration: underline;\n  }\n\n  .url {\n    text-decoration: underline;\n    cursor: pointer;\n    /* word-break: break-all; */\n  }\n\n  @media (max-width: 576px) {\n    .exp-polidea,\n    .exp-kms,\n    .open-source,\n    .talk,\n    .side-project {\n      display: flex;\n      flex-direction: column;\n    }\n\n    .polidea-img,\n    .kms-img,\n    .open-source-img,\n    .talk-img,\n    .side-project-img {\n      display: block;\n      margin: 0 auto 1rem auto;\n    }\n  }\n"]);return S=function(){return e},e}var U=r.a.div(S()),N=function(e){var t,A;function a(){return e.apply(this,arguments)||this}return A=e,(t=a).prototype=Object.create(A.prototype),t.prototype.constructor=t,t.__proto__=A,a.prototype.render=function(){var e=this,t=n.a.createElement("div",{className:"close",onClick:function(){e.props.onCloseArticle()}});return n.a.createElement(U,{ref:this.props.setWrapperRef,id:"main",style:this.props.timeout?{display:"flex"}:{display:"none"}},n.a.createElement("article",{id:"intro",className:("intro"===this.props.article?"active":"")+" "+(this.props.articleTimeout?"timeout":""),style:{display:"none"}},n.a.createElement("h2",{className:"major"},"Intro"),n.a.createElement("span",{className:"main"},n.a.createElement("img",{src:m.a,className:"profile-img",alt:""})),n.a.createElement("p",null),n.a.createElement("p",null,"Hi! My name is Nam Bui. I am on my way to be a better software developer than I was yesterday. Moreover, I am a person who has a huge passion for IT development. Learning new knowledge and technologies is what I am passionate about, I also love to work in a group with my teammates, and sharing knowledge with each other is the way I can improve myself day by day."),n.a.createElement("div",{className:"button-wrapper"},n.a.createElement("a",{href:"./NamBui-CV.pdf",target:"_blank",rel:"noopener noreferrer",className:"icon fa-download download-button"}," ","My CV!")),t),n.a.createElement("article",{id:"work",className:("work"===this.props.article?"active":"")+" "+(this.props.articleTimeout?"timeout":""),style:{display:"none"}},n.a.createElement("h2",{className:"major"},"Work"),n.a.createElement("div",{className:"exp-polidea"},n.a.createElement("span",{className:"main"},n.a.createElement("img",{src:u.a,className:"polidea-img",alt:""})),n.a.createElement("p",null,n.a.createElement("h3",null,"Junior Software Engineer"),n.a.createElement("h5",null,"4/2019 - Present at Polidea - Warsaw, Poland "),n.a.createElement("h4",null,"Project: Backoffice 2.0"),n.a.createElement("ul",null,n.a.createElement("li",null,"Description: Analyze and share a web UI of out-of-office hours report to employees."),n.a.createElement("li",null,"Responsibilities: Mainly responsible for the project from end-to-end. Implement server side rendering application by using NextJS and give a hand on designing API endpoints."),n.a.createElement("li",null,"Technologies: ReactJS, NextJS, NodeJS, styled-components, Semantic UI, HTML, CSS")),n.a.createElement("h4",null,"Project: Rebranding"),n.a.createElement("ul",null,n.a.createElement("li",null,"Description: Remake the site of the company according to rebranding purpose."),n.a.createElement("li",null,"Responsibilities: Develop and maintain Polidea website by using static site generator GatsbyJS and the frontend ecosystem."),n.a.createElement("li",null,"Technologies: ReactJS, GatsbyJS, styled-components, GraphQL, Strapi CMS, HTML, CSS.")))),n.a.createElement("div",{className:"exp-kms"},n.a.createElement("span",{className:"main"},n.a.createElement("img",{src:h.a,className:"kms-img",alt:""})),n.a.createElement("p",null,n.a.createElement("h3",null,"Software Intern"),n.a.createElement("h5",null,"6/2018 - 10/2018 at KMS Technology - Vietnam"),n.a.createElement("h4",null,"Project: Katalon Analytics"),n.a.createElement("ul",null,n.a.createElement("li",null,"Description: Combine and share your entire test execution history, results, log, screenshots and videos with all of your automation agents for better teamwork transparency."),n.a.createElement("li",null,"Responsibilities: Develop and maintain front and back-end. Implement automation testing for UI and APIs."),n.a.createElement("li",null,"Technologies: ReactJS, Spring, Hibernate, SASS, HTML, CSS.")))),t),n.a.createElement("article",{id:"about",className:("about"===this.props.article?"active":"")+" "+(this.props.articleTimeout?"timeout":""),style:{display:"none"}},n.a.createElement("h2",{className:"major"},"Contribution"),n.a.createElement("div",{className:"open-source"},n.a.createElement("span",{className:"main"},n.a.createElement("img",{src:E.a,className:"open-source-img",alt:""})),n.a.createElement("p",null,n.a.createElement("h5",null,"I am a contributor at:"),n.a.createElement("h4",null,"Strapi"),n.a.createElement("ul",null,n.a.createElement("li",null,"The most advanced open-source Headless-CMS to build powerful APIs with no effort."),n.a.createElement("li",null,"Solved an issue and enhance documentation:"," ",n.a.createElement("a",{className:"url",href:"https://github.com/strapi/strapi/pull/3609",target:"_blank",rel:"noopener noreferrer"},"https://github.com/strapi/strapi/pull/3609"))))),n.a.createElement("div",{className:"talk"},n.a.createElement("span",{className:"main"},n.a.createElement("img",{src:k.a,className:"talk-img",alt:""})),n.a.createElement("p",null,n.a.createElement("h5",null,"Some of my public speaking about tech:"),n.a.createElement("h4",null,"Setting foot on React Hooks"),n.a.createElement("ul",null,n.a.createElement("li",null,"Internal talk about React Hooks which are a new addition in React 16.8."),n.a.createElement("li",null,"Slide:"," ",n.a.createElement("a",{className:"url",href:"http://bntnam.com/files/react-hooks-talk.pdf",target:"_blank",rel:"noopener noreferrer"},"http://bntnam.com/files/react-hooks-talk.pdf"))))),n.a.createElement("div",{className:"side-project"},n.a.createElement("span",{className:"main"},n.a.createElement("img",{src:b.a,className:"side-project-img",alt:""})),n.a.createElement("p",null,n.a.createElement("h5",null,"I have done side projects in various stacks:"),n.a.createElement("h4",null,"Devbook"),n.a.createElement("ul",null,n.a.createElement("li",null,"A social network for developers using MERN stack web app."),n.a.createElement("li",null,"Description and source code:"," ",n.a.createElement("a",{className:"url",href:"https://github.com/bntnam/devbook",target:"_blank",rel:"noopener noreferrer"},"https://github.com/bntnam/devbook"),"."),n.a.createElement("li",null,"Technologies: NodeJS, ExpressJS, ReactJS, Redux, MongoDB, Bootstrap, HTML, CSS.")),n.a.createElement("h4",null,"Dev Chat App"),n.a.createElement("ul",null,n.a.createElement("li",null,"A React Slack clone chat app for developers"),n.a.createElement("li",null,"Description and source code:"," ",n.a.createElement("a",{className:"url",href:"https://github.com/bntnam/dev-chat",target:"_blank",rel:"noopener noreferrer"},"https://github.com/bntnam/dev-chat"),"."),n.a.createElement("li",null,"Technologies: ReactJS, Redux, Firebase, Semantic UI, HTML, CSS")),n.a.createElement("h4",null,"Ecommerce Bookstore"),n.a.createElement("ul",null,n.a.createElement("li",null,"An end-to-end e-commerce web app development building by Java."),n.a.createElement("li",null,"Description and source code:"," ",n.a.createElement("a",{className:"url",href:"https://github.com/bntnam/bntn-ecommerce-bookstore",target:"_blank",rel:"noopener noreferrer"},"https://github.com/bntnam/bntn-ecommerce-bookstore"),"."),n.a.createElement("li",null,"Technologies: Java, Spring, Hibernate/JPA, MySQL, Thymleaf, Bootstrap, HTML, CSS.")),n.a.createElement("h4",null,"Real Estate Connector"),n.a.createElement("ul",null,n.a.createElement("li",null,"A full-stack Python-Django web app which helps users to connect with realtors in term of buying real estate."),n.a.createElement("li",null,"Description and source code:"," ",n.a.createElement("a",{className:"url",href:"https://github.com/bntnam/real-estate-connector",target:"_blank",rel:"noopener noreferrer"},"https://github.com/bntnam/real-estate-connector"),"."),n.a.createElement("li",null,"Technologies: Python, Django, PostgreSQL, Bootstrap, HTML, CSS.")))),t),n.a.createElement("article",{id:"contact",className:("contact"===this.props.article?"active":"")+" "+(this.props.articleTimeout?"timeout":""),style:{display:"none"}},n.a.createElement("h2",{className:"major"},"Contact"),n.a.createElement("h3",null,"Let's get in touch!"),n.a.createElement("ul",{className:"icons"},n.a.createElement("li",null,n.a.createElement("a",{href:"https://github.com/bntnam",target:"_blank",rel:"noopener noreferrer",className:"icon fa-github"},n.a.createElement("span",{className:"label"},"GitHub"))),n.a.createElement("li",null,n.a.createElement("a",{href:"https://www.linkedin.com/in/bntnam",target:"_blank",rel:"noopener noreferrer",className:"icon fa-linkedin"},n.a.createElement("span",{className:"label"},"Linkedin"))),n.a.createElement("li",null,n.a.createElement("a",{href:"https://www.facebook.com/bntnam",target:"_blank",rel:"noopener noreferrer",className:"icon fa-facebook"},n.a.createElement("span",{className:"label"},"Facebook")))),n.a.createElement("h5",null,"Send me an email and I will get back to you as soon as possible!"),n.a.createElement("h5",null,n.a.createElement("a",{href:"mailto:bntnam.app@gmail.com",className:"email"},"bntnam.app@gmail.com")),n.a.createElement("h3",null,":)"),t))},a}(n.a.Component),v=function(e){return n.a.createElement("footer",{id:"footer",style:e.timeout?{display:"none"}:{}},n.a.createElement("p",{className:"copyright"},"Built with: ",n.a.createElement("a",{href:"https://www.gatsbyjs.org/"},"Gatsby.js")))};var w=function(e){var t,A;function a(t){var A;return(A=e.call(this,t)||this).setWrapperRef=function(e){A.wrapperRef=e},A.handleOpenArticle=function(e){A.setState({isArticleVisible:!A.state.isArticleVisible,article:e}),setTimeout(function(){A.setState({timeout:!A.state.timeout})},325),setTimeout(function(){A.setState({articleTimeout:!A.state.articleTimeout})},350)},A.handleCloseArticle=function(){A.setState({articleTimeout:!A.state.articleTimeout}),setTimeout(function(){A.setState({timeout:!A.state.timeout})},325),setTimeout(function(){A.setState({isArticleVisible:!A.state.isArticleVisible,article:""})},350)},A.handleClickOutside=function(e){A.wrapperRef&&!A.wrapperRef.contains(e.target)&&A.state.isArticleVisible&&A.handleCloseArticle()},A.state={isArticleVisible:!1,timeout:!1,articleTimeout:!1,article:"",loading:"is-loading"},A}A=e,(t=a).prototype=Object.create(A.prototype),t.prototype.constructor=t,t.__proto__=A;var r=a.prototype;return r.componentDidMount=function(){var e=this;this.timeoutId=setTimeout(function(){e.setState({loading:""})},100),document.addEventListener("mousedown",this.handleClickOutside)},r.componentWillUnmount=function(){this.timeoutId&&clearTimeout(this.timeoutId),document.removeEventListener("mousedown",this.handleClickOutside)},r.render=function(){return n.a.createElement(l.a,{location:this.props.location},n.a.createElement("div",{className:"body "+this.state.loading+" "+(this.state.isArticleVisible?"is-article-visible":"")},n.a.createElement("div",{id:"wrapper"},n.a.createElement(c,{onOpenArticle:this.handleOpenArticle,timeout:this.state.timeout}),n.a.createElement(N,{isArticleVisible:this.state.isArticleVisible,timeout:this.state.timeout,articleTimeout:this.state.articleTimeout,article:this.state.article,onCloseArticle:this.handleCloseArticle,setWrapperRef:this.setWrapperRef}),n.a.createElement(v,{timeout:this.state.timeout})),n.a.createElement("div",{id:"bg"})))},a}(n.a.Component);t.default=w},195:function(e,t,A){var a;e.exports=(a=A(199))&&a.default||a},196:function(e,t,A){"use strict";A.d(t,"b",function(){return c});var a=A(0),n=A.n(a),l=A(66),r=A.n(l);A.d(t,"a",function(){return r.a});A(195),A(9).default.enqueue;var o=n.a.createContext({});function i(e){var t=e.staticQueryData,A=e.data,a=e.query,l=e.render,r=A?A.data:t[a]&&t[a].data;return n.a.createElement(n.a.Fragment,null,r&&l(r),!r&&n.a.createElement("div",null,"Loading (StaticQuery)"))}var c=function(e){var t=e.data,A=e.query,a=e.render,l=e.children;return n.a.createElement(o.Consumer,null,function(e){return n.a.createElement(i,{data:t,query:A,render:a||l,staticQueryData:e})})}},197:function(e,t,A){"use strict";var a=A(198),n=A(0),l=A.n(n),r=A(200),o=A.n(r),i=A(196);A(201);t.a=function(e){var t,A=e.children,n=e.location;return t=n&&"/"===n.pathname?l.a.createElement("div",null,A):l.a.createElement("div",{id:"wrapper",className:"page"},l.a.createElement("div",null,A)),l.a.createElement(i.b,{query:"4166697647",render:function(e){return l.a.createElement(l.a.Fragment,null,l.a.createElement(o.a,{title:e.site.siteMetadata.title},l.a.createElement("meta",{name:"author",content:e.site.siteMetadata.author}),l.a.createElement("meta",{name:"description",content:e.site.siteMetadata.description})),t)},data:a})}},198:function(e){e.exports={data:{site:{siteMetadata:{title:"Software Engineer - Nam",author:"Nam Bui",description:"Hi I'm Nam or JKey. A Software Engineer who is trying to be more full-stack day by day. 🔥🔥🔥"}}}}},199:function(e,t,A){"use strict";A.r(t);A(23);var a=A(0),n=A.n(a),l=A(94);t.default=function(e){var t=e.location,A=e.pageResources;return A?n.a.createElement(l.a,Object.assign({location:t,pageResources:A},A.json)):null}},220:function(e,t,A){e.exports=A.p+"static/profile-33825d2fff9efb5539c02b92ddfb8554.png"},221:function(e,t,A){e.exports=A.p+"static/polidea-120a3fd28fc4fd82abe7d1b51177a96a.png"},222:function(e,t,A){e.exports=A.p+"static/kms-technology-6960c4ec673eb53f6ccd2c161e0d4f64.png"},223:function(e,t,A){e.exports=A.p+"static/project-c44df0964c89f270ca6b1c89f7737b49.png"},224:function(e,t,A){e.exports=A.p+"static/open-source-62f9b5bc619957dc8d494e2897fc419c.png"},225:function(e,t){e.exports="data:image/png;base64,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"}}]);
//# sourceMappingURL=component---src-pages-index-js-38b9b2879aa543e3de9d.js.map