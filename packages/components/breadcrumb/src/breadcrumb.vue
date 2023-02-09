<!--
 * @Description: Stay hungry，Stay foolish
 * @Author: Huccct
 * @Date: 2023-02-07 16:44:39
 * @LastEditors: YuShu Xiao
 * @LastEditTime: 2023-02-09 15:49:27
-->

<script>
import { h } from 'vue'
  import '../style/';
export default {
  name: 'TassBreadcrumb',
  props:{
    'separator-icon':{
      type:String,
      default:()=>'chevronright'
    }
  },
  render (props) {
    const items = this.$slots.default()
    const dymanicItems = []
    items.forEach((item, i) => {
      dymanicItems.push(item)
      if (i < (items.length - 1)) {
        dymanicItems.push(h('i', { class: `tas-icon-${props.separatorIcon}` }))
      }
    })
    return h('div', { class: 'tas-bread' }, dymanicItems)
  }
}
</script>
