// initial state
const state = {
    name: 'Natasa'
}

// getters
const getters = {
    getAuthorizedMenus(state, getters, rootState) {
        return [{
                    path: '',
                    title: '用户管理',
                    icon: 'user-friends',
                    children: [{
                        path: '/ops/customers/list',
                        title: '查询'
                    },{
                        path: '/ops/customers/add',
                        title: '新增'
                    }]
                }]
    }
}

// actions
const actions = {
    
}

// mutations
const mutations = {
    
}
  
export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}
