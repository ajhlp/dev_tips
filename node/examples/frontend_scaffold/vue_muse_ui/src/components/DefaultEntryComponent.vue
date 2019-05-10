<template>
    <mu-container style="padding-top: 20px;">
        <mu-paper :z-depth="3" style="padding-bottom: 20px;">
            <mu-flex justify-content="center">
                <h1>
                    <font-awesome-icon icon="coffee" />
                </h1>
            </mu-flex>
            <mu-flex justify-content="center">
                <h2>Default Entry Page</h2>
            </mu-flex>
            <mu-flex justify-content="center">
                <router-link to="/hello">
                    <mu-button color="primary" round>Go to Hello World</mu-button>
                </router-link>

                <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>

                <router-link to="/ops">
                    <mu-button color="success" round>Go to ops panel</mu-button>
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

