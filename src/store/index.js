import Vue from 'vue'
import Vuex from 'vuex'
import MuseUI from 'muse-ui';
import 'muse-ui/dist/muse-ui.css';

Vue.use(MuseUI);

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        lists: [],
    },
    mutations: {
        addItem(state, value) {
            state.lists.push(value)
        }
    },
    actions: {},
    modules: {}
})
