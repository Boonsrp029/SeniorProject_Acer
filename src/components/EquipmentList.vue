<template>
  <div class="equipmentlist">
    <h1 class="mt-5 fw-bolder text-success">รายชื่อครุภัณฑ์</h1>
    <table class="table table-hover table-responsive">
      <thead>
        <tr>
          <th scope="col">ลำดับ</th>
          <th scope="col">หมายเลขครุภัณฑ์</th>
          <th scope="col">ชื่อครุภัณฑ์</th>
          <th scope="col">สถานะ</th>
          <th scope="col">Action</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in list" :key="index">
          <th>{{ item.id }}</th>
          <td>{{ item.number }}</td>
          <td>{{ item.name }}</td>
          <td>{{ item.status }}</td>
          <td v-if="item.status === 'ส่งซ่อม'">
            <button type="button" class="btn btn-info">ดูรายละเอียดครุภัณฑ์</button>
            <button type="button" class="btn btn-info">ประวัติการส่งซ่อม</button>
            <button type="button" class="btn btn-warning">เปลี่ยนสถานะ</button>
          </td>
          <td v-else>
            <router-link class="btn btn-info" to="/eqdetail/1">ดูรายละเอียดครุภัณฑ์</router-link>
            <router-link class="btn btn-info" to="/repairhistory">ประวัติการส่งซ่อม</router-link>
            <router-link class="btn btn-primary" to="/eqdetail/1">แก้ไขรายละเอียด</router-link>
            <router-link class="btn btn-warning" to="/changestatus">เปลี่ยนสถานะ</router-link>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: "EquipmentList",
  data() {
    return {
      list: [
        {
          id: 1,
          number: '05.61100100018.ผ630001',
          name: 'เครื่องสำรองไฟฟ้าสำหรับคอมพิวเตอร์แม่ข่าย',
          status: 'ปกติ'
        },
        {
          id: 2,
          number: '05.61100100018.ผ630001',
          name: 'เครื่องสำรองไฟฟ้าสำหรับคอมพิวเตอร์แม่ข่าย',
          status: 'ส่งซ่อม'
        },
      ],
    }
  },
  props:{
    id: Number,
    number: String,
    name: String,
    status: String
  }
}
</script>

<style scoped>
table {
  font: "THNiramitAS";
  border-block: 3px solid black;
}
</style>
