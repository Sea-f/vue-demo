<template>
  <div id="app">
    <header>
      <el-menu
        class="el-menu-demo"
        @select="handleSelect"
        :default-active="activeIndex"
        mode="horizontal"
        router
      >
        <el-menu-item :index="item.path" v-for="item in menu" :key="item.name" @click="goto(item)">
          <i :class="item.icon"></i>
          {{item.text}}
        </el-menu-item>
          <aside :span="6" style="text-align:right;line-height:60px;float:right;">
        <!-- <el-button-group> -->
          <el-button type="text" @click="goto('/Reg')">注册</el-button>
          <el-button type="text" @click="goto('/Login')">登录</el-button>
        <!-- </el-button-group> -->
          </aside>
      </el-menu>
    </header>

    <main>
      <router-view />
    </main>
    <footer></footer>
   
  </div>
</template>


<script>
export default {
  name: "app",
  data() {
    return {
      /* activeIndex: "/home", */
      menu: [
        {
          name: "home",
          path: "/",
          text: "首页"
        },
        {
          name: "list",
          path: "/list",
          text: "推荐好货"
        },
        {
          name: "goods",
          path: "/goods",
          text: "商品列表"
        },
        {
          name: "cart",
          path: "/cart",
          text: "购物车"
        }
      ],

      activeIndex2: "1"
    };
  },
  components: {},
  created() {
    this.activeIndex = this.$route.path;
  },
  methods: {
    goto(item) {
      this.$router.push(item);
    },
    handleSelect(key, keyPath) {
      window.console.log(key, keyPath);
    },
    handleClose(done) {
            done();
      }
  }
};
</script>

<style>
#app {
/*   width: 1200px; */
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  margin: 0 auto
}
#user{
  position: absolute;
  right: 0px;
}
</style>