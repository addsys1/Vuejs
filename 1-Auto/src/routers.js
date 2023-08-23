
import SignUp from "./components/SignUp.vue";
import HomeAuto from "./components/HomeAuto.vue";
import LoginAuto from "./components/LoginAuto.vue";
import AddAuto from "./components/AddAuto.vue";
import UpdateAuto from "./components/UpdateAuto.vue";
import LogoutAuto from "./components/LogoutAuto.vue";



import { createRouter, createWebHistory } from "vue-router";

const routes = [
    {

        name: 'HomeAuto',
        component: HomeAuto,
        path: '/'
    },

    {

        name: 'SignUp',
        component: SignUp,
        path: '/sign-up',
    },


    {

        name: 'LoginAuto',
        component: LoginAuto,
        path: '/login-auto',
    },

    {

        name: 'AddAuto',
        component: AddAuto,
        path: '/add-auto',
    },

    {

        name: 'UpdateAuto',
        component: UpdateAuto,
        path: '/update-auto/:id',
    },

    {

        name: 'LogoutAuto',
        component: LogoutAuto,
        path: '/logout-auto',
    },

   

    

    


   
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;