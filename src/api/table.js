import request from '@/utils/request'

// export function getList(params) {
//   return request({
//     url: '/table/list',
//     method: 'get',
//     params
//   })
// }


export function getList(params) {
    return request({
        url: '/gathering/gathering',
        method: 'get',
        params
    })
}