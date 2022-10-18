<template>
  <div>
    <h1>หน้าลืมรหัสผ่านของผู้ดูแลระบบ</h1>
    <form @submit.prevent="resetpassword">
      <label>
        รหัสผ่านใหม่
        <input type="password" v-model="NewPassword" />
      </label>
      <label>
        ยืนยันรหัสผ่านใหม่
        <input type="password" v-model="ConfirmNewPassword" />
      </label>
      <button type="submit">Reset password</button>
    </form>
  </div>
</template>

<script>
export default {
  name: "ForgotPassword",
  methods: {
    resetpassword() {
      if (this.NewPassword !== this.ConfirmNewPassword) {
        this.alert = "รหัสผ่านไม่ตรงกัน กรุณาป้อนรหัสผ่านใหม่";
        this.NewPassword = "";
        this.ConfirmNewPassword = "";
        return;
      }
    },
  },
};
</script>

<style scoped>
button,
input {
  display: block;
  margin-bottom: 10px;
}

#alert {
  color: red;
  margin-bottom: 10px;
}
</style>