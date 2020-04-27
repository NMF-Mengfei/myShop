<template>
  <div class="loginBox">
    <el-form :model="ruleForm" :rules="rules" ref="ruleForm"  class="demo-ruleForm">
        <el-form-item  prop="username">
          <el-input
            placeholder="手机号/邮箱/会员名"
            clearable
            v-model="ruleForm.username"
          >
          </el-input>
        </el-form-item>
         <el-form-item  prop="pwd">
          <el-input
            placeholder="请输入登录密码"
            v-model="ruleForm.pwd"
            clearable
            show-password
            >
          </el-input>
        </el-form-item>
        <el-tooltip placement="right-start">
          <div slot="content">用户名：root<br/>密码：1234</div>
          <el-button  round size="mini">?</el-button>
        </el-tooltip>
        <el-form-item>
          <el-button
            class="tologin"
            round
            @click="toLogin('ruleForm')"
          >
            登录
          </el-button>
        </el-form-item>
    </el-form>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import axios from 'axios'
  export default {
    name:'loginBox',
    data(){
      return {
        ruleForm: {
          username: '',
          pwd: '',
        },
         rules: {
          username: [
            { required: true, message: '请输入用户名', trigger: 'blur' },
            { min: 3, max: 8, message: '长度在3 到 8 个字符', trigger: 'blur' }
          ],
          pwd: [
            { required: true, message: '请输入密码', trigger: 'blur' },
          ]
         }
      }
    },
    methods:{
      toLogin:function(formName){
         this.$refs[formName].validate((valid) => {
          if (valid) {
            let mark = false;
            axios({
              method:'post',
              url:'http://127.0.0.1:3001'+'/login',
              data:{
                username:this.ruleForm.username,
                pwd:this.ruleForm.pwd
              }
            })
            .then(result=>{
              if(result.data.code==0){
                this.$message({
                  message: result.data.message,
                  type: 'success',
                  center: true
                });
                mark= true ;//修改登陆状态为成功
              }else{
                this.$message({
                  message: result.data.message,
                  type: 'error',
                  center: true
                });
              }
            })
            .catch(err=>{
              console.log(err)
            })
            .finally(()=>{
              this.$store.dispatch('loginMark',{mark})
            })
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      }
    },
    computed:{
        ...mapState(['isLogin'])
    }

  }
</script>

<style  lang="less">
  .loginBox{
    margin-top: 300px;
    padding: 20px;
    input{
          height: 60px;
          border-color: transparent;
          border-bottom-color: #ff6700;
          margin:30px 0px;
          outline: none;
          font-size:28px;
    }
    input:hover{
        border-color: transparent;
        border-bottom-color: #ff6700;
    }
    input:focus{
        border-color: transparent;
        border-bottom-color: #ff6700;
    }
    .tologin{
      width: 80%;
      height: 70px;
      margin:60px auto;
      display: block;
      background: -webkit-linear-gradient(left,#ff9000,#ff5000) no-repeat;
      color:#fff;
      font-size: 28px;
    }
    .tologin:hover,.tologin:focus{
       color:#fff;
    }
  }
</style>
