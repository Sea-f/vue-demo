<template>
    <div>
    <h1>免费注册</h1>
    <el-form label-position="right" label-width="100px" ref="regForm" :rules="rules" :model="regFrom">
      <el-form-item label="用户名" prop="username">
        <el-input v-model="regFrom.username"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input type="password" v-model="regFrom.password"></el-input>
      </el-form-item>
      <el-form-item label="确认密码" prop="confirmPassword">
        <el-input type="password" v-model="regFrom.confirmPassword"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="success">注册</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
//注册需要完成的功能 一、在前端判断输入格式是否正确（使用正则）二、正确的用户名后判断数据库内知否存在（这个地方发送网络请求） 三、当符合所有要求后将用户名和密码保存到数据库当中（发送网络请求）
export default {
    data(){
        let checkUsername = (rules,value,callback)=>{
           if (!/^[a-z]/i.test(value)) {
        callback(new Error("用户名必须以字母开头"));
          }else if (!/^[\w-]+$/i.test(value)) {
        callback(new Error("用户名必须为数字、字母、_、-"));
          }else {
        callback();
          }
        }
        let checkPassword = (rule,value,callback)=>{
            if(value !== this.regFrom.password){
                callback(new Error("两次输入密码不一致"));
            }else{
                callback();
            }
        };
        return{
            regFrom:{
                username:"",
                password:"",
                confirmPassword:""
            },
            //这是写规则
            rules:{
                username:[
                    { required: true, message: "请输入用户名", trigger: "blur" },
          {
            min: 3,
            max: 12,
            message: "长度在 3 到 12 个字符",
            trigger: "blur"
          },
          { validator: checkUsername, trigger: "blur" }],
                password:[
                    {required:true,message:"请输入密码",trigger:'blur'},
                    {min:6,max:20,message:'长度在6-20个字符',trigger:'blur'}],
                    confirmPassword: [{ validator: checkPassword, trigger: "blur" }]
            }
        }
    }
}
</script>
<style>

</style>