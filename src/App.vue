<template>
  <div id="app">
    <nav class="navbar bg-light">
      <div class="container-fluid">
        <a class="navbar-brand">
          <img src="https://upload.wikimedia.org/wikipedia/th/4/4e/SC_CMU_Logo.png" alt="Logo" width="100" height="85"
            class="d-inline-block align-text-center" />
          ระบบการตรวจสอบครุภัณฑ์ หน่วยพัสดุ คณะวิทยาศาสตร์ มหาวิทยาลัยเชียงใหม่
        </a>
        <div>
          <form class="form-inline my-2 my-lg-0">
            <a class="nav-link" href="/login">ล็อกอิน</a>
          </form>
        </div>
      </div>
    </nav>
    <nav class="navbar navbar-dark bg-dark">
      <div class="container-fluid">
        <a class="navbar-brand" href="/">เมนูระบบครุภัณฑ์</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <router-link class="nav-link" to="/registeritem" >ลงทะเบียนครุภัณฑ์</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/changestatus">เปลี่ยนสถานะครุภัณฑ์</router-link>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">รายชื่อครุภัณฑ์ที่กำลังส่งซ่อม</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">รายชื่อครุภัณฑ์ที่แทงจำหน่าย</a>
            </li>
          </ul>
          <form class="d-flex" role="search">
            <input class="form-control me-2" type="search" placeholder="ค้นหาครุภัณฑ์" aria-label="Search" />
            <button class="btn btn-outline-success" type="submit">
              Search
            </button>
          </form>
          <p>
            หมายเหตุ:
            ครุภัณฑ์ที่แสดงในการค้นหาจะแสดงเฉพาะครุภัณฑ์ที่ยังไม่ได้แทงจำหน่ายออกเท่านั้น
          </p>
        </div>
      </div>
    </nav>
    <router-view />
  </div>
</template>

<script>
export default {
  methods: {
    // isAdmin(e) {
    //   alert("สามารถทำได้เฉพาะผู้ดูแลระบบเท่านั้น")
    //   e.preventDefault()
    // }
  },
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }

  p {
    color: white;
  }
}
</style>
