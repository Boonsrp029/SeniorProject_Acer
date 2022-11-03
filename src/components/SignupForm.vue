<template>
  <div>
    <h1>สมัครการเป็นผู้ดูแลระบบ</h1>
    <div class="signupform">
      <form @submit.prevent="checkpassword">
        <div class="mb-3">
          <label class="form-label"
            >ชื่อเข้าใช้งาน
            <input
              type="text"
              class="form-control" 
              placeholder="Username"
              v-model="admindata.username"
            />
          </label>
        </div>
        <div class="mb-3">
          <label class="form-label"
            >รหัสผ่าน
            <input
              type="password"
              class="form-control"
              placeholder="รหัสผ่าน"
              v-model="admindata.password"
            />
          </label>
        </div>
        <div class="mb-3">
          <label class="form-label"
            >ยืนยันรหัสผ่าน
            <input
              type="password"
              class="form-control"
              placeholder="ยืนยันรหัสผ่าน"
              v-model="admindata.confirmPassword"
            />
          </label>
        </div>
        <div class="mb-3">
          <label class="form-label"
            >ชื่อ
            <input
              type="text"
              class="form-control"
              placeholder="ชื่อผู้ดูแล"
              v-model="admindata.firstname"
            />
          </label>
        </div>
        <div class="mb-3">
          <label class="form-label"
            >นามสกุล
            <input
              type="text"
              class="form-control"
              placeholder="นามสกุลผู้ดูแล"
              v-model="admindata.lastname"
            />
          </label>
        </div>
        <button type="submit" id="button" class="btn btn-primary" @click="register">สมัคร</button>
        <router-link class="btn btn-danger" to="/">ยกเลิก</router-link>
      </form>
    </div>
  </div>
</template>

<script>
import AuthenticationService from '@/services/AuthenticationService';
export default {
  name: "SignupForm",
  data() {
    return {
      admindata: [
        {
          username: '',
          password: '',
          confirmPassword: '',
          firstname: '',
          lastname: '',
        },
      ],
    }
  },
  methods: {
    async register() {
      if (this.admindata.password !== this.admindata.confirmPassword) {
        alert("รหัสผ่านไม่ตรงกัน กรุณากรอกใหม่");
        this.admindata.password = '';
        this.admindata.confirmPassword = '';
        return;
      }
      else {
        const response = await AuthenticationService.register({
            username: this.admindata.username,
            password: this.admindata.password,
            firstname: this.admindata.firstname,
            lastname: this.admindata.lastname
        })
        console.log(response.data)
      }
    },
  },
};
</script>

<style scoped>
button
input {
  display: block;
  margin-bottom: 10px;
}
#button {
    align-content: center;
}
#alert {
  color: red;
  margin-bottom: 10px;
}
</style>
