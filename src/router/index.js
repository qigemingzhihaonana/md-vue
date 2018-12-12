import Vue from 'vue'
import Router from 'vue-router'
import Layout from '@/views/layout/index'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/redirect',
      component: Layout,
      hidden: true,
      children: [
        {
          path: '/redirect/:path*',
          component: () => import('@/views/dashboard/index'),
          meta: {
            title: '首页'
          }
        }
      ]
    },
    {
      path: '/task',
      component: Layout,
      redirect: '/task/startTask',
      meta: {
        title: '项目管理'
      },
      children: [
        {
          path: '/task/startTask',
          name: 'startTask',
          component: () => import('@/views/task/NewTask'),
          meta: {
            title: '项目立项'
          }
        }
      ]
    },
    {
      path: '/task',
      component: Layout,
      meta: {
        title: '项目管理'
      },
      children: [
        {
          path: '/task/checkTask',
          name: 'taskCheck',
          component: () => import('@/views/task/NewTaskCheck'),
          meta: {
            title: '项目审批'
          }
        }
      ]
    },
    {
      path: '/task',
      component: Layout,
      meta: {
        title: '项目管理'
      },
      children: [
        {
          path: '/task/changeTask',
          name: 'taskChange',
          component: () => import('@/views/task/TaskChange'),
          meta: {
            title: '变动项目'
          }
        }
      ]
    },
    {
      path: '/task',
      component: Layout,
      meta: {
        title: '项目管理'
      },
      children: [
        {
          path: '/task/checkChangeTask',
          name: 'taskChangeCheck',
          component: () => import('@/views/task/TaskChangeCheck'),
          meta: {
            title: '项目变动审批'
          }
        }
      ]
    },
    {
      path: '/task',
      component: Layout,
      meta: {
        title: '项目管理'
      },
      children: [
        {
          path: '/task/stopTask',
          name: 'stopTask',
          component: () => import('@/views/task/StopTask'),
          meta: {
            title: '已停止项目'
          }
        }
      ]
    },
    {
      path: '/task',
      component: Layout,
      meta: {
        title: '项目管理'
      },
      children: [
        {
          path: '/task/changeStopTask',
          name: 'stopTaskCheck',
          component: () => import('@/views/task/StopTaskCheck'),
          meta: {
            title: '项目停止审批'
          }
        }
      ]
    },
    {
      path: '/login',
      name: '登录',
      component: () => import('@/views/login/login')
    },
    {
      path: '/',
      component: Layout,
      children: [
        {
          path: 'dashboard',
          name: 'dashboard',
          component: () => import('@/views/dashboard/index'),
          meta: {
            title: '首页'
          }
        }
      ]
    },
    {
      path: '/system',
      component: Layout,
      redirect: '/system/department',
      meta: {
        title: '系统管理'
      },
      children: [
        {
          path: 'department',
          name: 'department',
          component: () => import('@/views/admin/department/index'),
          meta: {
            title: '部门管理'
          }
        }
      ]
    },
    {
      path: '/system',
      component: Layout,
      redirect: '/system/user',
      meta: {
        title: '系统管理'
      },
      children: [
        {
          path: 'user',
          name: 'user',
          component: () => import('@/views/admin/user/index'),
          meta: {
            title: '用户管理'
          }
        }
      ]
    },
    {
      path: '/system',
      component: Layout,
      redirect: '/system/role',
      meta: {
        title: '角色管理'
      },
      children: [
        {
          path: 'role',
          name: 'role',
          component: () => import('@/views/admin/role/index'),
          meta: {
            title: '角色管理'
          }
        }
      ]
    },
    {
      path: '/system',
      component: Layout,
      redirect: '/system/menu',
      meta: {
        title: '系统管理'
      },
      children: [
        {
          path: 'menu',
          name: 'menu',
          component: () => import('@/views/admin/menu/index'),
          meta: {
            title: '菜单管理'
          }
        }
      ]
    },
    {
      path: '/system',
      component: Layout,
      redirect: '/system/module',
      meta: {
        title: '系统管理'
      },
      children: [
        {
          path: 'module',
          name: 'module',
          component: () => import('@/views/admin/module/index'),
          meta: {
            title: '模块管理'
          }
        }
      ]
    }
  ]
})
