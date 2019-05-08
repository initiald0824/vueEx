<template>
  <li class="a-menu-item"><slot></slot></li>
</template>

<script>
export default {
  name: 'a-menu-item'
}
</script>

<style scoped lang="less">
.a-menu-item {
  color: #fff;
  background: rgb(210, 210, 210);
}
</style>
