<template>
  <h1>หน้าลงทะเบียนครุภัณฑ์</h1>
  <form>
    <div class="form-control">
      <label for="equipment-name">ชื่อครุภัณฑ์/วัสดุคงทน</label>
      <input type="text" v-model.trim="name">
    </div>
    <div class="form-control">
      <label for="description">รายละเอียด</label>
      <textarea v-model="description"></textarea>>
    </div>
    <div class="form-control">
      <label for="quantity">จำนวน</label>
      <input type="number" v-model="quantity">
      <select>
        <option value="เครื่อง">เครื่อง</option>
        <option value="ตัว">ตัว</option>
        <option value="ชุด">ชุด</option>
        <option value="จอ">จอ</option>
        <option value="ชิ้น">ชิ้น</option>
        <option value="ใบ">ใบ</option>
        <option value="อัน">อัน</option>
        <option value="คัน">คัน</option>
      </select>
    </div>
  </form>
</template>

<script>
export default {
  name: "RegisterForm",
  data() {
    return {
      name: "",
      description: "",
      quantity: "",
      price: "",
      equipment_type: "",
      budget_classification: "",
      budget_type: "",
      purchase_method: "",
      contract_number: ""
    }
  }
}
</script>

<style>

</style>