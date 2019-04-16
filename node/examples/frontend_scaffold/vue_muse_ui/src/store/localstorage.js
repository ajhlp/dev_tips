const namespace = 'windowmakers_';

export default {
    KEY_USER_INFO: 'USER_INFO',
    setItem(name, value) {
        window.localStorage.setItem(namespace + name, value);
    },

    getItem(name) {
        return window.localStorage.getItem(namespace + name);
    },

    removeItem(name) {
        window.localStorage.removeItem(namespace + name);
    }
}