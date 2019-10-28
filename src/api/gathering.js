import request from '@/utils/request'

export default {
    getList() {
        return request({
            url: '/gathering/gathering',
            method: 'get'
        });
    },
    search(page, size, searchMap) {
        return request({
            url: `/gathering/gathering/search/${page}/${size}`,
            method: 'post',
            data: searchMap
        });
    }
}