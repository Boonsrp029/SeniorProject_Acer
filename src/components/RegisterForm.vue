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
    <div class="form-control">
      <label for="price">ราคา</label>
      <input type="number" v-model="price">
      <p>บาท</p>
    </div>
    <div class="form-control">
      <label for="equipment_type">หมวดหมู่ครุภัณฑ์</label>
      <select>
        <option value="ครุภัณฑ์คอมพิวเตอร์">ครุภัณฑ์คอมพิวเตอร์</option>
        <option value="ครุภัณฑ์โต๊ะ">ครุภัณฑ์ครุภัณฑ์โต๊ะ</option>
        <option value="ครุภัณฑ์อุปกรณ์เสริม">ครุภัณฑ์อุปกรณ์เสริม</option>
      </select>
    </div>
    <div class="form-control">
      <label for="budget_classification">เงินงบประมาณ</label>
      <select>
        <option value="แพทย์ชนบท">แพทย์ชนบท</option>
        <option value="งบประมาณกลางของมหวิทยาลัย">งบประมาณกลางของมหวิทยาลัย</option>
        <option value="งบประมาณที่ได้จากส่วนกลาง">งบประมาณที่ได้จากส่วนกลาง</option>
      </select>
      <h2>ปีงบประมาณ</h2>
      <input type="number" v-model="budget_year">
    </div>
    <div class="form-control">
      <label for="budget_type">หมวดเงิน</label>
      <select>
        <option value="เฉพาะเจาะจง">เฉพาะเจาะจง</option>
        <option value="งบประมาณกลางของมหวิทยาลัย">งบประมาณกลางของมหวิทยาลัย</option>
        <option value="งบประมาณที่ได้จากส่วนกลาง">งบประมาณที่ได้จากส่วนกลาง</option>
      </select>
      <h2>ปีที่ซื้อ</h2>
      <input type="number" v-model="budget_year">
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
      //equipment_type คือ หมวดหมู่ครุภัณฑ์
      equipment_type: "",
      //budget_classification คือ เงินงบประมาณ
      //budget_type คือ หมวดเงิน
      budget_classification: "",
      budget_year:0,
      budget_type: "",
      puchase_year:0,
      purchase_method: "",
    }
  }
}
</script>

<style>

</style>