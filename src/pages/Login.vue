<template>
    <div>
    <h1>登录</h1>
    <el-form
      label-position="right"
      label-width="100px"
      ref="loginForm"
      
    >
      <el-form-item label="用户名" prop="username" >
        <el-input></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input type="password"></el-input>
      </el-form-item>
      <el-form-item prop="mdl">
        <el-checkbox>下次免登陆</el-checkbox>
      </el-form-item>
      <el-form-item>
        <el-button type="success">登录</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
export default {
    
}
</script>
<style>

</style>