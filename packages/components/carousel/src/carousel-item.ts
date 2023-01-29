/*
 * @Author: 申恒杰
 * @Date: 2023-01-29 16:44:59
 * @Description: 铁沸物
 * @FilePath: \echo-ui\packages\components\carousel\src\carousel-item.ts
 */
import type { ExtractPropTypes } from 'vue'

export const carouselItemProps = {
  name: { type: String, default: '' },
  label: {
    type: [String, Number],
    default: '',
  },
}

export type CarouselItemProps = ExtractPropTypes<typeof carouselItemProps>
