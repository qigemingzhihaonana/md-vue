import axios from '@/utils/fetch'

/**
 * 获取审批的项目
 */
export function fetchTask () {
  return axios({
    url: '/',
    method: 'get'
  })
}

/**
 * 驳回项目请求
 */
export function backTask (id) {
  return axios({
    url: '/',
    method: 'get',
    params: id
  })
}

/**
 * 同意项目通过
 */
export function agreeTask (id) {
  const 
  return axios({
    url: '/busBitem/completeTask',
    method: 'post',
    id
  })
}

export function queryTask (taskName) {
  const data = {
    taskName
  }
  return axios({
    url: '/activiti/getTaskList',
    method: 'post',
    params: data
  })
}
