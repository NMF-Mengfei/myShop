<template>
  <div>
        <v-login></v-login>
  </div>
</template>

<script>
  import loginBox from '../../components/login'
  export default {
    name:"Me",
    components:{
      'v-login':loginBox
    }
  }
</script>

<style lang="less">

</style>
