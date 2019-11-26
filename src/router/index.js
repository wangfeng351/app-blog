import Vue from 'vue'
import VueRouter from 'vue-router'

import Nav from '@/views/Nav.vue'

import SignIn from '@/views/SignIn.vue'
import SignUp from '@/views/SignUp.vue'

import Index from '@/views/Index.vue'
import Forum from '@/views/Forum.vue'
import Recommend from '@/views/Recommend.vue'
import SubscriptionColumn from '@/views/SubscriptionColumn.vue'

import Search from '@/views/Search.vue'
import ArticleSearch from '@/views/ArticleSearch.vue'
import TopicSearch from '@/views/TopicSearch.vue'
import UserSearch from '@/views/UserSearch.vue'


import ArticleDetail from '@/views/ArticleDetail.vue'
import TopicDetail from '@/views/TopicDetail.vue'
import Empty from '@/views/Empty.vue'

import UserDetail from '@/views/UserDetail.vue'
import Basic from '@/views/Basic.vue'
import Password from '@/views/Password.vue'
import PersonalDetail from '@/views/PersonalDetail.vue'


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
			path : 'user/:id',
			component : UserDetail
		},
		{
			path : 'article/:id',
			component : ArticleDetail,
		},
		{
			path : 'topic/:id',
			component : TopicDetail,
		},
		{
			path : 'search',
			component : Search,
			children :[
				{
					path : '/',
					redirect : 'article'
				},
				{
					path : 'article',
					component : ArticleSearch
				},
				{
					path : 'topic',
					component : TopicSearch
				},
				{
					path : 'user',
					component : UserSearch
				},
			]
		},
		{
			path : 'personal' ,
			component : PersonalDetail,
		}
	]
  },
  {
    path: '/signIn',
    component : SignIn    
  },
  {
    path: '/signUp',
    component : SignUp    
  },
 
]

const router = new VueRouter({
  routes
})

export default router
