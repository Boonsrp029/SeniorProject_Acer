<template>
  <div>
    <form>
      <h1>ยินดีต้อนรับเข้าสู่ระบบ</h1>
      <br>
      <p>กรุณา Login เพื่อเข้าใช้งานระบบ</p>

      <div class="input-group mb-2">
        <span class="input-group-text" id="basic-addon1">ชื่อผู้ใช้</span>
        <input type="text" class="form-control" placeholder="Username" aria-label="Username"
          aria-describedby="basic-addon1">
      </div>

      <div class="input-group mb-2">
        <span class="input-group-text" id="basic-addon1">รหัสผ่าน</span>
        <input type="password" class="form-control" placeholder="Password" aria-label="Password"
          aria-describedby="basic-addon1">
      </div>
      <button type="submit" class="btn btn-primary">เข้าสู่ระบบ</button>
      <a type="button" class="btn btn-danger" href="/">กลับไปยังหน้าหลัก</a>
    </form>
  </div>
  <a class="dropdown-item" href="/registeradmin">สมัครเป็นผู้ดูแลระบบ</a>
  <a class="dropdown-item" href="/forgot">ลืมรหัสผ่าน?</a>
</template>

<script>
export default {
  name: "LoginForm",
};
</script>

<style scoped lang="scss">
#login {
  text-align: center;
}
button {

}
</style>