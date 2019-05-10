<template>
    <div>
        <mu-snackbar position="top" :open="$store.state.notify.open" :color="$store.state.notify.color">
            {{$store.state.notify.message}}
            <mu-button flat slot="action" color="grey50" @click="$store.dispatch('notify/hideMessage')">关闭</mu-button>
        </mu-snackbar>
        <router-view></router-view>
    </div>
</template>
<script>
export default {
    data() {
        return {
            
        };
    }
}
</script>
<style lang="scss" scoped>

</style>
