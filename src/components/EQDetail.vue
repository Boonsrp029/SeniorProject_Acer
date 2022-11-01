<template>
  <div class="equipmentdetail">
    <h1>รายละเอียดของครุภัณฑ์ ลำดับที่: {{ $route.params.id }}</h1>
    <div class="row">
      <div class="col-4">
        <img src="https://m.media-amazon.com/images/I/715Du7OxZ0L.jpg" class="rounded float-start" alt="apc_unit"
          width="200" height="300">
      </div>
      <div class="col-8" :id="listdetail">
        <h3>หมายเลขครุภัณฑ์:</h3>
        <p>{{ listdetail.number }}</p>
        <div id="detail" class="fs-4 text-sm-start" v-for="(value, key) in listdetail" :key="key">
          <!-- <p>ชื่อครุภัณฑ์: </p>
          <p>รายละเอียด: </p>
          <p>จำนวน: </p>
          <p>วิธีการจัดซื้อ: </p>
          <p>ที่มาเงินทุน: </p>
          <p>วันที่ลงทะเบียน: </p>
          <p>ที่ตั้งปัจจุบัน: </p>
          <p>ผู้ใช้: </p> -->
            {{ key }}: {{value}}
        </div>
      </div>
    </div>
  </div>
</template>

<script>


export default {
  name: "EQDetail",
  data() {
    return {
      listdetail: 
        {
          'หมายเลขครุภัณฑ์': '05.61100100018.ผ630001',
          'ชื่อครุภัณฑ์': 'เครื่องสำรองไฟฟ้าสำหรับคอมพิวเตอร์แม่ข่าย',
          'รายละเอียด': 'เครื่องที่ใช้สำหรับสำรองไฟในกรณีไฟดับ',
          'จำนวน': 1,
          'วิธีการจัดซื้อ': 'งบประมาณที่จัดสรรมาให้',
          'ที่มาเงินทุน': 'แพทย์ชนบท',
          'วันที่ลงทะเบียน': 28 / 12 / 65,
          'ที่ตั้งปัจจุบัน': 'ห้อง CSB201',
          'ผู้ใช้': 'Wijak Srisuthalertwaja'
        }
    }
  },
  props: {
    number: String,
    detail: String,
    quantity: Number,
    purchasemethod: String,
    budgetsource: String,
    registerdate: Date
  },
  computed: {
    targetId() {
      return parseInt(this.$route.params.id)
    },
  }
}
</script>

<style scoped>
#detail{
  width: auto;
  height: 2em;
}
</style>