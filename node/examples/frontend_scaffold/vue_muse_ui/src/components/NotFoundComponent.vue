<template>
    <mu-container>
        <mu-paper :z-depth="3" style="margin-top: 10px; padding-bottom: 20px;">
            <mu-flex justify-content="center">
                <h4><font-awesome-icon icon="info-circle" /> 没有找到相关页面</h4>
            </mu-flex>
            <div>
                <mu-flex justify-content="center" align-items="center">
                    <mu-button round color="success" @click="goToHome">返回首页</mu-button>
                </mu-flex>
            </div>
        </mu-paper>
    </mu-container>
</template>
<script>
export default {
    data() {
        return {

        }
    },
    mounted() {
        
    },
    methods: {
        goToHome() {
            if (this.$cookie.get(this.$store.state.cookie.opsKey) === 'true') {
                this.$router.push({name: 'opsDefaultEntry'});
            } else {
                this.$router.push({name: 'defaultEntry'});
            }
        }
    }
}
</script>
<style lang="scss" scoped>

</style>
