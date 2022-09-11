<template>
  <h1>ยินดีต้อนรับสู่ระบบตรวจสอบครุภัณฑ์โดยใช้ QR CODE</h1>
  <form>
    <div class="form-control">
      <label for="username">Username</label>
      <input type="text" v-model.trim="admin.username"/>
    </div>
    <div class="form-control">
      <label for="password">Password</label>
      <input type="text" v-model="admin.password"/>
    </div>
  </form>
  <button @click="checkdata(username, password)">Login</button>
</template>

<script>
export default {
  name: "LoginPage",
  data(){
    return{
      admin:{
        username:"boonrpl",
        password:"1234"
      }
    }
  },
  methods: {
    checkdata(username, password){
      if(username === this.admin.username && password === this.admin.password){
        alert("ชื่อผู้ใช้และรหัสผ่านถูกต้อง")
      }
      else{
        alert("ชื่อผู้ใช้และรหัสผ่านไม่ถูกต้อง")
        this.admin.username = ""
        this.admin.password = ""
      }
    }
  }
};
</script>

<style>

</style>