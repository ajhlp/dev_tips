export default {
    parse: (code) => {
        switch (code) {
            case '100003':
                return '密码不正确';
            case '400001':
                return '登录账号已存在';
            default:
                return '未知错误';
        }
    }
}