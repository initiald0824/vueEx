<template>
  <div class="layout-wrapper">
    <Layout class="layout-outer">
      <Sider collapsible hide-trigger v-model="collapsed"></Sider>
      <Layout>
        <Header class="header-wrapper">
          <Icon :class="triggerClass" @click.native="handleCollapsed" type="md-menu" :size="32" />
        </Header>
        <Content class="content-con">
          <Card shadow class="page-card">
            <router-view />
          </Card>
        </Content>
      </Layout>
    </Layout>
  </div>
</template>

<script>
export default {
  name: 'layout',
  data () {
    return {
      collapsed: false
    }
  },
  methods: {
    handleCollapsed () {
      this.collapsed = !this.collapsed
    }
  },
  computed: {
    triggerClass () {
      return [
        'trigger-icon',
        this.collapsed ? 'trigger-icon-rotate' : ''
      ]
    }
  }
}
</script>

<style lang="less">
.layout-wrapper, .layout-outer {
  height: 100%;
  .header-wrapper {
    background: #fff;
    box-shadow: 0 1px 1px 1px rgba(0, 0, 0, .1);
    padding: 0 23px;
    .trigger-icon {
      cursor: pointer;
      transition: transform .3s ease;
      &-rotate {
        transform: rotateZ(-90deg);
        transition: transform .3s ease;
      }
    }
  }
  .content-con {
    padding: 10px;
  }
  .page-card {
    min-height: ~"calc(100vh - 84px)"
  }
}

</style>
