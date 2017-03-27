<template>
  <div class="equ_view">
  <div class="sidebar-nav">
  <ul class="nav">
    <li v-for="item in items">{{ item.message }}</li>
  </ul>
  
  
  </div>
    <h1>{{ msg }}</h1>
    <h2>Essential Links</h2>
    
  </div>
</template>

<script>
export default {
  name: 'equ_view',
  data () {
    return {
      msg: '设备管理',
      items: [
        {message: 'Foo' },
        {message: 'Bar' }
      ]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
