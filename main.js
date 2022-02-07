!function(){"use strict";var e={21:function(e,t){t.Z=(e,t)=>{const n=e.__vccOpts||e;for(const[e,a]of t)n[e]=a;return n}},235:function(e,t,n){var a=Vue;const o={class:"app"},r={class:"navbar navbar-light navbar-expand-md"},i={class:"container"},s={class:"navbar-brand",href:"./"},l=(0,a.createElementVNode)("button",{class:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbar-collapse","aria-controls":"navbar-collapse","aria-expanded":"false","aria-label":"Toggle navigation"},[(0,a.createElementVNode)("span",{class:"navbar-toggler-icon"})],-1),c=(0,a.createElementVNode)("div",{id:"navbar-collapse",class:"collapse navbar-collapse justify-content-end",role:"navigation"},[(0,a.createElementVNode)("nav",{class:"nav navbar-nav"},[(0,a.createElementVNode)("a",{class:"nav-link",href:"https://github.com/fengyuanchen/vue-feather",title:"View the GitHub project"}," GitHub "),(0,a.createElementVNode)("a",{class:"nav-link",href:"https://feathericons.com/",title:"Feather – Simply beautiful open source icons"}," Feather "),(0,a.createElementVNode)("a",{class:"nav-link",href:"https://fengyuanchen.github.io/",title:"Explore more projects"}," Explore "),(0,a.createElementVNode)("a",{class:"nav-link",href:"https://chenfengyuan.com/",title:"About the author"}," About ")])],-1),d={class:"bg-primary text-white py-5"},u={class:"container"},p={class:"row"},h={class:"col-md"},m={class:"h6"},f={class:"lead"},v={class:"col-md"},g={ref:"carbonads",class:"carbonads"},y={class:"container"},b={class:"markdown-body"},q=(0,a.createStaticVNode)('<footer><div class="container"><p class="heart"></p><nav class="nav flex-wrap justify-content-center mb-3"><a class="nav-link" href="https://github.com/fengyuanchen/vue-feather"> GitHub </a><a class="nav-link" href="https://github.com/fengyuanchen/vue-feather/blob/main/CHANGELOG.md"> Changelog </a><a class="nav-link" href="https://github.com/fengyuanchen/vue-feather/blob/main/LICENSE"> License </a><a class="nav-link" href="https://chenfengyuan.com/"> About </a></nav></div></footer>',1);var k=JSON.parse('{"name":"vue-feather","version":"2.0.0","description":"Feather icons component for Vue 3.","main":"dist/vue-feather.js","module":"dist/vue-feather.esm.js","types":"dist/vue-feather.d.ts","files":["dist"],"scripts":{"build":"rollup -c --environment BUILD:production","build:docs":"webpack --env production","build:types":"move-file dist/vue-feather.vue.d.ts dist/vue-feather.d.ts","changelog":"conventional-changelog -p angular -i CHANGELOG.md -s -r 0","clean":"del-cli dist","lint":"npm run lint:js && npm run lint:css","lint:css":"stylelint **/*.{css,scss,vue} --fix","lint:js":"eslint . --ext .js,.ts,.vue --fix","prepare":"husky install","release":"npm run clean && npm run lint && npm run build && npm run build:types && npm run build:docs && npm test && npm run changelog","serve":"webpack serve --hot --open","start":"npm run serve","test":"jest","test:coverage":"cat coverage/lcov.info | codecov"},"repository":{"type":"git","url":"https://github.com/fengyuanchen/vue-feather.git"},"keywords":["icons","feather","feather-icons","vue","vue3","vue-component","front-end","web"],"author":"Chen Fengyuan (https://chenfengyuan.com/)","license":"MIT","bugs":"https://github.com/fengyuanchen/vue-feather/issues","homepage":"https://fengyuanchen.github.io/vue-feather","devDependencies":{"@babel/core":"^7.17.0","@babel/preset-env":"^7.16.11","@commitlint/cli":"^16.1.0","@commitlint/config-conventional":"^16.0.0","@types/feather-icons":"^4.7.0","@types/jest":"^27.4.0","@typescript-eslint/eslint-plugin":"^5.10.2","@typescript-eslint/parser":"^5.10.2","@vue/compiler-sfc":"^3.2.30","@vue/test-utils":"^2.0.0-rc.18","@vue/vue3-jest":"^27.0.0-alpha.4","babel-jest":"^27.5.0","babel-loader":"^8.2.3","change-case":"^4.1.2","codecov":"^3.8.3","conventional-changelog-cli":"^2.2.2","create-banner":"^2.0.0","css-loader":"^6.6.0","del-cli":"^4.0.1","eslint":"^8.8.0","eslint-config-airbnb-typescript":"^16.1.0","eslint-plugin-import":"^2.25.4","eslint-plugin-vue":"^8.4.1","feather-icons":"^4.28.0","html-webpack-plugin":"^5.5.0","husky":"^7.0.4","jest":"^27.5.0","lint-staged":"^12.3.3","markdown-to-vue-loader":"^3.1.3","mini-css-extract-plugin":"^2.5.3","move-file-cli":"^3.0.0","postcss":"^8.4.6","rollup":"^2.67.1","rollup-plugin-postcss":"^4.0.2","rollup-plugin-terser":"^7.0.2","rollup-plugin-typescript2":"^0.31.2","rollup-plugin-vue":"^6.0.0","sass":"^1.49.7","sass-loader":"^12.4.0","style-loader":"^3.3.1","stylelint":"^14.3.0","stylelint-config-recommended-scss":"^5.0.2","stylelint-config-recommended-vue":"^1.1.0","stylelint-order":"^5.0.0","ts-jest":"^27.1.3","ts-loader":"^9.2.6","tslib":"^2.3.1","typescript":"^4.5.5","vue":"^3.2.30","vue-loader":"^17.0.0","webpack":"^5.68.0","webpack-cli":"^4.9.2","webpack-dev-server":"^4.7.4"},"peerDependencies":{"feather-icons":"^4.28.0","vue":"^3.0.0"}}');const w={class:"component-readme"},V=(0,a.createElementVNode)("h1",null,"Feather",-1),N=(0,a.createElementVNode)("blockquote",null,[(0,a.createElementVNode)("p",null,[(0,a.createTextVNode)("Easy to use "),(0,a.createElementVNode)("a",{href:"https://feathericons.com/"},"Feather"),(0,a.createTextVNode)(" icons component.")])],-1),E=(0,a.createElementVNode)("h2",null,"Icons",-1),S=(0,a.createElementVNode)("pre",null,[(0,a.createElementVNode)("code",{class:"language-html"},'<template>\n  <p>\n    <input class="form-control" placeholder="Search icons..." @input="input" :value="keyword">\n  </p>\n  <ul class="icons">\n    <li v-for="icon in icons" :key="icon">\n      <vue-feather :type="icon"></vue-feather>\n      <span>{{ icon }}</span>\n    </li>\n  </ul>\n</template>\n\n<script>\nimport feather from \'feather-icons\';\n\nconst icons = Object.keys(feather.icons);\n\nexport default {\n  data() {\n    return {\n      icons,\n      keyword: \'\',\n    };\n  },\n\n  methods: {\n    input(event) {\n      clearTimeout(this.timeout);\n      this.timeout = setTimeout(() => {\n        this.filter(event.target.value);\n      }, 300);\n    },\n\n    filter(value) {\n      value = value.trim().toLowerCase();\n      this.icons = icons.filter(icon => icon.indexOf(value) !== -1);\n      this.keyword = value;\n    },\n  },\n};\n<\/script>\n\n<style scoped>\n.icons {\n  display: grid;\n  grid-gap: 0.5rem;\n  grid-template-columns: repeat(auto-fill, minmax(14rem, 1fr));\n  list-style: none;\n  margin: 0;\n  padding: 0;\n}\n\n.icons > li {\n  background-color: #f8f8f8;\n  padding: 0.5rem 1rem;\n  transition: color 0.15s;\n}\n\n.icons > li:hover {\n  color: #0074d9;\n}\n\n.icons > li > i {\n  vertical-align: middle;\n}\n\n.icons > li > span {\n  color: gray;\n  margin-left: 0.5rem;\n  transition: color 0.15s;\n}\n\n.icons > li:hover > span {\n  color: inherit;\n}\n</style>\n')],-1),j=(0,a.createElementVNode)("h2",null,"Colors",-1),x=(0,a.createElementVNode)("pre",null,[(0,a.createElementVNode)("code",{class:"language-html"},'<template>\n  <vue-feather type="star" stroke="red"></vue-feather>\n  <vue-feather type="star" stroke="green"></vue-feather>\n  <vue-feather type="star" stroke="blue"></vue-feather>\n  <vue-feather type="star" stroke="none" fill="red"></vue-feather>\n  <vue-feather type="star" stroke="none" fill="green"></vue-feather>\n  <vue-feather type="star" stroke="none" fill="blue"></vue-feather>\n  <vue-feather type="star" stroke="red" fill="red"></vue-feather>\n  <vue-feather type="star" stroke="green" fill="green"></vue-feather>\n  <vue-feather type="star" stroke="blue" fill="blue"></vue-feather>\n</template>\n')],-1),C=(0,a.createElementVNode)("h2",null,"Sizes",-1),T=(0,a.createElementVNode)("pre",null,[(0,a.createElementVNode)("code",{class:"language-html"},'<template>\n  <vue-feather type="star"></vue-feather>\n  <vue-feather type="star" size="36"></vue-feather>\n  <vue-feather type="star" size="48"></vue-feather>\n  <vue-feather type="star" size="36px"></vue-feather>\n  <vue-feather type="star" size="1.5rem"></vue-feather>\n</template>\n')],-1),z=(0,a.createElementVNode)("h2",null,"Weights",-1),L=(0,a.createElementVNode)("pre",null,[(0,a.createElementVNode)("code",{class:"language-html"},'<template>\n  <vue-feather type="star" stroke-width="1"></vue-feather>\n  <vue-feather type="star"></vue-feather>\n  <vue-feather type="star" stroke-width="3"></vue-feather>\n</template>\n')],-1),O=(0,a.createElementVNode)("h2",null,"Animated Icons",-1),A=(0,a.createStaticVNode)('<pre><code class="language-html">&lt;template&gt;\n  &lt;p&gt;\n    &lt;span&gt;Slow:&lt;/span&gt;\n    &lt;vue-feather type=&quot;loader&quot; animation=&quot;spin&quot; animation-speed=&quot;slow&quot;&gt;&lt;/vue-feather&gt;\n    &lt;vue-feather type=&quot;settings&quot; animation=&quot;spin&quot; animation-speed=&quot;slow&quot;&gt;&lt;/vue-feather&gt;\n    &lt;vue-feather type=&quot;sun&quot; animation=&quot;spin&quot; animation-speed=&quot;slow&quot;&gt;&lt;/vue-feather&gt;\n    &lt;vue-feather type=&quot;rotate-cw&quot; animation=&quot;spin&quot; animation-speed=&quot;slow&quot;&gt;&lt;/vue-feather&gt;\n    &lt;vue-feather type=&quot;rotate-cw&quot; animation=&quot;pulse&quot; animation-speed=&quot;slow&quot;&gt;&lt;/vue-feather&gt;\n  &lt;/p&gt;\n  &lt;p&gt;\n    &lt;span&gt;Normal:&lt;/span&gt;\n    &lt;vue-feather type=&quot;loader&quot; animation=&quot;spin&quot;&gt;&lt;/vue-feather&gt;\n    &lt;vue-feather type=&quot;settings&quot; animation=&quot;spin&quot;&gt;&lt;/vue-feather&gt;\n    &lt;vue-feather type=&quot;sun&quot; animation=&quot;spin&quot;&gt;&lt;/vue-feather&gt;\n    &lt;vue-feather type=&quot;rotate-cw&quot; animation=&quot;spin&quot;&gt;&lt;/vue-feather&gt;\n    &lt;vue-feather type=&quot;rotate-cw&quot; animation=&quot;pulse&quot;&gt;&lt;/vue-feather&gt;\n  &lt;/p&gt;\n  &lt;p&gt;\n    &lt;span&gt;Fast:&lt;/span&gt;\n    &lt;vue-feather type=&quot;loader&quot; animation=&quot;spin&quot; animation-speed=&quot;fast&quot;&gt;&lt;/vue-feather&gt;\n    &lt;vue-feather type=&quot;settings&quot; animation=&quot;spin&quot; animation-speed=&quot;fast&quot;&gt;&lt;/vue-feather&gt;\n    &lt;vue-feather type=&quot;sun&quot; animation=&quot;spin&quot; animation-speed=&quot;fast&quot;&gt;&lt;/vue-feather&gt;\n    &lt;vue-feather type=&quot;rotate-cw&quot; animation=&quot;spin&quot; animation-speed=&quot;fast&quot;&gt;&lt;/vue-feather&gt;\n    &lt;vue-feather type=&quot;rotate-cw&quot; animation=&quot;pulse&quot; animation-speed=&quot;fast&quot;&gt;&lt;/vue-feather&gt;\n  &lt;/p&gt;\n&lt;/template&gt;\n\n&lt;style scoped&gt;\np {\n  align-items: center;\n  display: flex;\n  margin-bottom: 0.5rem;\n}\n\np:last-child {\n  margin-bottom: 0;\n}\n\np &gt; span {\n  margin-right: 0.5rem;\n  text-align: right;\n  width: 4rem;\n}\n\np &gt; i {\n  margin-right: 0.5rem;\n}\n&lt;/style&gt;\n</code></pre><h2>Props</h2><div class="table-responsive"><table class="table"><thead><tr><th>Name</th><th>Type</th><th>Default</th><th>Options</th><th>Description</th></tr></thead><tbody><tr><td>animation</td><td><code>string</code></td><td>-</td><td>spin, pulse</td><td>The animation type of the icon.</td></tr><tr><td>animation-speed</td><td><code>string</code></td><td>-</td><td>slow, fast</td><td>The animation speed of the icon.</td></tr><tr><td>fill</td><td><code>string</code></td><td><code>&quot;none&quot;</code></td><td>-</td><td>The fill color of the icon (<a href="https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/fill">spec</a>).</td></tr><tr><td>size</td><td><code>number | string</code></td><td><code>24</code></td><td>-</td><td>The size of the icon. Set both width and height of the icon.</td></tr><tr><td>stroke</td><td><code>string</code></td><td><code>&quot;currentColor&quot;</code></td><td>-</td><td>The stroke color of the icon (<a href="https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/stroke">spec</a>).</td></tr><tr><td>stroke-linecap</td><td><code>string</code></td><td><code>&quot;round&quot;</code></td><td>butt, round, square</td><td>Specifies the shape to be used at the end of open subpaths when they are stroked (<a href="https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/stroke-linecap">spec</a>).</td></tr><tr><td>stroke-linejoin</td><td><code>string</code></td><td><code>&quot;round&quot;</code></td><td>miter, round, bevel</td><td>Specifies the shape to be used at the corners of paths or basic shapes when they are stroked (<a href="https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/stroke-linejoin">spec</a>).</td></tr><tr><td>stroke-width</td><td><code>number | string</code></td><td><code>2</code></td><td>-</td><td>The stroke width of the icon (<a href="https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/stroke-width">spec</a>).</td></tr><tr><td>tag</td><td><code>string</code></td><td><code>&quot;i&quot;</code></td><td>-</td><td>The tag of the icon.</td></tr><tr><td>type</td><td><code>string</code></td><td><code>&quot;feather&quot;</code></td><td>All <a href="https://feathericons.com/">Feather</a>’s icons.</td><td>The type of the icon.</td></tr></tbody></table></div>',3);var B,G={components:{"component-readme-0":(B=function(){var e=n(923);const t=Object.keys(e.icons);return{data:()=>({icons:t,keyword:""}),methods:{input(e){clearTimeout(this.timeout),this.timeout=setTimeout((()=>{this.filter(e.target.value)}),300)},filter(e){e=e.trim().toLowerCase(),this.icons=t.filter((t=>-1!==t.indexOf(e))),this.keyword=e}}}}(),"function"==typeof B&&(B=B()),"object"!=typeof B&&(B={}),Object.assign(B,{name:"component-readme-0",template:'<div class="component-readme-0">\n  <p>\n    <input class="form-control" placeholder="Search icons..." @input="input" :value="keyword">\n  </p>\n  <ul class="icons">\n    <li v-for="icon in icons" :key="icon">\n      <vue-feather :type="icon"></vue-feather>\n      <span>{{ icon }}</span>\n    </li>\n  </ul>\n</div>',beforeCreate:function(){var e=document.createElement("style");e.textContent="\n.component-readme-0 .icons {\n  display: grid;\n  grid-gap: 0.5rem;\n  grid-template-columns: repeat(auto-fill, minmax(14rem, 1fr));\n  list-style: none;\n  margin: 0;\n  padding: 0;\n}\n\n.component-readme-0 .icons > li {\n  background-color: #f8f8f8;\n  padding: 0.5rem 1rem;\n  transition: color 0.15s;\n}\n\n.component-readme-0 .icons > li:hover {\n  color: #0074d9;\n}\n\n.component-readme-0 .icons > li > i {\n  vertical-align: middle;\n}\n\n.component-readme-0 .icons > li > span {\n  color: gray;\n  margin-left: 0.5rem;\n  transition: color 0.15s;\n}\n\n.component-readme-0 .icons > li:hover > span {\n  color: inherit;\n}\n",document.head.appendChild(e),this.$styleInjectedByMarkdownToVueLoader=e},beforeUnmount:function(){var e=this.$styleInjectedByMarkdownToVueLoader;e.parentNode.removeChild(e)}})),"component-readme-1":function(){var e={};return"function"==typeof e&&(e=e()),"object"!=typeof e&&(e={}),Object.assign(e,{name:"component-readme-1",template:'<div class="component-readme-1">\n  <vue-feather type="star" stroke="red"></vue-feather>\n  <vue-feather type="star" stroke="green"></vue-feather>\n  <vue-feather type="star" stroke="blue"></vue-feather>\n  <vue-feather type="star" stroke="none" fill="red"></vue-feather>\n  <vue-feather type="star" stroke="none" fill="green"></vue-feather>\n  <vue-feather type="star" stroke="none" fill="blue"></vue-feather>\n  <vue-feather type="star" stroke="red" fill="red"></vue-feather>\n  <vue-feather type="star" stroke="green" fill="green"></vue-feather>\n  <vue-feather type="star" stroke="blue" fill="blue"></vue-feather>\n</div>'})}(),"component-readme-2":function(){var e={};return"function"==typeof e&&(e=e()),"object"!=typeof e&&(e={}),Object.assign(e,{name:"component-readme-2",template:'<div class="component-readme-2">\n  <vue-feather type="star"></vue-feather>\n  <vue-feather type="star" size="36"></vue-feather>\n  <vue-feather type="star" size="48"></vue-feather>\n  <vue-feather type="star" size="36px"></vue-feather>\n  <vue-feather type="star" size="1.5rem"></vue-feather>\n</div>'})}(),"component-readme-3":function(){var e={};return"function"==typeof e&&(e=e()),"object"!=typeof e&&(e={}),Object.assign(e,{name:"component-readme-3",template:'<div class="component-readme-3">\n  <vue-feather type="star" stroke-width="1"></vue-feather>\n  <vue-feather type="star"></vue-feather>\n  <vue-feather type="star" stroke-width="3"></vue-feather>\n</div>'})}(),"component-readme-4":function(){var e={};return"function"==typeof e&&(e=e()),"object"!=typeof e&&(e={}),Object.assign(e,{name:"component-readme-4",template:'<div class="component-readme-4">\n  <p>\n    <span>Slow:</span>\n    <vue-feather type="loader" animation="spin" animation-speed="slow"></vue-feather>\n    <vue-feather type="settings" animation="spin" animation-speed="slow"></vue-feather>\n    <vue-feather type="sun" animation="spin" animation-speed="slow"></vue-feather>\n    <vue-feather type="rotate-cw" animation="spin" animation-speed="slow"></vue-feather>\n    <vue-feather type="rotate-cw" animation="pulse" animation-speed="slow"></vue-feather>\n  </p>\n  <p>\n    <span>Normal:</span>\n    <vue-feather type="loader" animation="spin"></vue-feather>\n    <vue-feather type="settings" animation="spin"></vue-feather>\n    <vue-feather type="sun" animation="spin"></vue-feather>\n    <vue-feather type="rotate-cw" animation="spin"></vue-feather>\n    <vue-feather type="rotate-cw" animation="pulse"></vue-feather>\n  </p>\n  <p>\n    <span>Fast:</span>\n    <vue-feather type="loader" animation="spin" animation-speed="fast"></vue-feather>\n    <vue-feather type="settings" animation="spin" animation-speed="fast"></vue-feather>\n    <vue-feather type="sun" animation="spin" animation-speed="fast"></vue-feather>\n    <vue-feather type="rotate-cw" animation="spin" animation-speed="fast"></vue-feather>\n    <vue-feather type="rotate-cw" animation="pulse" animation-speed="fast"></vue-feather>\n  </p>\n</div>',beforeCreate:function(){var e=document.createElement("style");e.textContent="\n.component-readme-4 p {\n  align-items: center;\n  display: flex;\n  margin-bottom: 0.5rem;\n}\n\n.component-readme-4 p:last-child {\n  margin-bottom: 0;\n}\n\n.component-readme-4 p > span {\n  margin-right: 0.5rem;\n  text-align: right;\n  width: 4rem;\n}\n\n.component-readme-4 p > i {\n  margin-right: 0.5rem;\n}\n",document.head.appendChild(e),this.$styleInjectedByMarkdownToVueLoader=e},beforeUnmount:function(){var e=this.$styleInjectedByMarkdownToVueLoader;e.parentNode.removeChild(e)}})}()}},F=n(21),$=(0,F.Z)(G,[["render",function(e,t,n,o,r,i){const s=(0,a.resolveComponent)("component-readme-0"),l=(0,a.resolveComponent)("demo-block"),c=(0,a.resolveComponent)("component-readme-1"),d=(0,a.resolveComponent)("component-readme-2"),u=(0,a.resolveComponent)("component-readme-3"),p=(0,a.resolveComponent)("component-readme-4");return(0,a.openBlock)(),(0,a.createElementBlock)("div",w,[V,N,E,(0,a.createVNode)(l,null,{default:(0,a.withCtx)((()=>[(0,a.createVNode)(s)])),_:1}),S,j,(0,a.createVNode)(l,null,{default:(0,a.withCtx)((()=>[(0,a.createVNode)(c)])),_:1}),x,C,(0,a.createVNode)(l,null,{default:(0,a.withCtx)((()=>[(0,a.createVNode)(d)])),_:1}),T,z,(0,a.createVNode)(l,null,{default:(0,a.withCtx)((()=>[(0,a.createVNode)(u)])),_:1}),L,O,(0,a.createVNode)(l,null,{default:(0,a.withCtx)((()=>[(0,a.createVNode)(p)])),_:1}),A])}]]),_=(0,a.defineComponent)({components:{Readme:$},data:()=>k,mounted(){const e=document.createElement("script");e.async=!0,e.id="_carbonads_js",e.src="//cdn.carbonads.com/carbon.js?serve=CKYI55Q7&placement=fengyuanchengithubio",this.$refs.carbonads.appendChild(e)}}),D=(0,F.Z)(_,[["render",function(e,t,n,k,w,V){const N=(0,a.resolveComponent)("readme");return(0,a.openBlock)(),(0,a.createElementBlock)("div",o,[(0,a.createElementVNode)("header",r,[(0,a.createElementVNode)("nav",i,[(0,a.createElementVNode)("a",s,(0,a.toDisplayString)(e.name),1),l,c])]),(0,a.createElementVNode)("main",null,[(0,a.createElementVNode)("div",d,[(0,a.createElementVNode)("div",u,[(0,a.createElementVNode)("div",p,[(0,a.createElementVNode)("div",h,[(0,a.createElementVNode)("h1",null,[(0,a.createTextVNode)((0,a.toDisplayString)(e.name)+" ",1),(0,a.createElementVNode)("small",m," v"+(0,a.toDisplayString)(e.version),1)]),(0,a.createElementVNode)("p",f,(0,a.toDisplayString)(e.description),1)]),(0,a.createElementVNode)("div",v,[(0,a.createElementVNode)("div",g,null,512)])])])]),(0,a.createElementVNode)("div",y,[(0,a.createElementVNode)("div",b,[(0,a.createVNode)(N)])])]),q])}]]);const I={class:"demo-block"};var W=(0,a.defineComponent)({name:"DemoBlock"}),U=(0,F.Z)(W,[["render",function(e,t,n,o,r,i){return(0,a.openBlock)(),(0,a.createElementBlock)("div",I,[(0,a.renderSlot)(e.$slots,"default")])}]]),H=n(923),M=(0,a.defineComponent)({name:"VueFeather",props:{animation:{type:String,default:void 0},animationSpeed:{type:String,default:void 0},fill:{type:String,default:"none"},size:{type:[Number,String],default:24},stroke:{type:String,default:"currentColor"},strokeLinecap:{type:String,default:"round"},strokeLinejoin:{type:String,default:"round"},strokeWidth:{type:[Number,String],default:2},tag:{type:String,default:"i"},type:{type:String,default:"feather",validator(e){if(!H)throw new Error("The Feather icons is required.");if(!H.icons[e])throw new Error(`"${e}" is not an available icon type.`);return!0}}},computed:{isRemSize(){return"string"==typeof this.size&&this.size.endsWith("rem")}},render(){const{animation:e,animationSpeed:t,isRemSize:n,size:o,type:r}=this,i=H.icons[r];return(0,a.h)(this.tag,{...this.$attrs,"data-name":r,"data-tags":i.tags,"data-type":r,class:{"vue-feather":!0,[`vue-feather--${r}`]:r,[`vue-feather--${e}`]:e,[`vue-feather--${t}`]:t},style:n?{height:o,width:o}:void 0},[(0,a.h)("svg",{...i.attrs,fill:this.fill,height:n?void 0:o,stroke:this.stroke,"stroke-linecap":this.strokeLinecap,"stroke-linejoin":this.strokeLinejoin,"stroke-width":this.strokeWidth,width:n?void 0:o,class:[i.attrs.class,"vue-feather__content"],innerHTML:i.contents})])}});const Z=(0,a.createApp)(D);Z.component(U.name,U),Z.component(M.name,M),Z.mount("#app")},923:function(e){e.exports=feather}},t={};!function n(a){var o=t[a];if(void 0!==o)return o.exports;var r=t[a]={exports:{}};return e[a](r,r.exports,n),r.exports}(235)}();