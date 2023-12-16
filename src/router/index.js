import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import BagUser from '../views/UserBag.vue'
import BattleField from '../views/BattleField.vue'
import GeneralStatus from '../views/GeneralStatus.vue'
import Quests from '../views/QuestsList.vue'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomeView
        },
        {
            path: '/bag',
            name: 'bag',
            component: BagUser
        },
        {
            path: '/battle',
            name: 'battle',
            component: BattleField
        },
        {
            path: '/status',
            name: 'status',
            component: GeneralStatus
        },
        {
            path: '/quests',
            name: 'quests',
            component: Quests
        },
        {
            path: '/about',
            name: 'about',
            // route level code-splitting
            // this generates a separate chunk (About.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: () => import('../views/AboutView.vue')
        }
    ]
})

export default router
