<!--
 * @Description: Stay hungry，Stay foolish
 * @Author: Huccct
 * @Date: 2023-02-07 16:44:39
 * @LastEditors: YuShu Xiao
 * @LastEditTime: 2023-02-12 22:21:39
-->

<script lang="ts">
import { h, RendererElement, RendererNode, VNode, VNodeArrayChildren } from 'vue'
import '../style/';
export default {
  name: 'TassBreadcrumb',
  props:{
    'separator-icon':{
      type:String,
      default:()=>'chevronright'
    }
  },
  render (props: { separatorIcon: string }) {
    const items = (this.$slots as any).default()
    const dymanicItems:  VNode<RendererNode, RendererElement, { [key: string]: any; }> | VNodeArrayChildren | (() => any) = []
    items.forEach((item:  VNodeArrayChildren | VNode<RendererNode, RendererElement, { [key: string]: any; }>, i:number) => {
      dymanicItems.push(item)
      if (i < (items.length - 1)) {
        dymanicItems.push(h('i', { class: `tas-icon-${props.separatorIcon}` }))
      }
    })
    return h('div', { class: 'tas-bread' }, dymanicItems)
  }
}
</script>
