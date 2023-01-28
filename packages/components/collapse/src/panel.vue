<template>
  <div :class="itemClasses">
    <div :class="headerClasses" @click="toggle">
      <Icon type="icon-right" v-if="!hideArrow"></Icon>
      <slot></slot>
    </div>
    <div :class="contentClass" v-show="isActive">
      <div :class="boxClasses">
        <slot name="content"></slot>
      </div>
    </div>
  </div>
</template>

<script>
const prefixCls = "ka-collapse";
export default {
  name: "panel",
  data() {
    return {
      index: 0,
      isActive: false
    };
  },
  props: {
    name: {
      type: String
    },
    hideArrow: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    itemClasses() {
      return [
        `${prefixCls}-item`,
        {
          [`${prefixCls}-item-active`]: this.isActive
        }
      ];
    },
    // 定义header样式
    headerClasses() {
      return `${prefixCls}-header`;
    },
    contentClass() {
      return `${prefixCls}-content`;
    },
    boxClasses() {
      return `${prefixCls}-content-box`;
    }
  },
  methods: {
    toggle() {
      // console.log(this);
      this.$parent.toggle({
        name: this.name || this.index,
        isActive: this.isActive
      });
    }
  }
};
</script>

<style lang="scss" scoped>
.ka-collapse-header {
  color: red;
}
</style>