import Vue from 'vue'
import Vuex from 'vuex'
import MuseUI from 'muse-ui';
import 'muse-ui/dist/muse-ui.css';

Vue.use(MuseUI);

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        lists: [],
        jobs:[]

    },
    mutations: {
        addItem(state, value) {
            state.lists.push(value)
        },
        myAddJob(state, value){
            state.jobs.push(value)
        }
    },
    actions: {},
    modules: {}
})
