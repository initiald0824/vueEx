<template>
  <a-submenu>
    <div slot="title">{{parent.title}}</div>
    <template v-for="item in parent.children">
      <a-menu-item v-if="!item.children" :key="item.title">{{item.title}}</a-menu-item>
      <re-submenu v-else :key="item.title" :parent="item"></re-submenu>
    </template>
  </a-submenu>
</template>

<script>
import menuComponents from '_c/menu'
const { AMenuItem, ASubmenu } = menuComponents

export default {
  name: 're-submenu',
  components: {
    ASubmenu,
    AMenuItem
  },
  props: {
    parent: {
      type: Object,
      default: () => ({})
    }
  }
}
</script>

<style scoped>

</style>
