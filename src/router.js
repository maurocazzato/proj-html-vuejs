import { createRouter, createWebHistory } from 'vue-router';
import appHome from './components/pages/appHome.vue';
import appAbout from './components/pages/appAbout.vue';
import appServices from './components/pages/appServices.vue';

const router = createRouter({
history: createWebHistory(),
routes: [
{
path: '/'
,
name: 'appHome'
,
component: appHome
},
{
path: '/appAbout'
,
name: 'appAbout'
,
component: appAbout
},
{
    path: '/Services'
    ,
    name: 'appServices'
    ,
    component: appServices
    },
]
});
export { router };