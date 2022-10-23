<template>
    <div class="mainpage">
        <br>
        <h1>ยินดีต้อนรับเข้าสู่ระบบการตรวจสอบครุภัณฑ์</h1>
        <br>
        <h2>หน่วยพัสดุ คณะวิทยาศาสตร์ มหาวิทยาลัยเชียงใหม่</h2>
        <br>
        <EquipmentList />
    </div>

</template>

<script>
import EquipmentList from '@/components/EquipmentList.vue';

export default {
    name: "MainPage",
    components: { EquipmentList }
}
</script>

<style scoped>

</style>