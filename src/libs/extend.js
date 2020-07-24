const Extend = {}

Extend.install = (Vue, options) => {
  // 判断数据类型
  Vue.prototype.$type = (value) => {
    return Object.prototype.toString.call(value).match(/\[object (.*?)\]/)[1].toLowerCase()
  }
  ['Null', 'Undefined', 'Object', 'Array', 'String', 'Number', 'Boolean', 'Function', 'RegExp'].forEach(function (t) {
    Vue.prototype.$type['is' + t] = function (o) {
      return Vue.prototype.$type(o) === t.toLowerCase()
    }
  })
}

export default Extend
