<template>
  <el-container class="main-container">
    <!-- 侧边导航栏 -->
    <el-aside width="200px">
      <Menu></Menu>
    </el-aside>
    <el-container>
      <!-- 顶部导航栏 -->
      <el-header>Header</el-header>
      <el-main>
        <!-- 中间内容 -->
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import Menu from '@/components/menu.vue'
export default {
  name: 'Main',
  data() {
    return {}
  },
  components: {
    Menu,
  },
}
</script>

<style lang="less" scoped>
.main-container {
  height: 100%;
}
.el-header {
  background-color: #b3c0d1;
  color: #333;
}

.el-aside {
  background-color: #d3dce6;
  color: #333;
}

.el-main {
  background-color: #e9eef3;
  color: #333;
}
</style>
