<template>
  <div class="container">
    <h1>ยินดีต้อนรับเข้าสู่ระบบ</h1>
    <br />
    <p>กรุณา Login เพื่อเข้าใช้งานระบบ</p>
    <br />
    <br />
    <div class="row">
      <div class="col-md-3"></div>
      <div class="dol-md-6">
        <form>
          <div class="mb-3">
            <label for="exampleInputUsername" class="form-label"
              >Username</label
            >
            <input type="text" class="form-control" id="exampleInputUsername" />
          </div>
          <div class="mb-3">
            <label for="exampleInputPassword" class="form-label"
              >Password</label
            >
            <input
              type="password"
              class="form-control"
              id="exampleInputPassword"
            />
          </div>
          <button type="submit" class="btn btn-primary">เข้าสู่ระบบ</button>
        </form>
      </div>
      <div class="dropdown-divider"></div>
        <a class="dropdown-item" href="register">สมัครเป็นผู้ดูแลระบบ</a>
        <a class="dropdown-item" href="forgot">ลืมรหัสผ่าน</a>
    </div>
  </div>
</template>

<script>
export default {
  name: "LoginForm",
};
</script>

<style scoped>
</style>