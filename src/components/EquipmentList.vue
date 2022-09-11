<template>
  <h1 class="mt-5 fw-bolder text-success">รายชื่อครุภัณฑ์</h1>
  <table id="tableComponent" class="table table-bordered table-striped">
    <thead>
      <tr>
        <th v-for="field in fields" :key="field">{{ field }}</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="item in equipmentData" :key="item">
        <td v-for="field in fields" :key="field">{{ item[field] }}</td>
      </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  name: "EquipmentList",
  props: {
    equipmentData: {
      type: Array,
    },
    fields: {
      type: Array,
    }
  },
}
</script>

<style scoped>
table {
  font: "THNiramitAS";
  border-block: 3px solid black;
}
</style>
