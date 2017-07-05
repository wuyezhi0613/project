"use strict";
import Vue from "vue";
import {Switch} from 'element-ui';
import AMap from 'vue-amap';
import 'element-ui/lib/theme-default/index.css'
import Me from "./Me.vue";
import VueRouter from "vue-router";
import meComponent from "./components/meLibrary/meComponent.vue";
import SetComponent from "./components/SetLibrary/SetComponent.vue";
import loginComponent from "./components/login/loginComponent.vue";
import registerComponent from "./components/register/registerComponent.vue";
import shopComponent from "./components/shop/shopComponent.vue";
import walletComponent from "./components/wallet/walletComponent.vue";
import mapComponent from "./components/walletMap/mapComponent.vue";
import signInComponent from "./components/signIn/signInComponent.vue";

Vue.use(Switch);
Vue.use(VueRouter);
Vue.use(AMap);

AMap.initAMapApiLoader({
    key: 'your amap key',
    plugin: ['AMap.Autocomplete', 'AMap.PlaceSearch', 'AMap.Scale', 'AMap.OverView', 'AMap.ToolBar', 'AMap.MapType', 'AMap.PolyEditor', 'AMap.CircleEditor']
});
const router = new VueRouter({
    routes:[
	    {path:"/",component:meComponent},
	    {path:"/SetComponent",component:SetComponent},
	    {path:"/loginComponent",component:loginComponent},
	    {path:"/registerComponent",component:registerComponent},
	    {path:"/shopComponent",component:shopComponent},
	    {path:"/walletComponent",component:walletComponent},
	    {path:"/mapComponent",component:mapComponent},
	    {path:"/signInComponent",component:signInComponent}
    ]
})

new Vue({
    el: "#me",
    router,
    render: (h)=> {
        return h(Me);
    }
});



