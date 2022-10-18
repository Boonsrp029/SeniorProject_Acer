<template>
    <div class="changestatus">
        <form action="">
            <div class="mb-3 row">
                <label class="col-sm-2 col-form-label">หมายเลขครุภัณฑ์</label>
                <div class="col-sm-10">
                    <input type="text" readonly class="form-control-plaintext" id="staticEmail" :value="id">
                </div>
            </div>
            <div class="mb-3 row">
                <label class="col-sm-4 col-form-label">สถานะครุภัณฑ์ ณ งบประมาณปัจจุบัน</label>
                <div class="dropdown">
                    <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown"
                        aria-expanded="false">
                        สถานะครุภัณฑ์
                    </button>
                    <ul class="dropdown-menu" :value="equipmentstatus">
                        <li><a class="dropdown-item">ปกติ</a></li>
                        <li><a class="dropdown-item">ปานกลาง</a></li>
                        <li><a class="dropdown-item">ชำรุด</a></li>
                        <li><a class="dropdown-item">ซ่อมแซม</a></li>
                        <li><a class="dropdown-item">จำหน่ายออก</a></li>
                    </ul>
                </div>
            </div>
            <div class="d-grid gap-2 d-md-block">
                <button type="button" class="btn btn-primary">ตกลง</button>
                <button type="button" class="btn btn-danger">กลับไปหน้าหลัก</button>
            </div>
        </form>
    </div>
</template>

<script>
export default {
    name: "ChangeStatus",
    data() {
        return {
            id: "62054616468ก.03",
            equipmentstatus: ""
        }
    }
}
</script>

<style scoped>

</style>