<template>
  <LoginPage/>
  <div class="container text-center  mt-5 mb-5">
    <EquipmentList :fields='fields' :equipmentData ="equipmentData"/>
  </div>
</template>

<script>
import EquipmentList from './components/EquipmentList.vue';
import LoginPage from './components/LoginPage.vue';


export default {
  name: "App",
  components: {
    EquipmentList,
    LoginPage
  },
  setup() {
    //An array of values for the data
    const equipmentData = [
      {
        ID: "05.61100100018.ผ630001",
        Name: "เครื่องสำรองไฟฟ้าสำหรับคอมพิวเตอร์แม่ข่าย",
        Price: 24064,
        Purchase_year: 2563,
      },
      {
        ID: "05.61100100018.ผ630002",
        Name: "เครื่องสำรองไฟฟ้าสำหรับคอมพิวเตอร์แม่ข่าย",
        Price: 24064,
        Purchase_year: 2563,
      },
      {
        ID: "05.74400010002.ผ630001",
        Name: "เครื่องคอมพิวเตอร์สำหรับประมวลผลระดับสูง",
        Price: 29300,
        Purchase_year: 2563,
      },
    ];
    const fields = ["ID", "Name", "Price", "Purchase_year"]
    return { equipmentData, fields }
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
