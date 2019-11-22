import Vue from 'vue'
import VueRouter from 'vue-router'

import Nav from '@/views/Nav.vue'
import Login from '@/views/Login.vue'
import Forum from '@/views/Forum.vue'
import Index from '@/views/Index.vue'
import Recommend from '@/views/Recommend.vue'
import Article from '@/views/Article.vue'
import Basic from '@/views/Basic.vue'
import Empty from '@/views/Empty.vue'
import Password from '@/views/Password.vue'
import Personal from '@/views/Personal.vue'
import PersonalDetail from '@/views/PersonalDetail.vue'
import SubscriptionColumn from '@/views/SubscriptionColumn.vue'


Vue.use(VueRouter)

const routes = [
  {
	  // 组件填充的条件
    path: '/',
    component: Nav,
	children :[
		{
			path : '/',
			redirect :'index'
		},
	    {
			path : 'index',
			component : Index
		},
		{
			path : 'subscriptioncolumn',
			component : SubscriptionColumn 
		},
		{
			path : 'recommend',
			component : Recommend
		},
		{
			path : 'forum',
			component : Forum
		},
		{
			path : 'empty',
			component : Empty
		},
		{
			path : 'persondeatil',
			component : PersonalDetail
		},
		{
			name : 'my-articles',
			path : 'article',
			component : Article
		},
		{
			path : 'personal' ,
			component : Personal,
			children :[
				{
					path : '/',
					redirect : 'basic'
				},
				{
					path : 'basic',
					component : Basic
				},
				{
					path : 'password',
					component : Password
				}
			]
		}
	]
  },
  {
    path: '/login',
    component : Login    
  },
 
]

const router = new VueRouter({
  routes
})

export default router
