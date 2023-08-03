import {createRouter, createWebHashHistory} from 'vue-router'

const Home = () => import('../pages/Home.vue')
const Detail = () => import('../pages/Detail.vue')
const Order = () => import('../pages/Order.vue')
const Feedback = () => import('../pages/FeedBack.vue')
const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/detail',
    name: 'Detail',
    component: Detail
  },
  {
    path: '/order',
    name: 'Order',
    component: Order
  },
  {
    path: '/feedback',
    name: 'Feedback',
    component: Feedback
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router