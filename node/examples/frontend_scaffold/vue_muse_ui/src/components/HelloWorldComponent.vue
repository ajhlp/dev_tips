<template>
    <mu-container>
        <mu-paper style="padding: 50px 0px; margin-top: 20px;" :z-depth="3">
            <mu-flex justify-content="center">
                <div>
                    <img src="https://muse-ui.org/img/icon_logo.a76a122f.png" width="50" alt="">
                    <div style="display: inline-block; padding: 0px 10px;font-size: 50px; font-weight: bolder;">&</div>
                    <img src="https://vuejs.org/images/logo.png" alt="" width="50">
                </div>
            </mu-flex>
            <mu-flex justify-content="center">
                <h1>Hello {{ $store.state.user.name }}</h1>
            </mu-flex>
            <mu-flex justify-content="center">
                <router-link to="/">
                    <mu-button color="primary">Go to Home</mu-button>
                </router-link>
            </mu-flex>
        </mu-paper>
    </mu-container>
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

