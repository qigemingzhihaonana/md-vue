import axios from '@/utils/fetch'

// queryTask, addTask, editTask,

/**
 * 查询项目信息
 */
export function taskquery () {
  return axios({
    url: '/busBitem/getProjectInfo',
    method: 'get'
  })
}

/***
 * 查询
 */
export function queryTask (itemName, itemNo, businessType) {
  const data = {
    itemName,
    itemNo,
    businessType
  }
  return axios({
    url: '/busBitem/selectProjectByUser',
    method: 'post',
    data
  })
}

/**
 * 新增项目
 * @param {data} data
 */
export function addTask (busBitem) {
  const data = {
    key: 'project',
    busBitem
  }
  return axios({
    url: '/activiti/startProcessInstance',
    method: 'post',
    data
  })
}

/**
 * 修改项目
 * @param {data} data
 */
export function editTask (data) {
  return axios({
    url: '/',
    method: 'post',
    data
  })
}

/**
 * 挂起任务
 * @param {id} id
 */
export function stopTask (id) {
  return axios({
    url: '/',
    method: 'get',
    params: id
  })
}

/**
 * 查询任务进度
 */
export function taskStep (procInstd) {
  const data = {
    procInstd
  }
  return axios({
    url: '/busBitem/getProjectStep',
    method: 'post',
    data
  })
}

/**
 * 立项
 * @param {*} busitem
 */
export function complateTask (busBitem) {
  console.log(busBitem)
  return axios({
    url: '/busBitem/startProjectProcessInstance',
    method: 'post',
    data: busBitem
  })
}
