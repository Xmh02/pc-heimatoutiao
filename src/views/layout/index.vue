<template>
  <el-container class="main-container">
    <!-- 侧边导航栏 -->
    <el-aside width="auto">
      <Menu :iscollapse="isCollapse"></Menu>
    </el-aside>
    <el-container>
      <!-- 顶部导航栏 -->
      <el-header>
        <div>
          <i
            :class="isCollapse ? 'el-icon-s-fold' : 'el-icon-s-unfold'"
            @click="isCollapse = !isCollapse"
          ></i>
          <span>江苏传智播客科技教育有限公司</span>
        </div>
        <div>
          <!-- 下拉菜单 -->
          <el-dropdown>
            <div class="el-dropdown-link">
              <!-- 用户头像 -->
              <!-- <img :src="user.photo" alt="" class="user-avatar" /> -->
              <el-image
                class="user-avatar"
                :src="user.photo ? user.photo : ''"
                fit="cover"
              >
                <!-- 加载失败展示的图片 -->
                <div slot="error" class="image-slot">
                  <img src="@/assets/images/404.jpg" alt="" />
                </div>
              </el-image>
              <span>
                {{ user.name }}<i class="el-icon-arrow-down el-icon--right"></i>
              </span>
            </div>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item icon="el-icon-setting"
                >个人设置</el-dropdown-item
              >
              <el-dropdown-item icon="el-icon-switch-button"
                >退出登录</el-dropdown-item
              >
            </el-dropdown-menu>
          </el-dropdown>
        </div>
      </el-header>
      <el-main>
        <!-- 中间内容 -->
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import Menu from '@/components/menu.vue'
import { getUserData } from '@/api/user/index.js'
export default {
  name: 'Main',
  data() {
    return {
      //用户信息
      user: {},
      //侧边栏是否展开 false展开 true收缩
      isCollapse: false,
    }
  },
  created() {
    this.getUserdata()
  },
  methods: {
    //获取用户信息
    async getUserdata() {
      const { data: res } = await getUserData()
      this.user = res.data
    },
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
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #ccc;
}

.el-main {
  background-color: #e9eef3;
  color: #333;
}
.el-dropdown-link {
  display: flex;
  align-items: center;
  cursor: pointer;
  .user-avatar {
    width: 50px;
    height: 50px;
    margin-right: 10px;
  }
}
.el-icon-arrow-down {
  font-size: 12px;
}
</style>

<style lang="less">
.image-slot {
  width: 100%;
  height: 100%;
  img {
    width: 100%;
    height: 100%;
  }
}
</style>
