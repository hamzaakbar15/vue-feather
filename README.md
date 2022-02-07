# vue-feather

> [Feather](https://feathericons.com/) component for [Vue 2](https://v2.vuejs.org/).

- [Docs](src/README.md)
- [Demo](https://fengyuanchen.github.io/vue-feather)
- [Leia esta página em português](https://github.com/fengyuanchen/vue-feather/blob/master/README-pt.md)

## Main files

```text
dist/
├── vue-feather.js        (UMD)
├── vue-feather.min.js    (UMD, compressed)
├── vue-feather.common.js (CommonJS, default)
└── vue-feather.esm.js    (ES Module)
```

## Getting started

### Installation

```shell
npm install vue@2 feather-icons@4 vue-feather@1
```

In browser:

```html
<script src="/path/to/vue.js"></script><!-- Vue.js is required -->
<script src="/path/to/feather.js"></script><!-- Feather is required -->
<script src="/path/to/vue-feather.js"></script><!-- Register automatically once loaded -->
```

### Usage

```js
import Vue from 'vue';
import VueFeather from 'vue-feather';

Vue.use(VueFeather);
// Or
Vue.component(VueFeather.name, VueFeather);
// Or
Vue.component('vue-feather', VueFeather);
```

```html
<feather type="feather"></feather>
```

## Browser support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Opera (latest)
- Edge (latest)
- Internet Explorer 9+

## License

[MIT](https://opensource.org/licenses/MIT) © [Chen Fengyuan](https://chenfengyuan.com/)
