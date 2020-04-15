export default {
  props: {
    type: {
      type: String,
      default: 'boring'
    },
    active: {
      type: Boolean,
      default: false
    },
    color: {
      type: String,
      default: '#000000'
    },
    activeColor: {
      type: String,
      default: null
    },
    size: {
      type: String,
      validator: function (value) {
        return ['xs', 's', 'm', 'l', 'xl'].indexOf(value) !== -1
      },
      default: 'm'
    },
    reversed: {
      type: Boolean,
      default: () => false
    }
  }
}
