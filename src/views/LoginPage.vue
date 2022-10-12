<template>
  <LoginForm/>
  <div class="col-md-3"></div>
</template>

<script>
import LoginForm from '@/components/LoginForm.vue';

export default {
    name: "LoginPage",
    data() {
        return {
            admin: {},
        };
    },
    methods: {},
    components: { LoginForm }
};
</script>

<style>

</style>
