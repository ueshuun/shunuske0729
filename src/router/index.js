import Vue from 'vue'
import VueRouter from 'vue-router'
import WeatherView from '../views/WeatherView.vue'
import AreaView from '@/views/AreaView.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/Area',
    name: 'Area',
    component: AreaView
  },
{
    path: '/Weather',
    name: 'Weather',
    component: WeatherView
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router