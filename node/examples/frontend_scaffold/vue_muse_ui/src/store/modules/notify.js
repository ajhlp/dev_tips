// initial state
const state = {
    open: false,
    message: '',
    color: 'info',
    timer: null
}

// getters
const getters = {
    
}

// actions
const actions = {
    showMessage(context, payload) {
        context.commit('clearTimer');
        context.commit('updateMessage', payload);
        const timer = setTimeout(() => {
            context.commit('updateOpen', false);
        }, 3000);
        context.commit('updateTimer', timer);
    },
    hideMessage(context) {
        context.commit('updateOpen', false);
    }
}

// mutations
const mutations = {
    updateMessage(state, payload) {
        state.message = payload.message;
        state.color = payload.color;
        state.open = true;
    },
    updateOpen(state, open) {
        state.open = open;
    },
    updateTimer(state, timer) {
        state.timer = timer;
    },
    clearTimer(state) {
        if (state.timer) {
            clearTimeout(state.timer);
        }
    }
}
  
export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}
