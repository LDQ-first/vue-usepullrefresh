import pullRefreshsComponent from './pullRefreshs.vue'

const pullToRefresh = {
    install: function(Vue) {
        Vue.component('pullRefresh', pullRefreshsComponent)
    }
}

export default pullToRefresh