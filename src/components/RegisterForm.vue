<template>
  <div>
    <h1>หน้าลงทะเบียนครุภัณฑ์</h1>
  </div>
</template>

<script>
export default {
  name:"RegisterForm",
  data(){
    return {
      id:"",
      type:"",
      name:"",
      description:"",
      quantity:"",
      price:"",
      equipment_classification:"",
      budget_classification:"",
      budget_type:"",
      purchase_method:"",
      contract_number:""
    }
  }
}
</script>

<style>

</style>