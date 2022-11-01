<template>
    <div>
        <QrcodeVue :value="value" :size="200" level="H" />
    </div>
</template>

<script>
import QrcodeVue from 'qrcode.vue'
export default {
    name: "QRCodeGen",
    data() {
        return {
            value: 'https://example.com',
            size: 300,
        }
    },
    components: {
        QrcodeVue
    }
}
</script>

<style>

</style>