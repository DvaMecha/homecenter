<template>
<div class="menu">
    <div class="col-md-12 column">
          <nav class="navbar navbar-default" role="navigation">
            <div class="navbar-header">
              <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1"></button>
              <a class="navbar-brand" href="#">{{menu_item_1}}</a>
            </div>
            <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
              <ul class="nav navbar-nav">
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
  name: 'py_menu',
  data () {
    return {
      menu_item_1: '控制中心',
      menu_item_2:'设备管理',
      menu_item_3:'全局设置'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>