var OPTIONS = {
  useImgSend: false,
  selector: 'input,textArea',
}
Vue.use(VueDataAc, OPTIONS)
/**
 * 默认实例
 * */
var app = new Vue({
  el: '#app',
  data: {
    inputValue: '',
    inputPassword: '',
    desc: '',
    phone: 'apple',
  },
  computed: {},
  watch: {},
  methods: {},
  components: {},
  created: function(){
  },
  mounted: function(){},
})