<template>
  <div class="menu-box">
    <div class="menu-logo">
      <img src="@/assets/images/toutiao_logo.png" alt="" />
    </div>
    <el-menu
      :default-active="$route.path"
      class="el-menu-vertical-demo"
      background-color="#002033"
      text-color="#fff"
      active-text-color="#ffd04b"
      router
    >
      <el-menu-item index="/main/home">
        <i class="el-icon-menu"></i>
        <span slot="title">首页</span>
      </el-menu-item>
      <el-menu-item index="/main/article">
        <i class="el-icon-menu"></i>
        <span slot="title">内容管理</span>
      </el-menu-item>
      <el-menu-item index="/main/image">
        <i class="el-icon-menu"></i>
        <span slot="title">素材管理</span>
      </el-menu-item>
      <el-menu-item index="/main/publish">
        <i class="el-icon-menu"></i>
        <span slot="title">发布文章</span>
      </el-menu-item>
      <el-menu-item index="/main/comment">
        <i class="el-icon-menu"></i>
        <span slot="title">评论管理</span>
      </el-menu-item>
      <el-menu-item index="/main/fans">
        <i class="el-icon-document"></i>
        <span slot="title">粉丝管理</span>
      </el-menu-item>
      <el-menu-item index="/main/settings">
        <i class="el-icon-setting"></i>
        <span slot="title">个人设置</span>
      </el-menu-item>
    </el-menu>
  </div>
</template>

<script>
export default {
  name: 'Menu',
  methods: {},
}
</script>

<style lang="less" scoped>
.menu-box {
  height: 100%;
  .el-menu {
    height: 90%;
  }
  .menu-logo {
    width: 100%;
    height: 10%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #002033;
    img {
      width: 80%;
    }
  }
}
</style>
