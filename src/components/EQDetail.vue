<template>
  <div class="equipmentdetail">
    <h1>รายละเอียดของครุภัณฑ์ ลำดับที่: {{$route.params.id}}</h1>
    <div class="destination-details">

    </div>
  </div>
</template>

<script>
import EquipmentList from './EquipmentList.vue'

export default {
  name: "EQDetail",
  data(){
    return {
      list: EquipmentList.list
    }
  },
  computed: {
    targetId() {
      return parseInt(this.$route.params.id)
    },
    // destination(){
    //   return EquipmentList.list.find((destination) => destination.id === this.targetId);
    // }
  }
}
</script>

<style>

</style>