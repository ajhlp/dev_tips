<template>
    <div>
        <div style="padding-top: 50px;">
            <img src="https://muse-ui.org/img/icon_logo.a76a122f.png" width="50" alt="">
            <div style="display: inline-block; padding: 0px 10px;font-size: 50px; font-weight: bolder;">&</div>
            <img src="https://vuejs.org/images/logo.png" alt="" width="50">
        </div>
        <h1>Hello {{ $store.state.user.name }}</h1>
        <div>
            <router-link to="/">
                <mu-button color="primary">Go to Home</mu-button>
            </router-link>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {}
    }
}
</script>
<style lang="scss" scoped>

</style>

