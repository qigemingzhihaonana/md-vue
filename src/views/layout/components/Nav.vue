<template>
  <!--一级导航-->
  <div class="navbar">
    <el-menu
      router
      default-active="0"
      mode="horizontal"
      background-color="#0e80f1"
      text-color="white"
      active-text-color="antiquewhite">
      <nav-menu :navMenus="menuData"></nav-menu>
    </el-menu>
  </div>
</template>


<script>
  import { mapGetters } from 'vuex';
  import NavMenu from './NavMenu';
  export default {
    data () {
      return {
        
      }
    },
    components: { NavMenu },
    computed: {
      ...mapGetters([
        'menuData'
      ]),
    }
  }
</script>
<style rel="stylesheet/scss" lang="scss" scoped>

</style>