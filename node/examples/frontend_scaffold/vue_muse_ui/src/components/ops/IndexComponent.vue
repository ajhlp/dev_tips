<template>
    <div v-resize="handleWindowResize">
        
        <mu-drawer :open.sync="sideMenuOpen" :docked="sideMenuDocked" :right="false" :z-depth="0" class="sidemenu">
            <mu-appbar :z-depth="0" style="width: 100%;">
                后台管理
                <span class="menu-appbar-version">v1.0</span>
            </mu-appbar>
            <mu-divider></mu-divider>
            <mu-list toggle-nested>
                <mu-list-item button :ripple="true" nested 
                    v-for="(menugroup, index) in $store.getters['user/getAuthorizedMenus']" 
                    :key="'menugroup_' + index"
                    :open="menuOpenIndex === index" 
                    @toggle-nested="menuOpenIndex = arguments[0] ? index : -1">

                    <mu-list-item-action>
                        <font-awesome-icon :icon="menugroup.icon" />
                    </mu-list-item-action>
                    <mu-list-item-title>{{ menugroup.title }}</mu-list-item-title>
                    <mu-list-item-action>
                        <font-awesome-icon :icon="menuOpenIndex === index ? 'chevron-up' : 'chevron-down'" />
                    </mu-list-item-action>

                    <mu-list-item button :ripple="false" slot="nested"
                        v-for="(menu, idx) in menugroup.children" 
                        :key="'menugroup_' + index + '_' + idx"
                        class="nav-item">

                        <mu-list-item-title>
                            <router-link :to="menu.path">
                                {{ menu.title }}
                            </router-link>
                        </mu-list-item-title>
                    </mu-list-item>

                </mu-list-item>
            </mu-list>
        </mu-drawer>
    
        <mu-appbar color="primary" :title="currentPage" v-bind:class="{'main-navbar': true, 'is-open': sideMenuOpen}">
            <mu-button icon slot="left" class="sidemenu-trigger" @click="toggleSideMenu" title="开启或隐藏菜单">
                <font-awesome-icon icon="bars" />
            </mu-button>
            
            <mu-menu slot="right" placement="top-start" open-on-hover>
                <mu-button flat>{{ $store.state.user.name }}</mu-button>
                <mu-list slot="content">
                    <mu-list-item button>
                        <mu-list-item-title>个人设置</mu-list-item-title>
                    </mu-list-item>
                    <mu-list-item button @click="logout">
                        <mu-list-item-title>安全退出</mu-list-item-title>
                    </mu-list-item>
                </mu-list>
            </mu-menu>
        </mu-appbar>

        <div v-bind:class="{'main-content-container': true, 'is-open': sideMenuOpen}">
            <mu-container>
                <router-view></router-view>
            </mu-container>
        </div>
        
    </div>
</template>
<script>
export default {
    mounted() {
        this.sideMenuOpen = window.innerWidth >= 1000;
        this.sideMenuDocked = window.innerWidth >= 1000;
        this.$cookie.set(this.$store.state.cookie.opsKey, 'true');
    },
    computed: {
        currentPage() {
            return this.$route.meta.navTitle;
        }
    },
    data() {
        return {
            sideMenuOpen: false,
            sideMenuDocked: false,
            menuOpenIndex: -1
        };
    },
    methods: {
        handleWindowResize() {
            this.sideMenuOpen = window.innerWidth >= 1000;
            this.sideMenuDocked = window.innerWidth >= 1000;
        },
        toggleSideMenu(e) {
            this.sideMenuOpen = !this.sideMenuOpen;
        },
        logout() {
            this.$cookie.delete(this.$store.state.cookie.userTokenKey);
            this.$router.push({name: 'opsLoginEntry'});
        }
    }
}
</script>
<style lang="scss" scoped>

.menu-appbar-version {
    font-size: 12px;
    color: #757575;
    font-weight: bold;
    line-height: 1.2em;
}

.main-navbar {
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    z-index: 101;
    overflow: hidden;
}

.main-navbar.is-open {
    left: 256px;
}

.main-content-container {
    padding-top: 74px;

}

.main-content-container.is-open {
    padding-left: 256px;
}

.nav-item {
    a {
        color: #616161;
        display: block;
        width: 100%;
    }

    a.router-link-active {
        color: #2196f3;
        font-weight: bold;
    }
}

@media (max-width: 1000px) {
    .main-navbar.is-open {
        left: 0px;
    }

    .main-content-container, .main-content-container.is-open {
        padding-left: 0px;
    }
}
</style>
