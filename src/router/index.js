import Vue from 'vue'
import Router from 'vue-router'
import border from '@/components/border'
import noborder from '@/components/noborder'
import noborder1 from '@/components/noborder1'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'border',
      component: border
    },
    {
      path: '/noborder',
      name: 'noborder',
      component: noborder
    },
    {
      path: '/noborder1',
      name: 'noborder1',
      component: noborder1
    }
  ]
})
