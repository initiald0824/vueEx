<template>
  <div class="menu-box">
    <a-menu>
      <template v-for="item in list">
        <a-menu-item v-if="!item.children" :key="item.title">{{ item.title }}</a-menu-item>
        <re-submenu v-else :key="item.title" :parent="item"></re-submenu>
      </template>
    </a-menu>
  </div>
</template>

<script>
import menuComponents from '_c/menu'
import reSubmenu from './re-submenu.vue'
const { AMenu, AMenuItem } = menuComponents
export default {
  name: 'menu-page-view',
  components: {
    AMenu,
    AMenuItem,
    reSubmenu
  },
  data () {
    return {
      list: [
        {
          title: '111'
        },
        {
          title: '222'
        },
        {
          title: '333',
          children: [
            {
              title: '333-1'
            },
            {
              title: '333-2',
              children: [
                {
                  title: '333-2-1'
                },
                {
                  title: '333-2-2'
                }
              ]
            }
          ]
        }
      ]
    }
  }
}
</script>

<style scoped>
.menu-box {
  width: 300px;
  height: 400px;
}
</style>
