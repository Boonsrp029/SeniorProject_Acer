<template>
  <h1>รายชื่อครุภัณฑ์</h1>
  <table id="tableComponent" class="table table-bordered table-striped">
    <thead>
      <tr>
        <th>หมายเลขครุภัณฑ์</th>
        <th>ชื่อครุภัณฑ์</th>
        <th>ราคา</th>
        <th>ปีที่ซื้อ</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>{{ id }}</td>
        <td>{{ name }}</td>
        <td>{{ price }}</td>
        <td>{{ purchase_year }}</td>
      </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  name: "EquipmentList",
  data() {
    return {
      id: "05.61100100018.ผ630001",
      name: "เครื่องสำรองไฟฟ้าสำหรับคอมพิวเตอร์แม่ข่าย",
      price: 24064,
      purchase_year: 2563,
    };
  },
};
</script>

<style scoped>
table {
  font: "THNiramitAS";
  border-block: 3px solid black;
}
</style>
