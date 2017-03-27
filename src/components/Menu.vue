<template>
<div class="py-menu">
    <div class="col-md-12 column">
          <nav class="navbar navbar-default" role="navigation">
            <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
              <ul class="nav navbar-nav">
              <li><router-link to="/">{{menu_item_1}}</router-link></li>
                <li>
                  <router-link to="/equ">{{menu_item_2}}</router-link>
                </li>
                <li>
                  <router-link to="/set">{{menu_item_3}}</router-link>
                </li>              
              </ul>
            </div>
          </nav>
    </div>
</div>
</template>
<script>
export default {
  name: 'py-menu',
  data () {
    return {
      menu_item_1:'控制中心',
      menu_item_2:'设备管理',
      menu_item_3:'全局设置'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>