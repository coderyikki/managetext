<template>
  <div class="login-container">
    <el-form class="login-form" ref="form" :model="user">
      <el-form-item>
        <el-input v-model="user.mobile" placeholder="请输入手机号"></el-input>
      </el-form-item>
      <el-form-item>
        <el-input v-model="user.code" placeholder="请输入验证码"></el-input>
      </el-form-item>
      <el-form-item>
        <el-checkbox v-model="checked"></el-checkbox>
        我已阅读并同意用户协议和隐私条款
      </el-form-item>
      <el-form-item>
        <el-button class="login-btn" type="submit" @click="onLogin">登录</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import request from '@/utils/request'

export default {
  name: "LoginIndex",
  components: {},
  props: {},
  data() {
    return {
      user: {
        mobile: '',
        code: '',
      },
      checked: false
    };
  },
  methods: {
    onLogin() {
      const user = this.user

      request({
          method: 'POST',
          url: '/mp/v1_0/authorizations',
          data: user
      }).then(res => {
          console.log(res);
      }).catch(err => {
          console.log(err);
      })
    },
  },
};
</script>

<style scoped>
.login-container {
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  background-image: url("../../assets/indexbg/animescape-2.jpg");
  background-size: cover;
}

.login-form {
  padding: 50px;
  min-width: 300px;
  background-color: rgba(255, 255, 255, 0.5);
  border-radius: 8px;
}

.login-btn {
  position: absolute;
  width: 50%;
  left: 0;
  right: 0;
  top: 0;
  margin: 0 auto;
  transition: all 0.2s;
}

.login-btn:hover {
  transform: scale(1.2, 1.2);
}
</style>