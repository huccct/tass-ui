<template>
  <div :class="classes">
    <slot></slot>
  </div>
</template>

<script>
const prefixCls = "ka-collapse";
export default {
  name: "collapse",
  props: {
    // 是否是手风琴模式
    accordion: {
      type: Boolean,
      default: false
    },
    // 传递进来的值
    value: [Array, String]
  },
  computed: {
    classes() {
      // `${prefixCls-simple}` 是变量需要添加[]
      return [`${prefixCls}`];
    }
  },
  data() {
    return {
      currentValue: this.value // 传递进来当前的值
    };
  },
  mounted() {
    this.setActive();
  },
  methods: {
    setActive() {
      // 为它下面的子元素都设置一个index值
      // console.log("setActive");
      const activeKey = this.getActiveKey();
      this.$children.forEach((child, index) => {
        const name = child.name || index.toString(); // toString 1=>"1"整数转换成为字符串
        child.isActive = activeKey.indexOf(name) > -1; // 给选中的元素赋值活跃状态
        // console.log(child);
        child.index = index;
      });
    },
    toggle(data) {
      // console.log("toggle");
      const name = data.name.toString(); // 强行转换成为字符串
      let newActivekey = [];
      if (this.accordion) {
        // 如果是手风琴模式
        if (!data.isActive) {
          newActivekey.push(name);
        }
      } else {
        let activeKey = this.getActiveKey();
        const nameIndex = activeKey.indexOf(name);
        if (data.isActive) {
          // 如果当前是展开状态
          if (nameIndex > -1) {
            activeKey.splice(nameIndex, 1);
          }
        } else {
          if (nameIndex < 0) {
            activeKey.push(name);
          }
        }
        newActivekey = activeKey;
      }
      this.currentValue = newActivekey;
      // console.log(data);
      this.$emit("input", newActivekey);
      this.$emit("on-change", newActivekey);
    },
    getActiveKey() {
      // 获取当前展开的元素，并且做成数组的形式 1 => ["1"]
      let activeKey = this.currentValue || [];
      const accordion = this.accordion;
      if (!Array.isArray(activeKey)) {
        // 判断 activeKey 是不是数组
        activeKey = [activeKey]; // 不是数组则让它变成数组
      }
      if (accordion && activeKey.length > 1) {
        // 如果是手风琴模式，必定是只会有一个元素
        activeKey = [activeKey[0]];
      }

      for (let i = 0; i < activeKey.length; i++) {
        activeKey[i] = activeKey[i].toString();
      }
      return activeKey;
    }
  },
  watch: {
    value(val) {
      console.log(val);
      this.currentValue = val;
    },
    currentValue() {
      console.log("currentValue");
      this.setActive();
    }
  }
};
</script>

<style lang="scss" scoped>
// border-top: 1px solid #dcdee2;
</style>
