<template>
    <mu-flex justify-content="center" fill>
        <mu-paper :z-depth="3" class="login-form">
            <mu-flex justify-content="center">
                <h1>管理后台用户登录</h1>
            </mu-flex>
            <mu-form ref="form" :model="validateForm" class="mu-demo-form">
                <mu-form-item label="用户名" help-text="" prop="username" :rules="usernameRules">
                    <mu-text-field v-model="validateForm.username" prop="username"></mu-text-field>
                </mu-form-item>
                <mu-form-item label="密码" prop="password" :rules="passwordRules">
                    <mu-text-field type="password" v-model="validateForm.password" prop="password"></mu-text-field>
                </mu-form-item>
                <mu-form-item>
                    <mu-button color="primary" v-loading="logining" @click="submit">登录</mu-button>
                    <mu-button @click="clear">重置</mu-button>
                </mu-form-item>
            </mu-form>
        </mu-paper>
    </mu-flex>
</template>
<script>
import md5 from 'md5';
import apis from '../../store/apis';
import errorCodeUtil from '../../utils/errorCodeUtil';
export default {
    data() {
        return {
            usernameRules: [
                { validate: (val) => !!val, message: '必须填写用户名'},
                { validate: (val) => val.length >= 3, message: '用户名长度大于3'}
            ],
            passwordRules: [
                { validate: (val) => !!val, message: '必须填写密码'},
                { validate: (val) => val.length >= 6, message: '密码长度大于6'}
            ],
            validateForm: {
                username: '',
                password: ''
            },
            logining: false
        };
    },
    methods: {
        submit () {
            this.$refs.form.validate().then((result) => {
                if (result) {
                    this.login();
                }
            });
        },
        clear () {
            this.$refs.form.clear();
            this.validateForm = {
                username: '',
                password: ''
            };
        },
        login () {
            this.logining = true;
            setTimeout(() => {
                this.logining = false;
                if (this.validateForm.password === '1234567') {
                    this.$cookie.set(this.$store.state.cookie.userTokenKey, '__token__');
                    this.gotoBeforePage();
                } else {
                    this.$store.dispatch('notify/showMessage', {message: '密码为1234567', color: 'error'});
                }
            }, 3000);
        },
        gotoBeforePage() {
            this.$router.push(this.$cookie.get(this.$store.state.cookie.beforeLoginURLKey) || '/ops');
            this.$cookie.set(this.$store.state.cookie.beforeLoginURLKey, '');
        }
    }
}
</script>
<style lang="scss" scoped>
.login-form {
    padding: 30px 50px;
    margin-top: 10px;
}
</style>
