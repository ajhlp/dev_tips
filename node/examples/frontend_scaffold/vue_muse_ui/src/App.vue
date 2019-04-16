<template>
    <div class="main-container">
        <router-view></router-view>
    </div>
</template>

<script>
import apis from './store/apis';

export default {
    components: {
        
    },
    mounted() {
        
    },
    data() {
        return {
            
        }
    },
    computed: {
            
        },
    methods: {
        
    }
};
</script>

<style lang="scss">
.main-container {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 500px;
    height: 300px;
    margin-top: -150px;
    margin-left: -250px;
    padding: 10px;
    border: 2px solid #90caf9;
    border-radius: 8px;
    text-align: center;
}
</style>

