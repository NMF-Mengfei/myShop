<template>
  <ul class="tabbar">
    <li >
      <router-link to="/home" :class="{active:$route.path.includes('/home')}">
        <i class="fa fa-home"></i>
        <span class="fontRouter">首页</span>
      </router-link>
    </li>
    <li >
      <router-link to="/cart" :class="{active:$route.path.includes('/cart')}">
        <i class="fa fa-shopping-cart"></i>
        <span  class="fontRouter">购物车</span>
      </router-link>
    </li>
    <li >
      <router-link to="/me" :class="{active:$route.path.includes('/me')}">
        <i class="fa fa-user"></i>
        <span  class="fontRouter">我</span>
      </router-link>
    </li>
  </ul>
</template>

<script>
  export default {
    name:'TabBar',

  }
</script>

<style lang="less">
  .tabbar{
    position:fixed;
    bottom: 0px;
    width:100%;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    padding:10px 0px;
    background: #eaeaea;
    li{
      list-style: none;
      text-align: center;
      a{
        color:#333;
        text-decoration: none;
        font-size: 26px;
        display: flex;
        flex-direction: column;
        i{
          font-size: 40px!important;
        }
      }
    }
  }
  .active{
    color:#23cc40!important;
  }

</style>
