<template>
    <h1>สมัครการเป็นผู้ดูแลระบบ</h1>
    <form @submit.prevent="checkpassword">
        <div class="mb-3">
            <label class="form-label">ชื่อเข้าใช้งาน
                <input type="text" class="form-control" v-model="admindata.username" />
            </label>
        </div>
        <div class="mb-3">
            <label class="form-label">รหัสผ่าน
                <input type="password" class="form-control" v-model="admindata.password" />
            </label>
        </div>
        <div class="mb-3">
            <label class="form-label">ยืนยันรหัสผ่าน
                <input type="password" class="form-control" v-model="admindata.confirmPassword" />
            </label>
        </div>
        <div class="mb-3">
            <label class="form-label">ชื่อ
                <input type="text" class="form-control" v-model="admindata.firstname" />
            </label>
        </div>
        <div class="mb-3">
            <label class="form-label">นามสกุล
                <input type="text" class="form-control" v-model="admindata.lastname" />
            </label>
        </div>
        <button type="submit" class="btn btn-primary">Submit</button>
    </form>
</template>

<script>
export default {
    name: "SignupForm",
    data() {
        return {
            admindata: [
                {
                    username: "",
                    password: "",
                    confirmPassword: "",
                    firstname: "",
                    lastname: "",
                }
            ]
        }
    },
    methods: {
        checkpassword() {
            if (this.password !== this.confirmPassword) {
                this.alert = "รหัสผ่านไม่ตรงกัน กรุณากรอกใหม่";
                this.password = "";
                this.confirmPassword = "";
                return;
            }
        }
    }
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
