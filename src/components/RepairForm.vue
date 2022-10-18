<template>
    <div>
        <form action="">
            <div class="mb-3">
                <label class="form-label">วันที่ขอร้อง</label>
                <input type="date" class="form-control" />
            </div>
            <div class="mb-3">
                <label class="form-label">ชื่อครุภัณฑ์</label>
                <input type="text" class="form-control" />
            </div>
            <div class="mb-3">
                <label class="form-label">หมายเลขครุภัณฑ์</label>
                <input type="text" class="form-control" />
            </div>
            <div class="mb-3">
                <label class="form-label">รายละเอียดการส่งซ่อม</label>
                <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
            </div>
        </form>
    </div>
</template>

<script>
export default {
    name: "RepairForm",
    data() {
        return {
            repairdetail: [
                {
                    requestdate: "",
                    repairdetails: "",
                    name: ""
                }
            ]
        }
    }
};
</script>

<style scoped>

</style>